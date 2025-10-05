export const abilityList = [
    { name: "Swift Step", location: "477915", flag: "hasDash" },
    { name: "Drifter's Cloak", location: "477971", flag: "hasBrolly" },
    { name: "Cling Grip", location: "478189", flag: "hasWalljump" },
    { name: "Needle Strike", location: "478510", flag: "hasChargeSlash" },
    { name: "Clawline", location: "478714", flag: "hasQuill" },
    { name: "Faydown Cloak", location: "479103", flag: "hasDoubleJump" },
    { name: "Silk Soar", location: "479288", flag: "hasSuperJump" },
    { name: "Sylphsong", location: "479654", flag: "HasSeenEvaHeal" },
    { name: "Needolin", location: "478199", flag: "hasNeedolin" },
];

export const bossList = [
    { name: "Moss Mother (1/3)", location: "476904", flag: "defeatedMossMother", flagType: "boolean" },
    { name: "Bell Beast", location: "477879", flag: "defeatedBellBeast", flagType: "boolean" },
    { name: "Lace (1/2)", location: "476915", flag: "defeatedLace1", flagType: "boolean" },
    { name: "Fourth Chorus", location: "477978", flag: "defeatedSongGolem", flagType: "boolean" },
    { name: "Savage Beastfly (1/2)", location: "478844", flag: "defeatedBoneFlyerGiant", flagType: "boolean" },
    { name: "Sister Splinter", location: "478137", flag: "defeatedSplinterQueen", flagType: "boolean" },
    { name: "Skull Tyrant (1/2)", location: "478136", flag: "skullKingDefeated", flagType: "boolean" },
    { name: "Skull Tyrant (2/2)", location: "479655", flag: "skullKingKilled", flagType: "boolean" },
    { name: "Moorwing", location: "478453", flag: "defeatedVampireGnatBoss", flagType: "boolean" },
    { name: "Craggler", location: "478088", flag: "Roof Crab", flagType: "journal" },
    { name: "Widow", location: "478138", flag: "visitedBellhartSaved", flagType: "boolean" },
    {
        name: "Moss Mother (2/3)", location: "478440", flag: "Moss Mother", flagType: "journal", check: (playerData) => {
            const kills = playerData?.EnemyJournalKillData?.list?.find((entry) => entry.Name === "Mossbone Mother"
            )?.Record.Kills || 0;
            return kills >= 3;
        }
    },
    { name: "Savage Beastfly (2/2)", location: "478019", flag: "defeatedBoneFlyerGiantGolemScene", flagType: "boolean" },
    { name: "Great Conchflies", location: "478506", flag: "defeatedCoralDrillers", flagType: "boolean" },
    { name: "Last Judge", location: "478545", flag: "defeatedLastJudge", flagType: "boolean" },
    { name: "Phantom", location: "478370", flag: "defeatedPhantom", flagType: "boolean" },
    { name: "Cogwork Dancers", location: "478606", flag: "defeatedCogworkDancers", flagType: "boolean" },
    { name: "Trobbio", location: "478690", flag: "defeatedTrobbio", flagType: "boolean" },
    { name: "Garmond and Zaza", location: "479361", flag: "Garmond_Zaza", flagType: "journal" },
    { name: "Signis and Gron", location: "478831", flag: "Dock Guard Thrower", flagType: "journal" },
    { name: "The Unravelled", location: "480354", flag: "wardBossDefeated", flagType: "boolean" },
    { name: "Disgraced Chef Lugoli", location: "478992", flag: "defeatedRoachkeeperChef", flagType: "boolean" },
    { name: "Father Of The Flame", location: "479155", flag: "defeatedWispPyreEffigy", flagType: "boolean" },
    { name: "Groal the Great", location: "478861", flag: "DefeatedSwampShaman", flagType: "boolean" },
    { name: "Voltvyrm", location: "479223", flag: "defeatedZapCoreEnemy", flagType: "boolean" },
    { name: "Raging Conchfly", location: "479227", flag: "defeatedCoralDrillerSolo", flagType: "boolean" },
    { name: "First Sinner", location: "479023", flag: "defeatedFirstWeaver", flagType: "boolean" },
    { name: "Broodmother", location: "479255", flag: "defeatedBroodMother", flagType: "boolean" },
    { name: "Second Sentinel", location: "479253", flag: "defeatedSongChevalierBoss", flagType: "boolean" },
    { name: "Shakra", location: "479822", flag: "Shakra", flagType: "journal" },
    { name: "Lace (2/2)", location: "479088", flag: "defeatedLaceTower", flagType: "boolean" },
    { name: "Grand Mother Silk", location: "479099", flag: "Silk Boss", flagType: "journal" },
    { name: "Bell Eater", location: "479264", flag: "Giant Centipede", flagType: "journal" },
    {
        name: "Moss Mother (3/3)", location: "481810", flag: "Moss Mother", flagType: "journal", check: (playerData) => {
            const kills = playerData?.EnemyJournalKillData?.list?.find((entry) => entry.Name === "Mossbone Mother"
            )?.Record.Kills || 0;
            return kills == 4;
        }
    },
    { name: "Lost Garmond", location: "479452", flag: "garmondBlackThreadDefeated", flagType: "boolean" },
    { name: "Crawfather", location: "479578", flag: "Crawfather", flagType: "journal" },
    { name: "Plasmified Zango", location: "479273", flag: "BlueScientistDead", flagType: "boolean" },
    { name: "Watcher At the Edge", location: "480326", flag: "Coral Warrior Grey", flagType: "journal" },
    { name: "Palestag", location: "479408", flag: "defeatedWhiteCloverstag", flagType: "boolean" },
    { name: "Clover Dancers", location: "479427", flag: "defeatedCloverDancers", flagType: "boolean" },
    { name: "Gurr The Outcast", location: "479467", flag: "defeatedAntTrapper", flagType: "boolean" },
    { name: "Tormented Trobbio", location: "479377", flag: "defeatedTormentedTrobbio", flagType: "boolean" },
    { name: "Pinstress", location: "479464", flag: "PinstressPeakBattleAccepted", flagType: "boolean" },
    { name: "Shrine Guardian Seth", location: "479401", flag: "defeatedSeth", flagType: "boolean" },
    { name: "Nyleth", location: "479404", flag: "defeatedFlowerQueen", flagType: "boolean" },
    { name: "Skarrsinger Karmelita", location: "479198", flag: "defeatedAntQueen", flagType: "boolean" },
    { name: "Crust King Khann", location: "479392", flag: "defeatedCoralKing", flagType: "boolean" },
    { name: "Lost Lace", location: "479471", flag: "Lost Lace", flagType: "journal" },
    { name: "Summoned Saviour", location: "479740", flag: "Abyss Mass", flagType: "journal" },
];

