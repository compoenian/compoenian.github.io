(ns compoenian.core
  (:require
   [compoenian.config :as config]
   [compoenian.containers.app.component :as app]
   [compoenian.events :as events]
   [compoenian.events.tracking :as events.tracking]
   [compoenian.routes :as routes]
   [compoenian.views :as views]
   [goog.events.KeyCodes :as KeyCodes]
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [re-pressed.core :as rp]))



(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch [::rp/set-keydown-rules
                      {:event-keys [[[::events.tracking/navigate-section-forward][{:keyCode KeyCodes/SPACE}]]
                                    [[::events.tracking/navigate-section-back][{:keyCode KeyCodes/B}]]
                                    [[::events.tracking/toggle-timer][{:keyCode KeyCodes/TAB}]]]}])
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [app/container] root-el)))

(defn init []
  (routes/start!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])
  (dev-setup)
  (mount-root))
