(ns compoenian.events.tracking
  (:require
   [cljs.pprint :refer [pprint]]
   [compoenian.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [goog.events.KeyCodes :as KeyCodes]
   [re-frame.core :as rf]
   [re-pressed.core :as re-pressed]))

(rf/reg-event-db
 ::toggle-timer
 (fn-traced [db [_]]
            (pprint "timer - toggle")
            (let [status (get-in db [:timer :status])
                  status-event (case status
                                 :paused ::set-timer-active
                                 :active ::set-timer-paused)]
              (rf/dispatch [status-event]))))

(rf/reg-event-db
 ::set-timer-active
 (fn-traced [db [_]]
            (pprint "timer - active")
            (-> db
                (assoc-in [:timer :status] :active)
                (assoc-in [:timer :interval] (js/setInterval #(rf/dispatch [::update-timer]) (get-in db [:timer :interval-duration]))))))

(rf/reg-event-db
 ::set-timer-paused
 (fn-traced [db [_]]
            (pprint "timer - paused")
            (let [interval (get-in db [:timer :interval])]
              (js/clearInterval interval)
              (-> db
                  (assoc-in [:timer :status] :paused)
                  (assoc-in [:timer :interval] nil)))))

(rf/reg-event-db
 ::update-timer
 (fn-traced [db [_]]
            (let [timer (:timer db)
                  {:keys [timer-val]} timer]
              (assoc-in db [:timer :timer-val] (inc timer-val)))))

(rf/reg-event-db
 ::reset-timer
 (fn-traced [db [_]]
            (pprint "timer - reset")
            (let [timer-data (:timer db)]
              (js/clearInterval (:interval timer-data))
              (-> db
                  (assoc :timer (:timer db/default-db))
                  (assoc :level (:level db/default-db))))))

(rf/reg-event-db
 ::navigate-section-forward
 (fn-traced [db [_]]
            (pprint "forward section")
            (let [timer-val (get-in db [:timer :timer-val])
                  splits (get-in db [:level :splits])
                  elapsed-splits (if (empty? splits) 0 (reduce + splits))]
              (-> db
                  (update-in [:level :active-checkpoint] #(min (inc %) (dec (count (:level-data db)))))
                  (update-in [:level :splits] #(into [] (conj % (- timer-val elapsed-splits))))))))

(rf/reg-event-db
 ::navigate-section-back
 (fn-traced [db [_]]
            (pprint "back section")
            (-> db
                (update-in [:level :active-checkpoint] #(max (dec %) 0))
                (update-in [:level :splits] #(into [] (drop-last %))))))
