(ns compoenian.data.zone
  (:require
   [cljs.pprint :refer [pprint]]))

(def act-01-definitions {:the-twilight-strand {:name "The Twilight Strand"
                                               :level 1}
                         :lioneyes-watch {:name "Lioneye's Watch"
                                          :level nil
                                          :waypoint true}
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
                                                         "img/layouts/act01/the-cavern-of-anger-02.png"]}})

(def act-02-definitions {:the-southern-forest {:name "The Southern Forest"
                                               :level 13
                                               :waypoint true
                                               :notes "Follow the right wall."}
                         :the-forest-encampment {:name "The Forest Encampment"
                                                 :level nil
                                                 :waypoint true}
                         :the-old-fields {:name "The Old Fields"
                                          :level 14
                                          :notes "Follow the road."}
                         :the-den {:name "The Den"
                                   :level 15}
                         :the-crossroads {:name "The Crossroads"
                                          :level 15
                                          :waypoint true
                                          :notes "Follow the road."}
                         :the-chamber-of-sins-level-1 {:name "The Chamber of Sins Level 1"
                                                       :level 15
                                                       :waypoint true
                                                       :notes "Go to the center of the zone, always left or right. Activate waypoint and follow the hallway next to the waypoint. The gray circles indicate the center area."
                                                       :layouts ["img/layouts/act02/the-chamber-of-sins-1-01.png"
                                                                 "img/layouts/act02/the-chamber-of-sins-1-02.png"
                                                                 "img/layouts/act02/the-chamber-of-sins-1-03.png"]}
                         :the-chamber-of-sins-level-2 {:name "The Chamber of Sins Level 2"
                                                       :level 16
                                                       :trial true
                                                       :layouts ["img/layouts/act02/the-chamber-of-sins-2-01.png"]}
                         :the-broken-bridge {:name "The Broken Bridge"
                                             :level 16
                                             :waypoint true
                                             :notes "Follow the road to the right"}
                         :the-riverways {:name "The Riverways"
                                         :level 15
                                         :waypoint true
                                         :notes "Follow the road. The entrance to the Wetlands is always on the opposite side of the road from the waypoint."}
                         :the-western-forest {:name "The Western Forest"
                                              :level 17
                                              :waypoint true
                                              :notes "Follow the road, Alira is on the side of the waypoint where the road has a broken section. Go back to the road for The Way Forward quest. The entrance to The Weaver's Chambers can be found on the opposite side of the road from Alira, trees covered in spiderwebs indicate that you're close to the entrance."}
                         :the-weavers-chambers {:name "The Weaver's Chambers"
                                                :level 18
                                                :notes "Go left when the left path spawns, otherwise loop around right side."
                                                :layouts ["img/layouts/act02/weavers-chambers-01.png"
                                                          "img/layouts/act02/weavers-chambers-02.png"
                                                          "img/layouts/act02/weavers-chambers-03.png"]}
                         :the-wetlands {:name "The Wetlands"
                                        :level 19
                                        :waypoint true
                                        :notes "Kill Oak in center, then go to the left side until the Waypoint is visible with the passage next to it, sometimes it’s on the right side. Oftentimes the side at which you enter Oak’s fort will tell you that the waypoint is on the opposite side of the fort."
                                        :layouts ["img/layouts/act02/the-wetlands-01.png"
                                                  "img/layouts/act02/the-wetlands-02.png"
                                                  "img/layouts/act02/the-wetlands-03.png"]}
                         :the-vaal-ruins {:name "The Vaal Ruins"
                                          :level 20
                                          :notes "Try to determine the direction, then zig and zag accordingly through the ruins."
                                          :layouts ["img/layouts/act02/the-vaal-ruins-01.png"
                                                    "img/layouts/act02/the-vaal-ruins-02.png"
                                                    "img/layouts/act02/the-vaal-ruins-03.png"]}
                         :the-dread-thicket {:name "The Dread Thicket"
                                             :level 21}
                         :the-northern-forest {:name "The Northern Forest"
                                               :level 21
                                               :waypoint true
                                               :notes "Go to the top right by following the shoreline."}
                         :the-caverns {:name "The Caverns"
                                       :level 22
                                       :waypoint true
                                       :layouts ["img/layouts/act02/the-caverns-01.png"
                                                 "img/layouts/act02/the-caverns-02.png"
                                                 "img/layouts/act02/the-caverns-03.png"
                                                 "img/layouts/act02/the-caverns-04.png"]}
                         :the-ancient-pyramid {:name "The Ancient Pyramid"
                                               :level 23
                                               :notes "Exits are usually diagonal from entrance."}})

