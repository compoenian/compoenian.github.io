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
   :margin-right "40px"
   :height "100%"})

(css/defstyles track-icon-container []
  {:margin "16px"
   :margin-bottom "32px"
   :color (:flame palette)})

(css/defstyles track-icon []
  {:font-size "32px !important"
   :filter "drop-shadow(0px 0px 8px rgb(223, 86, 52))"})

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
   :color "rgba(255, 255, 255, 0.4)"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"})

(css/defstyles timer-card-container []
  {:height "100%"
   :background-color (:raisin-black palette)
   :background-image "linear-gradient(150deg, rgba(35, 144, 178, 0), rgba(35, 144, 178, 0.2))"
   :border "1px solid #3D3D3D"
   :border-radius "32px"})

(css/defstyles timer-display-container []
  {:padding "24px 32px 8px 32px"})

(css/defstyles timer-display-title []
  {:font-size "8px"
   :text-align "right"
   :text-transform "uppercase"
   :color "rgba(255, 255, 255, 0.4)"})

(css/defstyles timer-actions-container []
  {:padding "0px 32px"})

(css/defstyles timer-display-value []
  {:font-size "40px"
   :text-align "right"})

(css/defstyles timer-action-container [content-icon]
  {:text-align "center"
   :cursor "pointer"
   :color (get {:start (:keppel palette)
                :pause (:maize-crayola palette)
                :reset (:flame palette)} content-icon)})

(css/defstyles timer-action-icon [content-icon]
  {:margin "0 auto"
   :font-size "32px !important"
   :filter (get {:start "drop-shadow(0px 0px 8px rgba(35, 178, 153, 0.4))"
                 :pause "drop-shadow(0px 0px 8px rgba(231, 201, 80, 0.4))"
                 :reset "drop-shadow(0px 0px 8px rgba(223, 86, 52, 0.4))"} content-icon)})

(css/defstyles timer-action-label []
  {:font-size "10px"
   :text-transform "uppercase"
   :color "rgba(255, 255, 255, 0.4)"})

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

(css/defstyles active-panel-content []
  {:height "100%"
   :background-image "linear-gradient(90deg, rgba(35, 144, 178, 0.0), rgba(35, 144, 178, 0.2))"
   :padding-top "8px"
   :padding-left "16px"})

(css/defstyles active-panel-bar []
  {:width "4px"
   :height "100%"
   :background-color (:blue-green palette)})

(css/defstyles panel-title [status]
  {:font-size "12px"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"
   :text-transform "uppercase"
   :color (get {:inactive "rgba(255, 255, 255, 0.6)"
                :pending "rgba(255, 255, 255, 0.6)"} status)})

(css/defstyles panel-description [status]
  {:font-size "10px"
   :white-space "nowrap"
   :overflow "hidden"
   :text-overflow "ellipsis"
   :color (get {:inactive "rgba(255, 255, 255, 0.4)"
                :active "rgba(255, 255, 255, 0.6)"
                :pending "rgba(255, 255, 255, 0.4)"} status)})

(css/defstyles panel-timestamp [status]
  {:font-size "12px"
   :color (get {:inactive "rgba(255, 255, 255, 0.8)"
                :pending "rgba(255, 255, 255, 0.8)"} status)})

(css/defstyles progress-card-container []
  {:margin-top "40px"
   :height "240px"
   :background-color (:raisin-black palette)
   :background-image "linear-gradient(150deg, rgba(35, 178, 153, 0.0), rgba(35, 178, 153, 0.2))"
   :border "1px solid #3D3D3D"
   :border-radius "32px"
   :padding "32px"})

(css/defstyles progress-bar []
  {:filter "drop-shadow(0px 0px 8px rgba(35, 178, 153, 0.4))"})

(css/defstyles progress-bar-text []
  {:font-size "32px"
   :font-weight "bold"})

(css/defstyles zone-panel []
  {:height "100%"
   :width "100%"
   :background-color (:raisin-black palette)
   :background-image "linear-gradient(150deg, rgba(233, 86, 52, 0.0), rgba(233, 86, 52, 0.2))"
   :border "1px solid #3D3D3D"
   :border-radius "32px"
   :padding "32px"})

(css/defstyles gear-panel []
  {:height "320px"
   :width "100%"
   :background-color (:raisin-black palette)
   :background-image "linear-gradient(150deg, rgba(35, 144, 178, 0), rgba(35, 144, 178, 0.2))"
   :border "1px solid #3D3D3D"
   :border-radius "32px"
   :padding "32px"})

(css/defstyles skillpoint-panel []
  {:height "100%"
   :width "100%"
   :background-color (:raisin-black palette)
   :background-image "linear-gradient(150deg, rgba(35, 178, 153, 0.0), rgba(35, 178, 153, 0.2))"
   :border "1px solid #3D3D3D"
   :border-radius "32px"
   :padding "32px"})

(css/defstyles passive-image []
  {:width "400px"})

(css/defstyles stats-panel []
  {:height "100%"
   :width "100%"
   :background-color (:raisin-black palette)
   :background-image "linear-gradient(150deg, rgba(231, 201, 80, 0.0), rgba(231, 201, 80, 0.2))"
   :border "1px solid #3D3D3D"
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
   :color "rgba(255, 255, 255, 0.6)"})

(css/defstyles stat-value []
  {:font-size "32px"
   :font-weight "bold"})

(css/defstyles inactive-text []
  {:font-size "12px"
   :color "rgba(255, 255, 255, 0.6)"})

(css/defstyles card-title []
  {:font-size "24px"
   :font-weight "bold"
   :text-transform "uppercase"
   :margin-bottom "16px"})

(css/defstyles card-spacer []
  {:padding "32px 0px"
   :margin "0 24px"
   :width "2px"
   :height "100%"
   :background-color "rgba(61, 61, 61, 0.6)"})

(css/defstyles zone-reference-container []
  {:width "200px"
   :height "100%"})

(css/defstyles zone-layouts-container []
  {:min-height "80px"})

(css/defstyles zone-notes-container []
  {})
