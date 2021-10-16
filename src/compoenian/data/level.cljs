(ns compoenian.data.level
  (:require
   [cljs.pprint :refer [pprint]]))

(def zone-data {:act-01 {:the-twilight-strand {:name "The Twilight Strand"
                                               :level 1}
                         :lioneyes-watch {:name "Lioneye's Watch"
                                          :level nil}
                         :the-coast {:name "The Coast"
                                     :level 2
                                     :waypoint true
                                     :notes "Stick to the right side, following the wall."
                                     :layouts ["img/layouts/act01/the-coast-01.png"
                                               "img/layouts/act01/the-coast-02.png"
                                               "img/layouts/act01/the-coast-03.png"]}
                         :the-tidal-island {:name "The Tidal Island"
                                            :level 3
                                            :notes "The layout is circular. Head left first. The side without a cliff is the shortest way."}
                         :the-mud-flats {:name "The Mud Flats"
                                         :level 4
                                         :notes "Green circles indicate the area in which the quest items are grouped. Little rivers connect the three items."
                                         :layouts ["img/layouts/act01/the-mud-flats-01.png"
                                                   "img/layouts/act01/the-mud-flats-02.png"]}
                         :the-fetid-pool {:name "The Fetid Pool"
                                          :level 5}
                         :the-submerged-passage {:name "The Submerged Passage"
                                                 :level 5
                                                 :waypoint true
                                                 :layouts ["img/layouts/act01/the-submerged-passage-01.png"
                                                           "img/layouts/act01/the-submerged-passage-02.png"
                                                           "img/layouts/act01/the-submerged-passage-03.png"]}
                         :the-flooded-depths {:name "The Flooded Depths"
                                              :level 6
                                              :layouts ["img/layouts/act01/the-flooded-depths-01.png"
                                                        "img/layouts/act01/the-flooded-depths-02.png"
                                                        "img/layouts/act01/the-flooded-depths-03.png"]}
                         :the-ledge {:name "The Ledge"
                                     :level 6
                                     :waypoint true
                                     :notes "This layout is always linear, there are little totems on one side of the waypoint, this side will always be the side at which the exit is located."}
                         :the-climb {:name "The Climb"
                                     :level 7
                                     :waypoint true
                                     :layouts ["img/layouts/act01/the-climb-01.png"
                                               "img/layouts/act01/the-climb-02.png"]}
                         :the-lower-prison {:name "The Lower Prison"
                                            :level 8
                                            :waypoint true
                                            :trial true
                                            :layouts ["img/layouts/act01/the-lower-prison-01.png"
                                                      "img/layouts/act01/the-lower-prison-02.png"
                                                      "img/layouts/act01/the-lower-prison-03.png"
                                                      "img/layouts/act01/the-lower-prison-04.png"]}
                         :the-upper-prison {:name "The Upper Prison"
                                            :level 9
                                            :layouts ["img/layouts/act01/the-upper-prison-01.png"
                                                      "img/layouts/act01/the-upper-prison-02.png"
                                                      "img/layouts/act01/the-upper-prison-03.png"
                                                      "img/layouts/act01/the-upper-prison-04.png"
                                                      "img/layouts/act01/the-upper-prison-05.png"]}
                         :prisoners-gate {:name "Prisoner's Gate"
                                          :level 10
                                          :waypoint true
                                          :notes "Look for the side of the road that has the ledge down, usually on the right side."
                                          :layouts ["img/layouts/act01/the-prisoners-gate-01.png"
                                                    "img/layouts/act01/the-prisoners-gate-02.png"
                                                    "img/layouts/act01/the-prisoners-gate-03.png"
                                                    "img/layouts/act01/the-prisoners-gate-04.png"]}
                         :the-ship-graveyard {:name "The Ship Graveyard"
                                              :level 11
                                              :waypoint true
                                              :notes "Look for waypoint first, then find Fairgraves, and move away from the plateau, generally up or down."
                                              :layouts ["img/layouts/act01/the-ship-graveyard-01.png"
                                                        "img/layouts/act01/the-ship-graveyard-02.png"
                                                        "img/layouts/act01/the-ship-graveyard-03.png"
                                                        "img/layouts/act01/the-ship-graveyard-04.png"]}
                         :the-ship-graveyard-cave {:name "The Ship Graveyard Cave"
                                                   :level 12}
                         :the-cavern-of-wrath {:name "The Cavern of Wrath"
                                               :level 12
                                               :waypoint true
                                               :layouts ["img/layouts/act01/the-cavern-of-wrath-01.png"
                                                         "img/layouts/act01/the-cavern-of-wrath-02.png"
                                                         "img/layouts/act01/the-cavern-of-wrath-03.png"]}
                         :the-cavern-of-anger {:name "The Cavern of Anger"
                                               :level 13
                                               :notes "Often bottom right, you can follow the spirits, if you see piles of gold you’re close to Merveil."
                                               :layouts ["img/layouts/act01/the-cavern-of-anger-01.png"
                                                         "img/layouts/act01/the-cavern-of-anger-02.png"]}}
                :act-02 {:the-southern-forest {:name "The Southern Forest"
                                               :level 13
                                               :waypoint true}}})