(def act-03-definitions {:the-city-of-sarn {:name "The City of Saarn"
                                            :level 23
                                            :waypoint true}
                         :the-sarn-encampment {:name "The Sarn Encampment"
                                               :level nil
                                               :waypoint true}
                         :the-slums {:name "The Slums"
                                     :level 24
                                     :notes "Find the grates to the sewers, then take the stairs down, follow it until you have stairs up, then it’s fairly linear."
                                     :layouts ["img/layouts/act03/the-slums-01.png"
                                               "img/layouts/act03/the-slums-02.png"
                                               "img/layouts/act03/the-slums-03.png"
                                               "img/layouts/act03/the-slums-04.png"]}
                         :the-crematorium {:name "The Crematorium"
                                           :level 25
                                           :waypoint true
                                           :notes "Going left generally has a higher chance of success."
                                           :layouts ["img/layouts/act03/the-crematorium-01.png"
                                                     "img/layouts/act03/the-crematorium-02.png"
                                                     "img/layouts/act03/the-crematorium-03.png"
                                                     "img/layouts/act03/the-crematorium-04.png"
                                                     "img/layouts/act03/the-crematorium-05.png"]}
                         :the-sewers {:name "The Sewers"
                                      :level 26
                                      :waypoint true
                                      :notes "Pick up the bust before the waypoint, after it is another, up and left is the last bust, up and right is the exit."
                                      :layouts ["img/layouts/act03/the-sewers-01.png"]}
                         :the-marketplace {:name "The Marketplace"
                                           :level 26
                                           :waypoint true
                                           :notes "Usually up and right, go through the statue hall, check the waypoint (trial nearby it) and move on to find the exit."
                                           :layouts ["img/layouts/act03/the-marketplace-01.png"
                                                     "img/layouts/act03/the-marketplace-02.png"
                                                     "img/layouts/act03/the-marketplace-03.png"
                                                     "img/layouts/act03/the-marketplace-04.png"
                                                     "img/layouts/act03/the-marketplace-05.png"]}
                         :the-catacombs {:name "The Catacombs"
                                         :level 27}
                         :the-battlefront {:name "The Battlefront"
                                           :level 27
                                           :waypoint true
                                           :notes "First image is to spool and docks, second to Solaris."
                                           :layouts ["img/layouts/act03/the-battlefront-01.png"
                                                     "img/layouts/act03/the-battlefront-02.png"]}
                         :the-docks {:name "The Docks"
                                     :level 29
                                     :waypoint true
                                     :notes "Usually left side, sulphite is down some stairs."
                                     :layouts ["img/layouts/act03/the-docks-01.png"
                                               "img/layouts/act03/the-docks-02.png"
                                               "img/layouts/act03/the-docks-03.png"
                                               "img/layouts/act03/the-docks-04.png"]}
                         :the-solaris-temple-level-1 {:name "The Solaris Temple Level 1"
                                                      :level 27
                                                      :waypoint true
                                                      :notes "Linear layout, follow the carpet until the exit."
                                                      :layouts ["img/layouts/act03/the-solaris-temple-1-01.png"
                                                                "img/layouts/act03/the-solaris-temple-1-02.png"
                                                                "img/layouts/act03/the-solaris-temple-1-03.png"]}
                         :the-solaris-temple-level-2 {:name "The Solaris Temple Level 2"
                                                      :level 28
                                                      :waypoint true
                                                      :notes "Somewhat linear, follow carpet, can have dead ends."
                                                      :layouts ["img/layouts/act03/the-solaris-temple-2-01.png"
                                                                "img/layouts/act03/the-solaris-temple-2-02.png"
                                                                "img/layouts/act03/the-solaris-temple-2-03.png"]}
                         :the-ebony-barracks {:name "The Ebony Barracks"
                                              :level 29
                                              :waypoint true
                                              :notes "First image is to Lunaris, second to The Sceptre of God."
                                              :layouts ["img/layouts/act03/the-ebony-barracks-01.png"
                                                        "img/layouts/act03/the-ebony-barracks-02.png"]}
                         :the-lunaris-temple-level-1 {:name "The Lunaris Temple Level 1"
                                                      :level 29
                                                      :waypoint true
                                                      :notes "Follow the carpet, don't forget the waypoint"
                                                      :layouts ["img/layouts/act03/the-lunaris-temple-1-01.png"
                                                                "img/layouts/act03/the-lunaris-temple-1-02.png"]}
                         :the-lunaris-temple-level-2 {:name "The Lunaris Temple Level 2"
                                                      :level 30
                                                      :notes "Layout differs a lot, very generic map drawing. If you see stairs, go up these as this is the right path, then find more stairs, until you reach a larger area, there will be carts on both sides, pick the side where there is only one."
                                                      :layouts ["img/layouts/act03/the-lunaris-temple-2-01.png"
                                                                "img/layouts/act03/the-lunaris-temple-2-02.png"]}
                         :the-imperial-gardens {:name "The Imperial Gardens"
                                                :level 30
                                                :notes "Follow the road."
                                                :waypoint true
                                                :layouts ["img/layouts/act03/imperial-gardens-01.png"]}
                         :the-library {:name "The Library"
                                       :level 30
                                       :waypoint true}
                         :the-archives {:name "The Archives"
                                        :level 31}
                         :the-sceptre-of-god {:name "The Sceptre of God"
                                              :level 32
                                              :waypoint true
                                              :notes "The exits can often be found by travelling diagonally."}
                         :the-upper-sceptre-of-god {:name "The Upper Sceptre of God"
                                                    :level 33
                                                    :notes "Go up diagonally until you spot barricades at exit."}})

