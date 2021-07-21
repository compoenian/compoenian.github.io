(ns compoenian.components.note-panel.component
  (:require
   [cljs.pprint :refer [pprint]]
   [re-frame.core :as rf]
   [compoenian.components.note-panel.styles :as styles]
   ["@material-ui/core" :as mui]))

(defn container [{:keys [status] :as props} & children]
  [:> mui/Box {:class (styles/container-main)}
   [:> mui/Grid {:container true
                 :direction "row"
                 :style {:height "100%"}}
    [:> mui/Grid {:item true
                  :xs true}
     [:> mui/Box {:class (styles/panel-content status)}
      (first children)]]
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/panel-bar status)} ""]]]])
