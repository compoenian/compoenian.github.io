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
                                       [:travel {:method {:waypoint}}]]}
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
                          :objectives [[]]}
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