export const crestList = [
    { name: "Hunter's Crest", location: "", flag: "Hunter" },
    { name: "Hunter's Crest (Upgrade)", location: "478229", flag: "Hunter_v2" },
    { name: "Hunter's Crest (Final Upgrade)", location: "479653", flag: "Hunter_v3" },
    { name: "Reaper Crest", location: "478156", flag: "Reaper" },
    { name: "Wanderer Crest", location: "478240", flag: "Wanderer" },
    { name: "Beast Crest", location: "478020", flag: "Warrior" },
    { name: "Witch Crest", location: "478815", flag: "Witch" },
    { name: "Architect Crest", location: "478745", flag: "Toolmaster" },
    { name: "Shaman Crest", location: "479384", flag: "Spell" },
];

export const vesticrestList = [
    { name: "Vesticrest (+Yellow)", location: "479145", flag: "UnlockedExtraYellowSlot" },
    { name: "Vesticrest (+Blue)", location: "479434", flag: "UnlockedExtraBlueSlot" },
]

export const mapList = [
    { name: "Mosslands", location: "479514", flag: "HasMossGrottoMap" },
    { name: "The Marrow", location: "479515", flag: "HasBoneforestMap" },
    { name: "Deep Docks", location: "479516", flag: "HasDocksMap" },
    { name: "Hunter's March", location: "479518", flag: "HasHuntersNestMap" },
    { name: "Far Fields", location: "479517", flag: "HasWildsMap" },
    { name: "Greymoor", location: "479527", flag: "HasGreymoorMap" },
    { name: "Bellhart", location: "479529", flag: "HasBellhartMap" },
    { name: "Shellwood", location: "479530", flag: "HasShellwoodMap" },
    { name: "Wormways", location: "479523", flag: "HasCrawlMap" },
    { name: "Weavenest Atla", location: "478227", flag: "HasWeavehomeMap" },
    { name: "Blasted Steps", location: "479673", flag: "HasJudgeStepsMap" },
    { name: "Sinner's Road", location: "479526", flag: "HasHangMap" },
    { name: "Grand Gate", location: "478548", flag: "HasSongGateMap" },
    { name: "Underworks", location: "478551", flag: "HasCitadelUnderstoreMap" },
    { name: "Choral Chambers", location: "479733", flag: "HasCoralMap" },
    { name: "Whispering Vaults", location: "478628", flag: "HasLibraryMap" },
    { name: "Whiteward", location: "478920", flag: "HasWardMap" },
    { name: "Cogwork Core", location: "478612", flag: "HasCogMap" },
    { name: "Memorium", location: "479107", flag: "HasArboriumMap" },
    { name: "High Halls", location: "478907", flag: "HasHallsMap" },
    { name: "The Slab", location: "478468", flag: "HasSlabMap" },
    { name: "Mount Fay", location: "479525", flag: "HasPeakMap" },
    { name: "Bilewater", location: "479528", flag: "HasSwampMap" },
    { name: "Putrified Ducts", location: "479128", flag: "HasAqueductMap" },
    { name: "Sands of Karak", location: "479524", flag: "HasCoralMap" },
    { name: "The Cradle", location: "479095", flag: "HasCradleMap" },
    { name: "Verdania", location: "479382", flag: "HasCloverMap" },
    { name: "The Abyss", location: "479282", flag: "HasAbyssMap" },
];

