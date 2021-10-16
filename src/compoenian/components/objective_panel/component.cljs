(ns compoenian.components.objective-panel.component
  (:require
   [cljs.pprint :refer [pprint]]
   [compoenian.components.note-panel.component :as note-panel]
   [compoenian.components.objective-panel.styles :as styles]
   ["@material-ui/core" :as mui]
   ["@material-ui/icons" :refer [DoubleArrow]]
   [re-frame.core :as rf]))

(defn action-display-container [{:keys [action]}]
  [:<> {}
   [:> mui/Box {:class (styles/panel-title :bold)} action]])

(defn inventory-display-container [{:keys [action]}]
  [:<> {}
   [:> mui/Box {:class (styles/panel-title :active)} action]])

(defn vendor-display-container [{:keys [action vendor]}]
  [:> mui/Grid {:container true
                :direction "row"
                :spacing 2}
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :active)} vendor]]
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :bold)} action]]])

(defn travel-display-container [{:keys [method]} target-zone]
  [:> mui/Grid {:container true
                :direction "row"}
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :active)} (name method)]]
   [:> mui/Grid {:item true}
    [:> DoubleArrow {:class (styles/panel-icon)}]]
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :bold)} target-zone]]])

(defn reward-display-container [{:keys [selection giver]}]
  [:> mui/Grid {:container true
                :direction "row"
                :spacing 2}
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :active)} giver]]
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :bold)} selection]]])

(defn quest-display-container [{:keys [objective target] :as quest}]
  [:> mui/Grid {:container true
                :direction "row"
                :spacing 2}
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :active)} (name objective)]]
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/panel-title :bold)} target]]])

(defn generic-display-container []
  [:<> {}
   [:> mui/Box {:class (styles/panel-title :inactive)} "Unknown objective type"]])

(def display-container-defs {:action action-display-container
                             :inventory inventory-display-container
                             :vendor vendor-display-container
                             :travel travel-display-container
                             :reward reward-display-container
                             :quest quest-display-container})

(defn container [{:keys [objective target-zone] :as props}]
  (let [objective-type (first objective)
        objective-display-container (get display-container-defs objective-type)
        objective-data (second objective)]
    [note-panel/container {:status objective-type
                           :direction :right}
     [:> mui/Grid {:container true
                   :direction "row"}
      [:> mui/Grid {:item true
                    :xs true}
       (if (nil? objective-display-container)
         [generic-display-container objective-data]
         [objective-display-container objective-data target-zone])]]]))
