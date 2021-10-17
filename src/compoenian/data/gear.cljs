(ns compoenian.data.gear
  (:require
   [cljs.pprint :refer [pprint]]))

(def gear-reference {:bane-occultist [{:label "Early Campaign"
                                       :skills [{:active :blight
                                                 :support [:arcane-surge-support]}
                                                {:active :explosive-trap
                                                 :support [:lesser-poison-support]}]
                                       :level 1}
                                      {:label "6-Link Test"
                                       :skills [{:active :viper-strike
                                                 :support [:lesser-poison-support
                                                           :onslaught-support
                                                           :mirage-archer-support
                                                           :void-manipulation-support
                                                           :efficacy-support]}
                                                {:active :essence-drain
                                                 :support [:lesser-poison-support
                                                           :onslaught-support
                                                           :mirage-archer-support
                                                           :void-manipulation-support]}
                                                {:active :blight
                                                 :support [:lesser-poison-support
                                                           :void-manipulation-support]}]
                                       :level 8}]})

(def gem-reference {:arcane-surge-support {:name "Arcane Surge Support"
                                           :color :B
                                           :type :support}
                    :burning-arrow {:name "Burning Arrow"
                                    :colour :G
                                    :type :skill}
                    :viper-strike {:name "Viper Strike"
                                   :colour :G
                                   :type :skill}
                    :pierce-support {:name "Pierce Support"
                                     :colour :G
                                     :type :support}
                    :caustic-arrow {:name "Caustic Arrow"
                                    :colour :G
                                    :type :skill}
                    :explosive-trap {:name "Explosive Trap"
                                     :colour :G
                                     :type :skill}
                    :lesser-poison-support {:name "Lesser Poison Support"
                                            :colour :G
                                            :type :support}
                    :onslaught-support {:name "Onslaught Support"
                                        :colour :G
                                        :type :support}
                    :frostblink {:name "Frostblink"
                                 :colour :B
                                 :type :skill}
                    :puncture {:name "Puncture"
                               :colour :G
                               :type :skill}
                    :contagion {:name "Contagion"
                                :colour :B
                                :type :skill}
                    :void-manipulation-support {:name "Void Manipulation Support"
                                                :colour :G
                                                :type :support}
                    :mirage-archer-support {:name "Mirage Archer Support"
                                            :colour :G
                                            :type :support}
                    :smoke-mine {:name "Smoke Mine"
                                 :colour :G
                                 :type :skill}
                    :flame-dash {:name "Flame Dash"
                                 :colour :B
                                 :type :skill}
                    :toxic-rain {:name "Toxic Rain"
                                 :colour :G
                                 :type :skill}
                    :summon-skitterbots {:name "Summon Skitterbots"
                                         :colour :B
                                         :type :skill}
                    :controlled-destruction-support {:name "Controlled Destruction Support"
                                                     :colour :B
                                                     :type :support}
                    :frenzy {:name "Frenzy (lvl 1)"
                             :colour :G
                             :type :skill}
                    :faster-attacks-support {:name "Faster Attacks Support"
                                             :colour :G
                                             :type :support}
                    :bane {:name "Bane"
                           :colour :B
                           :type :skill}
                    :despair {:name "Despair"
                              :colour :B
                              :type :skill}
                    :soulrend {:name "Soulrend"
                               :colour :B
                               :type :skill}
                    :essence-drain {:name "Essence Drain"
                                    :colour :B
                                    :type :skill}
                    :spellslinger {:name "Spellslinger"
                                   :colour :B
                                   :type :skill}
                    :wither {:name "Wither"
                             :colour :B
                             :type :skill}
                    :spell-totem-support {:name "Spell Totem Support"
                                          :colour :R
                                          :type :support}
                    :multiple-totems-support {:name "Multiple Totem Support"
                                              :colour :R
                                              :type :support}
                    :efficacy-support {:name "Efficacy Support"
                                       :colour :B
                                       :type :support}
                    :greater-multiple-projectiles-support {:name "Greater Multiple Projectiles Support"
                                                           :colour :G
                                                           :type :support}
                    :curse-on-hit-support {:name "Curse On Hit Support"
                                           :colour :G
                                           :type :support}
                    :cast-when-damage-taken-support {:name "Cast When Damage Taken Support (lvl 4)"
                                                     :colour :R
                                                     :type :support}
                    :tempest-shield {:name "Tempest Shield (lvl 9)"
                                     :colour :B
                                     :type :skill}
                    :second-wind-support {:name "Second Wind Support"
                                          :colour :G
                                          :type :support}
                    :blight {:name "Blight"
                             :colour :B
                             :type :skill}})