export const needleUpgradeList = [
    { name: "#1: Sharpened Needle", flag: "nailUpgrades", index: 1 },
    { name: "#2: Shining Needle", flag: "nailUpgrades", index: 2 },
    { name: "#3: Hivesteel Needle", flag: "nailUpgrades", index: 3 },
    { name: "#4: Pale Steel Needle", flag: "nailUpgrades", index: 4 },
];

export const silkSkillsList = [
    { name: "Silkspear", location: "477871", flag: "hasNeedleThrow" },
    { name: "Thread Storm", location: "478061", flag: "hasThreadSphere" },
    { name: "Cross Stitch", location: "478371", flag: "hasParry" },
    { name: "Sharpdart", location: "479079", flag: "hasHarpoonDash" },
    { name: "Rune Rage", location: "479025", flag: "hasSilkBomb" },
    { name: "Pale Nails", location: "479606", flag: "hasSilkCharge" },
];

export const ToolList = [
    // red tools
    { name: "Straight Pin", location: "477899", saveName: "Straight Pin" },
    { name: "Threefold Pin", location: "478058", saveName: "Tri Pin" },
    { name: "Sting Shard", location: "477917", saveName: "Sting Shard" },
    { name: "Tacks", location: "478365", saveName: "Tack" },
    { name: "Longpin", location: "478158", saveName: "Harpoon" },
    { name: "Curveclaw", location: "478604", saveName: "Curve Claws" },
    { name: "Curvesickle", location: "479675", saveName: "Curve Claws Upgraded" },
    { name: "Throwing Ring", location: "479242", saveName: "Shakra Ring" },
    { name: "Pimpillo", location: "478964", saveName: "Pimpilo" },
    { name: "Conchcutter", location: "479230", saveName: "Conch Drill" },
    { name: "Silkshot (Forge Daughter)", location: "479364", saveName: "WebShot Forge" },
    { name: "Silkshot (Twelfth Architect)", location: "478732", saveName: "WebShot Architect" },
    { name: "Silkshot (Mount Fay)", location: "479497", saveName: "WebShot Weaver" },
    { name: "Delver's Drill", location: "478577", saveName: "Screw Attack" },
    { name: "Cogwork Wheel", location: "478725", saveName: "Cogwork Saw" },
    { name: "Cogfly", location: "478903", saveName: "Cogwork Flier" },
    { name: "Rosary Cannon", location: "478937", saveName: "Rosary Cannon" },
    { name: "Flintslate", location: "477986", saveName: "Flintstone" },
    { name: "Snare Setter", location: "479071", saveName: "Silk Snare" },
    { name: "Flea Brew", location: "478025", saveName: "Flea Brew" },
    { name: "Plasmium Phial", location: "478496", saveName: "Lifeblood Syringe" },
    { name: "Needle Phial", location: "478482", saveName: "Extractor" },
    { name: "Voltvessels", location: "479121", saveName: "Lightning Rod" },
    // blue tools
    { name: "Druid's Eye", location: "478255", saveName: "Mosscreep Tool 1" },
    { name: "Druid's Eyes", location: "480493", saveName: "Mosscreep Tool 2" },
    { name: "Magma Bell", location: "477918", saveName: "Lava Charm" },
    { name: "Warding Bell", location: "477935", saveName: "Bell Bind" },
    { name: "Pollip Pouch", location: "478294", saveName: "Poison Pouch" },
    { name: "Fractured Mask", location: "478607", saveName: "Fractured Mask" },
    { name: "Multibinder", location: "478345", saveName: "Multibind" },
    { name: "Weavelight", location: "479070", saveName: "White Ring" },
    { name: "Sawtooth Circlet", location: "478726", saveName: "Brolly Spike" },
    { name: "Injector Band", location: "479182", saveName: "Quickbind" },
    { name: "Spool Extender", location: "478881", saveName: "Spool Extender" },
    { name: "Resserve Bind", location: "479254", saveName: "Reserve Bind" },
    { name: "Claw Mirror", location: "478691", saveName: "Dazzle Bind" },
    { name: "Claw Mirrors", location: "479378", saveName: "Dazzle Bind Upgraded" },
    { name: "Memory Crystal", location: "478947", saveName: "Revenge Crystal" },
    { name: "Snitch Pick", location: "479201", saveName: "Thief Claw" },
    { name: "Volt Filament", location: "479224", saveName: "Zap Imbuement" },
    { name: "Quick Sling", location: "478848", saveName: "Quick Sling" },
    { name: "Wreath of Purity", location: "479133", saveName: "Maggot Charm" },
    { name: "Longclaw", location: "479240", saveName: "Longneedle" },
    { name: "Wispfire Lantern", location: "479156", saveName: "Wisp Lantern" },
    { name: "Egg of Flealia", location: "479439", saveName: "Flea Charm" },
    { name: "Pin Badge", location: "479466", saveName: "Pinstress Tool" },
    // yellow tools
    { name: "Compass", location: "477851", saveName: "Compass" },
    { name: "Shard Pendant", location: "477848", saveName: "Bone Necklace" },
    { name: "Magnetite Brooch", location: "477841", saveName: "Rosary Magnet" },
    { name: "Weighted Belt", location: "477947", saveName: "Weighted Anklet" },
    { name: "Barbed Bracelet", location: "478341", saveName: "Barbed Wire" },
    { name: "Dead Bug's Purse", location: "479081", saveName: "Dead Mans Purse" },
    { name: "Shell Satchel", location: "479996", saveName: "Shell Satchel" },
    { name: "Magnetite Dice", location: "479309", saveName: "Magnetite Dice" },
    { name: "Scuttlebrace", location: "478727", saveName: "Scuttlebrace" },
    { name: "Ascendant's Grip", location: "478878", saveName: "Wallcling" },
    { name: "Spider Strings", location: "479248", saveName: "Musician Charm" },
    { name: "Silkspeed Anklets", location: "478216", saveName: "Sprintmaster" },
    { name: "Thief's Mark", location: "478525", saveName: "Thief Charm" },
]

