export const abilityList = [
    { name: "Swift Step", location: "", flag: "hasDash" },
    { name: "Drifter's Cloak", location: "", flag: "hasBrolly" },
    { name: "Cling Grip", location: "", flag: "hasWalljump" },
    { name: "Needle Strike", location: "", flag: "hasChargeSlash" },
    { name: "Clawline", location: "", flag: "hasQuill" },
    { name: "Faydown Cloak", location: "", flag: "hasDoubleJump" },
    { name: "Silk Soar", location: "", flag: "hasSuperJump" },
    { name: "Sylphsong", location: "", flag: "HasSeenEvaHeal" },
    { name: "Needolin", location: "", flag: "hasNeedolin" },
];

export const bossList = [
    { name: "Moss Mother (1/2)", location: "Moss Grotto", flag: "defeatedMossMother", flagType: "boolean" },
    { name: "Bell Beast", location: "Test", flag: "defeatedBellBeast", flagType: "boolean" },
    { name: "Lace (1/2)", location: "", flag: "defeatedLace1", flagType: "boolean" },
    { name: "Fourth Chorus", location: "", flag: "defeatedSongGolem", flagType: "boolean" },
    { name: "Savage Beastfly (1/2)", location: "", flag: "defeatedBoneFlyerGiant", flagType: "boolean" },
    { name: "Sister Splinter", location: "", flag: "defeatedSplinterQueen", flagType: "boolean" },
    { name: "Skull Tyrant (1/2)", location: "", flag: "skullKingDefeated", flagType: "boolean" },
    { name: "Skull Tyrant (2/2)", location: "", flag: "skullKingKilled", flagType: "boolean" },
    { name: "Moorwing", location: "", flag: "defeatedVampireGnatBoss", flagType: "boolean" },
    { name: "Craggler", location: "", flag: "Roof Crab", flagType: "journal" },
    { name: "Widow", location: "", flag: "visitedBellhartSaved", flagType: "boolean" },
    {
        name: "Moss Mother (2/3)", location: "", flag: "Moss Mother", flagType: "journal", check: (playerData) => {
            const kills = playerData?.EnemyJournalKillData?.list?.find((entry) => entry.Name === "Mossbone Mother"
            )?.Record.Kills || 0;
            return kills == 3;
        }
    },
    { name: "Savage Beastfly (2/2)", location: "", flag: "defeatedBoneFlyerGiantGolemScene", flagType: "boolean" },
    { name: "Great Conchflies", location: "", flag: "defeatedCoralDrillers", flagType: "boolean" },
    { name: "Last Judge", location: "", flag: "defeatedLastJudge", flagType: "boolean" },
    { name: "Phantom", location: "", flag: "defeatedPhantom", flagType: "boolean" },
    { name: "Cogwork Dancers", location: "", flag: "defeatedCogworkDancers", flagType: "boolean" },
    { name: "Trobbio", location: "", flag: "defeatedTrobbio", flagType: "boolean" },
    { name: "Garmond and Zaza", location: "", flag: "Garmond_Zaza", flagType: "journal" },
    { name: "Signis and Gron", location: "", flag: "Dock Guard Thrower", flagType: "journal" },
    { name: "The Unravelled", location: "", flag: "wardBossDefeated", flagType: "boolean" },
    { name: "Disgraced Chef Lugoli", location: "", flag: "defeatedRoachkeeperChef", flagType: "boolean" },
    { name: "Father Of The Flame", location: "", flag: "defeatedWispPyreEffigy", flagType: "boolean" },
    { name: "Groal the Great", location: "", flag: "DefeatedSwampShaman", flagType: "boolean" },
    { name: "Voltvyrm", location: "", flag: "defeatedZapCoreEnemy", flagType: "boolean" },
    { name: "Raging Conchfly", location: "", flag: "defeatedCoralDrillerSolo", flagType: "boolean" },
    { name: "First Sinner", location: "", flag: "defeatedFirstWeaver", flagType: "boolean" },
    { name: "Broodmother", location: "", flag: "defeatedBroodMother", flagType: "boolean" },
    { name: "Second Sentinel", location: "", flag: "defeatedSongChevalierBoss", flagType: "boolean" },
    { name: "Shakra", location: "", flag: "Shakra", flagType: "journal" },
    { name: "Lace (2/2)", location: "", flag: "defeatedLaceTower", flagType: "boolean" },
    { name: "Grand Mother Silk", location: "", flag: "Silk Boss", flagType: "journal" },
    { name: "Bell Eater", location: "", flag: "Giant Centipede", flagType: "journal" },
    {
        name: "Moss Mother (3/3)", location: "", flag: "Moss Mother", flagType: "journal", check: (playerData) => {
            const kills = playerData?.EnemyJournalKillData?.list?.find((entry) => entry.Name === "Mossbone Mother"
            )?.Record.Kills || 0;
            return kills == 4;
        }
    },
    { name: "Lost Garmond", location: "", flag: "garmondBlackThreadDefeated", flagType: "boolean" },
    { name: "Crawfather", location: "", flag: "Crawfather", flagType: "journal" },
    { name: "Plasmified Zongo", location: "", flag: "Blue Assistant", flagType: "journal" },
    { name: "Watcher At the Edge", location: "", flag: "Song Knight", flagType: "journal" },
    { name: "Palestag", location: "", flag: "defeatedWhiteCloverstag", flagType: "boolean" },
    { name: "Clover Dancers", location: "", flag: "defeatedCloverDancers", flagType: "boolean" },
    { name: "Gurr The Outcast", location: "", flag: "defeatedAntTrapper", flagType: "boolean" },
    { name: "Tormented Trobbio", location: "", flag: "defeatedTormentedTrobbio", flagType: "boolean" },
    { name: "Pinstress", location: "", flag: "PinstressPeakBattleAccepted", flagType: "boolean" },
    { name: "Shrine Guardian Seth", location: "", flag: "defeatedSeth", flagType: "boolean" },
    { name: "Nyleth", location: "", flag: "defeatedFlowerQueen", flagType: "boolean" },
    { name: "Skarrsinger Karmelita", location: "", flag: "defeatedAntQueen", flagType: "boolean" },
    { name: "Crust King Khann", location: "", flag: "defeatedCoralKing", flagType: "boolean" },
    { name: "Lost Lace", location: "", flag: "Lost Lace", flagType: "journal" },
    { name: "Summoned Saviour", location: "", flag: "Growstone", flagType: "collectable" },
];