#_(def gear-reference {:ranger-mule {:links [{:name "Burning Arrow"
                                              :sockets {:G 2}
                                              :gems [:burning-arrow
                                                     :pierce-support]}]
                                     :notes "Mule items only"}
                       :trickster-start {:links [{:name "Viper Strike"
                                                  :sockets {:G 2}
                                                  :gems [:viper-strike
                                                         :lesser-poison-support]}]
                                         :notes "Gear up to get to town"}
                       :trickster-caustic {:links [{:name "Caustic Arrow"
                                                    :sockets {:G 2}
                                                    :gems [:caustic-arrow
                                                           :pierce-support]}
                                                   {:name "Explosive Trap"
                                                    :sockets {:G 2}
                                                    :gems [:explosive-trap
                                                           :lesser-poison-support]}]
                                           :notes "Initial trickster skill gem setup"}
                       :trickster-puncture {:links [{:name "Caustic Arrow"
                                                     :sockets {:G 3}
                                                     :gems [:caustic-arrow
                                                            :pierce-support
                                                            :onslaught-support]}
                                                    {:name "Movement"
                                                     :sockets {:B 1}
                                                     :gems [:frostblink]}
                                                    {:name "Puncture"
                                                     :sockets {:G 2}
                                                     :gems [:puncture
                                                            :lesser-poison-support]}
                                                    {:name "Explosive Trap"
                                                     :sockets {:G 1}
                                                     :gems [:explosive-trap]}
                                                    {:name "Weapon Swap #1"
                                                     :sockets {:B 1}
                                                     :gems [:contagion]}]
                                            :notes "Puncture included for single target"}
                       :trickster-void {:links [{:name "Caustic Arrow"
                                                 :sockets {:G 3}
                                                 :gems [:caustic-arrow
                                                        :pierce-support
                                                        :void-manipulation-support]}
                                                {:name "Movement"
                                                 :sockets {:B 1}
                                                 :gems [:frostblink]}
                                                {:name "Puncture"
                                                 :sockets {:G 3}
                                                 :gems [:puncture
                                                        :lesser-poison-support
                                                        :onslaught-support]}
                                                {:name "Weapon Swap #1"
                                                 :sockets {:B 1}
                                                 :gems [:contagion]}]
                                        :notes "Void Manipulation replaces Onslaught in clearing 3-link"}
                       :trickster-smoke {:links [{:name "Caustic Arrow"
                                                  :sockets {:G 3}
                                                  :gems [:caustic-arrow
                                                         :pierce-support
                                                         :mirage-archer-support]}
                                                 {:name "Movement"
                                                  :sockets {:B 1
                                                            :G 1}
                                                  :gems [:flame-dash
                                                         :smoke-mine]}
                                                 {:name "Puncture"
                                                  :sockets {:G 3}
                                                  :gems [:puncture
                                                         :lesser-poison-support
                                                         :onslaught-support]}
                                                 {:name "Weapon Swap #1"
                                                  :sockets {:B 1}
                                                  :gems [:contagion]}]
                                         :notes "Smoke Mine added to movement skills but doesn't need to be linked to Frostblink. Mirage Archer replaces Void Manipulation in clear setup."}
                       :trickster-toxic {:links [{:name "Caustic Arrow"
                                                  :sockets {:G 3}
                                                  :gems [:caustic-arrow
                                                         :pierce-support
                                                         :mirage-archer-support]}
                                                 {:name "Movement"
                                                  :sockets {:B 1
                                                            :G 1}
                                                  :gems [:flame-dash
                                                         :smoke-mine]}
                                                 {:name "Toxic Rain"
                                                  :sockets {:G 3}
                                                  :gems [:toxic-rain
                                                         :void-manipulation-support
                                                         :onslaught-support]}
                                                 {:name "Weapon Swap #1"
                                                  :sockets {:B 1}
                                                  :gems [:contagion]}]
                                         :notes "Toxic Rain replaces Puncture in the new single target setup"}
                       :trickster-skitterbots {:links [{:name "Caustic Arrow"
                                                        :sockets {:G 3}
                                                        :gems [:caustic-arrow
                                                               :pierce-support
                                                               :mirage-archer-support]}
                                                       {:name "Movement"
                                                        :sockets {:B 1
                                                                  :G 1}
                                                        :gems [:flame-dash
                                                               :smoke-mine]}
                                                       {:name "Skitterbots"
                                                        :sockets {:B 1}
                                                        :gems [:summon-skitterbots]}
                                                       {:name "Toxic Rain"
                                                        :sockets {:G 3}
                                                        :gems [:toxic-rain
                                                               :void-manipulation-support
                                                               :onslaught-support]}
                                                       {:name "Weapon Swap #1"
                                                        :sockets {:B 3}
                                                        :gems [:contagion
                                                               :controlled-destruction-support
                                                               :controlled-destruction-support]}
                                                       {:name "Weapon Swap #2"
                                                        :sockets {:B 3}
                                                        :gems [:essence-drain
                                                               :controlled-destruction-support]}]
                                               :notes "Equip and activate Skitterbots for the debuff"}
                       :trickster-despair {:links [{:name "Caustic Arrow"
                                                    :sockets {:G 3}
                                                    :gems [:caustic-arrow
                                                           :pierce-support
                                                           :mirage-archer-support]}
                                                   {:name "Movement"
                                                    :sockets {:B 1
                                                              :G 1}
                                                    :gems [:flame-dash
                                                           :smoke-mine]}
                                                   {:name "Despair"
                                                    :sockets {:B 2}
                                                    :gems [:bane
                                                           :despair]}
                                                   {:name "Toxic Rain"
                                                    :sockets {:G 3}
                                                    :gems [:toxic-rain
                                                           :void-manipulation-support
                                                           :onslaught-support]}
                                                   {:name "Weapon Swap #1"
                                                    :sockets {:B 3}
                                                    :gems [:contagion
                                                           :controlled-destruction-support
                                                           :controlled-destruction-support]}
                                                   {:name "Weapon Swap #2"
                                                    :sockets {:G 1
                                                              :B 2}
                                                    :gems [:essence-drain
                                                           :controlled-destruction-support]}]
                                           :notes "Replace Skitterbots with a Bane-Despair cast for tough/pack mob debuff"}
                       :trickster-slinger {:links [{:name "Soulrend"
                                                    :sockets {:B 3}
                                                    :gems [:soulrend
                                                           :spellslinger
                                                           :controlled-destruction-support]}
                                                   {:name "Movement"
                                                    :sockets {:B 1
                                                              :G 1}
                                                    :gems [:flame-dash
                                                           :smoke-mine]}
                                                   {:name "Essence Drain"
                                                    :sockets {:B 3}
                                                    :gems [:essence-drain
                                                           :spellslinger
                                                           :controlled-destruction-support]}
                                                   {:name "Contagion"
                                                    :sockets {:B 3}
                                                    :gems [:contagion
                                                           :spellslinger
                                                           :controlled-destruction-support]}
                                                   {:name "Despair"
                                                    :sockets {:B 2}
                                                    :gems [:bane
                                                           :despair]}
                                                   {:name "Frenzy"
                                                    :sockets {:G 2}
                                                    :gems [:frenzy
                                                           :faster-attacks-support]}]
                                           :notes "If you have a BBBB at this point you can combine two of the spellslinger links into a single piece"}
                       :trickster-finish {:links [{:name "Wither (Shield)"
                                                   :sockets {:R 2
                                                             :B 1}
                                                   :gems [:blight
                                                          :spell-totem-support
                                                          :multiple-totems-support]}
                                                  {:name "Movement (Wand)"
                                                   :sockets {:B 1
                                                             :G 2}
                                                   :gems [:flame-dash
                                                          :smoke-mine
                                                          :second-wind-support]}
                                                  {:name "Essence Drain (4L)"
                                                   :sockets {:B 4}
                                                   :gems [:essence-drain
                                                          :spellslinger
                                                          :controlled-destruction-support
                                                          :efficacy-support]}
                                                  {:name "Frenzy (4L)"
                                                   :sockets {:G 2
                                                             :B 2}
                                                   :gems [:frenzy
                                                          :greater-multiple-projectiles-support
                                                          :curse-on-hit-support
                                                          :despair]}
                                                  {:name "Soulrend (4L)"
                                                   :sockets {:B 3
                                                             :G 1}
                                                   :gems [:soulrend
                                                          :spellslinger
                                                          :controlled-destruction-support
                                                          :greater-multiple-projectiles-support]}
                                                  {:name "Contagion/Defensive"
                                                   :sockets {:R 1
                                                             :B 3}
                                                   :gems [:cast-when-damage-taken-support
                                                          :tempest-shield
                                                          :contagion
                                                          :spellslinger]}]
                                          :notes "Choose your own adventure..."}})

(defn annotate-support-gem-data [skills]
  (mapv (fn [skill]
          (if-let [support-gem-reference (:support skill)]
            (assoc skill :support (mapv #(assoc (get gem-reference %) :reference %) support-gem-reference))
            skill)) skills))

(defn annotate-active-gem-data [skills]
  (mapv #(if-let [active-gem-key (:active %)]
           (assoc % :active (assoc (get gem-reference active-gem-key) :reference active-gem-key))
           %) skills))

(defn annotate-gem-data [build]
  (let [annotated-active-gem-data (mapv #(update % :skills annotate-active-gem-data) build)
        result (mapv #(update % :skills annotate-support-gem-data) annotated-active-gem-data)]
    result))

(defn generate-gear-data [build-reference]
  (pprint "generating gear data...")
  (let [build (get gear-reference build-reference)
        levels (mapv :level build)
        annotated (annotate-gem-data build)]
    {:build annotated
     :levels levels}))