export const bellwayStationList = [
    { name: "Bone Bottom", location: "477883", flag: "UnlockedFastTravel" },
    { name: "The Marrow", location: "477882", flag: "UnlockedFastTravel" },
    { name: "Deep Docks", location: "477905", flag: "UnlockedDocksStation" },
    { name: "Far Fields", location: "477933", flag: "UnlockedBoneforestEastStation" },
    { name: "Greymoor", location: "478037", flag: "UnlockedGreymoorStation" },
    { name: "Bellhart", location: "478029", flag: "UnlockedBelltownStation" },
    { name: "Shellwood", location: "478178", flag: "UnlockedShellwoodStation" },
    { name: "Blasted Steps", location: "478308", flag: "UnlockedCoralTowerStation" },
    { name: "The Slab", location: "478390", flag: "UnlockedPeakStation" },
    { name: "Grand Bellway", location: "478374", flag: "UnlockedCityStation" },
    { name: "Bilewater", location: "478447", flag: "UnlockedShadowStation" },
    { name: "Putrified Ducts", location: "478411", flag: "UnlockedAqueductStation" },
];

export const ventricaStationList = [
    { name: "Terminus", location: "478426", flag: ["UnlockedArboriumTube", "UnlockedHangTube", "UnlockedSongTube", "UnlockedCityBellwayTube", "UnlockedUnderTube"] },
    { name: "Memorium", location: "478425", flag: "UnlockedArboriumTube" },
    { name: "High Halls", location: "478445", flag: "UnlockedHangTube" },
    { name: "First Shrine", location: "478427", flag: "UnlockedArboriumTube" },
    { name: "Choral Chambers", location: "478424", flag: "UnlockedSongTube" },
    { name: "Grand Bellway", location: "478376", flag: "UnlockedCityBellwayTube" },
    { name: "Underworks", location: "478422", flag: "UnlockedUnderTube" },
];


export const toolPouchList = [ // wip
    { name: "Tool Pouch #1", location: "477950", flag: "PurchasedPilgrimsRestToolPouch", flagType: "purchase" },
    { name: "Tool Pouch #2 (WIP)", location: "478252", flag: "Bone_12", flagType: "scene" },
    { name: "Tool Pouch #3", location: "479167", flag: "Journal", flagType: "quest" },
    { name: "Tool Pouch #4", location: "479436", flag: "FleasCollectedTargetOrder", flagType: "flea" }, // look at fleas collected target order
]

export const craftingKitUpgradeList = [
    { name: "Crafting Kit #1", location: "477919", flag: "PurchasedForgeToolKit", flagType: "purchase" },
    { name: "Crafting Kit #2", location: "478348", flag: "Crow Feathers", flagType: "quest" },
    { name: "Crafting Kit #3", location: "478728", flag: "PurchasedArchitectToolKit", flagType: "purchase" },
    { name: "Crafting Kit #4", location: "478533", flag: "purchasedGrindleToolKit", flagType: "purchase" },
];

