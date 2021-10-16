(ns compoenian.data.level
  (:require
   [cljs.pprint :refer [pprint]]))

(def zone-data {:act-01 {:the-twilight-strand {:name "The Twilight Strand"
                                               :level 1}
                         :lioneyes-watch {:name "Lioneye's Watch"
                                          :level nil}
                         :the-coast {:name "The Coast"
                                     :level 2
                                     :waypoint true}
                         :the-tidal-island {:name "The Tidal Island"
                                            :level 3}
                         :the-mud-flats {:name "The Mud Flats"
                                         :level 4}
                         :the-fetid-pool {:name "The Fetid Pool"
                                          :level 5}
                         :the-submerged-passage {:name "The Submerged Passage"
                                                 :level 5
                                                 :waypoint true}
                         :the-flooded-depths {:name "The Flooded Depths"
                                              :level 6}
                         :the-ledge {:name "The Ledge"
                                     :level 6
                                     :waypoint true}
                         :the-climb {:name "The Climb"
                                     :level 7
                                     :waypoint true}
                         :the-lower-prison {:name "The Lower Prison"
                                            :level 8
                                            :waypoint true}
                         :the-upper-prison {:name "The Upper Prison"
                                            :level 9}
                         :prisoners-gate {:name "Prisoner's Gate"
                                          :level 10
                                          :waypoint true}
                         :the-ship-graveyard {:name "The Ship Graveyard"
                                              :level 11
                                              :waypoint true}
                         :the-ship-graveyard-cave {:name "The Ship Graveyard Cave"
                                                   :level 12}
                         :the-cavern-of-wrath {:name "The Cavern of Wrath"
                                               :level 12
                                               :waypoint true}
                         :the-cavern-of-anger {:name "The Cavern of Anger"
                                               :level 13}}
                :act-02 {:the-southern-forest {:name "The Southern Forest"
                                               :level 13
                                               :waypoint true}}})

