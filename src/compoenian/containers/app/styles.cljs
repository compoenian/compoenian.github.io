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
   :background-color (get-in palette [:rich-black :flat])})

(css/defstyles navigation-container []
  {:width "160px"
   :min-height "100vh"
   :background-color (get-in palette [:xiketic :flat])})
(css/defstyles content-container []
  {})
(css/defstyles app-icon-container []
  {:margin "40px 16px"
   :display "flex"
   :justify-content "center"
   :color (get-in palette [:flame :flat])})
(css/defstyles app-icon []
  {:font-size "80px !important"
   :filter ((get-in palette [:flame :ds]) "16px" "0.8")})
(css/defstyles navigation-option-container [selected]
  {:margin "16px 40px"
   :padding "16px"
   :display "flex"
   :justify-content "center"
   :background-color (if selected ((get-in palette [:flame :alpha]) "0.3") "none")
   :border-radius "16px"
   :color (get-in palette [:flame :flat])})
(css/defstyles navigation-icon []
  {:font-size "32px !important"})
