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
    { name: "Beastling Call", location: "", flag: "" },
    { name: "Elegy of the Deep", location: "", flag: "" },
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
    { name: "Craggler", location: "", flag: "Roof Crab", flagType: "journal"},
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
    { name: "Garmond and Zaza", location: "", flag: "garmondLibraryDefeatedHornet", flagType: "boolean" },
    { name: "Signis and Gron", location: "", flag: "Song Automation Goomba", flagType: "journal" },
    { name: "The Unravelled", location: "", flag: "wardBossDefeated", flagType: "boolean" },
    { name: "Disgraced Chef Lugoli", location: "", flag: "defeatedRoachkeeperChef", flagType: "boolean" },
    { name: "Father Of The Flame", location: "", flag: "defeatedWispPyreEffigy", flagType: "boolean" },
    { name: "Groal the Great", location: "", flag: "DefeatedSwampShaman", flagType: "boolean" },
    { name: "Voltvyrm", location: "", flag: "defeatedZapCoreEnemy", flagType: "boolean" },
    { name: "Raging Conchfly", location: "", flag: "defeatedCoralDrillerSolo", flagType: "boolean" },
    { name: "First Sinner", location: "", flag: "defeatedFirstWeaver", flagType: "boolean" },
    { name: "Broodmother", location: "", flag: "defeatedBroodMother", flagType: "boolean" },
    { name: "Second Sentinel", location: "", flag: "defeatedSongChevalierBoss", flagType: "boolean" },
    { name: "Shakra", location: "", flag: "", flagType: "boolean" },
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
    { name: "Summoned Saviour", location: "", flag: "", flagType: "boolean" },
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
    { name: "Curvesickle", location: "", saveName: "" },
    { name: "Throwing Ring", location: "", saveName: "Shakra Ring" },
    { name: "Pimpillo", location: "", saveName: "Pimpilo" },
    { name: "Conchcutter", location: "", saveName: "Conch Drill" },
    { name: "Silkshot (Forge Daughter)", location: "", saveName: "Webshot Forge" },
    { name: "Silkshot (Twelfth Architect)", location: "", saveName: "" },
    { name: "Silkshot (Mount Fay)", location: "", saveName: "" },
    { name: "Delver's Drill", location: "", saveName: "Screw Attack" },
    { name: "Cogwork Wheel", location: "", saveName: "Cogwork Saw" },
    { name: "Cogfly", location: "", saveName: "Cogwork Flier" },
    { name: "Rosary Cannon", location: "", saveName: "Rosary Cannon" },
    { name: "Flintslate", location: "", saveName: "Flintstone" },
    { name: "Snare Setter", location: "", saveName: "" },
    { name: "Flea Brew", location: "", saveName: "" },
    { name: "Plasmium Phial", location: "", saveName: "Lifeblood Syringe" },
    { name: "Needle Phial", location: "", saveName: "Extractor" },
    { name: "Voltvessels", location: "", saveName: "Lightning Rod" },
    // blue tools
    { name: "Druid's Eye", location: "", saveName: "Mosscreep Tool 1" },
    { name: "Druid's Eyes", location: "", saveName: "" },
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
    { name: "Shell Satchel", location: "", saveName: "" },
    { name: "Magnetite Dice", location: "", saveName: "Magnetite Dice" },
    { name: "Scuttlebrace", location: "", saveName: "" },
    { name: "Ascendant's Grip", location: "", saveName: "Wallcling" },
    { name: "Spider Strings", location: "", saveName: "Musician Charm" },
    { name: "Silkspeed Anklets", location: "", saveName: "Sprintmaster" },
    { name: "Thief's Mark", location: "", saveName: "Thief Charm" },
]

export const ToolLiquidList = [
     { name: "Flea Brew", location: "", saveName: "Flea Brew" },    
]

export const silkShotList = [
    { name: "Silkshot (Forge Daughter)", location: "", flag: "ForgeDaughterMentionedWebShot"}
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
    { name: "The Slab", location: "", flag: "UnlockPeakStation" },
    { name: "Grand Bellway", location: "", flag: "UnlockedCityStation" },
    { name: "Bilewater", location: "", flag: "UnlockedShadowStation" },
    { name: "Putrified Ducts", location: "", flag: "UnlockedAqueductStation" },
];

export const ventricaStationList = [
    { name: "Terminus", location: "", flag: "default" },
    { name: "Memorium", location: "", flag: "UnlockedArboriumTube" },
    { name: "High Halls", location: "", flag: "UnlockedHangTube" },
    { name: "First Shrine", location: "", flag: "UnlockedArboriumTube" },
    { name: "Choral Chambers", location: "", flag: "UnlockedSongTube" },
    { name: "Grand Bellway", location: "", flag: "UnlockedCityBellwayTube" },
    { name: "Underworks", location: "", flag: "UnlockedUnderTube" },
]