export const memoryLocketList = [
    { name: "#1 Moss Grotto", location: "478222", flag: "Rock Rollers", flagType: "quest" },
    { name: "#2 The Marrow", location: "478246", flag: "Bone_18", flagType: "scene" }, // Collectable Item Pickup
    { name: "#3 Far Fields (1/2)", location: "477953", flag: "PurchasedPilgrimsRestMemoryLocket", flagType: "boolean" },
    { name: "#4 Far Fields (2/2)", location: "479196", flag: "Bone_East_25", flagType: "scene" },
    { name: "#5 Greymoor (1/2)", location: "478035", flag: "Greymoor_16", flagType: "scene" },
    { name: "#6 Greymoor (2/2)", location: "478039", flag: "Halfway_01", flagType: "scene" },
    { name: "#7 Hunter's March", location: "478017", flag: "Ant_20", flagType: "scene" },
    { name: "#8 Bellhart (1/2)", location: "478204", flag: "PurchasedBelltownMemoryLocket", flagType: "boolean" },
    { name: "#9 Bellhart (2/2)", location: "478212", flag: "Belltown", flagType: "scene" },
    { name: "#10 Blasted Steps", location: "478502", flag: "Coral_02", flagType: "scene" }, // Collectable Item Pickup (1)
    { name: "#11 Wormways", location: "478493", flag: "Crawl_09", flagType: "scene" },
    { name: "#12 The Slab", location: "479017", flag: "Slab_Cell_Quiet", flagType: "scene" },
    { name: "#13 Sands of Karak", location: "479204", flag: "Coral_23", flagType: "scene" },
    { name: "#14 Memorium", location: "479110", flag: "Arborium_05", flagType: "scene" },
    { name: "#15 Bilewater (1/2)", location: "478787", flag: "Shadow_20", flagType: "scene" }, // Collectable Item Pickup (1) OR Collectable Item Pickup
    { name: "#16 Bilewater (2/2)", location: "478851", flag: "Shadow_27", flagType: "scene" }, // Sack Corpse Pickup
    { name: "#17 Whispering Vaults", location: "478676", flag: "Library_08", flagType: "scene" },
    { name: "#18 Underworks", location: "478571", flag: "Under_08", flagType: "scene" },
    { name: "#19 Deep Docks", location: "478836", flag: "Dock_13", flagType: "scene" },
    { name: "#20 Choral Chambers", location: "478372", flag: "Bellway_City", flagType: "scene" },
];

export const simpleKeysList = [
    { name: "#1 Bone Bottom", location: "477839", flag: "PurchasedBonebottomFaithToken", flagType: "boolean" }, //true
    { name: "#2 Choral Chambers", location: "478880", flag: "MerchantEnclaveSimpleKey", flagType: "boolean" }, // true
    { name: "#3 Sinner's Road", location: "478280", flag: "Dust_06", flagType: "scene" }, // ID is Collectable Item SimpleKey
    { name: "#4 Sands of Karak", location: "479215", flag: "Bellshrine_Coral", flagType: "scene" } // ID is Collectable Item Pickup
];

export const spoolFragmentList = [
    { name: "#1 Moss Grotto", location: "478080", flag: "Bone_11b", flagType: "scene" },
    { name: "#2 Deep Docks (1/2)", location: "477926", flag: "Bone_East_13", flagType: "scene" },
    { name: "#3 Deep Docks (2/2)", location: "478825", flag: "Dock_03c", flagType: "scene" },
    { name: "#4 Choral Chambers", location: "479249", flag: "MerchantEnclaveSpoolPiece", flagType: "boolean" },
    { name: "#5 Greymoor (2/2)", location: "478263", flag: "Greymoor_02", flagType: "scene" },
    { name: "#6 Bellhart", location: "478347", flag: "PurchasedBelltownSpoolSegment", flagType: "boolean" },
    { name: "#7 Weavenest Atla", location: "478230", flag: "Weave_11", flagType: "scene" },
    { name: "#8 The Slab", location: "478475", flag: "Peak_01", flagType: "scene" },
    { name: "#9 Underworks (1/2)", location: "478931", flag: "Library_11b", flagType: "scene" },
    { name: "#10 Underworks (2/2)", location: "478704", flag: "Under_10", flagType: "scene" },
    { name: "#11 Grand Gate", location: "478586", flag: "Song_19_entrance", flagType: "scene" },
    { name: "#12 Memorium", location: "479117", flag: "Arborium_09", flagType: "scene" },
    { name: "#13 Whiteward (1/2)", location: "479317", flag: "Ward_01", flagType: "scene" },
    { name: "#14 Whiteward (2/2)", location: "479180", flag: "Save Sherma", flagType: "quest" },
    { name: "#15 Blasted Steps (1/2)", location: "478527", flag: "purchasedGrindleSpoolPiece", flagType: "boolean" },
    { name: "#16 Blasted Steps (2/2)", location: "478820", flag: "MetCaravanTroupeLeaderJudge", flagType: "boolean" }, 
    { name: "#17 High Halls", location: "478909", flag: "Hang_03_top", flagType: "scene" },
    { name: "#18 Cogwork Core", location: "478618", flag: "Cog_07", flagType: "scene" },
];

