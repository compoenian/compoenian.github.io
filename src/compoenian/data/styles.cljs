(ns compoenian.data.styles
  (:require
   [cljs.pprint :refer [pprint]]))

(def palette {:white {:flat "#FFFFFF"
                      :alpha #(str "rgba(255, 255, 255, " % ")")
                      :lg #(str "linear-gradient(" %1 ", rgba(255, 255, 255, " %2 "), rgba(255, 255, 255, " %3 "))")
                      :ds #(str "drop-shadow(0px 0px " %1 " rgba(255, 255, 255, " %2 "))")}
              :xiketic {:flat "#161623"
                        :alpha #(str "rgba(22, 22, 35, " % ")")
                        :lg #(str "linear-gradient(" %1 ", rgba(22, 22, 35, " %2 "), rgba(22, 22, 35, " %3 "))")
                        :ds #(str "drop-shadow(0px 0px " %1 " rgba(22, 22, 35 " %2 "))")}
              :raisin-black {:flat "#191B2A"
                             :alpha #(str "rgba(25, 27, 42, " % ")")
                             :lg #(str "linear-gradient(" %1 ", rgba(25, 27, 42, " %2 "), rgba(25, 27, 42, " %3 "))")
                             :ds #(str "drop-shadow(0px 0px " %1 " rgba(25, 27, 42, " %2 "))")}
              :rich-black {:flat "#111111"
                           :alpha #(str "rgba(17, 17, 17, " % ")")
                           :lg #(str "linear-gradient(" %1 ", rgba(17, 17, 17, " %2 "), rgba(17, 17, 17, " %3 "))")
                           :ds #(str "drop-shadow(0px 0px " %1 " rgba(17, 17, 17, " %2 "))")}
              :flame {:flat "#DF5634"
                      :alpha #(str "rgba(223, 86, 52, " % ")")
                      :lg #(str "linear-gradient(" %1 ", rgba(223, 86, 52, " %2 "), rgba(223, 86, 52, " %3 "))")
                      :ds #(str "drop-shadow(0px 0px " %1 " rgba(223, 86, 52, " %2 "))")}
              :blue-green {:flat "#2390B2"
                           :alpha #(str "rgba(35, 144, 178, " % ")")
                           :lg #(str "linear-gradient(" %1 ", rgba(35, 144, 178, " %2 "), rgba(35, 144, 178, " %3 "))")
                           :ds #(str "drop-shadow(0px 0px " %1 " rgba(35, 144, 178, " %2 "))")}
              :keppel {:flat "#23B299"
                       :alpha #(str "rgba(35, 178, 153, " % ")")
                       :lg #(str "linear-gradient(" %1 ", rgba(35, 178, 153, " %2 "), rgba(35, 178, 153, " %3 "))")
                       :ds #(str "drop-shadow(0px 0px " %1 " rgba(35, 178, 153, " %2 "))")}
              :maize-crayola {:flat "#E7C950"
                              :alpha #(str "rgba(231, 201, 80, " % ")")
                              :lg #(str "linear-gradient(" %1 ", rgba(231, 201, 80, " %2 "), rgba(231, 201, 80, " %3 "))")
                              :ds #(str "drop-shadow(0px 0px " %1 " rgba(231, 201, 80, " %2 "))")}
              :onyx {:flat "#3D3D3D"
                     :alpha #(str "rgba(61, 61, 61, " % ")")
                     :lg #(str "linear-gradient(" %1 ", rgba(61, 61, 61, " %2 "), rgba(61, 61, 61, " %3 "))")
                     :ds #(str "drop-shadow(0px 0px " %1 " rgba(61, 61, 61, " %2 "))")}
              :purpureus {:flat "#973BA9"
                          :alpha #(str "rgba(151, 151, 151, " % ")")
                          :lg #(str "linear-gradient(" %1 ", rgba(151, 59, 169, " %2 "), rgba(151, 59, 169, " %3 "))")
                          :ds #(str "drop-shadow(0px 0px " %1 " rgba(151, 59, 169, " %2 "))")}})
