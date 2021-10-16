(ns compoenian.subs.tracking
  (:require
   [cljs.pprint :refer [pprint]]
   [goog.string]
   [goog.string.format]
   [re-frame.core :as rf]
   [tick.alpha.api :as t]
   [tick.locale-en-us]))

(rf/reg-sub
 ::timer
 (fn [db]
   (:timer db)))

(defn generate-formatted-timer [elapsed]
  (let [duration (t/new-duration (if (nil? elapsed) 0 elapsed) :seconds)
        hours (t/hours duration)
        minutes (t/minutes (t/- duration (t/new-duration hours :hours)))
        seconds (t/seconds (t/- duration (t/new-duration minutes :minutes) (t/new-duration hours :hours)))
        formatted (goog.string/format "%02d:%02d:%02d" hours minutes seconds)]
    formatted))

(rf/reg-sub
 ::timer-display
 (fn [query-v]
   [(rf/subscribe [::timer])])
 (fn [[timer] query-v]
   (generate-formatted-timer (:timer-val timer))))

(rf/reg-sub
 ::zone-data
 (fn [db]
   (:zone-data db)))

(rf/reg-sub
 ::level-data
 (fn [db]
   (:level-data db)))

(rf/reg-sub
 ::level
 (fn [db]
   (:level db)))

(defn annotate-zone-data [{:keys [act-id zone] :as checkpoint-data} zone-data]
  (assoc checkpoint-data :zone (get-in zone-data [act-id zone])))

(rf/reg-sub
 ::active-zone
 (fn [query-v]
   [(rf/subscribe [::level]) (rf/subscribe [::level-data]) (rf/subscribe [::zone-data])])
 (fn [[level level-data zone-data] query-v]
   (let [{:keys [active-checkpoint]} level
         cp-data (nth level-data (min active-checkpoint (dec (count level-data))))
         forward-cp-data (nth level-data (min (inc active-checkpoint) (dec (count level-data))))]
     {:checkpoint-data (annotate-zone-data cp-data zone-data)
      :forward-checkpoint-data (annotate-zone-data forward-cp-data zone-data)
      :checkpoint (inc active-checkpoint)
      :checkpoint-total (count level-data)})))

(defn annotate-checkpoint-data [{:keys [level-data splits active-checkpoint active-elapsed]} index]
  (let [checkpoint (nth level-data index)
        status (cond
                 (< index active-checkpoint) :inactive
                 (= index active-checkpoint) :active
                 (> index active-checkpoint) :pending)
        split (case status
                :inactive (generate-formatted-timer (get splits index))
                :active active-elapsed
                :pending "-")]
    (-> checkpoint
        (assoc :checkpoint-index index)
        (assoc :status status)
        (assoc :split split))))

(rf/reg-sub
 ::checkpoint-splits
 (fn [query-v]
   [(rf/subscribe [::level]) (rf/subscribe [::level-data]) (rf/subscribe [::timer])])
 (fn [[level level-data timer] query-v]
   (let [{:keys [active-checkpoint splits]} level
         split-elapsed (if (empty? splits) 0 (reduce + splits))
         active-elapsed (generate-formatted-timer (- (:timer-val timer) split-elapsed))
         checkpoint-start-endbound (min (dec active-checkpoint) (- (count level-data) 5))
         checkpoint-start (max checkpoint-start-endbound 0)
         checkpoint-range (range checkpoint-start (+ checkpoint-start 5))
         checkpoint-data (mapv (partial annotate-checkpoint-data {:level-data level-data
                                                                  :splits splits
                                                                  :active-checkpoint active-checkpoint
                                                                  :active-elapsed active-elapsed}) checkpoint-range)]
     {:checkpoint-data checkpoint-data})))

(rf/reg-sub
 ::checkpoint-progression
 (fn [query-v]
   [(rf/subscribe [::level]) (rf/subscribe [::level-data])])
 (fn [[level level-data] query-v]
   (let [{:keys [active-checkpoint]} level
         percentage (Math/round (* (/ active-checkpoint (count level-data)) 100))]
     {:active active-checkpoint
      :total (count level-data)
      :percentage percentage
      :formatted (str (goog.string/format "%02d" percentage) "%")})))
