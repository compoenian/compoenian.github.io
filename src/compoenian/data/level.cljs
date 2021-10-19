(ns compoenian.data.level
  (:require
   [cljs.pprint :refer [pprint]]))

(def act-01-definitions [{:label "Exile..."
                          :zone :the-twilight-strand
                          :objectives [[:action {:action "Create Witch"}]
                                       [:quest {:objective :collect
                                                :target "Arcane Surge Support gem"}]
                                       [:quest {:objective :defeat
                                                :target "Hillock"}]
                                       [:travel {:method :zone}]]}
                         {:label "Blight"
                          :zone :lioneyes-watch
                          :objectives [[:inventory {:action "Move RGB Wand to weapon swap slot"}]
                                       [:reward {:selection "Blight"
                                                 :giver "Tarkleigh"}]
                                       [:vendor {:action "Check for BBG/BBB/BBR gear, sell all non-blue socketed gear"
                                                 :vendor "Tarkleigh"}]
                                       [:vendor {:action "Purchase Explosive Trap - 1 Wisdom Scroll"
                                                 :vendor "Nessa"}]
                                       [:vendor {:action "Purchase Raise Zombie - 1 Wisdom Scroll"
                                                 :vendor "Nessa"}]
                                       [:vendor {:action "Purchase Iron Ring - 2 Wisdom Scroll"
                                                 :vendor "Nessa"}]
                                       [:inventory {:action "Equip Explosive Trap and Raise Zombie"}]
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
                                       [:reward {:selection "Infused Channelling Support"
                                                 :giver "Nessa"}]
                                       [:vendor {:action "Upgrade flasks if available and vendor unnecessary items"
                                                 :vendor "Nessa"}]
                                       [:inventory {:action "Equip new links as necessary"}]
                                       [:travel {:method :waypoint}]]}
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
                                       [:vendor {:action "Purchase Spell Totem Support"
                                                 :vendor "Nessa"}]
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
                                                :notes "Kite with Explosive Trap and dot up with Contagion"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :lioneyes-watch
                          :objectives [[:vendor {:action "Purchase Void Manipulation Support"
                                                 :vendor "Nessa"}]
                                       [:vendor {:action "Purchase Vitality"
                                                 :vendor "Nessa"}]
                                       [:vendor {:action "Purchase Clarity"
                                                 :vendor "Nessa"}]
                                       [:reward {:selection "Flame Dash"
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
                         {:label "Essence Drain"
                          :zone :lioneyes-watch
                          :objectives [[:reward {:selection "Skill Point book"
                                                 :giver "Bestel"}]
                                       [:reward {:selection "Essence Drain"
                                                 :giver "Nessa"}]
                                       [:vendor {:action "Vendor Iron Ring and int skill gem for cold resist ring"
                                                 :vendor "Nessa"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-cavern-of-wrath
                          :objectives [[:travel {:method :zone}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Merveil"
                          :zone :the-cavern-of-anger
                          :objectives [[:quest {:objective :defeat
                                                :target "Merveil"}]
                                       [:travel {:method :zone}]]}])

(def act-02-definitions [{:zone :the-southern-forest
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-forest-encampment
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-old-fields
                          :objectives [[:inventory {:action "Place portal next to entrance to The Den on passage through the zone."}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-crossroads
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone
                                                 :notes "Waypoint is located in the center at path intersection then head N"}]]}
                         {:zone :the-chamber-of-sins-level-1
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-forest-encampment
                          :objectives [[:travel {:method :portal}]]}
                         {:zone :the-old-fields
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-den
                          :objectives [[:quest {:objective :interact
                                                :target "Einhar"}]
                                       [:quest {:objective :defeat
                                                :target "The Great White Beast"
                                                :notes "Head South"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-forest-encampment
                          :objectives [[:reward {:selection "Quicksilver Flask"
                                                 :giver "Yeena"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-chamber-of-sins-level-1
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Fidelatis"
                          :zone :the-chamber-of-sins-level-2
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Agony"
                                                :notes "Head S"}]
                                       [:quest {:objective :defeat
                                                :target "Fidelatis"
                                                :notes "Head N"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-forest-encampment
                          :objectives [[:reward {:selection "Arctic Armour"
                                                 :giver "Greust"}]
                                       [:vendor {:action "Purchase Frenzy, 3x Controlled Destruction, and Summon Skitterbots"
                                                 :vendor "Yeena"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-riverways
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-western-forest
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone
                                                 :notes "Located on the opposite side of the road to the checkpoint."}]]}
                         {:label "Defeat The Weaver"
                          :zone :the-weavers-chambers
                          :objectives [[:quest {:objective :defeat
                                                :target "The Weaver"
                                                :notes "Head S"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-forest-encampment
                          :objectives [[:reward {:selection "Faster Attacks Support"
                                                 :giver "Silk"}]
                                       [:vendor {:action "Check for BBB and BBG wands if haven't already acquired"
                                                 :vendor "Yeena"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-crossroads
                          :objectives [[:travel {:method :zone
                                                 :notes "Head N"}]]}
                         {:label "Defeat Kraityn"
                          :zone :the-broken-bridge
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :defeat
                                                :target "Kraityn"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-forest-encampment
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-riverways
                          :objectives [[:travel {:method :zone
                                                 :notes "Head W from the checkpoint"}]]}
                         {:label "Defeat Oak"
                          :zone :the-wetlands
                          :objectives [[:quest {:objective :defeat
                                                :target "Oak"
                                                :notes "Head W to find stronghold"}]
                                       [:travel {:method :activate
                                                 :notes "Head W from stronghold to find waypoint"}]
                                       [:travel {:method :waypoint}]]}
                         {:label "Defeat Alira"
                          :zone :the-western-forest
                          :objectives [[:quest {:objective :defeat
                                                :target "Alira"
                                                :notes "Located on the same side of the road as the checkpoint, help if racing for +resists"}]
                                       [:quest {:objective :defeat
                                                :target "The Blackguards"
                                                :notes "Head S to find camp"}]
                                       [:quest {:objective :collect
                                                :target "Thaumatic Seal"
                                                :notes "Use seal to open nearby pathway entrance"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:label "Lioneye's rewards"
                          :zone :the-forest-encampment
                          :objectives [[:inventory {:action "Waypoint detour to Lioneye's Watch (Act 1)"}]
                                       [:reward {:selection "Skill Point book"
                                                 :giver "Bestel"}]
                                       [:vendor {:action "Check for BBB or BBG wand if need and have currency available"
                                                 :vendor "Nessa"}]
                                       [:inventory {:action "Waypoint return to The Forest Encampent"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-wetlands
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-vaal-ruins
                          :objectives [[:quest {:objective :activate
                                                :target "Ruins boulder seal"
                                                :notes "Head S, then W, then N, then W, then S"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-northern-forest
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-caverns
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat The Vaal Oversoul"
                          :zone :the-ancient-pyramid
                          :objectives [[:quest {:objective :activate
                                                :target "The Dark Altar"}]
                                       [:quest {:objective :defeat
                                                :target "The Vaal Oversoul"}]
                                       [:action {:action "Exit to character selection and re-log"}]
                                       [:travel {:method :waypoint
                                                 :location "The City of Sarn"}]]}])

(def act-03-definitions [{:zone :the-city-of-sarn
                          :objectives [[:quest {:objective :interact
                                                :target "Clarissa"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-slums
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Piety"
                          :zone :the-crematorium
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "Head N, then W"}]
                                       [:quest {:objective :defeat
                                                :target "Piety"
                                                :notes "Head S, then W"}]
                                       [:quest {:objective :collect
                                                :target "Tolman's Bracelet"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:reward {:selection "Despair"
                                                 :giver "Maramoa"
                                                 :notes "Add gem to offhand weapon for passive leveling"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-slums
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-sewers
                          :objectives [[:quest {:objective :collect
                                                :target "Platinum Busts"}]
                                       [:travel {:method :activate
                                                 :notes "Head N from waypoint to find zone exit"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-marketplace
                          :objectives [[:travel {:method :activate
                                                 :notes "Head W for the waypoint near the entrance for The Catacombs"}]
                                       [:travel {:method :zone}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-catacombs
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "Head N"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:reward {:selection "Skill Point book"
                                                 :giver "Hargan"}]
                                       [:vendor {:action "Check for on-color 4-link items"
                                                 :vendor "Hargan"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-marketplace
                          :objectives [[:travel {:method :zone
                                                 :notes "Head W, follow map border if not immediately spotted"}]]}
                         {:zone :the-battlefront
                          :objectives [[:travel {:method :activate
                                                 :notes "Head W for waypoint, and continue on for the Blackguard Chest"}]
                                       [:quest {:objective :activate
                                                :target "The Blackguard Chest"
                                                :notes "Chest is located in the SW corner of the zone, collect the Ribbon Spool contained inside"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-docks
                          :objectives [[:quest {:objective :activate
                                                :target "The Supply Container"
                                                :notes "Head E, collect Thaumatic Sulphite contained inside, clear zone if under-leveled"}]
                                       [:action {:action "Exit to character selection and re-log"}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:inventory {:action "Vendor all rares to clear personal inventory"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-battlefront
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-solaris-temple-level-1
                          :objectives [[:travel {:method :activate
                                                 :notes "Head E, then N"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-solaris-temple-level-2
                          :objectives [[:travel {:method :activate
                                                 :location "waypoint"
                                                 :notes "Head W, then N"}]
                                       [:reward {:selection "Lapis Amulet"
                                                 :giver "Lady Dialla"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-sewers
                          :objectives [[:quest {:objective :activate
                                                :target "The Blockage"
                                                :notes "Located immediately SW of the zone waypoint"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-ebony-barracks
                          :objectives [[:travel {:method :activate
                                                 :notes "Head W"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-lunaris-temple-level-1
                          :objectives [[:travel {:method :activate
                                                 :notes "Head W, follow the carpet tiles, waypoint is near the exit"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Piety"
                          :zone :the-lunaris-temple-level-2
                          :objectives [[:quest {:objective :defeat
                                                :target "Piety"
                                                :notes "Head N and drop portal halfway as long walk and zone can be rippy"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:inventory {:action "Vendor rares and clear personal inventory as needed"}]
                                       [:reward {:selection "Soulrend"
                                                 :giver "Maramoa"}]
                                       [:vendor {:action "Check for on-color 4-link items"
                                                 :vendor "Hargan"}]
                                       [:inventory {:action "Switch to weapon swap wands"}]
                                       [:vendor {:action "Purchase 3x Spellslinger, 1x Bane gems"
                                                 :vendor "Clarissa"}]
                                       [:inventory {:action "Setup new skill gems and links"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-ebony-barracks
                          :objectives [[:travel {:method :zone
                                                 :notes "Head NE"}]]}
                         {:zone :the-imperial-gardens
                          :objectives [[:travel {:method :activate
                                                 :notes "Head NW"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:quest {:objective :ascend
                                                :target "Normal Labyrinth"
                                                :notes "If level 30 at this point then complete Trickster ascendancy (Patient Reaper)"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-imperial-gardens
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-sceptre-of-god
                          :objectives [[:travel {:method :zone
                                                 :notes "Head NE"}]]}
                         {:label "Defeat Dominus"
                          :zone :the-upper-sceptre-of-god
                          :objectives [[:quest {:objective :defeat
                                                :target "Dominus"}]
                                       [:travel {:method :zone}]]}])

(def act-04-definitions [{:zone :the-aqueduct
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :highgate
                          :objectives [[:quest {:objective :interact
                                                :target "Kira"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Voll"
                          :objectives [[:quest {:objective :defeat
                                                :target "Voll"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:quest {:objective :activate
                                                :target "Deshret's Seal"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-mines-level-1
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-mines-level-2
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-crystal-veins
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :highgate
                          :objectives [[:quest {:objective :interact
                                                :target "Tasuni"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-crystal-veins
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :daressos-dream
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Daresso"
                          :zone :the-grand-arena
                          :objectives [[:quest {:objective :defeat
                                                :target "Daresso"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-crystal-veins
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :koams-dream
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Kaom"
                          :zone :koams-stronghold
                          :objectives [[:quest {:objective :defeat
                                                :location "Kaom"
                                                :notes "Loot the Eye of Fury"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-crystal-veins
                          :objectives [[:quest {:objective :interact
                                                :target "Dialla"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-belly-of-the-beast-level-1
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Piety"
                          :zone :the-belly-of-the-beast-level-2
                          :objectives [[:quest {:objective :defeat
                                                :target "Piety"
                                                :notes "Talk to Piety after defeating her"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-harvest
                          :objectives [[:travel {:method :activate
                                                 :notes "Head E"}]
                                       [:quest {:objective :defeat
                                                :target "Maligaro/Deodre/Malachai (1st)"
                                                :notes "Loot the organ from the E spawn location"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-harvest
                          :objectives [[:quest {:objective :defeat
                                                :target "Maligaro/Deodre/Malachai (2nd)"
                                                :notes "Defeat the remaining two spawns to the W"}]
                                       [:quest {:objective :defeat
                                                :target "Maligaro/Deodre/Malachai (3rd)"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}
                         {:label "Defeat Malachai"
                          :zone :the-harvest
                          :objectives [[:quest {:objective :interact
                                                :target "Piety"}]
                                       [:travel {:method :zone
                                                 :notes "Enter The Black Core"}]
                                       [:quest {:objective :defeat
                                                :target "Malachai"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:quest {:objective :interact
                                                :target "Dialla"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-ascent
                          :objectives [[:travel {:method :zone}]]}])

(def act-05-definitions [{:zone :the-slave-pens
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :overseers-tower
                          :objectives [[:quest {:objective :interact
                                                :target "Lani"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Justicar Casticus"
                          :zone :the-control-blocks
                          :objectives [[:quest {:objective :collect
                                                :target "The Miasmeter"}]
                                       [:quest {:objective :defeat
                                                :target "Justicar Casticus"
                                                :notes "Loot the Eyes of Zeal"}]
                                       [:travel {:method :zone}]]}
                         {:zone :oriath-square
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-templar-courts
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-chamber-of-innocence
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :overseers-tower
                          :objectives [[:quest {:objective :interact
                                                :target "Lani and Vilenta"}]
                                       [:travel {:method :waypoint}]]}
                         {:label "Defeat Innocence"
                          :zone :the-chamber-of-innocence
                          :objectives [[:quest {:objective :defeat
                                                :target "Innocence"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-torched-courts
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-ruined-square
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-ossuary
                          :objectives [[:quest {:objective :collect
                                                :target "Sign of Purity"}]
                                       [:travel {:method :portal}]]}
                         {:zone :overseers-tower
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-ruined-square
                          :objectives [[:inventory {:action "Place portal near The Cathedral Rooftop to the W of the zone"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-reliquary
                          :objectives [[:quest {:objective :collect
                                                :target "3x Kitava's Torments"}]
                                       [:travel {:method :portal}]]}
                         {:zone :overseers-tower
                          :objectives [[:quest {:objective :interact
                                                :target "Lani"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-ruined-square
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Kitava"
                          :zone :the-cathedral-rooftop
                          :objectives [[:quest {:objective :defeat
                                                :target "Kitava"}]
                                       [:quest {:objective :interact
                                                :target "Lilly"
                                                :notes "End of Act 5, sail to Wraeclast"}]]}])

(def act-06-definitions [{:zone :lioneyes-watch
                          :objectives [[:inventory {:action "Check resistances, and particularly try to cap fire res"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-coast
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-mud-flats
                          :objectives [[:quest {:objective :defeat
                                                :target "The Dishonoured Queen"
                                                :notes "Loot The Eye of Conquest"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Tukohama"
                          :zone :the-karui-fortress
                          :objectives [[:quest {:objective :defeat
                                                :target "Tukohama"
                                                :notes "Enter Tukohama's Keep in the middle of the zone"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-ridge
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-coast
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-tidal-island
                          :objectives [[:quest {:objective :activate
                                                :target "Storage Chest"
                                                :notes "Loot Bestel's Manuscript"}]
                                       [:travel {:method :portal}]]}
                         {:zone :lioneyes-watch
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-twilight-strand
                          :objectives [[:quest {:objective :defeat
                                                :target "Zone"
                                                :notes "Clear the zone (confirmed by on-screen countdown)"}]
                                       [:travel {:method :portal}]]}
                         {:zone :lioneyes-watch
                          :objectives [[:quest {:objective :interact
                                                :target "Lilly, Bestel, and Tarkleigh"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-ridge
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-lower-prison
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "Drop portal near exit of the zone if you don't discover it before then"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Brutus and Shavronne"
                          :zone :shavronnes-tower
                          :objectives [[:quest {:objective :defeat
                                                :target "Brutus and Shavronne"}]
                                       [:travel {:method :zone
                                                 :notes "Pickup the crafting recipe after leaving the boss area."}]]}
                         {:zone :prisoners-gate
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :lioneyes-watch
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"
                                                :notes "If didn't complete earlier then take portal back to The Lower Prison, complete and portal back"}]
                                       [:quest {:objective :interact
                                                :target "Tarkleigh"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :prisoners-gate
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-western-forest
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-riverways
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-southern-forest
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-cavern-of-anger
                          :objectives [[:quest {:objective :activate
                                                :target "Flag Chest"
                                                :notes "Loot The Black Flag"}]
                                       [:travel {:method :zone}]]}
                         {:label "Activate The Beacon"
                          :zone :the-beacon
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :activate
                                                :target "The Beacon with The Black Flag"}]
                                       [:quest {:objective :interact
                                                :target "Weylam"}]]}
                         {:label "Defeat The Brine King"
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :defeat
                                                :target "The Brine King"}]
                                       [:inventory {:action "Select Pantheons if haven't already done so"}]
                                       [:quest {:objective :interact
                                                :target "Weylam"}]]}])

(def act-07-definitions [{:zone :the-bridge-encampment
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-broken-bridge
                          :objectives [[:quest {:objective :collect
                                                :target "Silver Locket"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-crossroads
                          :objectives [[:travel {:method :activate
                                                 :notes "Head S"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-fellshrine-ruins
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-crypt
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:quest {:objective :collect
                                                :target "Maligaro's Map"
                                                :notes "Travel to second zone of The Crypt to find the map."}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-bridge-encampment
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-crossroads
                          :objectives [[:travel {:method :zone
                                                 :notes "Head N"}]]}
                         {:zone :the-crossroads
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-chamber-of-sins-level-1
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :interact
                                                :target "Silk"}]
                                       [:quest {:objective :activate
                                                :target "Maligaro's Map Device"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Maligaro"
                          :zone :maligaros-sanctum
                          :objectives [[:quest {:objective :defeat
                                                :target "Maligaro"
                                                :notes "Loot the Black Venom"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-chamber-of-sins-level-1
                          :objectives [[:reward {:selection "Obsidian Key"
                                                 :giver "Maligaro"}]
                                       [:travel {:method :zone
                                                 :notes "Head the direction of the path directly behind Silk away from the map device"}]]}
                         {:zone :the-chamber-of-sins-level-2
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-den
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-ashen-fields
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Gruest"
                          :zone :the-forest-encampment
                          :objectives [[:quest {:objective :defeat
                                                :target "Gruest"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-northern-forest
                          :objectives [[:travel {:method :activate}]
                                       [:inventory {:action "Drop a portal near The Dread Thicket to the W of the zone if you find it"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-causeway
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :interact
                                                :target "Alva"
                                                :notes "Talk to Alva to make her available in your hideout"}]
                                       [:quest {:objective :loot
                                                :target "Kishara's Star near the exit of the zone"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-vaal-city
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :interact
                                                :target "Yeena"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-bridge-encampment
                          :objectives [[:quest {:objective :interact
                                                :target "Helena, and Yeena"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-northern-forest
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Gruthkul"
                          :zone :the-dread-thicket
                          :objectives [[:quest {:objective :collect
                                                :target "Fireflies"}]
                                       [:quest {:objective :defeat
                                                :target "Gruthkul"
                                                :notes "Enter The Den of Despair. Return to The Dread Thicket after if still more fireflies to collect"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-bridge-encampment
                          :objectives [[:quest {:objective :interact
                                                :target "Eramir, and Weylam"}]
                                       [:reward {:selection "Granite Flask"
                                                 :giver "Eramir"}]
                                       [:travel {:method :waypoint
                                                 :notes "Travel to Act 6 The Riverways for pantheon bosses."}]
                                       [:quest {:objective :defeat
                                                :target "Ryslatha"
                                                :notes "Follow the path up to The Wetlands. Follow LHS to Spawning Ground. Then portal."}]
                                       [:quest {:objective :defeat
                                                :target "Abberath"
                                                :notes "Waypoint to Act 6 Prisoner's Gate, enter Valley of the Firedrinker. Then portal and waypoint back to The Bridge Encampment."}]
                                       [:quest {:objective :interact
                                                :target "Bestel, and Tarkleigh"}]
                                       [:quest {:objective :ascend
                                                :target "Cruel Labyrinth"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-vaal-city
                          :objectives [[:quest {:objective :interact
                                                :target "Yeena"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-temple-of-decay-level-1
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Arakaali"
                          :zone :the-temple-of-decay-level-2
                          :objectives [[:quest {:objective :defeat
                                                :target "Arakaali"}]
                                       [:travel {:method :zone}]]}])

(def act-08-definitions [{:zone :the-sarn-ramparts
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Doedre"
                          :zone :the-toxic-conduits
                          :objectives [[:quest {:objective :defeat
                                                :target "Doedre"}]
                                       [:travel {:method :zone
                                                 :notes "Head E"}]]}
                         {:zone :the-quay
                          :objectives [[:quest {:objective :activate
                                                :target "The Sealed Casket"
                                                :notes "Follow the SW wall to find the bridged island containing the casket and loot the Ankh of Eternity"}]
                                       [:inventory {:action "Drop a portal at the start of the path to the Resurrection Site"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-grain-gate
                          :objectives [[:travel {:method :activate
                                                 :notes "Follow entrances with corpses outside of them"}]
                                       [:quest {:objective :defeat
                                                :target "The Gemling Legionnaires"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-imperial-fields
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-solaris-temple-level-1
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:travel {:method :portal}]]}
                         {:label "Defeat Holman"
                          :zone :the-quay
                          :objectives [[:quest {:objective :defeat
                                                :target "Holman"
                                                :notes "Complete the ritual at The Resurrection Site and loot the amulet"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:quest {:objective :interact
                                                :target "Clarissa, Hargan, and Maramoa"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-solaris-temple-level-1
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Dawn"
                          :zone :the-solaris-temple-level-2
                          :objectives [[:quest {:objective :defeat
                                                :target "Dawn"
                                                :notes "Loot the Sun Orb"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-solaris-temple-level-1
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-solaris-concourse
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-harbour-bridge
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-lunaris-concourse
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-lunaris-temple-level-1
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-lunaris-temple-level-2
                          :objectives [[:quest {:objective :defeat
                                                :target "Dusk"
                                                :notes "Loot the Moon Orb"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-lunaris-concourse
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Solaris and Lunaris"
                          :zone :the-harbour-bridge
                          :objectives [[:quest {:objective :defeat
                                                :target "Solaris and Lunaris"}]
                                       [:travel {:method :zone
                                                 :notes "Activate the waypoint in The Blood Aqueducts and return to The Lunaris Concourse"}]]}
                         {:zone :the-lunaris-concourse
                          :objectives [[:travel {:method :zone
                                                 :notes "Head W"}]]}
                         {:label "Defeat Hector Titucius"
                          :zone :the-bath-house
                          :objectives [[:quest {:objective :defeat
                                                :target "Hector Titucius"
                                                :notes "Loot The Wings of Vastiri"}]
                                       [:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat Yugul"
                          :zone :the-high-gardens
                          :objectives [[:quest {:objective :defeat
                                                :target "Yugul"
                                                :notes "Enter The Pools of Terror for boss arena"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-sarn-encampment
                          :objectives [[:quest {:objective :interact
                                                :target "Hargan"}]
                                       [:travel {:method :waypoint}]]}])

(def act-09-definitions [{:zone :the-blood-aqueducts
                          :objectives [[:inventory {:action "Farm zone til min 62 and bumping resistances."}]
                                       [:travel {:method :zone}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-descent
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-vastiri-desert
                          :objectives [[:quest {:objective :defeat
                                                :target "Betrayal mission"
                                                :notes "Complete the mission here to unlock Jun in your hideout"}]
                                       [:quest {:objective :collect
                                                :target "The Storm Blade"}]
                                       [:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :highgate
                          :objectives [[:quest {:objective :interact
                                                :target "Petarus and Vanja, Jun, Sin, and Petarus and Vanja again"
                                                :notes "Collect the Bottled Storm"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-vastiri-desert
                          :objectives [[:travel {:method :zone
                                                 :notes "Head E"}]]}
                         {:label "Defeat Shakari"
                          :zone :the-oasis
                          :objectives [[:quest {:objective :defeat
                                                :target "Shakari"
                                                :notes "Enter The Sand Pit to activate the boss arena."}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-vastiri-desert
                          :objectives [[:travel {:method :zone
                                                 :notes "Head N"}]]}
                         {:zone :the-foothills
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:label "Defeat The Basilisk"
                          :zone :the-boiling-lake
                          :objectives [[:quest {:objective :defeat
                                                :target "The Basilisk"
                                                :notes "Loot the Basilisk Acid"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}
                         {:zone :the-foothills
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-tunnel
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:travel {:method :activate}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-quarry
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :interact
                                                :target "Sin"}]
                                       [:travel {:method :zone
                                                 :notes "Head E usually, sometimes N"}]]}
                         {:label "Defeat General Adus"
                          :zone :the-refinery
                          :objectives [[:quest {:objective :defeat
                                                :target "General Adus"
                                                :notes "Loot Trarthan Powder"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}
                         {:label "Defeat Garukhan"
                          :zone :the-quarry
                          :objectives [[:quest {:objective :defeat
                                                :target "Garukhan"
                                                :notes "Loot Sekhema Feather"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:quest {:objective :interact
                                                :target "Irasha"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-quarry
                          :objectives [[:quest {:objective :interact
                                                :target "Sin"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-belly-of-the-beast
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat The Depraved Trinity"
                          :zone :the-rotting-core
                          :objectives [[:quest {:objective :interact
                                                :target "Sin (1st)"}]
                                       [:quest {:objective :defeat
                                                :target "Shavronne/Maligaro/Doedre"}]
                                       [:quest {:objective :interact
                                                :target "Sin (2nd)"}]
                                       [:quest {:objective :defeat
                                                :target "The Depraved Trinity"}]
                                       [:travel {:method :portal}]]}
                         {:zone :highgate
                          :objectives [[:travel {:method :waypoint}]]}])

(def act-10-definitions [{:zone :oriath-docks
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-cathedral-rooftop
                          :objectives [[:quest {:objective :interact
                                                :target "Bannon"
                                                :notes "Head left and save Bannon in the Cathedral Apex."}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-ravaged-square
                          :objectives [[:inventory {:action "Drop a portal in the open area near to zone entrance, Head E"}]
                                       [:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :oriath-docks
                          :objectives [[:quest {:objective :interact
                                                :target "Bannon"}]
                                       [:travel {:method :portal}]]}
                         {:zone :the-ravaged-square
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-control-blocks
                          :objectives [[:travel {:method :activate}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-ravaged-square
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-ossuary
                          :objectives [[:quest {:objective :lab
                                                :target "Trial of Ascendancy"}]
                                       [:quest {:objective :collect
                                                :target "The Elixir of Allure"}]
                                       [:travel {:method :portal}]]}
                         {:zone :oriath-docks
                          :objectives [[:quest {:objective :interact
                                                :target "Weylam, Bannon, and Lani"}]
                                       [:quest {:objective :ascend
                                                :target "Merciless Labyrinth"
                                                :notes "Prolonged Pain/Escape Artist"}]
                                       [:travel {:method :waypoint}]]}
                         {:label "Defeat Vilenta"
                          :zone :the-control-blocks
                          :objectives [[:quest {:objective :defeat
                                                :target "Vilenta"}]
                                       [:travel {:method :portal}]]}
                         {:zone :oriath-docks
                          :objectives [[:quest {:objective :interact
                                                :target "Lani"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-ravaged-square
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-torched-courts
                          :objectives [[:travel {:method :zone}]]}
                         {:label "Defeat Avarius"
                          :zone :the-desecrated-chambers
                          :objectives [[:travel {:method :activate}]
                                       [:quest {:objective :defeat
                                                :target "Avarius"
                                                :notes "Loot The Staff of Purity"}]
                                       [:travel {:method :portal}]]}
                         {:zone :oriath-docks
                          :objectives [[:quest {:objective :interact
                                                :target "Bannon, Lani, and Lilly"}]
                                       [:travel {:method :waypoint}]]}
                         {:zone :the-ravaged-square
                          :objectives [[:quest {:objective :interact
                                                :target "Innocence"}]
                                       [:travel {:method :zone}]]}
                         {:zone :the-canals
                          :objectives [[:travel {:method :zone}]]}
                         {:zone :the-feeding-trough
                          :objectives [[:quest {:objective :interact
                                                :target "Sin"}]
                                       [:quest {:objective :defeat
                                                :target "Kitava"}]
                                       [:travel {:method :portal}]]}])

(def act-x-definitions [{:label "Still sane exile?"
                         :zone :oriath
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
                      {:act-id :act-x
                       :data act-x-definitions}])

(defn annotate-act-definition [{:keys [act-id data]}]
  (mapv #(assoc % :act-id act-id) data))

(defn generate-level-data []
  (pprint "generating level data...")
  (let [annotated (mapv annotate-act-definition act-definitions)]
    (mapcat identity annotated)))
