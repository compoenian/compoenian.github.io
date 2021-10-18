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

(def zone-definitions (-> {:act-01 act-01-definitions}
                          (assoc :act-02 act-02-definitions)))
