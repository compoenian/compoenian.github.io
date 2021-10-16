(ns compoenian.containers.tracking.component
  (:require
   [cljs.pprint :refer [pprint]]
   [reagent.core :as ra]
   [re-frame.core :as rf]
   [compoenian.containers.tracking.styles :as styles]
   [compoenian.components.note-panel.component :as note-panel]
   [compoenian.components.objective-panel.component :as objective-panel]
   [compoenian.data.styles :refer [palette]]
   [compoenian.events.tracking :as events.tracking]
   [compoenian.subs.tracking :as subs.tracking]
   ["@material-ui/core" :as mui]
   ["@material-ui/icons" :refer [Mood FastRewind PlayArrow FastForward Pause Clear Eject Folder LocalAtm DirectionsRun Help Redeem DoubleArrow]]
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
      [:> mui/Box {:class (styles/track-name-container)} "BANE"]]
     [:> mui/Grid {:item true}
      [:> mui/Box {:class (styles/track-details-container)} "Occultist [3.16]"]]]]])

(defn timer-display-container []
  (let [timer-display @(rf/subscribe [::subs.tracking/timer-display])]
    [:> mui/Box {:class (styles/timer-display-container)}
     [:> mui/Grid {:container true
                   :direction "column"}
      [:> mui/Grid {:item true}
       [:> mui/Box {:class (styles/timer-display-title)} "ELAPSED"]]
      [:> mui/Grid {:item true}
       [:> mui/Box {:class (styles/timer-display-value)} timer-display]]]]))

