(ns compoenian.components.note-panel.component
  (:require
   [cljs.pprint :refer [pprint]]
   [re-frame.core :as rf]
   [compoenian.components.note-panel.styles :as styles]
   ["@material-ui/core" :as mui]))

(defn panel-bar [{:keys [status]}]
  [:> mui/Grid {:item true}
   [:> mui/Box {:class (styles/panel-bar status)} ""]])

(defn container [{:keys [status direction] :as props} & children]
  [:> mui/Box {:class (styles/container-main)}
   [:> mui/Grid {:container true
                 :direction "row"
                 :style {:height "100%"
                         :width "100%"}}
    (if (= direction :right) (panel-bar props))
    [:> mui/Grid {:item true
                  :xs true}
     [:> mui/Box {:class (styles/panel-content status direction)}
      (first children)]]
    (if (= direction :left) (panel-bar props))]])
