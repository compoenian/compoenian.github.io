(ns compoenian.containers.app.styles
  (:require
   [cljss.core :as css :include-macros true]
   [compoenian.data.styles :refer [palette]]))

(css/inject-global {:body {:margin 0
                           :color "#FFFFFF"
                           :font-family "Open Sans, Humanist, sans-serif"}
                    :* {:box-sizing "border-box"}})

(css/defstyles container-main []
  {:min-width "100vw"
   :min-height "100vh"
   :background-color (:rich-black palette)})

(css/defstyles navigation-container []
  {:width "160px"
   :min-height "100vh"
   :background-color (:xiketic palette)})
(css/defstyles content-container []
  {})
(css/defstyles app-icon-container []
  {:margin "40px 16px"
   :display "flex"
   :justify-content "center"
   :color (:flame palette)})
(css/defstyles app-icon []
  {:font-size "80px !important"
   :filter "drop-shadow(0px 0px 16px rgb(223, 86, 52))"})
(css/defstyles navigation-option-container [selected]
  {:margin "16px 40px"
   :padding "16px"
   :display "flex"
   :justify-content "center"
   :background-color (if selected "rgba(223, 86, 52, 0.3)" "none")
   :border-radius "16px"
   :color (:flame palette)})
(css/defstyles navigation-icon []
  {:font-size "32px !important"})
