(ns compoenian.containers.tracking.component
  (:require
   [cljs.pprint :refer [pprint]]
   [reagent.core :as ra]
   [re-frame.core :as rf]
   [compoenian.containers.tracking.styles :as styles]
   [compoenian.components.note-panel.component :as note-panel]
   [compoenian.data.styles :refer [palette]]
   ["@material-ui/core" :as mui]
   ["@material-ui/icons" :refer [Mood PlayArrow Pause Clear]]
   ["react-circular-progressbar" :as rcp]))

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

(defn timer-display-container []
  [:> mui/Box {:class (styles/timer-display-container)}
   [:> mui/Grid {:container true
                 :direction "column"}
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/timer-display-title)} "ELAPSED"]]
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/timer-display-value)} "00:00:00"]]]])

(defn timer-actions-container []
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
      [:> mui/Box {:class (styles/timer-action-label)} "RESET"]]]]])

(defn timer-grid-container []
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
        [:> mui/Box {:class (styles/panel-timestamp :pending)} "-"]]]]]]])

(defn timer-card []
  [:> mui/Box {:class (styles/timer-card-container)}
   [:> mui/Grid {:container true
                 :direction "column"}
    [:> mui/Grid {:item true}
     [timer-display-container]]
    [:> mui/Grid {:item true}
     [timer-actions-container]]
    [:> mui/Grid {:item true}
     [timer-grid-container]]]])

(defn progress-card []
  [:> mui/Box {:class (styles/progress-card-container)}
   [:> rcp/CircularProgressbarWithChildren {:class (styles/progress-bar)
                                            :value 82
                                            :styles {"path" {"stroke" (:keppel palette)
                                                             "strokeLinecap" "round"}}}
    [:> mui/Box {:class (styles/progress-bar-text)} "82%"]]])

(defn stats-card []
  [:> mui/Box {:class (styles/stats-panel)}
   [:> mui/Grid {:container true
                 :direction "column"
                 :style {:height "100%"}}
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/card-title)} "STATS"]]
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/target-level-container)}
      [:> mui/Box {:class (styles/stat-label)} "Target Level"]
      [:> mui/Box {:class (styles/stat-value)} "32"]]]
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/inactive-text)} "-"]]]])

(defn zone-card []
  [:> mui/Box {:class (styles/zone-panel)}
   [:> mui/Grid {:container true
                 :direction "row"
                 :style {:width "100%"
                         :height "100%"}}
    [:> mui/Grid {:item true
                  :xs true}
     [:> mui/Box {:class (styles/card-title)} "ZONE - LEGEND"]]
    [:> mui/Grid {:item true
                  :style {:height "100%"}}
     [:> mui/Box {:class (styles/card-spacer)} ""]]
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/zone-reference-container)}
      [:> mui/Grid {:container true
                    :direction "column"
                    :style {:height "100%"}}
       [:> mui/Grid {:item true}
        [:> mui/Box {:class (styles/zone-layouts-container)}
         [:> mui/Box {:class (styles/stat-label)} "LAYOUTS"]
         [:> mui/Box {:class (styles/inactive-text)} "-"]]]
       [:> mui/Grid {:item true}
        [:> mui/Box {:class (styles/zone-notes-container)}
         [:> mui/Box {:class (styles/stat-label)} "NOTES"]
         [:> mui/Box {:class (styles/inactive-text)} "-"]]]]]]]])

(defn container []
  [:> mui/Box {:class (styles/container-main)}
   [:> mui/Grid {:class (styles/grid-container-main)
                 :container true
                 :direction "row"}
    [:> mui/Grid {:item true}
     [:> mui/Box {:class (styles/timer-content-container)}
      [:> mui/Grid {:container true
                    :direction "column"
                    :style {:height "100%"}}
       [:> mui/Grid {:item true}
        [track-details-container]]
       [:> mui/Grid {:item true
                     :style {:height "calc(100% - 366px)"}}
        [timer-card]]
       [:> mui/Grid {:item true}
        [progress-card]]]]]
    [:> mui/Grid {:item true
                  :xs true
                  :style {:margin-right "40px"}}
     [:> mui/Grid {:container true
                   :direction "column"
                   :style {:height "100%"}}
      [:> mui/Grid {:item true
                    :style {:height "calc(100% - 360px)"
                            :margin-bottom "40px"}}
       [zone-card]]
      [:> mui/Grid {:item true}
       [:> mui/Box {:class (styles/gear-panel)}
        [:> mui/Box {:class (styles/card-title)} "GEAR"]]]]]
    [:> mui/Grid {:item true}
     [:> mui/Grid {:container true
                   :direction "column"
                   :style {:height "100%"}}
      [:> mui/Grid {:item true
                    :style {:margin-bottom "40px"}}
       [:> mui/Box {:class (styles/skillpoint-panel)}
        [:img {:class (styles/passive-image)
               :src "img/lightning-trap.PNG"}]]]
      [:> mui/Grid {:item true
                    :style {:height "calc(100% - 552px)"}}
       [stats-card]]]]]])