export const crestList = [
    { name: "Hunter's Crest", location: "", flag: "Hunter" },
    { name: "Hunter's Crest (Upgrade)", location: "", flag: "Hunter_v2" },
    { name: "Hunter's Crest (Final Upgrade)", location: "", flag: "Hunter_v3" },
    { name: "Reaper Crest", location: "", flag: "Reaper" },
    { name: "Wanderer Crest", location: "", flag: "Wanderer" },
    { name: "Beast Crest", location: "", flag: "Warrior" },
    { name: "Witch Crest", location: "", flag: "Witch" },
    { name: "Architect Crest", location: "", flag: "Toolmaster" },
    { name: "Shaman Crest", location: "", flag: "Spell" },
];

export const vesticrestList = [
    { name: "Vesticrest (Extra Yellow Slot)", location: "", flag: "UnlockedExtraYellowSlot" },
    { name: "Vesticrest (Extra Blue Slot)", location: "", flag: "UnlockedExtraBlueSlot" },
]

export const mapList = [
    { name: "Mosslands", location: "", flag: "HasMossGrottoMap" },
    { name: "The Marrow", location: "", flag: "HasBoneforestMap" },
    { name: "Deep Docks", location: "", flag: "HasDocksMap" },
    { name: "Hunter's March", location: "", flag: "HasHuntersNestMap" },
    { name: "Far Fields", location: "", flag: "HasWildsMap" },
    { name: "Greymoor", location: "", flag: "HasGreymoorMap" },
    { name: "Bellhart", location: "", flag: "HasBellhartMap" },
    { name: "Shellwood", location: "", flag: "HasShellwoodMap" },
    { name: "Wormways", location: "", flag: "HasCrawlMap" },
    { name: "Weavenest Atla", location: "", flag: "HasWeavehomeMap" },
    { name: "Blasted Steps", location: "", flag: "HasJudgeStepsMap" },
    { name: "Sinner's Road", location: "", flag: "HasHangMap" },
    { name: "Grand Gate", location: "", flag: "HasSongGateMap" },
    { name: "Underworks", location: "", flag: "HasCitadelUnderstoreMap" },
    { name: "Choral Chambers", location: "", flag: "HasCoralMap" },
    { name: "Whispering Vaults", location: "", flag: "HasLibraryMap" },
    { name: "Whiteward", location: "", flag: "HasWardMap" },
    { name: "Cogwork Core", location: "", flag: "HasCogMap" },
    { name: "Memorium", location: "", flag: "HasArboriumMap" },
    { name: "High Halls", location: "", flag: "HasHallsMap" },
    { name: "The Slab", location: "", flag: "HasSlabMap" },
    { name: "Mount Fay", location: "", flag: "HasPeakMap" },
    { name: "Bilewater", location: "", flag: "HasSwampMap" },
    { name: "Putrified Ducts", location: "", flag: "HasAqueductMap" },
    { name: "Sands of Karak", location: "", flag: "HasCoralMap" },
    { name: "The Cradle", location: "", flag: "HasCradleMap" },
    { name: "Verdania", location: "", flag: "HasCloverMap" },
    { name: "The Abyss", location: "", flag: "HasAbyssMap" },
];