export const objectiveList = [
    { name: "The Great Citadel", location: "477834", saveName: "Citadel Seeker", flagType: "quest" },
    { name: "The Threadspun Town", location: "478028", saveName: "The Threadspun Town", flagType: "quest" },
    { name: "Grand Gate", location: "478544", saveName: "Grand Gate Bellshrines", flagType: "quest" },
    { name: "Silent Halls", location: "478547", saveName: "Citadel Investigate", flagType: "quest" },
    { name: "Pharloom's Crown", location: "479087", saveName: "Citadel Ascent", flagType: "quest" },
    { name: "Conductor's Melody", location: "478609", saveName: "HasMelodyConductor", flagType: "boolean" },
    { name: "Architect's Melody", location: "478610", saveName: "HasMelodyArchitect", flagType: "boolean" },
    { name: "Vaultkeeper's Melody", location: "478611", saveName: "HasMelodyLibrarian", flagType: "boolean" },
    { name: "Pale Monarch", location: "479100", saveName: "Silk Defeat Snare", flagType: "quest" },
    { name: "Soul Snare", location: "479260", saveName: "Soul Snare", flagType: "quest" },
    { name: "Beast in the Bells", location: "479263", saveName: "Bellbeast Rescue", flagType: "quest" },   
    { name: "After the Fall", location: "479261", saveName: "Black Thread Pt0", flagType: "quest" },
    { name: "Awaiting the End", location: "479262", saveName: "Black Thread Pt1 Shamans", flagType: "quest" },
    { name: "The Dark Below", location: "479267", saveName: "Diving Bell Pt3 Descend", flagType: "quest" },
    { name: "Return to Pharloom", location: "479283", saveName: "Black Thread Pt3 Escape", flagType: "quest" },
    { name: "Spell Seeker", location: "479385", saveName: "Black Thread Pt4 Return", flagType: "quest" },
    { name: "The Old Hearts", location: "479387", saveName: "Black Thread Pt5 Heart", flagType: "quest" },
    { name: "Heart of Might", location: "479388", saveName: "CollectedHeartCoral", flagType: "boolean" },
    { name: "Heart of the Woods", location: "479389", saveName: "CollectedHeartFlower", flagType: "boolean" },
    { name: "Heart of the Wild", location: "479390", saveName: "CollectedHeartHunter", flagType: "boolean" },
    { name: "Last Dive", location: "479431", saveName: "Lost Lace", flagType: "journal" },    
];

export const questList = [
    { name: "Bone Bottom Repairs", location: "477884", saveName: "Building Materials" },
    { name: "Garb of the Pilgrims", location: "477885", saveName: "Pilgrim Rags" },
    { name: "A Lifesaving Bridge", location: "478220", saveName: "Building Materials (Bridge)" },
    { name: "Volatile Flintbeetles", location: "478221", saveName: "Rock Rollers" },
    { name: "An Icon of Hope", location: "478839", saveName: "Building Materials (Statue)" },
    { name: "The Lost Fleas", location: "477857", saveName: "Save the Fleas" },
    { name: "Flexile Spines", location: "477964", saveName: "Brolly Get" },
    { name: "Fastest in Pharloom", location: "479193", saveName: "Sprintmaster Race" },
    { name: "Berry Picking", location: "477876", saveName: "Mossberry Collection 1" },
    { name: "Bugs of Pharloom", location: "478042", saveName: "Journal" },
    { name: "Rite of the Pollip", location: "478173", saveName: "Shell Flowers" },
    { name: "Silver Bells", location: "478314", saveName: "Shiny Bell Goomba" },
    { name: "My Missing Courier", location: "478207", saveName: "Save Courier Short" },
    { name: "Crawbug Clearing", location: "478348", saveName: "Crow Feathers" },
    { name: "Pinmaster's Oil", location: "478211", saveName: "A Pinsmiths Tools" },
    { name: "The Terrible Tyrant", location: "478223", saveName: "Skull King" },
    { name: "Restoration of Bellhart", location: "478797", saveName: "Belltown House Start" },
    { name: "Bellhart's Glory", location: "478797", saveName: "Belltown House Mid" },
    { name: "Great Taste of Pharloom", location: "478889", saveName: "Great Gourmand" },
    { name: "Building up Songclave", location: "478631s", saveName: "Songclave Donation 1" },
    { name: "Fine Pins", location: "478633", saveName: "Fine Pins" },
    { name: "The Wandering Merchant", location: "478634", saveName: "Save City Merchant" },
    { name: "The Lost Merchant", location: "479244", saveName: "Save City Merchant Bridge" },
    { name: "My Missing Courier", location: "478207", saveName: "Save Courier Short" },
    { name: "My Missing Brother", location: "478798", saveName: "Save Courier Tall" },
    { name: "Balm for the Wounded", location: "478933", saveName: "Save Sherma" },
    { name: "Savage Beastfly", location: "478799", saveName: "Beastfly Hunt" },
    { name: "Cloaks of the Choir", location: "478934", saveName: "Song Pilgrim Cloaks" },
    { name: "Strengthening Songclave", location: "479239", saveName: "Songclave Donation 2" },
    { name: "The Wailing Mother", location: "479246", saveName: "Broodmother Hunt" },
    { name: "Broodfeast", location: "478865", saveName: "Huntress Quest" },
    { name: "Trail's End", location: "479237", saveName: "Shakra Final Quest" },
    { name: "Rite of Rebirth", location: "478792", saveName: "Wood Witch Curse" },
    { name: "Infestation Operation", location: "478814", saveName: "Doctor Curse Cure" },
    { name: "Silk and Soul", location: "479243", saveName: "Soul Snare Pre" },
    { name: "Dark Hearts", location: "479448", saveName: "Destroy Thread Cores" },
    { name: "Pain, Anguish, and Misery", location: "479370", saveName: "Tormented Trobbio" },
    { name: "Fatal Resolve", location: "479465", saveName: "Pinstress Battle" },
    { name: "Ecstasy of the End", location: "479641", saveName: "Flea Games" },
    { name: "Passing of the Age", location: "479142", saveName: "Mr Mushroom" },
    { name: "Alchemist's Assistant", location: "478482", saveName: "Extractor Blue" },
    { name: "Advanced Alchemy", location: "479278", saveName: "Extractor Blue Worms" },
    { name: "The Hidden Hunter", location: "479446", saveName: "Ant Trapper" },
    { name: "Hero's Call", location: "479445", saveName: "Garmond Black Threaded" },
    { name: "Final Audience", location: "479245", saveName: "Song Knight" },
    { name: "Roach Guts", location: "478356", saveName: "Roach Killing" },
    { name: "Bone Bottom Supplies", location: "478313", saveName: "Courier Delivery Bonebottom" },
    { name: "Fleatopia Supplies", location: "478313", saveName: "Courier Delivery Fleatopia" },
    { name: "Songclave Supplies", location: "478313", saveName: "Courier Delivery Songclave" },
    { name: "Liquid Lacquer", location: "479199", saveName: "Courier Delivery Mask Maker" },
    { name: "Pilgrim's Rest Supplies", location: "478313", saveName: "Courier Delivery Pilgrims Rest" },
    { name: "Queen's Egg", location: "479177", saveName: "Courier Delivery Dustpens Slave" },
    { name: "A Vassal Lost", location: "479727", saveName: "Steel Sentinel Pt2" },
];