(def act-04-definitions {:the-aqueduct {:name "The Aqueduct"
                                        :level 33
                                        :waypoint true
                                        :notes "Go upstream and cross over when the path ends."}
                         :highgate {:name "Highgate"
                                    :level nil
                                    :waypoint true}
                         :the-dried-lake {:name "The Dried Lake"
                                          :level 34
                                          :layouts ["img/layouts/act04/the-dried-lake-01.png"
                                                    "img/layouts/act04/the-dried-lake-02.png"
                                                    "img/layouts/act04/the-dried-lake-03.png"]}
                         :the-mines-level-1 {:name "The Mines Level 1"
                                             :level 34
                                             :notes "Fairly linear, exit is usually in top left corner."
                                             :layouts ["img/layouts/act04/the-mines-1-01.png"
                                                       "img/layouts/act04/the-mines-1-02.png"]}
                         :the-mines-level-2 {:name "The Mines Level 2"
                                             :level 35
                                             :notes "Varied layout, and many dead ends and you should look for the spirit too, if you found the exit before the spirit, leave a portal and continue."
                                             :layouts ["img/layouts/act04/the-mines-2-01.png"
                                                       "img/layouts/act04/the-mines-2-02.png"
                                                       "img/layouts/act04/the-mines-2-03.png"
                                                       "img/layouts/act04/the-mines-2-04.png"]}
                         :the-crystal-veins {:name "The Crystal Veins"
                                             :level 36
                                             :waypoint true
                                             :notes "Loop around bottom right to go to the top left end. Use waypoint to go to Highgate if you made a portal to search for the spirit."
                                             :layouts ["img/layouts/act04/the-crystal-veins-01.png"
                                                       "img/layouts/act04/the-crystal-veins-02.png"
                                                       "img/layouts/act04/the-crystal-veins-03.png"]}
                         :daressos-dream {:name "Daresso's Dream"
                                          :level 37
                                          :notes "Move towards the top right, some dead ends."}
                         :the-grand-arena {:name "The Grand Arena"
                                           :level 38
                                           :waypoint true
                                           :notes "Move down left from waypoint, then follow path."}
                         :koams-dream {:name "Koam's Dream"
                                       :level 37
                                       :notes "Look for passages and bridges, follow those."
                                       :layouts ["img/layouts/act04/koams-dream-01.png"]}
                         :koams-stronghold {:name "Koam's Stronghold"
                                            :level 38
                                            :waypoint true
                                            :notes "Look for stairs and bridges, follow those."
                                            :layouts ["img/layouts/act04/koams-stronghold-01.png"]}
                         :the-belly-of-the-beast-level-1 {:name "The Belly of the Beast Level 1"
                                                          :level 38
                                                          :notes "Aim for top left, many dead ends"
                                                          :layouts ["img/layouts/act04/belly-of-the-beast-1-01.png"
                                                                    "img/layouts/act04/belly-of-the-beast-1-02.png"
                                                                    "img/layouts/act04/belly-of-the-beast-1-03.png"
                                                                    "img/layouts/act04/belly-of-the-beast-1-04.png"]}
                         :the-belly-of-the-beast-level-2 {:name "The Belly of the Beast Level 2"
                                                          :level 39
                                                          :notes "Aim for top left, many dead ends."
                                                          :layouts ["img/layouts/act04/belly-of-the-beast-2-01.png"
                                                                    "img/layouts/act04/belly-of-the-beast-2-02.png"
                                                                    "img/layouts/act04/belly-of-the-beast-2-03.png"]}
                         :the-harvest {:name "The Harvest"
                                       :level 40
                                       :waypoint true
                                       :notes "Always one boss on right side, two on the left, random boss position, waypoint is number 1, bosses are 2, 3 and 4."
                                       :layouts ["img/layouts/act04/the-harvest-01.png"]}
                         :the-ascent {:name "The Ascent"
                                      :level 40
                                      :notes "Go up and right, cross the bridge and follow the road to a small passage to the exit."
                                      :layouts ["img/layouts/act04/the-ascent-01.png"]}})