export const needleUpgradeList = [
    { name: "#1: Sharpened Needle", flag: "nailUpgrades", index: 1 },
    { name: "#2: Shining Needle", flag: "nailUpgrades", index: 2 },
    { name: "#3: Hivesteel Needle", flag: "nailUpgrades", index: 3 },
    { name: "#4: Pale Steel Needle", flag: "nailUpgrades", index: 4 },
];

export const silkSkillsList = [
    { name: "Silkspear", location: "", flag: "hasNeedleThrow" },
    { name: "Thread Storm", location: "", flag: "hasThreadSphere" },
    { name: "Cross Stitch", location: "", flag: "hasParry" },
    { name: "Sharpdart", location: "", flag: "hasHarpoonDash" },
    { name: "Rune Rage", location: "", flag: "hasSilkBomb" },
    { name: "Pale Nails", location: "", flag: "hasSilkCharge" },
];

export const ToolList = [
    // red tools
    { name: "Straight Pin", location: "", saveName: "Straight Pin" },
    { name: "Threefold Pin", location: "", saveName: "Tri Pin" },
    { name: "Sting Shard", location: "", saveName: "Sting Shard" },
    { name: "Tacks", location: "", saveName: "Tack" },
    { name: "Longpin", location: "", saveName: "Harpoon" },
    { name: "Curveclaw", location: "", saveName: "Curve Claws" },
    { name: "Curvesickle", location: "", saveName: "Curve Claws Upgraded" },
    { name: "Throwing Ring", location: "", saveName: "Shakra Ring" },
    { name: "Pimpillo", location: "", saveName: "Pimpilo" },
    { name: "Conchcutter", location: "", saveName: "Conch Drill" },
    { name: "Silkshot (Forge Daughter)", location: "", saveName: "WebShot Forge" },
    { name: "Silkshot (Twelfth Architect)", location: "", saveName: "WebShot Architect" },
    { name: "Silkshot (Mount Fay)", location: "", saveName: "WebShot Weaver" },
    { name: "Delver's Drill", location: "", saveName: "Screw Attack" },
    { name: "Cogwork Wheel", location: "", saveName: "Cogwork Saw" },
    { name: "Cogfly", location: "", saveName: "Cogwork Flier" },
    { name: "Rosary Cannon", location: "", saveName: "Rosary Cannon" },
    { name: "Flintslate", location: "", saveName: "Flintstone" },
    { name: "Snare Setter", location: "", saveName: "Silk Snare" },
    { name: "Flea Brew", location: "", saveName: "Flea Brew" },
    { name: "Plasmium Phial", location: "", saveName: "Lifeblood Syringe" },
    { name: "Needle Phial", location: "", saveName: "Extractor" },
    { name: "Voltvessels", location: "", saveName: "Lightning Rod" },
    // blue tools
    { name: "Druid's Eye", location: "", saveName: "Mosscreep Tool 1" },
    { name: "Druid's Eyes", location: "", saveName: "Mosscreep Tool 2" },
    { name: "Magma Bell", location: "", saveName: "Lava Charm" },
    { name: "Warding Bell", location: "", saveName: "Bell Bind" },
    { name: "Pollip Pouch", location: "", saveName: "Poison Pouch" },
    { name: "Fractured Mask", location: "", saveName: "Fractured Mask" },
    { name: "Multibinder", location: "", saveName: "Multibind" },
    { name: "Weavelight", location: "", saveName: "White Ring" },
    { name: "Sawtooth Circlet", location: "", saveName: "Brolly Spike" },
    { name: "Injector Band", location: "", saveName: "Quickbind" },
    { name: "Spool Extender", location: "", saveName: "Spool Extender" },
    { name: "Resserve Bind", location: "", saveName: "Reserve Bind" },
    { name: "Claw Mirror", location: "", saveName: "Dazzle Bind" },
    { name: "Claw Mirrors", location: "", saveName: "Dazzle Bind Upgraded" },
    { name: "Memory Crystal", location: "", saveName: "Revenge Crystal" },
    { name: "Snitch Pick", location: "", saveName: "Thief Claw" },
    { name: "Volt Filament", location: "", saveName: "Zap Imbuement" },
    { name: "Quick Sling", location: "", saveName: "Quick Sling" },
    { name: "Wreath of Purity", location: "", saveName: "Maggot Charm" },
    { name: "Longclaw", location: "", saveName: "Longneedle" },
    { name: "Wispfire Lantern", location: "", saveName: "Wisp Lantern" },
    { name: "Egg of Flealia", location: "", saveName: "Flea Charm" },
    { name: "Pin Badge", location: "", saveName: "Pinstress Tool" },
    // yellow tools
    { name: "Compass", location: "", saveName: "Compass" },
    { name: "Shard Pendant", location: "", saveName: "Bone Necklace" },
    { name: "Magnetite Brooch", location: "", saveName: "Rosary Magnet" },
    { name: "Weighted Belt", location: "", saveName: "Weighted Anklet" },
    { name: "Barbed Bracelet", location: "", saveName: "Barbed Wire" },
    { name: "Dead Bug's Purse", location: "", saveName: "Dead Mans Purse" },
    { name: "Shell Satchel", location: "", saveName: "Shell Satchel" },
    { name: "Magnetite Dice", location: "", saveName: "Magnetite Dice" },
    { name: "Scuttlebrace", location: "", saveName: "Scuttlebrace" },
    { name: "Ascendant's Grip", location: "", saveName: "Wallcling" },
    { name: "Spider Strings", location: "", saveName: "Musician Charm" },
    { name: "Silkspeed Anklets", location: "", saveName: "Sprintmaster" },
    { name: "Thief's Mark", location: "", saveName: "Thief Charm" },
]