export const maskShardList = [
    { name: "#1 Moss Grotto", location: "477840", flag: "PurchasedBonebottomHeartPiece", flagType: "boolean" },
    { name: "#2 Far Fields (1/3)", location: "477975", flag: "Bone_East_20", flagType: "scene" },
    { name: "#3 Far Fields (2/3)", location: "478841", flag: "Bone_East_LavaChallenge", flagType: "scene" }, // Heart piece (1)
    { name: "#4 Far Fields (3/3)", location: "479194", flag: "Sprintmaster Race", flagType: "quest" },
    { name: "#5 Deep Docks", location: "477901", flag: "Dock_08", flagType: "scene" },
    { name: "#6 Wormways", location: "478091", flag: "Crawl_02", flagType: "scene" },
    { name: "#7 Bellhart (1/3)", location: "478800", flag: "Beastfly Hunt", flagType: "quest" },
    { name: "#8 Bellhart (2/3)", location: "479447", flag: "Ant Trapper", flagType: "quest" },
    { name: "#9 Bellhart (3/3)", location: "479449", flag: "Destroy Thread Cores", flagType: "quest" },
    { name: "#10 Shellwood", location: "478177", flag: "Shellwood_14", flagType: "scene" },
    { name: "#11 Weavenest Atla", location: "478233", flag: "Weave_05b", flagType: "scene" },
    { name: "#12 Blasted Steps", location: "478498", flag: "Coral_19b", flagType: "scene" },
    { name: "#13 Choral Chambers", location: "478879", flag: "MerchantEnclaveSocket", flagType: "boolean" },
    { name: "#14 Cogwork Core", location: "478615", flag: "Song_09", flagType: "scene" },
    { name: "#15 The Slab", location: "479001", flag: "Slab_17", flagType: "scene" },
    { name: "#16 Mount Fay (1/2)", location: "479460", flag: "Peak_04c", flagType: "scene" }, // double check
    { name: "#17 Mount Fay (2/2)", location: "479038", flag: "Peak_06", flagType: "scene" }, // double check
    { name: "#18 Whispering Vaults", location: "478671", flag: "Library_05", flagType: "scene" },
    { name: "#19 Bilewater", location: "478849", flag: "Shadow_13", flagType: "scene" },
    { name: "#20 Wisp Thicket", location: "479151", flag: "Wisp_07", flagType: "scene" },
];

export const paleOilList = [
    { name: "Pale Oil #1", location: "478668", flag: "Library_03", flagType: "scene" },
    { name: "Pale Oil #2", location: "478889", flag: "Great Gourmand", flagType: "quest" },
    { name: "Pale Oil #3", location: "479444" , flag: "Flea Games", flagType: "quest" },
];