(def act-01-definitions [{:name "Exile..."
                          :zone :the-twilight-strand
                          :checkpoints [[:game-action {:action "Create Witch"}]
                                        [:quest {:objective :collect
                                                 :target "[Arcane Surge???] Support gem"}]
                                        [:quest {:objective :defeat
                                                 :target "Hillock"}]
                                        [:travel {:method :zone
                                                  :location "Lioneye's Watch"}]]
                          :gear :trickster-caustic}
                         {:name "Caustic Arrow"
                          :zone :lioneyes-watch
                          :checkpoints [[:reward {:selection "Explosive Trap"
                                                  :giver "Tarkleigh"}]
                                        [:inventory {:action "Move RGB Dagger to weapon swap slot"}]
                                        [:vendor {:action "Check for GGG gear, sell all non-green socketed gear"
                                                  :vendor "Tarkleigh"}]
                                        [:inventory {:action "Equip stashed bow and relevant gear"}]
                                        [:inventory {:action "Equip Caustic Arrow and Pierce"}]
                                        [:inventory {:action "Equip Explosive Trap"}]
                                        [:vendor {:action "Purchase Iron Ring"
                                                  :vendor "Nessa"}]
                                        [:travel {:method :zone
                                                  :location "The Coast"}]]
                          :gear :trickster-puncture}
                         {:name "Enter The Mud Flats"
                          :zone :the-coast
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :zone
                                                  :location "The Mud Flats"}]]
                          :gear :trickster-puncture}
                         {:name "Enter The Submerged Passage"
                          :zone :the-mud-flats
                          :checkpoints [[:quest {:objective :collect
                                                 :target "Rhoa eggs"}]
                                        [:quest {:objective :activate
                                                 :target "The Submerged Passage entrance lock"}]
                                        [:travel {:method :zone
                                                  :location "The Submerged Passage"}]]
                          :gear :trickster-puncture}
                         {:name "Enter The Tidal Island"
                          :zone :the-tidal-island
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "The Coast"}]
                                        [:travel {:method :zone
                                                  :location "The Tidal Island"}]]
                          :gear :trickster-puncture}
                         {:name "Defeat Hellrake"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "Hellrake"
                                                 :notes "Travel west side, one caustic arrow followed by explosive traps"}]
                                        [:quest {:objective :collect
                                                 :target "Medicine Chest"
                                                 :notes "Also collect currency, rare, and magic items. ID rares."}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-puncture}
                         {:name "Quicksilver Flask"
                          :checkpoints [[:reward {:selection "Contagion"
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
                                                  :location "The Submerged Passage"}]]
                          :gear :trickster-void}
                         {:name "Enter The Ledge"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Ledge"
                                                  :notes "Travel E to drop portal near The Flooded Depths then NW to The Ledge"}]]
                          :gear :trickster-void}
                         {:name "Enter The Climb"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :zone
                                                  :location "The Climb"}]]
                          :gear :trickster-void}
                         {:name "Enter The Lower Prison"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "Pain"
                                                 :notes "Kill Pain to unlock Navali"}]
                                        [:travel {:method :zone
                                                  :location "The Lower Prison"}]]
                          :gear :trickster-void}
                         {:name "Enter The Flooded Depths"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "Lioneye's Watch"}]
                                        [:travel {:method :portal
                                                  :location "The Submerged Passage"}]
                                        [:travel {:method :zone
                                                  :location "The Flooded Depths"}]]
                          :gear :trickster-void}
                         {:name "Defeat The Dweller"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "The Dweller"
                                                 :notes "Loot and ID items as necessary"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]
                                        [:reward {:selection "Void Manipulation Support"
                                                  :giver "Nessa"}]
                                        [:reward {:selection "Skill Point book"
                                                  :giver "Tarkleigh"}]
                                        [:vendor {:action "Vendor unnecessary items"
                                                  :vendor "Tarkleigh"}]
                                        [:travel {:method :waypoint
                                                  :location "The Prison"}]]
                          :gear :trickster-smoke}
                         {:name "Enter The Warden's Chambers"
                          :checkpoints [[:quest {:objective :lab
                                                 :target "Trial of Agony"
                                                 :notes "Head N"}]
                                        [:travel {:method :zone
                                                  :location "The Upper Prison"}]
                                        [:travel {:method :zone
                                                  :location "The Warden's Quarters"}]
                                        [:travel {:method :zone
                                                  :location "The Warden's Chambers"}]]
                          :gear :trickster-smoke}
                         {:name "Defeat Brutus"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "Brutus"
                                                 :notes "Puncture then caustic, followed by repeat Punctures for bleed"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]
                                        [:vendor {:action "Purchase Mirage Archer Support"
                                                  :vendor "Nessa"}]
                                        [:vendor {:action "Purchase Flame Dash"
                                                  :vendor "Nessa"}]
                                        [:reward {:selection "Smoke Mine"
                                                  :giver "Tarkleigh"}]
                                        [:inventory {:action "Equip new skill gems and setup skill hotkeys"}]
                                        [:travel {:method :waypoint
                                                  :location "The Prisoner's Gate"}]]
                          :gear :trickster-toxic}
                         {:name "Find The Allflame"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Ship's Graveyard (zone entrance)"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :zone
                                                  :location "The Ship's Graveyard Cave"}]
                                        [:quest {:objective :collect
                                                 :target "The Allflame"
                                                 :notes "Travel NE to find The Slave Girl and open for The Allflame"}]
                                        [:travel {:method :zone
                                                  :location "The Ship's Graveyard (cave entrance)"}]]
                          :gear :trickster-toxic}
                         {:name "Defeat Fairgraves"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "Fairgraves"
                                                 :notes "Talk to Fairgraves and clear the ensuing wave encounter"}]
                                        [:travel {:method :zone
                                                  :location "The Cavern of Wrath"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "Lioneye's Watch"}]]
                          :gear :trickster-toxic}
                         {:name "Toxic Rain"
                          :checkpoints [[:reward {:selection "Skill Point book"
                                                  :giver "Bestel"}]
                                        [:reward {:selection "Essence Drain"
                                                  :giver "Nessa"}]
                                        [:vendor {:action "Purchase Toxic Rain"
                                                  :vendor "Nessa"}]
                                        [:vendor {:action "Vendor Iron Ring and int skill gem for cold resist ring"
                                                  :vendor "Nessa"}]
                                        [:travel {:method :waypoint
                                                  :location "The Cavern of Wrath"}]]
                          :gear :trickster-skitterbots}
                         {:name "Defeat Merveil"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Cavern of Anger"
                                                  :notes "Travel NE"}]
                                        [:travel {:method :zone
                                                  :location "Merveil's Lair"}]
                                        [:quest {:objective :defeat
                                                 :target "Merveil"}]
                                        [:travel {:method :zone
                                                  :location "The Southern Forest"}]]
                          :gear :trickster-skitterbots}])