export const bellwayStationList = [
    { name: "Bone Bottom", location: "", flag: "UnlockedFastTravel" },
    { name: "The Marrow", location: "", flag: "UnlockedFastTravel" },
    { name: "Deep Docks", location: "", flag: "UnlockedDocksStation" },
    { name: "Far Fields", location: "", flag: "UnlockedBoneforestEastStation" },
    { name: "Greymoor", location: "", flag: "UnlockedGreymoorStation" },
    { name: "Bellhart", location: "", flag: "UnlockedBelltownStation" },
    { name: "Shellwood", location: "", flag: "UnlockedShellwoodStation" },
    { name: "Blasted Steps", location: "", flag: "UnlockedCoralTowerStation" },
    { name: "The Slab", location: "", flag: "UnlockedPeakStation" },
    { name: "Grand Bellway", location: "", flag: "UnlockedCityStation" },
    { name: "Bilewater", location: "", flag: "UnlockedShadowStation" },
    { name: "Putrified Ducts", location: "", flag: "UnlockedAqueductStation" },
];

export const ventricaStationList = [
    { name: "Terminus", location: "", flag: ["UnlockedArboriumTube", "UnlockedHangTube", "UnlockedSongTube", "UnlockedCityBellwayTube", "UnlockedUnderTube"] },
    { name: "Memorium", location: "", flag: "UnlockedArboriumTube" },
    { name: "High Halls", location: "", flag: "UnlockedHangTube" },
    { name: "First Shrine", location: "", flag: "UnlockedArboriumTube" },
    { name: "Choral Chambers", location: "", flag: "UnlockedSongTube" },
    { name: "Grand Bellway", location: "", flag: "UnlockedCityBellwayTube" },
    { name: "Underworks", location: "", flag: "UnlockedUnderTube" },
];


