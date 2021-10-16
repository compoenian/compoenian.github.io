(ns compoenian.components.note-panel.styles
  (:require
   [cljss.core :as css :include-macros true]
   [compoenian.data.styles :refer [palette]]))

(css/defstyles container-main []
  {})

(css/defstyles panel-content [status direction]
  {:height "100%"
   :padding "16px"
   :background-image (get {:inactive ((get-in palette [:onyx :lg]) (get {:right "270deg"
                                                                         :left "90deg"} direction) "0.0" "0.2")
                           :active ((get-in palette [:keppel :lg]) (get {:right "270deg"
                                                                         :left "90deg"} direction) "0.0" "0.2")
                           :pending ((get-in palette [:blue-green :lg]) (get {:right "270deg"
                                                                              :left "90deg"} direction) "0.0" "0.2")
                           :action ((get-in palette [:flame :lg]) (get {:right "270deg"
                                                                        :left "90deg"} direction) "0.0" "0.2")
                           :inventory ((get-in palette [:onyx :lg]) (get {:right "270deg"
                                                                          :left "90deg"} direction) "0.0" "0.2")
                           :vendor ((get-in palette [:keppel :lg]) (get {:right "270deg"
                                                                         :left "90deg"} direction) "0.0" "0.2")
                           :travel ((get-in palette [:blue-green :lg]) (get {:right "270deg"
                                                                             :left "90deg"} direction) "0.0" "0.2")
                           :reward ((get-in palette [:maize-crayola :lg]) (get {:right "270deg"
                                                                                :left "90deg"} direction) "0.0" "0.2")
                           :quest ((get-in palette [:purpureus :lg]) (get {:right "270deg"
                                                                           :left "90deg"} direction) "0.0" "0.2")} status)})

(css/defstyles panel-bar [status]
  {:width "4px"
   :height "100%"
   :background-color (get {:inactive (get-in palette [:onyx :flat])
                           :active (get-in palette [:keppel :flat])
                           :pending (get-in palette [:blue-green :flat])
                           :action (get-in palette [:flame :flat])
                           :inventory (get-in palette [:onyx :flat])
                           :vendor (get-in palette [:keppel :flat])
                           :travel (get-in palette [:blue-green :flat])
                           :reward (get-in palette [:maize-crayola :flat])
                           :quest (get-in palette [:purpureus :flat])} status)})
