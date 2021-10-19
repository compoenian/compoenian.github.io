(ns compoenian.containers.tracking.styles
  (:require
   [cljss.core :as css :include-macros true]
   [compoenian.data.styles :refer [palette]]))

(css/defstyles container-main []
  {:height "100%"
   :padding "40px"})

(css/defstyles grid-container-main []
  {:height "100%"})

(css/defstyles timer-content-container []
  {:width "240px"
   :height "100%"})

(css/defstyles track-icon-container []
  {:margin "16px"
   :margin-bottom "32px"
   :color (get-in palette [:flame :flat])})

(css/defstyles track-icon []
  {:font-size "32px !important"
   :filter ((get-in palette [:flame :ds]) "8px" "0.8")})

(css/defstyles track-information-container []
  {:margin-top "16px"
   :text-transform "uppercase"
   :font-weight "bold"})

(css/defstyles track-name-container []
  {:margin-top "4px"
   :font-size "12px"
   :line-height "16px"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"})

(css/defstyles track-details-container []
  {:font-size "12px"
   :color ((get-in palette [:white :alpha]) "0.4")
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"})

(css/defstyles timer-card-container []
  {:height "100%"
   :background-color (get-in palette [:raisin-black :flat])
   :background-image ((get-in palette [:blue-green :lg]) "150deg" "0.0" "0.2")
   :border (str "1px solid " (get-in palette [:onyx :flat]))
   :border-radius "32px"})

(css/defstyles timer-display-container []
  {:padding "24px 32px 8px 32px"})

(css/defstyles timer-display-title []
  {:font-size "8px"
   :text-align "right"
   :text-transform "uppercase"
   :color ((get-in palette [:white :alpha]) "0.4")})

(css/defstyles timer-actions-container []
  {:padding "0px 32px"})

(css/defstyles timer-display-value []
  {:font-size "36px"
   :text-align "right"
   :font-family "Roboto Mono, monospace"})

(css/defstyles timer-action-container [content-icon]
  {:text-align "center"
   :cursor "pointer"
   :color (get {:back (get-in palette [:onyx :flat])
                :start (get-in palette [:keppel :flat])
                :pause (get-in palette [:maize-crayola :flat])
                :reset (get-in palette [:flame :flat])} content-icon)})

(css/defstyles timer-action-icon [content-icon]
  {:margin "0 auto"
   :font-size "32px !important"
   :filter (get {:back ((get-in palette [:onyx :ds]) "8px" "0.4")
                 :start ((get-in palette [:keppel :ds]) "8px" "0.4")
                 :pause ((get-in palette [:maize-crayola :ds]) "8px" "0.4")
                 :reset ((get-in palette [:flame :ds]) "8px" "0.4")} content-icon)})

(css/defstyles timer-action-label []
  {:font-size "10px"
   :text-transform "uppercase"
   :color ((get-in palette [:white :alpha]) "0.4")})

(css/defstyles timer-grid-container []
  {:padding "32px 0px"})

(css/defstyles timer-grid-space-container []
  {:margin "4px 0px"
   :height "60px"
   :color "#666"
   :padding-top "8px"
   :padding-left "16px"})

(css/defstyles timer-grid-active-container []
  {:margin "4px 0px"
   :height "60px"})

(css/defstyles panel-title [status]
  {:font-size "12px"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"
   :text-transform "uppercase"
   :max-width "132px"
   :color (get {:inactive ((get-in palette [:white :alpha]) "0.6")
                :pending ((get-in palette [:white :alpha]) "0.6")} status)})

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

(css/defstyles progress-card-container []
  {:margin-top "40px"
   :height "240px"
   :background-color (get-in palette [:raisin-black :flat])
   :background-image ((get-in palette [:keppel :lg]) "150deg" "0.0" "0.2")
   :border (str "1px solid " (get-in palette [:onyx :flat]))
   :border-radius "32px"
   :padding "32px"})

(css/defstyles progress-bar []
  {:filter ((get-in palette [:keppel :ds]) "8px" "0.4")})

(css/defstyles progress-bar-text []
  {:font-size "32px"
   :font-weight "bold"})

(css/defstyles zone-panel []
  {:height "100%"
   :width "100%"
   :background-color (get-in palette [:raisin-black :flat])
   :background-image ((get-in palette [:flame :lg]) "150deg" "0.0" "0.2")
   :border (str "1px solid " (get-in palette [:onyx :flat]))
   :border-radius "32px"
   :padding "32px"})

(css/defstyles gear-panel []
  {:height "320px"
   :width "100%"
   :background-color (get-in palette [:raisin-black :flat])
   :background-image ((get-in palette [:blue-green :lg]) "150deg" "0.0" "0.2")
   :border (str "1px solid " (get-in palette [:onyx :flat]))
   :border-radius "32px"
   :padding "32px"})

(css/defstyles skillpoint-panel []
  {:height "100%"
   :width "100%"
   :background-color (get-in palette [:raisin-black :flat])
   :background-image ((get-in palette [:keppel :lg]) "150deg" "0.0" "0.2")
   :border (str "1px solid " (get-in palette [:onyx :flat]))
   :border-radius "32px"
   :padding "32px"})

(css/defstyles passive-image []
  {:width "400px"
   :border-radius "32px"
   :border (str "1px solid " (get-in palette [:onyx :flat]))})

(css/defstyles stats-panel []
  {:height "100%"
   :width "100%"
   :background-color (get-in palette [:raisin-black :flat])
   :background-image ((get-in palette [:maize-crayola :lg]) "150deg" "0.0" "0.2")
   :border (str "1px solid " (get-in palette [:onyx :flat]))
   :border-radius "32px"
   :padding "32px"})

(css/defstyles target-level-container []
  {:margin-bottom "16px"})

(css/defstyles stat-label []
  {:font-size "12px"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"
   :text-transform "uppercase"
   :color ((get-in palette [:white :alpha]) "0.6")})

(css/defstyles stat-value []
  {:font-size "32px"
   :font-weight "bold"})

(css/defstyles stat-value-append []
  {:font-size "32px"
   :font-weight "bold"
   :padding "0 16px"
   :color ((get-in palette [:white :alpha]) "0.4")})

(css/defstyles inactive-text []
  {:font-size "12px"
   :color ((get-in palette [:white :alpha]) "0.6")})

(css/defstyles card-title []
  {:font-size "24px"
   :font-weight "bold"
   :text-transform "uppercase"
   :margin-bottom "16px"})

(css/defstyles card-spacer []
  {:padding "32px 0px"
   :margin "0 32px"
   :width "2px"
   :height "100%"
   :background-color ((get-in palette [:white :alpha]) "0.2")})

(css/defstyles zone-reference-container []
  {:width "200px"
   :height "100%"})

(css/defstyles zone-layouts-container []
  {:min-height "80px"})

(css/defstyles zone-notes-container []
  {})

(css/defstyles current-zone-container []
  {})

(css/defstyles legend-icon [entry]
  {:font-size "24px !important"
   :color (get {:action (get-in palette [:flame :flat])
                :inventory (get-in palette [:onyx :flat])
                :vendor (get-in palette [:keppel :flat])
                :travel (get-in palette [:blue-green :flat])
                :reward (get-in palette [:maize-crayola :flat])
                :quest (get-in palette [:purpureus :flat])} entry)
   :filter (get {:action ((get-in palette [:flame :ds]) "8px" "0.4")
                 :inventory ((get-in palette [:onyx :ds]) "8px" "0.4")
                 :vendor ((get-in palette [:keppel :ds]) "8px" "0.4")
                 :travel ((get-in palette [:blue-green :ds]) "8px" "0.4")
                 :reward ((get-in palette [:maize-crayola :ds]) "8px" "0.4")
                 :quest ((get-in palette [:purpureus :ds]) "8px" "0.4")} entry)})

(css/defstyles legend-label []
  {:margin-left "8px"
   :font-size "12px"
   :line-height "24px"})

(css/defstyles zone-progress-icon []
  {:margin-top "16px"
   :font-size "40px !important"
   :color ((get-in palette [:white :alpha]) "0.2")})

(css/defstyles layout-notes-container []
  {:font-size "16px"
   :max-width "400px"
   :color ((get-in palette [:white :alpha]) "0.8")
   :margin "8px 0 16px"})

(css/defstyles layout-grid-container []
  {:max-width "400px"
   :max-height "220px"})

(css/defstyles layout-image-container []
  {:padding "0 10px"})

(css/defstyles layout-image []
  {:max-width "180px"})

(css/defstyles skill-display-container []
  {})

(css/defstyles socket-icon-container [colour]
  {:width "12px"
   :height "12px"
   :margin-bottom "6px"
   :border-radius "50%"
   :background-color (get {:B (get-in palette [:blue-green :flat])
                           :G (get-in palette [:keppel :flat])
                           :R (get-in palette [:flame :flat])} colour)})

(css/defstyles skill-gem-label [type]
  {:font-size "12px"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"
   :padding-left (get {:active "0"
                       :support "4px"} type)
   :color (get {:active ((get-in palette [:white :alpha]) "0.9")
                :support ((get-in palette [:white :alpha]) "0.7")} type)})