export const toolPouchList = [
    { name: "Tool Pouch #1", location: "Purchase from Mort for 220 Rosaries in Far Fields", flag: "PurchasedPilgrimsRestToolPouch", flagType: "purchase" },
    { name: "Tool Pouch #2", location: "Complete Loddie's Minigame in The Marrow/Pick up in Act 3", flag: "", flagType: "quest" },
    { name: "Tool Pouch #3", location: "Complete the Bugs of Pharloom wish.", flag: "Journal", flagType: "quest" },
    { name: "Tool Pouch #4", location: "Find 20 Lost Fleas for Fleamaster Mooshka at Fleatopia, Putrified Ducts.", flag: "", flagType: "quest" },
]

export const craftingKitUpgradeList = [
    { name: "Crafting Kit #1", location: "Purchase from the Forge Daugther for 180 Rosaries.", flag: "PurchasedForgeToolKit", flagType: "purchase" },
    { name: "Crafting Kit #2", location: "Complete the Crawbug Clearing Wish.", flag: "Crow Feathers", flagType: "quest" },
    { name: "Crafting Kit #3", location: "Purchase from the Twelfth Architect for 450 Rosaries.", flag: "PurchasedArchitectToolKit", flagType: "purchase" },
    { name: "Crafting Kit #4", location: "Purchase from Grindle for 700 Rosaries.", flag: "purchasedGrindleToolKit", flagType: "purchase" },
];

export const memoryLocketList = [
    { name: "#1 Moss Grotto", location: "Completing the Volatile Flintbeetle Task gives you a Memory Locket.", flag: "Rock Rollers", flagType: "quest" },
    { name: "#2 The Marrow", location: "", flag: "", flagType: "" }, // Collectable Item Pickup Locket
    { name: "#3 Far Fields (1/2)", location: "", flag: "PurchasedPilgrimsRestMemoryLocket", flagType: "purchase" },
    { name: "#4 Far Fields (2/2)", location: "", flag: "", flagType: "" },
    { name: "#5 Greymoor (1/2)", location: "", flag: "", flagType: "" },
    { name: "#6 Greymoor (2/2)", location: "", flag: "", flagType: "" },
    { name: "#7 Hunter's March", location: "", flag: "", flagType: "" },
    { name: "#8 Bellhart (1/2)", location: "", flag: "PurchasedBellTownMemoryLocket", flagType: "purchase" },
    { name: "#9 Bellhart (2/2)", location: "", flag: "", flagType: "" },
    { name: "#10 Blasted Steps", location: "", flag: "", flagType: "" },
    { name: "#11 Wormways", location: "", flag: "", flagType: "" },
    { name: "#12 The Slab", location: "", flag: "", flagType: "" },
    { name: "#13 Sands of Karak", location: "", flag: "", flagType: "" },
    { name: "#14 Memorium", location: "", flag: "", flagType: "" },
    { name: "#15 Bilewater (1/2)", location: "", flag: "", flagType: "" },
    { name: "#16 Bilewater (2/2)", location: "", flag: "", flagType: "" },
    { name: "#17 Whispering Vaults", location: "", flag: "", flagType: "" },
    { name: "#18 Underworks", location: "", flag: "", flagType: "" },
    { name: "#19 Deep Docks", location: "", flag: "", flagType: "" },
    { name: "#20 Choral Chambers", location: "", flag: "", flagType: "" },
];

export const keysList = [
    { name: "Simple Key #1", location: "Bone Bottom, Moss Grotto: Purchase from Pebb for 500 Rosaries.", flag: "PurchasedBonebottomFaithToken" },
    { name: "Simple Key #2", location: "Songclave, Choral Chambers: Purchase from Jubilana for 650 Rosaries.", flag: "MerchantEnclaveSimpleKey" },
    { name: "Simple Key #3", location: "Sinner's Road: Obtain from the Roachkeeper enemy on top of Sinner's Road", flag: "" },
    { name: "Simple Key #4", location: "Sands of Karak: Obtain from the sitting corpse on the rightmost bench.", flag: "" }
];

