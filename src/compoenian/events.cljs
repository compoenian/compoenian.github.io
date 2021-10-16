(ns compoenian.events
  (:require
   [cljs.pprint :refer [pprint]]
   [compoenian.db :as db]
   [compoenian.data.level :as data.level]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [re-frame.core :as rf]))


(rf/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            (let [level-data (data.level/generate-level-data)]
              (-> db/default-db
                  (assoc :level-data level-data)
                  (assoc :zone-data data.level/zone-data)))))
