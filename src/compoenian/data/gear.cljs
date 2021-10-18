(ns compoenian.data.gear
  (:require
   [cljs.pprint :refer [pprint]]))

(def gear-reference {:bane-occultist [{:label "From the beach"
                                       :skills [{:active :blight
                                                 :support [:arcane-surge-support]}
                                                {:active :explosive-trap}
                                                {:active :raise-zombie}]
                                       :level 1}
                                      {:label "Post-Hellrake"
                                       :skills [{:active :blight
                                                 :support [:arcane-surge-support
                                                           :infused-channelling-support]}
                                                {:active :explosive-trap}
                                                {:active :raise-zombie}
                                                {:active :contagion}
                                                {:active :frostblink}]
                                       :level 3}
                                      {:label "Post-Brutus"
                                       :skills [{:active :blight
                                                 :support [:spell-totem-support
                                                           :efficacy-support]}
                                                {:active :contagion
                                                 :support [:arcane-surge-support
                                                           :void-manipulation-support]}
                                                {:active :raise-zombie}
                                                {:active :flame-dash}]
                                       :level 8}
                                      {:label "Post-Fairgraves"
                                       :skills [{:active :blight
                                                 :support [:spell-totem-support
                                                           :efficacy-support]}
                                                {:active :essence-drain
                                                 :support [:void-manipulation-support
                                                           :arcane-surge-support]}
                                                {:active :contagion}
                                                {:active :raise-zombie}
                                                {:active :vitality}
                                                {:active :flame-dash}]}]})

(def gem-reference {:arcane-surge-support {:name "Arcane Surge Support"
                                           :color :B
                                           :type :support}
                    :infused-channelling-support {:name "Infused Channelling Support"
                                                  :color :B
                                                  :type :support}
                    :raise-zombie {:name "Raise Zombie"
                                   :color :B
                                   :type :skill}
                    :vitality {:name "Vitality"
                               :color :R
                               :type :skill}
                    :burning-arrow {:name "Burning Arrow"
                                    :color :G
                                    :type :skill}
                    :viper-strike {:name "Viper Strike"
                                   :color :G
                                   :type :skill}
                    :pierce-support {:name "Pierce Support"
                                     :color :G
                                     :type :support}
                    :caustic-arrow {:name "Caustic Arrow"
                                    :color :G
                                    :type :skill}
                    :explosive-trap {:name "Explosive Trap"
                                     :color :G
                                     :type :skill}
                    :lesser-poison-support {:name "Lesser Poison Support"
                                            :color :G
                                            :type :support}
                    :onslaught-support {:name "Onslaught Support"
                                        :color :G
                                        :type :support}
                    :frostblink {:name "Frostblink"
                                 :color :B
                                 :type :skill}
                    :puncture {:name "Puncture"
                               :color :G
                               :type :skill}
                    :contagion {:name "Contagion"
                                :color :B
                                :type :skill}
                    :void-manipulation-support {:name "Void Manipulation Support"
                                                :color :G
                                                :type :support}
                    :mirage-archer-support {:name "Mirage Archer Support"
                                            :color :G
                                            :type :support}
                    :smoke-mine {:name "Smoke Mine"
                                 :color :G
                                 :type :skill}
                    :flame-dash {:name "Flame Dash"
                                 :color :B
                                 :type :skill}
                    :toxic-rain {:name "Toxic Rain"
                                 :color :G
                                 :type :skill}
                    :summon-skitterbots {:name "Summon Skitterbots"
                                         :color :B
                                         :type :skill}
                    :controlled-destruction-support {:name "Controlled Destruction Support"
                                                     :color :B
                                                     :type :support}
                    :frenzy {:name "Frenzy (lvl 1)"
                             :color :G
                             :type :skill}
                    :faster-attacks-support {:name "Faster Attacks Support"
                                             :color :G
                                             :type :support}
                    :bane {:name "Bane"
                           :color :B
                           :type :skill}
                    :despair {:name "Despair"
                              :color :B
                              :type :skill}
                    :soulrend {:name "Soulrend"
                               :color :B
                               :type :skill}
                    :essence-drain {:name "Essence Drain"
                                    :color :B
                                    :type :skill}
                    :spellslinger {:name "Spellslinger"
                                   :color :B
                                   :type :skill}
                    :wither {:name "Wither"
                             :color :B
                             :type :skill}
                    :spell-totem-support {:name "Spell Totem Support"
                                          :color :R
                                          :type :support}
                    :multiple-totems-support {:name "Multiple Totem Support"
                                              :color :R
                                              :type :support}
                    :efficacy-support {:name "Efficacy Support"
                                       :color :B
                                       :type :support}
                    :greater-multiple-projectiles-support {:name "Greater Multiple Projectiles Support"
                                                           :color :G
                                                           :type :support}
                    :curse-on-hit-support {:name "Curse On Hit Support"
                                           :color :G
                                           :type :support}
                    :cast-when-damage-taken-support {:name "Cast When Damage Taken Support (lvl 4)"
                                                     :color :R
                                                     :type :support}
                    :tempest-shield {:name "Tempest Shield (lvl 9)"
                                     :color :B
                                     :type :skill}
                    :second-wind-support {:name "Second Wind Support"
                                          :color :G
                                          :type :support}
                    :blight {:name "Blight"
                             :color :B
                             :type :skill}})


(defn annotate-active-gem-data [skills]
  (mapv #(if-let [active-gem-key (:active %)]
           (assoc % :active (assoc (get gem-reference active-gem-key) :reference active-gem-key))
           %) skills))

(defn annotate-support-gem-data [skills]
  (mapv (fn [skill]
          (if-let [support-gem-reference (:support skill)]
            (assoc skill :support (mapv #(assoc (get gem-reference %) :reference %) support-gem-reference))
            skill)) skills))

(defn annotate-socket-data [skills]
  (mapv (fn [skill]
          (let [active-socket-color (get-in skill [:active :color])
                support-socket-colors (mapv :color (:support skill))
                socket-colors (filterv some? (concat [active-socket-color] support-socket-colors))]
            (assoc skill :sockets socket-colors))) skills))

(defn annotate-gem-data [build]
  (let [annotated-active-gem-data (mapv #(update % :skills annotate-active-gem-data) build)
        annotated-support-gem-data (mapv #(update % :skills annotate-support-gem-data) annotated-active-gem-data)
        result (mapv #(update % :skills annotate-socket-data) annotated-support-gem-data)]
    result))

(defn generate-gear-data [build-reference]
  (pprint "generating gear data...")
  (let [build (get gear-reference build-reference)
        levels (mapv :level build)
        annotated (annotate-gem-data build)]
    {:build annotated
     :levels levels}))