export const spoolFragmentList = [
    { name: "#1 Moss Grotto", location: "", flag: "Bone_11b", flagType: "scene" },
    { name: "#2 Deep Docks (1/2)", location: "", flag: "Bone_East_13", flagType: "scene" },
    { name: "#3 Deep Docks (2/2)", location: "", flag: "Dock_03c", flagType: "scene" },
    { name: "#4 Greymoor (1/2)", location: "", flag: "MetCaravanTroupeLeaderJudge", flagType: "boolean" }, // ???
    { name: "#5 Greymoor (2/2)", location: "", flag: "Greymoor_02", flagType: "scene" },
    { name: "#6 Bellhart", location: "", flag: "PurchasedBelltownSpoolSegment", flagType: "boolean" },
    { name: "#7 Weavenest Atla", location: "", flag: "Weave_11", flagType: "scene" },
    { name: "#8 The Slab", location: "", flag: "Peak_01", flagType: "scene" },
    { name: "#9 Underworks (1/2)", location: "", flag: "Library_11b", flagType: "scene" },
    { name: "#10 Underworks (2/2)", location: "", flag: "Under_10", flagType: "scene" },
    { name: "#11 Choral Chambers", location: "", flag: "MerchantEnclaveSpoolPiece", flagType: "boolean" },
    { name: "#12 Grand Gate", location: "", flag: "Song_19_entrance", flagType: "scene" },
    { name: "#13 Memorium", location: "", flag: "Arborium_09", flagType: "scene" },
    { name: "#14 Whiteward (1/2)", location: "", flag: "Ward_01", flagType: "scene" },
    { name: "#15 Whiteward (2/2)", location: "", flag: "Save Sherma", flagType: "quest" },
    { name: "#16 Blasted Steps", location: "", flag: "purchasedGrindleSpoolPiece", flagType: "boolean" },
    { name: "#17 High Halls", location: "", flag: "Hang_03_top", flagType: "scene" },
    { name: "#18 Cogwork Core", location: "", flag: "Cog_07", flagType: "scene" },
];

