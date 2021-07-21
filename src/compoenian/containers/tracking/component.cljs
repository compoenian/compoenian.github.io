(ns compoenian.containers.tracking.component
  (:require
   [cljs.pprint :refer [pprint]]
   [re-frame.core :as rf]
   [compoenian.containers.tracking.styles :as styles]
   [compoenian.components.note-panel.component :as note-panel]
   ["@material-ui/core" :as mui]
   ["@material-ui/icons" :refer [Mood PlayArrow Pause Clear]]))

(defn timer-card []
  [:> mui/Box {:class (styles/timer-card-container)}
   [:> mui/Grid {:container true
                 :direction "column"}
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/timer-display-container)}
      [:> mui/Grid {:container true
                    :direction "column"}
       [:> mui/Grid {:item true}
        [:> mui/Box {:class (styles/timer-display-title)} "ELAPSED"]]
       [:> mui/Grid {:item true}
        [:> mui/Box {:class (styles/timer-display-value)} "00:00:00"]]]]]
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/timer-actions-container)}
      [:> mui/Grid {:container true
                    :direction "row"
                    :justify-content "space-between"}
       [:> mui/Grid {:item true}
        [:> mui/Box {:class (styles/timer-action-container :start)}
         [:> PlayArrow {:class (styles/timer-action-icon :start)}]
         [:> mui/Box {:class (styles/timer-action-label)} "START"]]]
       [:> mui/Grid {:item true}
        [:> mui/Box {:class (styles/timer-action-container :pause)}
         [:> Pause {:class (styles/timer-action-icon :pause)}]
         [:> mui/Box {:class (styles/timer-action-label)} "PAUSE"]]]
       [:> mui/Grid {:item true}
        [:> mui/Box {:class (styles/timer-action-container :reset)}
         [:> Clear {:class (styles/timer-action-icon :reset)}]
         [:> mui/Box {:class (styles/timer-action-label)} "RESET"]]]]]]
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/timer-grid-container)}
      [:> mui/Grid {:container true
                    :direction "column"
                    :spacing 1}
       [:> mui/Grid {:item true}
        [note-panel/container {:status :inactive}
         [:> mui/Grid {:container true
                       :direction "row"}
          [:> mui/Grid {:item true
                        :xs true}
           [:> mui/Box {:class (styles/panel-title :inactive)} "inactive panel title"]
           [:> mui/Box {:class (styles/panel-description :inactive)} "inactive panel description"]]
          [:> mui/Grid {:item true}
           [:> mui/Box {:class (styles/panel-timestamp :inactive)} "00:00:00"]]]]]
       [:> mui/Grid {:item true}
        [note-panel/container {:status :active}
         [:> mui/Grid {:container true
                       :direction "row"}
          [:> mui/Grid {:item true
                        :xs true}
           [:> mui/Box {:class (styles/panel-title :active)} "active panel title"]
           [:> mui/Box {:class (styles/panel-description :active)} "active panel description"]]
          [:> mui/Grid {:item true}
           [:> mui/Box {:class (styles/panel-timestamp :active)} "-"]]]]]
       [:> mui/Grid {:item true}
        [note-panel/container {:status :pending}
         [:> mui/Grid {:container true
                       :direction "row"}
          [:> mui/Grid {:item true
                        :xs true}
           [:> mui/Box {:class (styles/panel-title :pending)} "pending panel title"]
           [:> mui/Box {:class (styles/panel-description :pending)} "pending panel description"]]
          [:> mui/Grid {:item true}
           [:> mui/Box {:class (styles/panel-timestamp :pending)} "-"]]]]]
       [:> mui/Grid {:item true}
        [note-panel/container {:status :pending}
         [:> mui/Grid {:container true
                       :direction "row"}
          [:> mui/Grid {:item true
                        :xs true}
           [:> mui/Box {:class (styles/panel-title :pending)} "pending panel title 2"]
           [:> mui/Box {:class (styles/panel-description :pending)} "pending panel description 2"]]
          [:> mui/Grid {:item true}
           [:> mui/Box {:class (styles/panel-timestamp :pending)} "-"]]]]]]]]]])

(defn track-details-container []
  [:> mui/Grid {:container true
                :direction "row"}
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/track-icon-container)}
     [:> Mood {:class (styles/track-icon)}]]]
   [:> mui/Grid {:item true}
    [:> mui/Grid {:class (styles/track-information-container)
                  :container true
                  :direction "column"}
     [:> mui/Grid {:item true}
      [:> mui/Box {:class (styles/track-name-container)} "Vaal Arc Trapper"]]
     [:> mui/Grid {:item true}
      [:> mui/Box {:class (styles/track-details-container)} "Raider [3.15]"]]]]])

(defn container []
  [:> mui/Box {:class (styles/container-main)}
   [:> mui/Grid {:class (styles/grid-container-main)
                 :container true
                 :direction "row"}
    [:> mui/Grid {:class (styles/timer-content-container)
                  :item true}
     [:> mui/Grid {:container true
                   :direction "column"
                   :style {:height "100%"}}
      [:> mui/Grid {:item true}
       (track-details-container)]
      [:> mui/Grid {:item true
                    :xs true}
       (timer-card)]]]
    [:> mui/Grid {:item true
                  :xs true}
     [:> mui/Box {} "main content"]]]])