(def act-02-definitions [{:name "Enter The Chamber of Sins"
                          :checkpoints [[:travel {:method :zone
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
                                                  :location "The Chamber of Sins Level 1"}]]
                          :gear :trickster-skitterbots}
                         {:name "Enter The Den"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "The Forest Encampment"}]
                                        [:travel {:method :portal
                                                  :location "The Old Fields"}]
                                        [:travel {:method :zone
                                                  :location "The Den"}]]
                          :gear :trickster-skitterbots}
                         {:name "Defeat The Great White Beast"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Einhar"}]
                                        [:quest {:objective :defeat
                                                 :target "The Great White Beast"
                                                 :notes "Head S"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-skitterbots}
                         {:name "Enter The Chamber of Sins Level 2"
                          :checkpoints [[:reward {:selection "Quicksilver Flask"
                                                  :giver "Yeena"}]
                                        [:travel {:method :waypoint
                                                  :location "The Chamber of Sins Level 1"}]
                                        [:travel {:method :zone
                                                  :location "The Chamber of Sins Level 2"}]]
                          :gear :trickster-skitterbots}
                         {:name "Defeat Fidelatis"
                          :checkpoints [[:quest {:objective :lab
                                                 :target "Trial of Agony"
                                                 :notes "Head S"}]
                                        [:quest {:objective :defeat
                                                 :target "Fidelatis"
                                                 :notes "Head N"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-skitterbots}
                         {:name "Summon Skitterbots"
                          :checkpoints [[:reward {:selection "Blood Rage"
                                                  :giver "Greust"}]
                                        [:vendor {:action "Purchase Frenzy, 3x Controlled Destruction, and Summon Skitterbots"
                                                  :vendor "Yeena"}]
                                        [:travel {:method :zone
                                                  :location "The Riverways"}]]
                          :gear :trickster-despair}
                         {:name "Enter The Weaver's Chambers"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint (The Riverways)"
                                                  :notes "Head E on path to find waypoint and continue same direction"}]
                                        [:travel {:method :zone
                                                  :location "The Western Front"}]
                                        [:travel {:method :activate
                                                  :location "waypoint (The Western Front)"
                                                  :notes "Follow path for waypoint then Head S"}]
                                        [:travel {:method :zone
                                                  :location "The Weaver's Chambers"}]]
                          :gear :trickster-despair}
                         {:name "Defeat The Weaver"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "The Weaver"
                                                 :notes "Head S"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-despair}
                         {:name "Enter The Broken Bridge"
                          :checkpoints [[:reward {:selection "Faster Attacks Support"
                                                  :giver "Silk"}]
                                        [:vendor {:action "Check for BBB and BBG wands if haven't already acquired"
                                                  :vendor "Yeena"}]
                                        [:travel {:method :waypoint
                                                  :location "The Crossroads"
                                                  :notes "Head N"}]
                                        [:travel {:method :zone
                                                  :location "The Broken Bridge"}]]
                          :gear :trickster-despair}
                         {:name "Defeat Kraityn"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head N"}]
                                        [:quest {:objective :defeat
                                                 :target "Kraityn"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-despair}
                         {:name "Defeat Oak"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "The Western Front"}]]
                          :gear :trickster-despair}
                         {:name "Help Alira"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Alira"
                                                 :notes "Located on the same side of the road as the checkpoint, help if racing for +resists"}]
                                        [:quest {:objective :defeat
                                                 :target "The Blackguards"
                                                 :notes "Head S to find camp"}]
                                        [:quest {:objective :collect
                                                 :target "Thaumatic Seal"
                                                 :notes "Use seal to open nearby pathway entrance"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-despair}
                         {:name "Enter The Vaal Ruins"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "The Vaal Ruins"}]]
                          :gear :trickster-despair}
                         {:name "Enter The Caverns"
                          :checkpoints [[:quest {:objective :activate
                                                 :target "Ruins boulder seal"
                                                 :notes "Head S, then W, then N, then W, then S"}]
                                        [:travel {:method :zone
                                                  :location "The Northern Forest"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head W to find the waypoint"}]
                                        [:travel {:method :zone
                                                  :location "The Caverns"
                                                  :notes "Head N"}]]
                          :gear :trickster-despair}
                         {:name "Enter The Pyramid Apex"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head S, then E, then N"}]
                                        [:travel {:method :zone
                                                  :location "The Ancient Pyramid"}]
                                        [:travel {:method :zone
                                                  :location "Stair transitions"
                                                  :notes "Stair exit is always the opposit corner to entrance position"}]
                                        [:travel {:method :zone
                                                  :location "Pyramid Apex"}]]
                          :gear :trickster-despair}
                         {:name "Defeat The Vaal Oversoul"
                          :checkpoints [[:quest {:objective :activate
                                                 :target "The Dark Altar"}]
                                        [:quest {:objective :defeat
                                                 :target "The Vaal Oversoul"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]
                                        [:travel {:method :waypoint
                                                  :location "The City of Sarn"}]]
                          :gear :trickster-despair}])

