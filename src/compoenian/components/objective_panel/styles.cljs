(ns compoenian.components.objective-panel.styles
  (:require
   [cljs.pprint :refer [pprint]]
   [cljss.core :as css :include-macros true]
   [compoenian.data.styles :refer [palette]]))

(css/defstyles panel-title [status]
  {:font-size "12px"
   :font-weight (get {:bold "600"} status)
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"
   :text-transform "uppercase"
   :color (get {:active ((get-in palette [:white :alpha]) "0.8")
                :inactive ((get-in palette [:white :alpha]) "0.6")
                :pending ((get-in palette [:white :alpha]) "0.6")
                :bold ((get-in palette [:white :alpha]) "1.0")} status)})

(css/defstyles panel-description [status]
  {:font-size "10px"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"
   :color (get {:inactive ((get-in palette [:white :alpha]) "0.6")
                :active ((get-in palette [:white :alpha]) "0.6")
                :pending ((get-in palette [:white :alpha]) "0.4")} status)})

(css/defstyles panel-timestamp [status]
  {:font-size "12px"
   :color (get {:inactive ((get-in palette [:white :alpha]) "0.8")
                :pending ((get-in palette [:white :alpha]) "0.8")} status)})

(css/defstyles panel-icon []
  {:font-size "12px !important"
   :color (str ((get-in palette [:white :alpha]) "0.6") " !important")
   :width "32px !important"})