(def act-05-definitions {:the-slave-pens {:name "The Slave Pens"
                                          :level 41
                                          :waypoint true
                                          :notes "Go all the way down, then left."
                                          :layouts ["img/layouts/act05/the-slave-pens-01.png"
                                                    "img/layouts/act05/the-slave-pens-01.png"]}
                         :overseers-tower {:name "Overseer's Tower"
                                           :level nil
                                           :waypoint true}
                         :the-control-blocks {:name "The Control Blocks"
                                              :level 41
                                              :notes "Go top left for the miasmeter, then up and right."
                                              :layouts ["img/layouts/act05/the-control-blocks-01.png"]}
                         :oriath-square {:name "Oriath Square"
                                         :level 42
                                         :waypoint true
                                         :notes "Go top right until you cross the bridge, then down."
                                         :layouts ["img/layouts/act05/oriath-square-01.png"]}
                         :the-templar-courts {:name "The Templar Courts"
                                              :level 42
                                              :waypoint true
                                              :notes "Loop around clockwise."
                                              :layouts ["img/layouts/act05/the-templar-courts-01.png"]}
                         :the-chamber-of-innocence {:name "The Chamber of Innocence"
                                                    :level 43
                                                    :waypoint true
                                                    :notes "Go up and left, and spiral counterclockwise."
                                                    :layouts ["img/layouts/act05/chamber-of-innocence-01.png"]}
                         :the-torched-courts {:name "The Torched Courts"
                                              :level 44
                                              :notes "Loop around counterclockwise."
                                              :layouts ["img/layouts/act05/chamber-of-innocence-01.png"]}
                         :the-ruined-square {:name "The Ruined Square"
                                             :level 44
                                             :waypoint true
                                             :notes "One layout, multiple stops, in following steps."
                                             :layouts ["img/layouts/act05/the-ruined-square-01.png"]}
                         :the-ossuary {:name "The Ossuary"
                                       :level 44
                                       :notes "Loop around clockwise"
                                       :layouts ["img/layouts/act05/the-ossuary-01.png"]}
                         :the-reliquary {:name "The Reliquary"
                                         :level 44
                                         :waypoint true
                                         :notes "Find multiple quest items in corners of the zone."
                                         :layouts ["img/layouts/act05/the-reliquary-01.png"]}
                         :the-cathedral-rooftop {:name "The Cathedral Rooftop"
                                                 :level 45
                                                 :waypoint true
                                                 :notes "Before accessing this, and killing Kitava, consider running your first labyrinth before the resistance penalty."}})

(def zone-definitions (-> {:act-01 act-01-definitions}
                          (assoc :act-02 act-02-definitions)
                          (assoc :act-03 act-03-definitions)
                          (assoc :act-04 act-04-definitions)))