(def act-03-definitions [
                         {:name "Enter The Crematorium"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Clarissa"}]
                                        [:travel {:method :zone
                                                  :location "The Sarn Encampment"}]
                                        [:travel {:method :zone
                                                  :location "The Slums"}]
                                        [:travel {:method :zone
                                                  :location "The Crematorium"}]]
                          :gear :trickster-despair}
                         {:name "Defeat Piety"
                          :checkpoints [[:quest {:objective :lab
                                                 :target "Trial of Ascendancy"
                                                 :notes "Head N, then W"}]
                                        [:quest {:objective :defeat
                                                 :target "Piety"
                                                 :notes "Head S, then W"}]
                                        [:quest {:objective :collect
                                                 :target "Tolman's Bracelet"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-despair}
                         {:name "Enter The Sewers"
                          :checkpoints [[:reward {:selection "Despair"
                                                  :giver "Maramoa"
                                                  :notes "Add gem to offhand weapon for passive leveling"}]
                                        [:travel {:method :zone
                                                  :location "The Slums"}]
                                        [:travel {:method :zone
                                                  :location "The Sewers"}]]
                          :gear :trickster-slinger}
                         {:name "Enter The Marketplace"
                          :checkpoints [[:quest {:objective :collect
                                                 :target "Platinum Busts"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head N from waypoint to find zone exit"}]
                                        [:travel {:method :zone
                                                  :location "The Marketplace"}]]
                          :gear :trickster-slinger}
                         {:name "Complete Catacombs Trial"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head W for the waypoint near the entrance for The Catacombs"}]
                                        [:travel {:method :zone
                                                  :location "The Catacombs"}]
                                        [:quest {:objective :lab
                                                 :target "Trial of Ascendancy"
                                                 :notes "Head N"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-slinger}
                         {:name "Enter The Battlefront"
                          :checkpoints [[:reward {:selection "Skill Point book"
                                                  :giver "Hargan"}]
                                        [:vendor {:action "Check for on-colour 4-link items"
                                                  :vendor "Hargan"}]
                                        [:travel {:method :waypoint
                                                  :location "The Marketplace"}]
                                        [:travel {:method :zone
                                                  :location "The Battlefront"
                                                  :notes "Head W, follow map border if not immediately spotted"}]]
                          :gear :trickster-slinger}
                         {:name "Enter The Docks"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head W for waypoint, and continue on for the Blackguard Chest"}]
                                        [:quest {:objective :activate
                                                 :target "The Blackguard Chest"
                                                 :notes "Chest is located in the SW corner of the zone, collect the Ribbon Spool contained inside"}]
                                        [:travel {:method :zone
                                                  :location "The Docks"
                                                  :notes "Head W"}]]
                          :gear :trickster-slinger}
                         {:name "Collect Thaumatic Sulphite"
                          :checkpoints [[:quest {:objective :activate
                                                 :target "The Supply Container"
                                                 :notes "Head E, collect Thaumatic Sulphite contained inside, clear zone if under-leveled"}]
                                        [:game-action {:action "Exit to character selection and re-log"}]]
                          :gear :trickster-slinger}
                         {:name "Enter The Solaris Temple"
                          :checkpoints [[:inventory {:action "Vendor all rares to clear personal inventory"}]
                                        [:travel {:method :waypoint
                                                  :location "The Battlefront"}]
                                        [:travel {:method :zone
                                                  :location "The Solaris Temple Level 1"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head E, then N"}]
                                        [:travel {:method :zone
                                                  :location "The Solaris Temple Level 2"}]]
                          :gear :trickster-slinger}
                         {:name "Enter The Ebony Barracks"
                          :checkpoints [[:travel {:method :activate
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
                                                  :location "The Ebony Barracks"}]]
                          :gear :trickster-slinger}
                         {:name "Enter The Lunaris Temple"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint (The Ebony Barracks)"
                                                  :notes "Head W"}]
                                        [:travel {:method :zone
                                                  :location "The Lunaris Temple Level 1"}]
                                        [:travel {:method :activate
                                                  :location "waypoint (The Lunaris Temple Level 1)"
                                                  :notes "Head W, follow the carpet tiles, waypoint is near the exit"}]
                                        [:travel {:method :zone
                                                  :location "The Lunaris Temple Level 2"}]]
                          :gear :trickster-slinger}
                         {:name "Defeat Piety"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "Piety"
                                                 :notes "Head N and drop portal halfway as long walk and zone can be rippy"}]
                                        [:travel {:method :town-portal
                                                  :location "The Sarn Encampment"}]]
                          :gear :trickster-slinger}
                         {:name "Spellslinger switch"
                          :checkpoints [[:inventory {:action "Vendor rares and clear personal inventory as needed"}]
                                        [:reward {:selection "Soulrend"
                                                  :giver "Maramoa"}]
                                        [:vendor {:action "Check for on-colour 4-link items"
                                                  :vendor "Hargan"}]
                                        [:inventory {:action "Switch to weapon swap wands"}]
                                        [:vendor {:action "Purchase 3x Spellslinger, 1x Bane gems"
                                                  :vendor "Clarissa"}]
                                        [:inventory {:action "Setup new skill gems and links"}]
                                        [:travel {:method :waypoint
                                                  :location "The Ebony Barracks"}]]
                          :gear :trickster-finish}
                         {:name "Trickster Ascendancy"
                          :checkpoints [[:travel {:method :zone
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
                                                 :notes "If level 30 at this point then complete Trickster ascendancy (Patient Reaper)"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Dominus"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}])

(def act-04-definitions [
                         {:name "Defeat Voll"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Kira"}]
                                        [:travel {:method :zone
                                                  :location "The Dried Lake"}]
                                        [:quest {:objective :defeat
                                                 :target "Voll"}]
                                        [:travel {:method :town-portal
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Crystal Veins"
                          :checkpoints [[:quest {:objective :activate
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
                                                 :target "Tasuni"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Daresso"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "The Crystal Veins"}]
                                        [:travel {:method :zone
                                                  :location "Daresso's Dream"
                                                  :notes "Loot the Eye of Daresso"}]
                                        [:quest {:objective :defeat
                                                 :target "Daresso"}]
                                        [:travel {:method :town-portal
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Kaom"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "The Crystal Veins"}]
                                        [:travel {:method :zone
                                                  :location "Kaom's Dream"}]
                                        [:quest {:objective :defeat
                                                 :location "Kaom"
                                                 :notes "Loot the Eye of Fury"}]
                                        [:travel {:method :town-portal
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Piety"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "The Crystal Veins"}]
                                        [:quest {:objective :interact
                                                 :target "Dialla"}]
                                        [:travel {:method :zone
                                                  :location "The Belly of the Beast Level 1"}]
                                        [:travel {:method :zone
                                                  :location "The Belly of the Beast Level 2"}]
                                        [:quest {:objective :defeat
                                                 :target "Piety"
                                                 :notes "Talk to Piety after defeating her"}]]
                          :gear :trickster-finish}
                         {:name "Collect Organs"
                          :checkpoints [[:travel {:method :zone
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
                                                  :location "Highgate (with organs)"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Malachai"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "The Harvest"}]
                                        [:quest {:objective :interact
                                                 :target "Piety"}]
                                        [:travel {:method :zone
                                                  :location "The Black Core"}]
                                        [:quest {:objective :defeat
                                                 :target "Malachai"}]
                                        [:travel {:method :town-portal
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Complete Act 4"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Dialla"}]
                                        [:travel {:method :zone
                                                  :location "The Ascent"}]
                                        [:travel {:method :zone
                                                  :location "The Slave Pens"}]
                                        [:travel {:method :zone
                                                  :location "The Overseer's Tower"}]]
                          :gear :trickster-finish}])

(def act-05-definitions [
                         {:name "Defeat Justicar Casticus"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Lani"}]
                                        [:travel {:method :zone
                                                  :location "The Control Blocks"}]
                                        [:quest {:objective :collect
                                                 :target "The Miasmeter"}]
                                        [:quest {:objective :defeat
                                                 :target "Justicar Casticus"
                                                 :notes "Loot the Eyes of Zeal"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Chamber of Innocence"
                          :checkpoints [[:travel {:method :zone
                                                  :location "Oriath Square"}]
                                        [:travel {:method :zone
                                                  :location "The Templar Courts"}]
                                        [:travel {:method :zone
                                                  :location "The Chamber of Innocence"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "The Overseer's Tower"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Innocence"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Lani and Vilenta"}]
                                        [:travel {:method :waypoint
                                                  :location "The Chamber of Innocence"}]
                                        [:quest {:objective :defeat
                                                 :target "Innocence"}]]
                          :gear :trickster-finish}
                         {:name "Sign of Purity"
                          :checkpoints [[:travel {:method :zone
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
                                                  :location "The Overseer's Tower"}]]
                          :gear :trickster-finish}
                         {:name "Kitava's Torments"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "The Ruined Square"
                                                  :notes "Place portal near The Cathedral Rooftop to the W of the zone"}]
                                        [:travel {:method :zone
                                                  :location "The Reliquary"}]
                                        [:quest {:objective :collect
                                                 :target "3x Kitava's Torments"}]
                                        [:travel {:method :town-portal
                                                  :location "The Overseer's Tower"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Kitava"
                          :checkpoints [[:quest {:objective :interact
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
                                                 :notes "End of Act 5, sail to Wraeclast"}]]
                          :gear :trickster-finish}])

(def act-06-definitions [
                         {:name "Enter The Karui Fortress"
                          :checkpoints [[:inventory {:action "Check resistances, and particularly try to cap fire res"}]
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
                                                  :location "The Karui Fortress"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Ridge"
                          :checkpoints [[:travel {:method :zone
                                                  :location "Tukohama's Keep"}]
                                        [:quest {:objective :defeat
                                                 :target "Tukohama"}]
                                        [:travel {:method :zone
                                                  :location "The Karui Fortress"}]
                                        [:travel {:method :zone
                                                  :location "The Ridge"}]]
                          :gear :trickster-finish}
                         {:name "Bestel's Manuscript"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "The Coast"}]
                                        [:travel {:method :zone
                                                  :location "The Tidal Island"}]
                                        [:quest {:objective :activate
                                                 :target "Storage Chest"
                                                 :notes "Loot Bestel's Manuscript"}]
                                        [:travel {:method :town-portal
                                                  :location "Lioneye's Watch"}]]
                          :gear :trickster-finish}
                         {:name "Clear The Twilight Strand"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Twilight Strand"}]
                                        [:quest {:objective :interact
                                                 :target "Einhar"
                                                 :notes "Clear the zone (confirmed by on-screen countdown)"}]
                                        [:travel {:method :town-portal
                                                  :location "Lioneye's Watch"}]
                                        [:quest {:objective :interact
                                                 :target "Lilly, Bestel, and Tarkleigh"}]
                                        [:travel {:method :waypoint
                                                  :location "The Ridge"}]]
                          :gear :trickster-finish}
                         {:name "Enter Shavronne's Tower"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Lower Prison"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:quest {:objective :lab
                                                 :target "Trial of Ascendancy"
                                                 :notes "Drop portal near exit of the zone if you don't discover it before then"}]
                                        [:travel {:method :zone
                                                  :location "Shavronne's Tower"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Brutus and Shavronne"
                          :checkpoints [[:travel {:method :zone
                                                  :location "Prison Rooftop"}]
                                        [:quest {:objective :defeat
                                                 :target "Brutus and Shavronne"}]
                                        [:travel {:method :zone
                                                  :location "The Warden's Chambers"
                                                  :notes "Pickup the crafting recipe here"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "Lioneye's Watch"}]]
                          :gear :trickster-finish}
                         {:name "Enter Prisoner's Gate"
                          :checkpoints [[:quest {:objective :lab
                                                 :target "Trial of Ascendancy"
                                                 :notes "If didn't complete earlier then take portal back to Prison and complete"}]
                                        [:quest {:objective :interact
                                                 :target "Tarkleigh"}]
                                        [:travel {:method :waypoint
                                                  :location "Prisoner's Gate"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Cavern of Anger"
                          :checkpoints [[:travel {:method :zone
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
                                                  :location "The Cavern of Anger"}]]
                          :gear :trickster-finish}
                         {:name "Activate The Beacon"
                          :checkpoints [[:quest {:objective :activate
                                                 :target "Flag Chest"
                                                 :notes "Loot The Black Flag"}]
                                        [:travel {:method :zone
                                                  :location "The Beacon"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:quest {:objective :activate
                                                 :target "The Beacon with The Black Flag"}]
                                        [:quest {:objective :interact
                                                 :target "Weylam"}]]
                          :gear :trickster-finish}
                         {:name "Defeat The Brine King"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint (The Brine King's Reef)"}]
                                        [:quest {:objective :defeat
                                                 :target "The Brine King"}]
                                        [:inventory {:action "Select Pantheons if haven't already done so"}]
                                        [:quest {:objective :interact
                                                 :target "Weylam"}]]
                          :gear :trickster-finish}])

(def act-07-definitions [
                         {:name "Enter The Fellshrine Ruins"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Broken Bridge"}]
                                        [:quest {:objective :collect
                                                 :target "Silver Locket"}]
                                        [:travel {:method :zone
                                                  :location "The Crossroads"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Head S"}]
                                        [:travel {:method :zone
                                                  :location "The Fellshrine Ruins"}]]
                          :gear :trickster-finish}
                         {:name "Maligaro's Map"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Crypt"}]
                                        [:quest {:objective :lab
                                                 :target "Trial of Ascendancy"}]
                                        [:travel {:method :zone
                                                  :location "The Crypt Level 2"}]
                                        [:quest {:objective :collect
                                                 :target "Maligaro's Map"}]
                                        [:travel {:method :town-portal
                                                  :location "The Broken Bridge"}]]
                          :gear :trickster-finish}
                         {:name "Enter Maligaro's Sanctum"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "Maligaro's Sanctum"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Maligaro"
                          :checkpoints [[:travel {:method :zone
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
                                                  :notes "Head the direction of the path directly behind Silk away from the map device"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Gruest"
                          :checkpoints [[:quest {:objective :lab
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
                                                  :location "The Northern Forest"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Vaal City"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Causeway"
                                                  :notes "Drop a portal near The Dread Thicket to the W of the zone if you find it"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:quest {:objective :interact
                                                 :target "Alva"
                                                 :notes "Talk to Alva to make her available in your hideout"}]
                                        [:travel {:method :zone
                                                  :location "The Vaal City"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Dread Thicket"
                          :checkpoints [[:travel {:method :activate
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
                                                  :location "The Dread Thicket"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Gruthkul"
                          :checkpoints [[:quest {:objective :collect
                                                 :target "Fireflies"}]
                                        [:travel {:method :zone
                                                  :location "The Den of Despair"}]
                                        [:quest {:objective :defeat
                                                 :target "Gruthkul"
                                                 :notes "Return to The Dread Thicket after if still more fireflies to collect"}]
                                        [:travel {:method :town-portal
                                                  :location "The Broken Bridge"}]]
                          :gear :trickster-finish}
                         {:name "Return to The Riverways"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Eramir, and Weylam"}]
                                        [:reward {:selection "Granite Flask"
                                                  :giver "Eramir"}]
                                        [:travel {:method :waypoint
                                                  :location "The Riverways (Act 6)"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Ryslatha"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Wetlands"
                                                  :notes "Head N"}]
                                        [:travel {:method :zone
                                                  :location "The Spawning Ground"}]
                                        [:quest {:objective :defeat
                                                 :target "Ryslatha, the Puppet Mistress"}]
                                        [:travel {:method :town-portal
                                                  :location "Lioneye's Watch"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Abberath"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "Prisoner's Gate (Act 6)"}]
                                        [:travel {:method :zone
                                                  :location "Valley of the Firedrinker"}]
                                        [:quest {:objective :defeat
                                                 :target "Abberath"}]
                                        [:travel {:method :town-portal
                                                  :location "Lioneye's Watch"}]
                                        [:quest {:objective :interact
                                                 :target "Bestel, and Tarkleigh"}]]
                          :gear :trickster-finish}
                         {:name "Complete Cruel Labyrinth"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "Aspirant's Path"}]
                                        [:quest {:objective :ascend
                                                 :target "Cruel Labyrinth"
                                                 :notes "Take Ghost Dance for the increased movement speed"}]]
                          :gear :trickster-finish}
                         {:name "Complete Act 7"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "The Sarn Encampment"}]]
                          :gear :trickster-finish}])

(def act-08-definitions [{:name "Defeat Doedre"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Toxic Conduits"}]
                                        [:travel {:method :zone
                                                  :location "Doedre's Cesspool"}]
                                        [:travel {:method :zone
                                                  :location "The Cauldron"}]
                                        [:quest {:objective :defeat
                                                 :target "Doedre"}]
                                        [:travel {:method :zone
                                                  :location "The Sewer Outlet"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Grain Gate"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Quay"
                                                  :notes "Head E"}]
                                        [:quest {:objective :activate
                                                 :target "The Sealed Casket"
                                                 :notes "Follow the SW wall to find the bridged island containing the casket and loot the Ankh of Eternity"}]
                                        [:travel {:method :zone
                                                  :location "The Grain Gate"
                                                  :notes "Drop a portal at the start of the path to the Resurrection Site"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Solaris Temple"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"
                                                  :notes "Follow entrances with corpses outside of them"}]
                                        [:quest {:objective :defeat
                                                 :target "The Gemling Legionnaires"}]
                                        [:travel {:method :zone
                                                  :location "The Imperial Fields"}]
                                        [:travel {:method :zone
                                                  :location "The Solaris Temple Level 1"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Holman"
                          :checkpoints [[:travel {:method :activate
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
                                                  :location "The Sarn Encampment (portal)"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Dawn"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Clarissa, Hargan, and Maramoa"}]
                                        [:travel {:method :waypoint
                                                  :location "The Solaris Temple Level 1"}]
                                        [:travel {:method :zone
                                                  :location "The Solaris Temple Level 2"}]
                                        [:quest {:objective :defeat
                                                 :target "Dawn"
                                                 :notes "Loot the Sun Orb"}]
                                        [:travel {:method :town-portal
                                                  :location "The Sarn Encampment"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Lunaris Temple"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "The Lunaris Temple Level 1"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Dusk"
                          :checkpoints [[:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :zone
                                                  :location "The Lunaris Temple Level 2"}]
                                        [:quest {:objective :defeat
                                                 :target "Dusk"
                                                 :notes "Loot the Moon Orb"}]
                                        [:travel {:method :town-portal
                                                  :location "The Sarn Encampment"}]]
                          :gear :trickster-finish}
                         {:name "Complete Act 8"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "Highgate"}]]

                          :gear :trickster-finish}])

(def act-09-definitions [{:name "Defeat Hector Titucius"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "The High Gardens"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Yugul"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Pools of Terror"}]
                                        [:quest {:objective :defeat
                                                 :target "Yugul"}]
                                        [:travel {:method :town-portal
                                                  :location "The Sarn Encampment"}]
                                        [:quest {:objective :interact
                                                 :target "Hargan"}]
                                        [:travel {:method :waypoint
                                                  :location "Highgate"}]]
                          :current-gear :trickster-slinger
                          :gear :trickster-finish}
                         {:name "Collect The Storm Blade"
                          :checkpoints [[:travel {:method :zone
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
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Shakari"
                          :checkpoints [[:quest {:objective :interact
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
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Defeat The Basilisk"
                          :checkpoints [[:travel {:method :waypoint
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
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Quarry"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "The Foothills"}]
                                        [:travel {:method :zone
                                                  :location "The Tunnel"
                                                  :notes "Head N"}]
                                        [:quest {:objective :lab
                                                 :target "Trial of Ascendancy"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :zone
                                                  :location "The Quarry"}]]
                          :gear :trickster-finish}
                         {:name "Defeat General Adus"
                          :checkpoints [[:travel {:method :activate
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
                                                  :location "Highgate"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Garukhan"
                          :checkpoints [[:travel {:method :waypoint
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
                                                 :target "Irasha"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Black Core"
                          :checkpoints [[:travel {:method :waypoint
                                                  :location "The Quarry"}]
                                        [:quest {:objective :interact
                                                 :target "Sin"}]
                                        [:travel {:method :zone
                                                  :location "The Belly of the Beast"}]
                                        [:travel {:method :zone
                                                  :location "The Rotting Core"}]
                                        [:travel {:method :zone
                                                  :location "The Black Core"}]]
                          :gear :trickster-finish}
                         {:name "Defeat The Depraved Trinity"
                          :checkpoints [[:quest {:objective :interact
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
                                                  :location "Oriath Docks"}]]
                          :gear :trickster-finish}])

(def act-10-definitions [
                         {:name "Enter The Ravaged Square"
                          :checkpoints [[:travel {:method :zone
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
                                                  :location "Oriath Docks"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Control Blocks"
                          :checkpoints [[:travel {:method :portal
                                                  :location "The Ravaged Square (1st)"}]
                                        [:travel {:method :zone
                                                  :location "The Control Blocks"
                                                  :notes "Head W"}]
                                        [:travel {:method :activate
                                                  :location "waypoint"}]
                                        [:travel {:method :waypoint
                                                  :location "The Ravaged Square (2nd)"}]]
                          :gear :trickster-finish}
                         {:name "Collect The Elixir of Allure"
                          :checkpoints [[:travel {:method :zone
                                                  :location "The Ossuary"}]
                                        [:quest {:objective :lab
                                                 :target "Trial of Ascendancy"}]
                                        [:quest {:objective :collect
                                                 :target "The Elixir of Allure"}]
                                        [:travel {:method :town-portal
                                                  :location "Oriath Docks"}]]
                          :gear :trickster-finish}
                         {:name "Complete Merciless Lab"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Weylam, Bannon, and Lani"}]
                                        [:travel {:method :waypoint
                                                  :location "Aspirant's Path"}]
                                        [:quest {:objective :ascend
                                                 :target "Merciless Labyrinth"
                                                 :notes "Prolonged Pain/Escape Artist"}]
                                        [:travel {:method :waypoint
                                                  :location "Oriath Docks"}]
                                        [:travel {:method :waypoint
                                                  :location "The Control Blocks"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Vilenta"
                          :checkpoints [[:quest {:objective :defeat
                                                 :target "Vilenta"}]
                                        [:travel {:method :town-portal
                                                  :location "Oriath Docks"}]
                                        [:quest {:objective :interact
                                                 :target "Lani"}]
                                        [:travel {:method :waypoint
                                                  :location "The Ravaged Square"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Avarius"
                          :checkpoints [[:travel {:method :zone
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
                                                  :location "Oriath Docks"}]]
                          :gear :trickster-finish}
                         {:name "Enter The Canals"
                          :checkpoints [[:quest {:objective :interact
                                                 :target "Bannon, Lani, and Lilly"}]
                                        [:travel {:method :waypoint
                                                  :location "The Ravaged Square"}]
                                        [:quest {:objective :interact
                                                 :target "Innocence"}]
                                        [:travel {:method :zone
                                                  :location "The Canals"}]]
                          :gear :trickster-finish}
                         {:name "Defeat Kitava"
                          :checkpoints [[:travel {:method :zone
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
                                                  :giver "Lani"}]]
                          :gear :trickster-finish}])

(def end-campaign-definitions [{:name "Still sane exile?"
                                :checkpoints [[:reward {:selection "Skill Point book"
                                                        :giver "Lani"}]]
                                :gear :trickster-finish}])

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