(def act-01-definitions [{:label "Exile..."
                          :zone :the-twilight-strand
                          :objectives [[:action {:action "Create Witch"}]
                                       [:quest {:objective :collect
                                                :target "[Arcane Surge???] Support gem"}]
                                       [:quest {:objective :defeat
                                                :target "Hillock"}]
                                       [:travel {:method :zone}]]}
                         {:label "Caustic Arrow"
                          :zone :lioneyes-watch
                          :objectives [[:reward {:selection "Explosive Trap"
                                                 :giver "Tarkleigh"}]
                                       [:inventory {:action "Move RGB Dagger to weapon swap slot"}]
                                       [:vendor {:action "Check for GGG gear, sell all non-green socketed gear"
                                                 :vendor "Tarkleigh"}]
                                       [:inventory {:action "Equip stashed bow and relevant gear"}]
                                       [:inventory {:action "Equip Caustic Arrow and Pierce"}]
                                       [:inventory {:action "Equip Explosive Trap"}]
                                       [:vendor {:action "Purchase Iron Ring"
                                                 :vendor "Nessa"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-coast
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-mud-flats
                          :objectives [[:quest {:objective :collect
                                                :target "Rhoa eggs"}]
                                       [:quest {:objective :activate
                                                :target "The Submerged Passage entrance lock"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-submerged-passage
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-coast
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Hellrake"
                          :zone :the-tidal-island
                          :objectives [[:quest {:objective :defeat
                                                :target "Hellrake"
                                                :notes "Travel west side, one caustic arrow followed by explosive traps"}]
                                       [:quest {:objective :collect
                                                :target "Medicine Chest"
                                                :notes "Also collect currency, rare, and magic items. ID rares."}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Quicksilver Flask"
                          :zone :lioneyes-watch
                          :objectives [[:reward {:selection "Contagion"
                                                 :giver "Tarkleigh"}]
                                       [:reward {:selection "Frostblink"
                                                 :giver "Tarkleigh"}]
                                       [:reward {:selection "Quicksilver Flask"
                                                 :giver "Nessa"}]
                                       [:reward {:selection "Onslaught Support"
                                                 :giver "Nessa"}]
                                       [:vendor {:action "Purchase Puncture"
                                                 :vendor "Nessa"}]
                                       [:vendor {:action "Upgrade flasks if available and vendor unnecessary items"
                                                 :vendor "Nessa"}]
                                       [:inventory {:action "Equip new links as necessary"}]
                                       [:travel {:method :waypoint
                                                 :location "The Submerged Passage"}]]}
                         {:zone :the-submerged-passage
                          :objectives [[:inventory {:action "Place portal at the bridge for later entry to the flooded depths."}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-ledge
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-climb
                          :label "Free Navali"
                          :objectives [[:quest {:objective :defeat
                                                :target "The Faun"
                                                :notes "Kill The Faun to unlock Navali"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-lower-prison
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :lioneyes-watch
                          :objectives [[:travel {:method :portal}]]}
                         {:zone :the-submerged-passage
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat The Dweller"
                          :zone :the-flooded-depths
                          :objectives [[:quest {:objective :defeat
                                                :target "The Dweller"
                                                :notes "Loot and ID items as necessary"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :lioneyes-watch
                          :objectives [[:reward {:selection "Void Manipulation Support"
                                                 :giver "Nessa"}]
                                       [:reward {:selection "Skill Point book"
                                                 :giver "Tarkleigh"}]
                                       [:vendor {:action "Vendor unnecessary items"
                                                 :vendor "Tarkleigh"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-lower-prison
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Agony"
                                                :notes "Head N"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Brutus"
                          :zone :the-upper-prison
                          :objectives [[:quest {:objective :defeat
                                                :target "Brutus"
                                                :notes "Puncture then caustic, followed by repeat Punctures for bleed"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :lioneyes-watch
                          :objectives [[:vendor {:action "Purchase Mirage Archer Support"
                                                 :vendor "Nessa"}]
                                       [:vendor {:action "Purchase Flame Dash"
                                                 :vendor "Nessa"}]
                                       [:reward {:selection "Smoke Mine"
                                                 :giver "Tarkleigh"}]
                                       [:inventory {:action "Equip new skill gems and setup skill hotkeys"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :prisoners-gate
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-ship-graveyard
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-ship-graveyard-cave
                          :objectives [[:quest {:objective :collect
                                                :target "The Allflame"
                                                :notes "Travel NE to find The Slave Girl and open for The Allflame"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Fairgraves"
                          :zone :the-ship-graveyard
                          :objectives [[:quest {:objective :defeat
                                                :target "Fairgraves"
                                                :notes "Talk to Fairgraves and clear the ensuing wave encounter"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-cavern-of-wrath
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:label "Toxic Rain"
                          :zone :lioneyes-watch
                          :objectives [[:reward {:selection "Skill Point book"
                                                 :giver "Bestel"}]
                                       [:reward {:selection "Essence Drain"
                                                 :giver "Nessa"}]
                                       [:vendor {:action "Purchase Toxic Rain"
                                                 :vendor "Nessa"}]
                                       [:vendor {:action "Vendor Iron Ring and int skill gem for cold resist ring"
                                                 :vendor "Nessa"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-cavern-of-wrath
                          :objectives [[:travel {:method :zone}]
                                       [:travel {:method :zone
                                                 :location "The Southern Forest"}]]}
                         {:label "Defeat Merveil"
                          :zone :the-cavern-of-anger
                          :objectives [[:quest {:objective :defeat
                                                :target "Merveil"}]
                                       [:travel {:method :zone}]]}])

(def act-02-definitions [{:label "Enter The Chamber of Sins"
                          :zone :the-southern-forest
                          :objectives [[:travel {:method :zone
                                                 :location "The Forest Encampment"}]
                                       [:travel {:method :zone
                                                 :location "The Old Fields"}]
                                       [:travel {:method :zone
                                                 :location "The Crossroads"
                                                 :notes "Travel N of the path in The Old Fields and place a portal near the entrance to The Den"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Waypoint is located in the center at path intersection then head N"}]
                                       [:travel {:method :zone
                                                 :location "The Chamber of Sins Level 1"}]]}
                         {:label "Enter The Den"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "The Forest Encampment"}]
                                       [:travel {:method :portal
                                                 :location "The Old Fields"}]
                                       [:travel {:method :zone
                                                 :location "The Den"}]]}
                         {:label "Defeat The Great White Beast"
                          :objectives [[:quest {:objective :interact
                                                :target "Einhar"}]
                                       [:quest {:objective :defeat
                                                :target "The Great White Beast"
                                                :notes "Head S"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Enter The Chamber of Sins Level 2"
                          :objectives [[:reward {:selection "Quicksilver Flask"
                                                 :giver "Yeena"}]
                                       [:travel {:method :waypoint
                                                 :location "The Chamber of Sins Level 1"}]
                                       [:travel {:method :zone
                                                 :location "The Chamber of Sins Level 2"}]]}
                         {:label "Defeat Fidelatis"
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Agony"
                                                :notes "Head S"}]
                                       [:quest {:objective :defeat
                                                :target "Fidelatis"
                                                :notes "Head N"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Summon Skitterbots"
                          :objectives [[:reward {:selection "Blood Rage"
                                                 :giver "Greust"}]
                                       [:vendor {:action "Purchase Frenzy, 3x Controlled Destruction, and Summon Skitterbots"
                                                 :vendor "Yeena"}]
                                       [:travel {:method :zone
                                                 :location "The Riverways"}]]}
                         {:label "Enter The Weaver's Chambers"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint (The Riverways)"
                                                 :notes "Head E on path to find waypoint and continue same direction"}]
                                       [:travel {:method :zone
                                                 :location "The Western Front"}]
                                       [:travel {:method :activate
                                                 :location "waypoint (The Western Front)"
                                                 :notes "Follow path for waypoint then Head S"}]
                                       [:travel {:method :zone
                                                 :location "The Weaver's Chambers"}]]}
                         {:label "Defeat The Weaver"
                          :objectives [[:quest {:objective :defeat
                                                :target "The Weaver"
                                                :notes "Head S"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Enter The Broken Bridge"
                          :objectives [[:reward {:selection "Faster Attacks Support"
                                                 :giver "Silk"}]
                                       [:vendor {:action "Check for BBB and BBG wands if haven't already acquired"
                                                 :vendor "Yeena"}]
                                       [:travel {:method :waypoint
                                                 :location "The Crossroads"
                                                 :notes "Head N"}]
                                       [:travel {:method :zone
                                                 :location "The Broken Bridge"}]]}
                         {:label "Defeat Kraityn"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head N"}]
                                       [:quest {:objective :defeat
                                                :target "Kraityn"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Defeat Oak"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Riverways"
                                                 :notes "Head W from the checkpoint"}]
                                       [:travel {:method :zone
                                                 :location "The Wetlands"}]
                                       [:quest {:objective :defeat
                                                :target "Oak"
                                                :notes "Head W to find stronghold"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head W from stronghold to find waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "The Western Front"}]]}
                         {:label "Help Alira"
                          :objectives [[:quest {:objective :interact
                                                :target "Alira"
                                                :notes "Located on the same side of the road as the checkpoint, help if racing for +resists"}]
                                       [:quest {:objective :defeat
                                                :target "The Blackguards"
                                                :notes "Head S to find camp"}]
                                       [:quest {:objective :collect
                                                :target "Thaumatic Seal"
                                                :notes "Use seal to open nearby pathway entrance"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Enter The Vaal Ruins"
                          :objectives [[:travel {:method :waypoint
                                                 :location "Lioneye's Watch (Act 1)"}]
                                       [:reward {:selection "Skill Point book"
                                                 :giver "Bestel"}]
                                       [:vendor {:action "Check for BBB or BBG wand if need and have currency available"
                                                 :vendor "Nessa"}]
                                       [:travel {:method :waypoint
                                                 :location "The Forest Encampment (Act 2)"}]
                                       [:travel {:method :waypoint
                                                 :location "The Wetlands"}]
                                       [:travel {:method :zone
                                                 :location "The Vaal Ruins"}]]}
                         {:label "Enter The Caverns"
                          :objectives [[:quest {:objective :activate
                                                :target "Ruins boulder seal"
                                                :notes "Head S, then W, then N, then W, then S"}]
                                       [:travel {:method :zone
                                                 :location "The Northern Forest"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head W to find the waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Caverns"
                                                 :notes "Head N"}]]}
                         {:label "Enter The Pyramid Apex"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head S, then E, then N"}]
                                       [:travel {:method :zone
                                                 :location "The Ancient Pyramid"}]
                                       [:travel {:method :zone
                                                 :location "Stair transitions"
                                                 :notes "Stair exit is always the opposit corner to entrance position"}]
                                       [:travel {:method :zone
                                                 :location "Pyramid Apex"}]]}
                         {:label "Defeat The Vaal Oversoul"
                          :objectives [[:quest {:objective :activate
                                                :target "The Dark Altar"}]
                                       [:quest {:objective :defeat
                                                :target "The Vaal Oversoul"}]
                                       [:action {:action "Exit to character selection and re-log"}]
                                       [:travel {:method :waypoint
                                                 :location "The City of Sarn"}]]}])

(def act-03-definitions [
                         {:label "Enter The Crematorium"
                          :objectives [[:quest {:objective :interact
                                                :target "Clarissa"}]
                                       [:travel {:method :zone
                                                 :location "The Sarn Encampment"}]
                                       [:travel {:method :zone
                                                 :location "The Slums"}]
                                       [:travel {:method :zone
                                                 :location "The Crematorium"}]]}
                         {:label "Defeat Piety"
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "Head N, then W"}]
                                       [:quest {:objective :defeat
                                                :target "Piety"
                                                :notes "Head S, then W"}]
                                       [:quest {:objective :collect
                                                :target "Tolman's Bracelet"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Enter The Sewers"
                          :objectives [[:reward {:selection "Despair"
                                                 :giver "Maramoa"
                                                 :notes "Add gem to offhand weapon for passive leveling"}]
                                       [:travel {:method :zone
                                                 :location "The Slums"}]
                                       [:travel {:method :zone
                                                 :location "The Sewers"}]]}
                         {:label "Enter The Marketplace"
                          :objectives [[:quest {:objective :collect
                                                :target "Platinum Busts"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head N from waypoint to find zone exit"}]
                                       [:travel {:method :zone
                                                 :location "The Marketplace"}]]}
                         {:label "Complete Catacombs Trial"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head W for the waypoint near the entrance for The Catacombs"}]
                                       [:travel {:method :zone
                                                 :location "The Catacombs"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "Head N"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Enter The Battlefront"
                          :objectives [[:reward {:selection "Skill Point book"
                                                 :giver "Hargan"}]
                                       [:vendor {:action "Check for on-colour 4-link items"
                                                 :vendor "Hargan"}]
                                       [:travel {:method :waypoint
                                                 :location "The Marketplace"}]
                                       [:travel {:method :zone
                                                 :location "The Battlefront"
                                                 :notes "Head W, follow map border if not immediately spotted"}]]}
                         {:label "Enter The Docks"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head W for waypoint, and continue on for the Blackguard Chest"}]
                                       [:quest {:objective :activate
                                                :target "The Blackguard Chest"
                                                :notes "Chest is located in the SW corner of the zone, collect the Ribbon Spool contained inside"}]
                                       [:travel {:method :zone
                                                 :location "The Docks"
                                                 :notes "Head W"}]]}
                         {:label "Collect Thaumatic Sulphite"
                          :objectives [[:quest {:objective :activate
                                                :target "The Supply Container"
                                                :notes "Head E, collect Thaumatic Sulphite contained inside, clear zone if under-leveled"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Enter The Solaris Temple"
                          :objectives [[:inventory {:action "Vendor all rares to clear personal inventory"}]
                                       [:travel {:method :waypoint
                                                 :location "The Battlefront"}]
                                       [:travel {:method :zone
                                                 :location "The Solaris Temple Level 1"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head E, then N"}]
                                       [:travel {:method :zone
                                                 :location "The Solaris Temple Level 2"}]]}
                         {:label "Enter The Ebony Barracks"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head W, then N"}]
                                       [:reward {:selection "Lapis Amulet"
                                                 :giver "Lady Dialla"}]
                                       [:travel {:method :waypoint
                                                 :location "The Sewers"}]
                                       [:quest {:objective :activate
                                                :target "The Blockage"
                                                :notes "Located immediately SW of the zone waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Ebony Barracks"}]]}
                         {:label "Enter The Lunaris Temple"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint (The Ebony Barracks)"
                                                 :notes "Head W"}]
                                       [:travel {:method :zone
                                                 :location "The Lunaris Temple Level 1"}]
                                       [:travel {:method :activate
                                                 :location "waypoint (The Lunaris Temple Level 1)"
                                                 :notes "Head W, follow the carpet tiles, waypoint is near the exit"}]
                                       [:travel {:method :zone
                                                 :location "The Lunaris Temple Level 2"}]]}
                         {:label "Defeat Piety"
                          :objectives [[:quest {:objective :defeat
                                                :target "Piety"
                                                :notes "Head N and drop portal halfway as long walk and zone can be rippy"}]
                                       [:travel {:method :town-portal
                                                 :location "The Sarn Encampment"}]]}
                         {:label "Spellslinger switch"
                          :objectives [[:inventory {:action "Vendor rares and clear personal inventory as needed"}]
                                       [:reward {:selection "Soulrend"
                                                 :giver "Maramoa"}]
                                       [:vendor {:action "Check for on-colour 4-link items"
                                                 :vendor "Hargan"}]
                                       [:inventory {:action "Switch to weapon swap wands"}]
                                       [:vendor {:action "Purchase 3x Spellslinger, 1x Bane gems"
                                                 :vendor "Clarissa"}]
                                       [:inventory {:action "Setup new skill gems and links"}]
                                       [:travel {:method :waypoint
                                                 :location "The Ebony Barracks"}]]}
                         {:label "Trickster Ascendancy"
                          :objectives [[:travel {:method :zone
                                                 :location "The Imperial Gardens"
                                                 :notes "Head NE"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head NW"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :town-portal
                                                 :location "The Sarn Encampment"}]
                                       [:quest {:objective :ascend
                                                :target "Normal Labyrinth"
                                                :notes "If level 30 at this point then complete Trickster ascendancy (Patient Reaper)"}]]}
                         {:label "Defeat Dominus"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Imperial Gardens"}]
                                       [:travel {:method :zone
                                                 :location "The Sceptre of God"
                                                 :notes "Head NE"}]
                                       [:travel {:method :zone
                                                 :location "The Upper Sceptre of God"}]
                                       [:quest {:objective :defeat
                                                :target "Dominus"}]
                                       [:travel {:method :zone
                                                 :location "The Aqueduct"}]
                                       [:travel {:method :zone
                                                 :location "Highgate"}]]}])

(def act-04-definitions [
                         {:label "Defeat Voll"
                          :objectives [[:quest {:objective :interact
                                                :target "Kira"}]
                                       [:travel {:method :zone
                                                 :location "The Dried Lake"}]
                                       [:quest {:objective :defeat
                                                :target "Voll"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]]}
                         {:label "Enter The Crystal Veins"
                          :objectives [[:quest {:objective :activate
                                                :target "Deshret's Seal"}]
                                       [:travel {:method :zone
                                                 :location "The Mines Level 1"}]
                                       [:travel {:method :zone
                                                 :location "The Mines Level 2"}]
                                       [:travel {:method :zone
                                                 :location "The Crystal Veins"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "Highgate"}]
                                       [:quest {:objective :interact
                                                :target "Tasuni"}]]}
                         {:label "Defeat Daresso"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Crystal Veins"}]
                                       [:travel {:method :zone
                                                 :location "Daresso's Dream"
                                                 :notes "Loot the Eye of Daresso"}]
                                       [:quest {:objective :defeat
                                                :target "Daresso"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]]}
                         {:label "Defeat Kaom"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Crystal Veins"}]
                                       [:travel {:method :zone
                                                 :location "Kaom's Dream"}]
                                       [:quest {:objective :defeat
                                                :location "Kaom"
                                                :notes "Loot the Eye of Fury"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]]}
                         {:label "Defeat Piety"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Crystal Veins"}]
                                       [:quest {:objective :interact
                                                :target "Dialla"}]
                                       [:travel {:method :zone
                                                 :location "The Belly of the Beast Level 1"}]
                                       [:travel {:method :zone
                                                 :location "The Belly of the Beast Level 2"}]
                                       [:quest {:objective :defeat
                                                :target "Piety"
                                                :notes "Talk to Piety after defeating her"}]]}
                         {:label "Collect Organs"
                          :objectives [[:travel {:method :zone
                                                 :location "The Harvest (zone entrance)"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head E"}]
                                       [:quest {:objective :defeat
                                                :target "Maligaro/Deodre/Malachai (1st)"
                                                :notes "Loot the organ from the E spawn location"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]
                                       [:travel {:method :waypoint
                                                 :location "The Harvest (waypoint)"}]
                                       [:quest {:objective :defeat
                                                :target "Maligaro/Deodre/Malachai (2nd)"
                                                :notes "Defeat the remaining two spawns to the W"}]
                                       [:quest {:objective :defeat
                                                :target "Maligaro/Deodre/Malachai (3rd)"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate (with organs)"}]]}
                         {:label "Defeat Malachai"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Harvest"}]
                                       [:quest {:objective :interact
                                                :target "Piety"}]
                                       [:travel {:method :zone
                                                 :location "The Black Core"}]
                                       [:quest {:objective :defeat
                                                :target "Malachai"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]]}
                         {:label "Complete Act 4"
                          :objectives [[:quest {:objective :interact
                                                :target "Dialla"}]
                                       [:travel {:method :zone
                                                 :location "The Ascent"}]
                                       [:travel {:method :zone
                                                 :location "The Slave Pens"}]
                                       [:travel {:method :zone
                                                 :location "The Overseer's Tower"}]]}])

(def act-05-definitions [
                         {:label "Defeat Justicar Casticus"
                          :objectives [[:quest {:objective :interact
                                                :target "Lani"}]
                                       [:travel {:method :zone
                                                 :location "The Control Blocks"}]
                                       [:quest {:objective :collect
                                                :target "The Miasmeter"}]
                                       [:quest {:objective :defeat
                                                :target "Justicar Casticus"
                                                :notes "Loot the Eyes of Zeal"}]]}
                         {:label "Enter The Chamber of Innocence"
                          :objectives [[:travel {:method :zone
                                                 :location "Oriath Square"}]
                                       [:travel {:method :zone
                                                 :location "The Templar Courts"}]
                                       [:travel {:method :zone
                                                 :location "The Chamber of Innocence"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "The Overseer's Tower"}]]}
                         {:label "Defeat Innocence"
                          :objectives [[:quest {:objective :interact
                                                :target "Lani and Vilenta"}]
                                       [:travel {:method :waypoint
                                                 :location "The Chamber of Innocence"}]
                                       [:quest {:objective :defeat
                                                :target "Innocence"}]]}
                         {:label "Sign of Purity"
                          :objectives [[:travel {:method :zone
                                                 :location "The Torched Courts"}]
                                       [:travel {:method :zone
                                                 :location "The Ruined Square"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Ossuary"}]
                                       [:quest {:objective :collect
                                                :target "Sign of Purity"}]
                                       [:travel {:method :town-portal
                                                 :location "The Overseer's Tower"}]]}
                         {:label "Kitava's Torments"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Ruined Square"
                                                 :notes "Place portal near The Cathedral Rooftop to the W of the zone"}]
                                       [:travel {:method :zone
                                                 :location "The Reliquary"}]
                                       [:quest {:objective :collect
                                                :target "3x Kitava's Torments"}]
                                       [:travel {:method :town-portal
                                                 :location "The Overseer's Tower"}]]}
                         {:label "Defeat Kitava"
                          :objectives [[:quest {:objective :interact
                                                :target "Lani"}]
                                       [:travel {:method :portal
                                                 :location "The Ruined Square"}]
                                       [:travel {:method :zone
                                                 :location "The Cathedral Rooftop"}]
                                       [:travel {:method :zone
                                                 :location "The Cathedral Apex"}]
                                       [:quest {:objective :defeat
                                                :target "Kitava"}]
                                       [:travel {:method :zone
                                                 :location "The Cathedral Rooftop (act end)"}]
                                       [:quest {:objective :interact
                                                :target "Lilly"
                                                :notes "End of Act 5, sail to Wraeclast"}]]}])

(def act-06-definitions [
                         {:label "Enter The Karui Fortress"
                          :objectives [[:inventory {:action "Check resistances, and particularly try to cap fire res"}]
                                       [:travel {:method :zone
                                                 :location "The Coast"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Mud Flats"}]
                                       [:quest {:objective :defeat
                                                :target "The Dishonoured Queen"
                                                :notes "Loot The Eye of Conquest"}]
                                       [:travel {:method :zone
                                                 :location "The Karui Fortress"}]]}
                         {:label "Enter The Ridge"
                          :objectives [[:travel {:method :zone
                                                 :location "Tukohama's Keep"}]
                                       [:quest {:objective :defeat
                                                :target "Tukohama"}]
                                       [:travel {:method :zone
                                                 :location "The Karui Fortress"}]
                                       [:travel {:method :zone
                                                 :location "The Ridge"}]]}
                         {:label "Bestel's Manuscript"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "The Coast"}]
                                       [:travel {:method :zone
                                                 :location "The Tidal Island"}]
                                       [:quest {:objective :activate
                                                :target "Storage Chest"
                                                :notes "Loot Bestel's Manuscript"}]
                                       [:travel {:method :town-portal
                                                 :location "Lioneye's Watch"}]]}
                         {:label "Clear The Twilight Strand"
                          :objectives [[:travel {:method :zone
                                                 :location "The Twilight Strand"}]
                                       [:quest {:objective :interact
                                                :target "Einhar"
                                                :notes "Clear the zone (confirmed by on-screen countdown)"}]
                                       [:travel {:method :town-portal
                                                 :location "Lioneye's Watch"}]
                                       [:quest {:objective :interact
                                                :target "Lilly, Bestel, and Tarkleigh"}]
                                       [:travel {:method :waypoint
                                                 :location "The Ridge"}]]}
                         {:label "Enter Shavronne's Tower"
                          :objectives [[:travel {:method :zone
                                                 :location "The Lower Prison"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "Drop portal near exit of the zone if you don't discover it before then"}]
                                       [:travel {:method :zone
                                                 :location "Shavronne's Tower"}]]}
                         {:label "Defeat Brutus and Shavronne"
                          :objectives [[:travel {:method :zone
                                                 :location "Prison Rooftop"}]
                                       [:quest {:objective :defeat
                                                :target "Brutus and Shavronne"}]
                                       [:travel {:method :zone
                                                 :location "The Warden's Chambers"
                                                 :notes "Pickup the crafting recipe here"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "Lioneye's Watch"}]]}
                         {:label "Enter Prisoner's Gate"
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "If didn't complete earlier then take portal back to Prison and complete"}]
                                       [:quest {:objective :interact
                                                :target "Tarkleigh"}]
                                       [:travel {:method :waypoint
                                                 :location "Prisoner's Gate"}]]}
                         {:label "Enter The Cavern of Anger"
                          :objectives [[:travel {:method :zone
                                                 :location "The Western Front"}]
                                       [:travel {:method :activate
                                                 :location "waypoint (The Western Front)"}]
                                       [:travel {:method :zone
                                                 :location "The Riverways"}]
                                       [:travel {:method :activate
                                                 :location "waypoint (The Riverways)"}]
                                       [:travel {:method :zone
                                                 :location "The Southern Forest"}]
                                       [:travel {:method :activate
                                                 :location "waypoint (The Southern Forest)"}]
                                       [:travel {:method :zone
                                                 :location "The Cavern of Anger"}]]}
                         {:label "Activate The Beacon"
                          :objectives [[:quest {:objective :activate
                                                :target "Flag Chest"
                                                :notes "Loot The Black Flag"}]
                                       [:travel {:method :zone
                                                 :location "The Beacon"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:quest {:objective :activate
                                                :target "The Beacon with The Black Flag"}]
                                       [:quest {:objective :interact
                                                :target "Weylam"}]]}
                         {:label "Defeat The Brine King"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint (The Brine King's Reef)"}]
                                       [:quest {:objective :defeat
                                                :target "The Brine King"}]
                                       [:inventory {:action "Select Pantheons if haven't already done so"}]
                                       [:quest {:objective :interact
                                                :target "Weylam"}]]}])

(def act-07-definitions [
                         {:label "Enter The Fellshrine Ruins"
                          :objectives [[:travel {:method :zone
                                                 :location "The Broken Bridge"}]
                                       [:quest {:objective :collect
                                                :target "Silver Locket"}]
                                       [:travel {:method :zone
                                                 :location "The Crossroads"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head S"}]
                                       [:travel {:method :zone
                                                 :location "The Fellshrine Ruins"}]]}
                         {:label "Maligaro's Map"
                          :objectives [[:travel {:method :zone
                                                 :location "The Crypt"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :zone
                                                 :location "The Crypt Level 2"}]
                                       [:quest {:objective :collect
                                                :target "Maligaro's Map"}]
                                       [:travel {:method :town-portal
                                                 :location "The Broken Bridge"}]]}
                         {:label "Enter Maligaro's Sanctum"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Crossroads"}]
                                       [:travel {:method :zone
                                                 :location "The Chamber of Sins Level 1"
                                                 :notes "Head N"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:quest {:objective :interact
                                                :target "Silk"}]
                                       [:quest {:objective :activate
                                                :target "Maligaro's Map Device"}]
                                       [:travel {:method :zone
                                                 :location "Maligaro's Sanctum"}]]}
                         {:label "Defeat Maligaro"
                          :objectives [[:travel {:method :zone
                                                 :location "Maligaro's Workshop"}]
                                       [:quest {:objective :defeat
                                                :target "Maligaro"
                                                :notes "Loot the Black Venom"}]
                                       [:travel {:method :town-portal
                                                 :location "The Chamber of Sins Level 1"}]
                                       [:reward {:selection "Obsidian Key"
                                                 :giver "Maligaro"}]
                                       [:travel {:method :zone
                                                 :location "The Chamber of Sins Level 2"
                                                 :notes "Head the direction of the path directly behind Silk away from the map device"}]]}
                         {:label "Defeat Gruest"
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :zone
                                                 :location "The Den"}]
                                       [:travel {:method :zone
                                                 :location "The Ashen Fields"}]
                                       [:travel {:method :zone
                                                 :location "The Forest Encampment"
                                                 :notes "Head W"}]
                                       [:quest {:objective :defeat
                                                :target "Gruest"}]
                                       [:travel {:method :zone
                                                 :location "The Northern Forest"}]]}
                         {:label "Enter The Vaal City"
                          :objectives [[:travel {:method :zone
                                                 :location "The Causeway"
                                                 :notes "Drop a portal near The Dread Thicket to the W of the zone if you find it"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:quest {:objective :interact
                                                :target "Alva"
                                                :notes "Talk to Alva to make her available in your hideout"}]
                                       [:travel {:method :zone
                                                 :location "The Vaal City"}]]}
                         {:label "Enter The Dread Thicket"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:quest {:objective :interact
                                                :target "Yeena"}]
                                       [:travel {:method :waypoint
                                                 :location "The Broken Bridge"}]
                                       [:quest {:objective :interact
                                                :target "Helena, and Yeena"}]
                                       [:travel {:method :portal
                                                 :location "The Northern Forest"}]
                                       [:travel {:method :zone
                                                 :location "The Dread Thicket"}]]}
                         {:label "Defeat Gruthkul"
                          :objectives [[:quest {:objective :collect
                                                :target "Fireflies"}]
                                       [:travel {:method :zone
                                                 :location "The Den of Despair"}]
                                       [:quest {:objective :defeat
                                                :target "Gruthkul"
                                                :notes "Return to The Dread Thicket after if still more fireflies to collect"}]
                                       [:travel {:method :town-portal
                                                 :location "The Broken Bridge"}]]}
                         {:label "Return to The Riverways"
                          :objectives [[:quest {:objective :interact
                                                :target "Eramir, and Weylam"}]
                                       [:reward {:selection "Granite Flask"
                                                 :giver "Eramir"}]
                                       [:travel {:method :waypoint
                                                 :location "The Riverways (Act 6)"}]]}
                         {:label "Defeat Ryslatha"
                          :objectives [[:travel {:method :zone
                                                 :location "The Wetlands"
                                                 :notes "Head N"}]
                                       [:travel {:method :zone
                                                 :location "The Spawning Ground"}]
                                       [:quest {:objective :defeat
                                                :target "Ryslatha, the Puppet Mistress"}]
                                       [:travel {:method :town-portal
                                                 :location "Lioneye's Watch"}]]}
                         {:label "Defeat Abberath"
                          :objectives [[:travel {:method :waypoint
                                                 :location "Prisoner's Gate (Act 6)"}]
                                       [:travel {:method :zone
                                                 :location "Valley of the Firedrinker"}]
                                       [:quest {:objective :defeat
                                                :target "Abberath"}]
                                       [:travel {:method :town-portal
                                                 :location "Lioneye's Watch"}]
                                       [:quest {:objective :interact
                                                :target "Bestel, and Tarkleigh"}]]}
                         {:label "Complete Cruel Labyrinth"
                          :objectives [[:travel {:method :waypoint
                                                 :location "Aspirant's Path"}]
                                       [:quest {:objective :ascend
                                                :target "Cruel Labyrinth"
                                                :notes "Take Ghost Dance for the increased movement speed"}]]}
                         {:label "Complete Act 7"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Vaal City"}]
                                       [:quest {:objective :interact
                                                :target "Yeena"}]
                                       [:travel {:method :zone
                                                 :location "The Temple of Decay Level 1"}]
                                       [:travel {:method :zone
                                                 :location "The Temple of Decay Level 2"}]
                                       [:travel {:method :zone
                                                 :location "Arakaali's Web"}]
                                       [:quest {:objective :defeat
                                                :target "Arakaali"}]
                                       [:travel {:method :zone
                                                 :location "The Sarn Ramparts"}]
                                       [:travel {:method :zone
                                                 :location "The Sarn Encampment"}]]}])

(def act-08-definitions [{:label "Defeat Doedre"
                          :objectives [[:travel {:method :zone
                                                 :location "The Toxic Conduits"}]
                                       [:travel {:method :zone
                                                 :location "Doedre's Cesspool"}]
                                       [:travel {:method :zone
                                                 :location "The Cauldron"}]
                                       [:quest {:objective :defeat
                                                :target "Doedre"}]
                                       [:travel {:method :zone
                                                 :location "The Sewer Outlet"}]]}
                         {:label "Enter The Grain Gate"
                          :objectives [[:travel {:method :zone
                                                 :location "The Quay"
                                                 :notes "Head E"}]
                                       [:quest {:objective :activate
                                                :target "The Sealed Casket"
                                                :notes "Follow the SW wall to find the bridged island containing the casket and loot the Ankh of Eternity"}]
                                       [:travel {:method :zone
                                                 :location "The Grain Gate"
                                                 :notes "Drop a portal at the start of the path to the Resurrection Site"}]]}
                         {:label "Enter The Solaris Temple"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Follow entrances with corpses outside of them"}]
                                       [:quest {:objective :defeat
                                                :target "The Gemling Legionnaires"}]
                                       [:travel {:method :zone
                                                 :location "The Imperial Fields"}]
                                       [:travel {:method :zone
                                                 :location "The Solaris Temple Level 1"}]]}
                         {:label "Defeat Holman"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "The Sarn Encampment (waypoint)"}]
                                       [:travel {:method :portal
                                                 :location "The Quay"}]
                                       [:travel {:method :zone
                                                 :location "The Ressurection Site"}]
                                       [:quest {:objective :defeat
                                                :target "Holman"
                                                :notes "Loot the amulet"}]
                                       [:travel {:method :town-portal
                                                 :location "The Sarn Encampment (portal)"}]]}
                         {:label "Defeat Dawn"
                          :objectives [[:quest {:objective :interact
                                                :target "Clarissa, Hargan, and Maramoa"}]
                                       [:travel {:method :waypoint
                                                 :location "The Solaris Temple Level 1"}]
                                       [:travel {:method :zone
                                                 :location "The Solaris Temple Level 2"}]
                                       [:quest {:objective :defeat
                                                :target "Dawn"
                                                :notes "Loot the Sun Orb"}]
                                       [:travel {:method :town-portal
                                                 :location "The Sarn Encampment"}]]}
                         {:label "Enter The Lunaris Temple"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Solaris Temple Level 1"}]
                                       [:travel {:method :zone
                                                 :location "The Solaris Concourse"}]
                                       [:travel {:method :zone
                                                 :location "The Harbour Bridge"}]
                                       [:travel {:method :zone
                                                 :location "The Lunaris Concourse"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Lunaris Temple Level 1"}]]}
                         {:label "Defeat Dusk"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Lunaris Temple Level 2"}]
                                       [:quest {:objective :defeat
                                                :target "Dusk"
                                                :notes "Loot the Moon Orb"}]
                                       [:travel {:method :town-portal
                                                 :location "The Sarn Encampment"}]]}
                         {:label "Complete Act 8"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Lunaris Concourse"}]
                                       [:travel {:method :zone
                                                 :location "The Harbour Bridge"
                                                 :notes "Head S"}]
                                       [:travel {:method :zone
                                                 :location "The Sky Shrine"}]
                                       [:quest {:objective :activate
                                                :target "Statue of the Sisters"}]
                                       [:quest {:objective :defeat
                                                :target "Solaris and Lunaris"}]
                                       [:travel {:method :zone
                                                 :location "The Blood Aqueduct"
                                                 :notes "Farm here for levels and gear, at least 62 and work on resistances"}]
                                       [:travel {:method :zone
                                                 :location "Highgate"}]]}])


(def act-09-definitions [{:label "Defeat Hector Titucius"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Lunaris Concourse (Act 8)"}]
                                       [:travel {:method :zone
                                                 :location "The Bath House"
                                                 :notes "Head W"}]
                                       [:quest {:objective :defeat
                                                :target "Hector Titucius"
                                                :notes "Loot The Wings of Vastiri"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :zone
                                                 :location "The High Gardens"}]]}
                         {:label "Defeat Yugul"
                          :objectives [[:travel {:method :zone
                                                 :location "The Pools of Terror"}]
                                       [:quest {:objective :defeat
                                                :target "Yugul"}]
                                       [:travel {:method :town-portal
                                                 :location "The Sarn Encampment"}]
                                       [:quest {:objective :interact
                                                :target "Hargan"}]
                                       [:travel {:method :waypoint
                                                 :location "Highgate"}]]
                          :current-gear :trickster-slinger}
                         {:label "Collect The Storm Blade"
                          :objectives [[:travel {:method :zone
                                                 :location "The Descent"}]
                                       [:travel {:method :zone
                                                 :location "The Vastiri Desert"}]
                                       [:quest {:objective :defeat
                                                :target "Betrayal mission"
                                                :notes "Complete the mission here to unlock Jun in your hideout"}]
                                       [:quest {:objective :collect
                                                :target "The Storm Blade"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "Highgate"}]]}
                         {:label "Defeat Shakari"
                          :objectives [[:quest {:objective :interact
                                                :target "Petarus and Vanja, Jun, Sin, and Petarus and Vanja again"
                                                :notes "Collect the Bottled Storm"}]
                                       [:travel {:method :waypoint
                                                 :location "The Vastiri Desert"}]
                                       [:travel {:method :zone
                                                 :location "The Oasis"
                                                 :notes "Head E"}]
                                       [:travel {:method :zone
                                                 :location "The Sand Pit"}]
                                       [:quest {:objective :defeat
                                                :target "Shakari"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]]}
                         {:label "Defeat The Basilisk"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Vastiri Desert"}]
                                       [:travel {:method :zone
                                                 :location "The Foothills"
                                                 :notes "Head N"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Boiling Lake"}]
                                       [:quest {:objective :defeat
                                                :target "The Basilisk"
                                                :notes "Loot the Basilisk Acid"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]]}
                         {:label "Enter The Quarry"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Foothills"}]
                                       [:travel {:method :zone
                                                 :location "The Tunnel"
                                                 :notes "Head N"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :zone
                                                 :location "The Quarry"}]]}
                         {:label "Defeat General Adus"
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:quest {:objective :interact
                                                :target "Sin"}]
                                       [:travel {:method :zone
                                                 :location "The Refinery"
                                                 :notes "Head E usually, sometimes N"}]
                                       [:quest {:objective :defeat
                                                :target "General Adus"
                                                :notes "Loot Trarthan Powder"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]]}
                         {:label "Defeat Garukhan"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Quarry"}]
                                       [:travel {:method :zone
                                                 :location "Shrine of Winds"
                                                 :notes "Head W usually, sometimes E"}]
                                       [:quest {:objective :defeat
                                                :target "Garukhan"
                                                :notes "Loot Sekhema Feather"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]
                                       [:quest {:objective :interact
                                                :target "Irasha"}]]}
                         {:label "Enter The Black Core"
                          :objectives [[:travel {:method :waypoint
                                                 :location "The Quarry"}]
                                       [:quest {:objective :interact
                                                :target "Sin"}]
                                       [:travel {:method :zone
                                                 :location "The Belly of the Beast"}]
                                       [:travel {:method :zone
                                                 :location "The Rotting Core"}]
                                       [:travel {:method :zone
                                                 :location "The Black Core"}]]}
                         {:label "Defeat The Depraved Trinity"
                          :objectives [[:quest {:objective :interact
                                                :target "Sin (1st)"}]
                                       [:quest {:objective :defeat
                                                :target "Shavronne/Maligaro/Doedre"}]
                                       [:quest {:objective :interact
                                                :target "Sin (2nd)"}]
                                       [:travel {:method :zone
                                                 :location "The Black Heart"}]
                                       [:quest {:objective :defeat
                                                :target "The Depraved Trinity"}]
                                       [:travel {:method :town-portal
                                                 :location "Highgate"}]
                                       [:travel {:method :waypoint
                                                 :location "Oriath Docks"}]]}])

(def act-10-definitions [
                         {:label "Enter The Ravaged Square"
                          :objectives [[:travel {:method :zone
                                                 :location "The Cathedral Rooftop (1st)"}]
                                       [:travel {:method :zone
                                                 :location "Cathedral Apex"}]
                                       [:quest {:objective :interact
                                                :target "Bannon"}]
                                       [:travel {:method :zone
                                                 :location "The Cathedral Rooftop (2nd)"}]
                                       [:travel {:method :zone
                                                 :location "The Ravaged Square"
                                                 :notes "Head S"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Drop a portal in the open area near to zone entrance, Head E"}]
                                       [:travel {:method :waypoint
                                                 :location "Oriath Docks"}]]}
                         {:label "Enter The Control Blocks"
                          :objectives [[:travel {:method :portal
                                                 :location "The Ravaged Square (1st)"}]
                                       [:travel {:method :zone
                                                 :location "The Control Blocks"
                                                 :notes "Head W"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :waypoint
                                                 :location "The Ravaged Square (2nd)"}]]}
                         {:label "Collect The Elixir of Allure"
                          :objectives [[:travel {:method :zone
                                                 :location "The Ossuary"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:quest {:objective :collect
                                                :target "The Elixir of Allure"}]
                                       [:travel {:method :town-portal
                                                 :location "Oriath Docks"}]]}
                         {:label "Complete Merciless Lab"
                          :objectives [[:quest {:objective :interact
                                                :target "Weylam, Bannon, and Lani"}]
                                       [:travel {:method :waypoint
                                                 :location "Aspirant's Path"}]
                                       [:quest {:objective :ascend
                                                :target "Merciless Labyrinth"
                                                :notes "Prolonged Pain/Escape Artist"}]
                                       [:travel {:method :waypoint
                                                 :location "Oriath Docks"}]
                                       [:travel {:method :waypoint
                                                 :location "The Control Blocks"}]]}
                         {:label "Defeat Vilenta"
                          :objectives [[:quest {:objective :defeat
                                                :target "Vilenta"}]
                                       [:travel {:method :town-portal
                                                 :location "Oriath Docks"}]
                                       [:quest {:objective :interact
                                                :target "Lani"}]
                                       [:travel {:method :waypoint
                                                 :location "The Ravaged Square"}]]}
                         {:label "Defeat Avarius"
                          :objectives [[:travel {:method :zone
                                                 :location "The Torched Courts"
                                                 :notes "Head E"}]
                                       [:travel {:method :zone
                                                 :location "The Desecrated Chambers"}]
                                       [:travel {:method :activate
                                                 :location "waypoint"}]
                                       [:travel {:method :zone
                                                 :location "Sanctum of Innocence"}]
                                       [:quest {:objective :defeat
                                                :target "Avarius"
                                                :notes "Loot The Staff of Purity"}]
                                       [:travel {:method :town-portal
                                                 :location "Oriath Docks"}]]}
                         {:label "Enter The Canals"
                          :objectives [[:quest {:objective :interact
                                                :target "Bannon, Lani, and Lilly"}]
                                       [:travel {:method :waypoint
                                                 :location "The Ravaged Square"}]
                                       [:quest {:objective :interact
                                                :target "Innocence"}]
                                       [:travel {:method :zone
                                                 :location "The Canals"}]]}
                         {:label "Defeat Kitava"
                          :objectives [[:travel {:method :zone
                                                 :location "The Feeding Trough"}]
                                       [:quest {:objective :interact
                                                :target "Sin (1st)"}]
                                       [:travel {:method :zone
                                                 :location "Altar of Hunger"}]
                                       [:quest {:objective :defeat
                                                :target "Kitava"}]
                                       [:quest {:objective :interact
                                                :target "Sin (2nd)"}]
                                       [:travel {:method :town-portal
                                                 :location "Oriath"}]
                                       [:reward {:selection "Skill Point book"
                                                 :giver "Lani"}]]}])

(def end-campaign-definitions [{:name "Still sane exile?"
                                :objectives [[:reward {:selection "Skill Point book"
                                                       :giver "Lani"}]]}])

(def act-definitions [{:act-id :act-01
                       :data act-01-definitions}
                      {:act-id :act-02
                       :data act-02-definitions}
                      {:act-id :act-03
                       :data act-03-definitions}
                      {:act-id :act-04
                       :data act-04-definitions}
                      {:act-id :act-05
                       :data act-05-definitions}
                      {:act-id :act-06
                       :data act-06-definitions}
                      {:act-id :act-07
                       :data act-07-definitions}
                      {:act-id :act-08
                       :data act-08-definitions}
                      {:act-id :act-09
                       :data act-09-definitions}
                      {:act-id :act-10
                       :data act-10-definitions}
                      {:act-id :end-campaign
                       :data end-campaign-definitions}])

(defn annotate-act-definition [{:keys [act-id data]}]
  (mapv #(assoc % :act-id act-id) data))

(defn generate-level-data []
  (pprint "generating level data...")
  (let [annotated (mapv annotate-act-definition act-definitions)]
    (mapcat identity annotated)))
