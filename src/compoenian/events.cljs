(ns compoenian.events
  (:require
   [cljs.pprint :refer [pprint]]
   [compoenian.db :as db]
   [compoenian.data.level :as data.level]
   [compoenian.data.gear :as data.gear]
   [compoenian.data.zone :as data.zone]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [re-frame.core :as rf]))


(rf/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            (let [level-data (data.level/generate-level-data)
                  gear-data (data.gear/generate-gear-data :bane-occultist)]
              (-> db/default-db
                  (assoc :level-data level-data)
                  (assoc :gear-data gear-data)
                  (assoc :zone-data data.zone/zone-definitions)))))
