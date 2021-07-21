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
        (track-details-container)]
       [:> mui/Grid {:item true
                     :style {:height "calc(100% - 366px)"}}
        (timer-card)]
       [:> mui/Grid {:item true}
        (progress-card)]]]]
    [:> mui/Grid {:item true
                  :xs true}
     [:> mui/Box {:class (styles/content-panel)} "content panel"]]]])