export const fleaList = [ 
    { name: "#1 The Marrow", location: "477890", flag: "SavedFlea_Bone_06", flagType: "boolean" },
    { name: "#2 Deep Docks (1/3)", location: "477907", flag: "SavedFlea_Dock_16", flagType: "boolean" }, 
    { name: "#3 Deep Docks (2/3)", location: "477916", flag: "SavedFlea_Bone_East_05", flagType: "boolean" }, 
    { name: "#4 Deep Docks (3/3)", location: "478437", flag: "SavedFlea_Dock_03d", flagType: "boolean" }, 
    { name: "#5 Far Fields (1/2)", location: "477940", flag: "SavedFlea_Bone_East_17b", flagType: "boolean" },
    { name: "#6 Far Fields (2/2)", location: "478219", flag: "SavedFlea_Bone_East_10_Church", flagType: "boolean" },
    { name: "#7 Hunters March", location: "477999", flag: "SavedFlea_Ant_03", flagType: "boolean" },
    { name: "#8 Greymoor (1/2)", location: "478145", flag: "SavedFlea_Greymoor_15b", flagType: "boolean" }, 
    { name: "#9 Greymoor (2/2)", location: "478287", flag: "SavedFlea_Greymoor_06", flagType: "boolean" },
    { name: "#10 Sinner's Road", location: "478360", flag: "SavedFlea_Dust_12", flagType: "boolean" },
    { name: "#11 Whispering Vaults", location: "478402", flag: "SavedFlea_Library_01", flagType: "boolean" },
    { name: "#12 Bilewater (1/3)", location: "478378", flag: "SavedFlea_Dust_09", flagType: "boolean" },
    { name: "#13 Bilewater (2/3)", location: "478408", flag: "SavedFlea_Shadow_10", flagType: "boolean" }, 
    { name: "#14 Bilewater (3/3)", location: "478443", flag: "SavedFlea_Shadow_28", flagType: "boolean" }, 
    { name: "#15 Underworks (1/2)", location: "478420", flag: "SavedFlea_Under_21", flagType: "boolean" },
    { name: "#16 Underworks (2/2)", location: "478419", flag: "SavedFlea_Under_23", flagType: "boolean" },
    { name: "#17 Blasted Steps", location: "478386", flag: "SavedFlea_Coral_35", flagType: "boolean" },
    { name: "#18 Bellhart", location: "478193", flag: "SavedFlea_Belltown_04", flagType: "boolean" },
    { name: "#19 Wormways", location: "478450", flag: "SavedFlea_Crawl_06", flagType: "boolean" },
    { name: "#20 Coral Chambers (1/2)", location: "478416", flag: "SavedFlea_Song_11", flagType: "boolean" },
    { name: "#21 Coral Chambers (2/2)", location: "478398", flag: "SavedFlea_Song_14", flagType: "boolean" },
    { name: "#22 The Slab (1/2)", location: "478393", flag: "SavedFlea_Slab_Cell", flagType: "boolean" },
    { name: "#23 The Slab (2/2)", location: "478392", flag: "SavedFlea_Slab_06", flagType: "boolean" },
    { name: "#24 Mount Fay", location: "478380", flag: "SavedFlea_Peak_05c", flagType: "boolean" },
    { name: "#25 Songclave", location: "478404", flag: "SavedFlea_Library_09", flagType: "boolean" },
    { name: "#26 Sands of Karak", location: "478385", flag: "SavedFlea_Coral_24", flagType: "boolean" },
    { name: "#27 Shellwood", location: "478176", flag: "SavedFlea_Shellwood_03", flagType: "boolean" },
    { name: "#28 Memorium", location: "478413", flag: "tamedGiantFlea", flagType: "boolean" },
    { name: "#29 Kratt NPC", location: "478271", flag: "Greymoor_24", flagType: "scene" }, // NPC Value two
    { name: "#30 Vog NPC", location: "479138", flag: "GLOBAL_SHARED", flagType: "scene" }, // ID Caravan Troupe Hunter
];

export const craftMetalList = [
    { name: "#1 Moss Grotto", location: "477838", flag: "PurchasedBonebottomToolMetal", flagType: "purchase" },
    { name: "#2 The Marrow", location: "477894", flag: "Bone_07", flagType: "scene" }, // tool_metal_deposit
    { name: "#3 Deep Docks", location: "477937", flag: "CollectedToolMetal", flagType: "purchase" },
    { name: "#4 Blasted Steps", location: "478541", flag: "Coral_32", flagType: "scene" },
    { name: "#5 Songclave", location: "479250", flag: "MerchantEnclaveToolMetal", flagType: "purchase" },
    { name: "#6 Underworks", location: "478711", flag: "Under_19b", flagType: "scene" },
    { name: "#7 Putrified Ducts", location: "479139", flag: "Aqueduct_05", flagType: "scene" },
    { name: "#8 Wisp Thicket", location: "479157", flag: "Wisp_05", flagType: "scene" },
]

