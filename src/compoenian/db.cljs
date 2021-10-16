(ns compoenian.db)

(def default-db
  {:name "Compoenian"
   :timer {:interval-duration 1000
           :timer-val 0
           :interval nil
           :status :paused}
   :level {:active-checkpoint 0}})