export const questList = [
    { name: "The Great Citadel", location: "", saveName: "Citadel Seeker" },
    { name: "Bone Bottom Repairs", location: "", saveName: "Building Materials" },
    { name: "Garb of the Pilgrims", location: "", saveName: "Pilgrim Rags" },
    { name: "A Lifesaving Bridge", location: "", saveName: "Building Materials (Bridge)" },
    { name: "Volatile Flintbeetles", location: "", saveName: "Rock Rollers" },
    { name: "An Icon of Hope", location: "", saveName: "Building Materials (Statue)" },
    { name: "The Lost Fleas", location: "", saveName: "Save the Fleas" },
    { name: "Flexile Spines", location: "", saveName: "Brolly Get" },
    { name: "Fastest in Pharloom", location: "", saveName: "Sprintmaster Race" },
    { name: "Berry Picking", location: "", saveName: "Mossberry Collection 1" },
    { name: "Bugs of Pharloom", location: "", saveName: "Journal" },
    { name: "The Threadspun Town", location: "", saveName: "The Threadspun Town" },
    { name: "Rite of the Pollip", location: "", saveName: "Shell Flowers" },
    { name: "Silver Bells", location: "", saveName: "Shiny Bell Goomba" },
    { name: "My Missing Courier", location: "", saveName: "Save Courier Short" },
    { name: "Crawbug Clearing", location: "", saveName: "Crow Feathers" },
    { name: "Pinmaster's Oil", location: "", saveName: "A Pinsmiths Tools" },
    { name: "The Terrible Tyrant", location: "", saveName: "Skull King" },
    { name: "Restoration of Bellhart", location: "", saveName: "Belltown House Start" },
    { name: "Bellhart's Glory", location: "", saveName: "Belltown House Mid" },
    { name: "Grand Gate", location: "", saveName: "Grand Gate Bellshrines" },
    { name: "Silent Halls", location: "", saveName: "Citadel Investigate" },
    { name: "Pharloom's Crown #1", location: "", saveName: "Citadel Ascent" },
    { name: "Pharloom's Crown #2", location: "", saveName: "Citadel Ascent Melodies" },
    { name: "Pharloom's Crown #3", location: "", saveName: "Citadel Ascent Lift" },
    { name: "Great Taste of Pharloom/Courier's Rasher", location: "", saveName: "Great Gourmand" },
    { name: "Building up Songclave", location: "", saveName: "Songclave Donation 1" },
    { name: "Fine Pins", location: "", saveName: "Fine Pins" },
    { name: "The Wandering Merchant", location: "", saveName: "Save City Merchant" },
    { name: "The Lost Merchant", location: "", saveName: "Save City Merchant Bridge" },
    { name: "My Missing Courier", location: "", saveName: "Save Courier Short" },
    { name: "My Missing Brother", location: "", saveName: "Save Courier Tall" },
    { name: "Balm for the Wounded", location: "", saveName: "Save Sherma" },
    { name: "Savage Beastfly", location: "", saveName: "Beastfly Hunt" },
    { name: "Cloaks of the Choir", location: "", saveName: "Song Pilgrim Cloaks" },
    { name: "Final Audience #1", location: "", saveName: "Steel Sentinel" },
    { name: "Final Audience #2", location: "", saveName: "Steel Sentinel Pt2" },
    { name: "Strengthening Songclave", location: "", saveName: "Songclave Donation 2" },
    { name: "The Wailing Mother", location: "", saveName: "Broodmother Hunt" },
    { name: "Broodfeast", location: "", saveName: "Huntress Quest" },
    { name: "Trail's End", location: "", saveName: "Shakra Final Quest" },
    { name: "Rite of Rebirth", location: "", saveName: "Wood Witch Curse" },
    { name: "Infestation Operation", location: "", saveName: "Doctor Curse Cure" },
    { name: "Silk and Soul", location: "", saveName: "Soul Snare" },
    { name: "Soul Snare", location: "", saveName: "Silk Defeat Snare" },
    { name: "The Dark Below #1", location: "", saveName: "Diving Bell Pt1 Inspect" },
    { name: "The Dark Below #2", location: "", saveName: "Diving Bell Pt2 Ballow" },
    { name: "The Dark Below #3", location: "", saveName: "Diving Bell Pt3 Descend" },
    { name: "The Dark Below #4", location: "", saveName: "Black Thread Pt2 Abyss" },
    { name: "Return to Pharloom", location: "", saveName: "Black Thread Pt3 Escape" },
    { name: "Spell Seeker", location: "", saveName: "Black Thread Pt4 Return" },
    { name: "The Old Hearts", location: "", saveName: "Black Thread Pt5 Heart" },
    { name: "Dark Hearts", location: "", saveName: "Destroy Thread Cores" },
    { name: "Pain, Anguish, and Misery", location: "", saveName: "Tormented Trobbio" },
    { name: "Fatal Resolve #1", location: "", saveName: "Pinstress Battle Pre" },
    { name: "Fatal Resolve #2", location: "", saveName: "Pinstress Battle" },
    { name: "Ecstasy of the End #1", location: "", saveName: "Flea Games Pre" },
    { name: "Ecstasy of the End #2", location: "", saveName: "Flea Games" },
    { name: "Passing of the Age", location: "", saveName: "Mr Mushroom" },
    { name: "Alchemist's Assistant", location: "", saveName: "Extractor Blue" },
    { name: "Advanced Alchemy", location: "", saveName: "Extractor Blue Worms" },
    { name: "The Hidden Hunter", location: "", saveName: "Ant Trapper" },
    { name: "Hero's Call", location: "", saveName: "Garmond Black Threaded" },
    { name: "Final Audience", location: "", saveName: "Song Knight" },
    { name: "Roach Guts", location: "", saveName: "Roach Killing" },
    { name: "Pale Monarch [Act 2]", location: "", saveName: "Citadel Ascent Silk Defeat" },
    { name: "Last Dive [Act 3]", location: "", saveName: "Black Thread Pt6 Flower" },
    { name: "Bone Bottom Supplies", location: "", saveName: "Courier Delivery Bonebottom" },
    { name: "Songclave Supplies", location: "", saveName: "Courier Delivery Songclave" },
    { name: "Liquid Lacquer", location: "", saveName: "Courier Delivery Mask Maker" },
    { name: "Fleatopia Supplies", location: "", saveName: "Courier Delivery Fleatopia" },
    { name: "Survivor Camp Supplies", location: "", saveName: "Courier Delivery Fixer" },
    { name: "Queen's Egg", location: "", saveName: "Courier Delivery Dustpens Slave" },
    { name: "Pilgrim's Rest Supplies", location: "", saveName: "Courier Delivery Pilgrims Rest" },
];

export const maskShardList = [

];

export const paleOilList = [

];

export const fleaList = [

];