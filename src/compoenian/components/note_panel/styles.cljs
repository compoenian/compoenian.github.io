(ns compoenian.components.note-panel.styles
  (:require
   [cljss.core :as css :include-macros true]
   [compoenian.data.styles :refer [palette]]))

(css/defstyles container-main []
  {})

(css/defstyles panel-content [status]
  {:height "100%"
   :padding "16px"
   :background-image (get {:inactive "linear-gradient(90deg, rgba(61, 61, 61, 0.0), rgba(61, 61, 61, 0.2))"
                           :active "linear-gradient(90deg, rgba(35, 178, 153, 0.0), rgba(35, 178, 153, 0.2))"
                           :pending "linear-gradient(90deg, rgba(35, 144, 178, 0.0), rgba(35, 144, 178, 0.2))"} status)})

(css/defstyles panel-bar [status]
  {:width "4px"
   :height "100%"
   :background-color (get {:inactive (:onyx palette)
                           :active (:keppel palette)
                           :pending (:blue-green palette)} status)})
