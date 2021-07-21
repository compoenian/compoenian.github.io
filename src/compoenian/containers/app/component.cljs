(ns compoenian.containers.app.component
  (:require
   [cljs.pprint :refer [pprint]]
   [re-frame.core :as rf]
   [compoenian.containers.app.styles :as styles]
   [compoenian.containers.tracking.component :as tracking]
   ["@material-ui/core" :as mui]
   ["@material-ui/icons" :refer [Flare Timer]]))

(defn container []
  [:div {:class (styles/container-main)}
   [:> mui/Grid {:container true
                 :direction "row"}
    [:> mui/Grid {:class (styles/navigation-container)
                  :item true}
     [:> mui/Grid {:container true
                   :direction "column"}
      [:> mui/Grid {:item true}
       [:> mui/Box {:class (styles/app-icon-container)}
        [:> Flare {:class (styles/app-icon)}]]]
      [:> mui/Grid {:item true}
       [:> mui/Box {:class (styles/navigation-option-container true)}
        [:> Timer {:class (styles/navigation-icon)}]]]]]

    [:> mui/Grid {:class (styles/content-container)
                  :item true}
     (tracking/container)]]])