(defn timer-actions-container []
  (let [timer-data @(rf/subscribe [::subs.tracking/timer])]
    [:> mui/Box {:class (styles/timer-actions-container)}
     [:> mui/Grid {:container true
                   :direction "row"
                   :justify-content "space-between"}
      [:> mui/Grid {:item true
                    :on-click #(rf/dispatch [::events.tracking/navigate-section-back])}
       [:> mui/Box {:class (styles/timer-action-container :back)}
        [:> FastRewind {:class (styles/timer-action-icon :back)}]
        [:> mui/Box {:class (styles/timer-action-label)} "BACK"]]]
      [:> mui/Grid {:item true
                    :on-click #(rf/dispatch [::events.tracking/toggle-timer])}
       (if (= :paused (:status timer-data))
         [:> mui/Box {:class (styles/timer-action-container :start)}
          [:> PlayArrow {:class (styles/timer-action-icon :start)}]
          [:> mui/Box {:class (styles/timer-action-label)} "START"]]
         [:> mui/Box {:class (styles/timer-action-container :pause)}
          [:> Pause {:class (styles/timer-action-icon :pause)}]
          [:> mui/Box {:class (styles/timer-action-label)} "PAUSE"]])]
      [:> mui/Grid {:item true
                    :on-click #(rf/dispatch [::events.tracking/navigation-section-forward])}
       [:> mui/Box {:class (styles/timer-action-container :start)}
        [:> FastForward {:class (styles/timer-action-icon :start)}]
        [:> mui/Box {:class (styles/timer-action-label)} "FWD"]]]
      [:> mui/Grid {:item true
                    :on-click #(rf/dispatch [::events.tracking/reset-timer])}
       [:> mui/Box {:class (styles/timer-action-container :reset)}
        [:> Clear {:class (styles/timer-action-icon :reset)}]
        [:> mui/Box {:class (styles/timer-action-label)} "RESET"]]]]]))

(defn timer-panel-display-container [{:keys [checkpoint]}]
  (let [{:keys [name checkpoint-index status split]} checkpoint]
    [note-panel/container {:status status
                           :direction :left}
     [:> mui/Grid {:container true
                   :direction "row"}
      [:> mui/Grid {:item true
                    :xs true}
       [:> mui/Box {:class (styles/panel-title status)} name]]
      [:> mui/Grid {:item true}
       [:> mui/Box {:class (styles/panel-timestamp status)} split]]]]))

(defn timer-grid-container []
  (let [{:keys [checkpoint-data active-elapsed splits]} @(rf/subscribe [::subs.tracking/checkpoint-splits])]
    [:> mui/Box {:class (styles/timer-grid-container)}
     [:> mui/Grid {:container true
                   :direction "column"
                   :spacing 1}
      (for [datum checkpoint-data]
        (let [{:keys [name checkpoint-index]} datum]
          ^{:key (str name checkpoint-index)} [:> mui/Grid {:item true}
                                               [timer-panel-display-container {:checkpoint datum}]]))]]))

(defn timer-card []
  [:> mui/Box {:class (styles/timer-card-container)}
   [:> mui/Grid {:container true
                 :direction "column"
                 :style {:width "100%"}}
    [:> mui/Grid {:item true
                  :style {:width "100%"}}
     [timer-display-container]]
    [:> mui/Grid {:item true
                  :style {:width "100%"}}
     [timer-actions-container]]
    [:> mui/Grid {:item true
                  :style {:width "100%"}}
     [timer-grid-container]]]])

(defn progress-card []
  (let [{:keys [percentage formatted] :as progression} @(rf/subscribe [::subs.tracking/checkpoint-progression])]
    [:> mui/Box {:class (styles/progress-card-container)}
     [:> rcp/CircularProgressbarWithChildren {:class (styles/progress-bar)
                                              :value percentage
                                              :styles {"path" {"stroke" (get-in palette [:keppel :flat])
                                                               "strokeLinecap" "round"}}}
      [:> mui/Box {:class (styles/progress-bar-text)} formatted]]]))

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

(def legend-data [{:entry :action
                   :label "ACTION"
                   :icon Eject}
                  {:entry :inventory
                   :label "INVENTORY"
                   :icon Folder}
                  {:entry :vendor
                   :label "VENDOR"
                   :icon LocalAtm}
                  {:entry :travel
                   :label "TRAVEL"
                   :icon DirectionsRun}
                  {:entry :reward
                   :label "REWARD"
                   :icon Redeem}
                  {:entry :quest
                   :label "QUEST"
                   :icon Help}])

(defn legend-entry-container [{:keys [entry label icon]}]
  [:> mui/Grid {:container true
                :direction "row"}
   [:> mui/Grid {:item true}
    [:> icon {:class (styles/legend-icon entry)}]]
   [:> mui/Grid {:item true}
    [:> mui/Box {:class (styles/legend-label)} label]]])

(defn zone-legend-container []
  [:> mui/Box {}
   [:> mui/Grid {:container true
                 :direction "row"
                 :spacing 3}
    (for [datum legend-data]
      ^{:key (:label datum)} [:> mui/Grid {:item true}
                              [legend-entry-container datum]])]])

(defn objective-display-container [{:keys [objectives target-zone]}]
  [:> mui/Box {}
   [:> mui/Grid {:container true
                 :direction "column"
                 :spacing 1
                 :style {:width "100%"}}
    (for [i (range (count objectives))]
      (let [objective (nth objectives i)
            objective-key (str (first objective) i)]
        ^{:key objective-key} [:> mui/Grid {:item true}
                               [objective-panel/container {:objective objective
                                                           :target-zone target-zone}]]))]])

(defn zone-card []
  (let [{:keys [checkpoint-data forward-checkpoint-data]} @(rf/subscribe [::subs.tracking/active-zone])
        target-zone (get-in forward-checkpoint-data [:zone :name])]
    [:> mui/Box {:class (styles/zone-panel)}
     [:> mui/Grid {:container true
                   :direction "row"
                   :style {:width "100%"
                           :height "100%"}}
      [:> mui/Grid {:item true
                    :xs true}
       [:> mui/Grid {:container true
                     :direction "column"
                     :style {:height "100%"}}
        [:> mui/Grid {:item true
                      :style {:margin-bottom "16px"}}
         [:> mui/Grid {:container true
                       :direction "row"
                       :style {:width "100%"}}
          [:> mui/Grid {:item true
                        :xs true
                        :style {:margin-right "40px"}}
           [:> mui/Box {:class (styles/card-title)} "ZONE"]]
          [:> mui/Grid {:item true}
           [zone-legend-container]]]]
        [:> mui/Grid {:item true
                      :style {:margin-bottom "16px"}}
         [:> mui/Grid {:container true
                       :direction "row"
                       :justify-content "space-between"
                       :style {:width "100%"}}
          [:> mui/Grid {:item true}
           [:> mui/Box {:class (styles/current-zone-container)}
            [:> mui/Box {:class (styles/stat-label)} "CURRENT ZONE"]
            [:> mui/Box {:class (styles/stat-value)} (get-in checkpoint-data [:zone :name])]]]
          [:> mui/Grid {:item true}
           [:> mui/Box {}
            [:> DoubleArrow {:class (styles/zone-progress-icon)}]]]
          [:> mui/Grid {:item true}
           [:> mui/Box {:class (styles/current-zone-container)}
            [:> mui/Box {:class (styles/stat-label)} "NEXT ZONE"]
            [:> mui/Box {:class (styles/stat-value)} target-zone]]]]]
        [:> mui/Grid {:item true}
         [objective-display-container {:objectives (:objectives checkpoint-data)
                                       :target-zone target-zone}]]]]
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
           [:> mui/Box {:class (styles/inactive-text)} "-"]]]]]]]]))

(defn container []
  [:> mui/Box {:class (styles/container-main)}
   [:> mui/Grid {:class (styles/grid-container-main)
                 :container true
                 :direction "row"}
    [:> mui/Grid {:item true
                  :style {:margin-right "40px"}}
     [:> mui/Box {:class (styles/timer-content-container)}
      [:> mui/Grid {:container true
                    :direction "column"
                    :style {:height "100%"}}
       [:> mui/Grid {:item true}
        [track-details-container]]
       [:> mui/Grid {:item true
                     :style {:width "100%"
                             :height "calc(100% - 366px)"}}
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
