/* eslint-disable dot-notation */
/**
*  @filename    NTItemAlias.js
*  @author      kolton
*  @credit      d2nt
*  @desc        Item alias's to work with NTItemParser for kolbots pickit system
*
*/

interface NTIPAliasRecord {
  [key: string]: number | [number, number];
}

const sdk = {
  skills: {
      get: {
        RightName: 0,
        LeftName: 1,
        RightId: 2,
        LeftId: 3,
        AllSkills: 4
      },
      hand: {
        Right: 0,
        Left: 1,
        LeftNoShift: 2,
        RightShift: 3,
      },
      subindex: {
        HardPoints: 0,
        SoftPoints: 1
      },
      // General
      Attack: 0,
      Kick: 1,
      Throw: 2,
      Unsummon: 3,
      LeftHandThrow: 4,
      LeftHandSwing: 5,

      // Amazon
      MagicArrow: 6,
      FireArrow: 7,
      InnerSight: 8,
      CriticalStrike: 9,
      Jab: 10,
      ColdArrow: 11,
      MultipleShot: 12,
      Dodge: 13,
      PowerStrike: 14,
      PoisonJavelin: 15,
      ExplodingArrow: 16,
      SlowMissiles: 17,
      Avoid: 18,
      Impale: 19,
      LightningBolt: 20,
      IceArrow: 21,
      GuidedArrow: 22,
      Penetrate: 23,
      ChargedStrike: 24,
      PlagueJavelin: 25,
      Strafe: 26,
      ImmolationArrow: 27,
      Dopplezon: 28,
      Decoy: 28,
      Evade: 29,
      Fend: 30,
      FreezingArrow: 31,
      Valkyrie: 32,
      Pierce: 33,
      LightningStrike: 34,
      LightningFury: 35,

      // Sorc
      FireBolt: 36,
      Warmth: 37,
      ChargedBolt: 38,
      IceBolt: 39,
      FrozenArmor: 40,
      Inferno: 41,
      StaticField: 42,
      Telekinesis: 43,
      FrostNova: 44,
      IceBlast: 45,
      Blaze: 46,
      FireBall: 47,
      Nova: 48,
      Lightning: 49,
      ShiverArmor: 50,
      FireWall: 51,
      Enchant: 52,
      ChainLightning: 53,
      Teleport: 54,
      GlacialSpike: 55,
      Meteor: 56,
      ThunderStorm: 57,
      EnergyShield: 58,
      Blizzard: 59,
      ChillingArmor: 60,
      FireMastery: 61,
      Hydra: 62,
      LightningMastery: 63,
      FrozenOrb: 64,
      ColdMastery: 65,

      // Necro
      AmplifyDamage: 66,
      Teeth: 67,
      BoneArmor: 68,
      SkeletonMastery: 69,
      RaiseSkeleton: 70,
      DimVision: 71,
      Weaken: 72,
      PoisonDagger: 73,
      CorpseExplosion: 74,
      ClayGolem: 75,
      IronMaiden: 76,
      Terror: 77,
      BoneWall: 78,
      GolemMastery: 79,
      RaiseSkeletalMage: 80,
      Confuse: 81,
      LifeTap: 82,
      PoisonExplosion: 83,
      BoneSpear: 84,
      BloodGolem: 85,
      Attract: 86,
      Decrepify: 87,
      BonePrison: 88,
      SummonResist: 89,
      IronGolem: 90,
      LowerResist: 91,
      PoisonNova: 92,
      BoneSpirit: 93,
      FireGolem: 94,
      Revive: 95,

      // Paladin
      Sacrifice: 96,
      Smite: 97,
      Might: 98,
      Prayer: 99,
      ResistFire: 100,
      HolyBolt: 101,
      HolyFire: 102,
      Thorns: 103,
      Defiance: 104,
      ResistCold: 105,
      Zeal: 106,
      Charge: 107,
      BlessedAim: 108,
      Cleansing: 109,
      ResistLightning: 110,
      Vengeance: 111,
      BlessedHammer: 112,
      Concentration: 113,
      HolyFreeze: 114,
      Vigor: 115,
      Conversion: 116,
      HolyShield: 117,
      HolyShock: 118,
      Sanctuary: 119,
      Meditation: 120,
      FistoftheHeavens: 121,
      Fanaticism: 122,
      Conviction: 123,
      Redemption: 124,
      Salvation: 125,

      // Barb
      Bash: 126,
      SwordMastery: 127,
      AxeMastery: 128,
      MaceMastery: 129,
      Howl: 130,
      FindPotion: 131,
      Leap: 132,
      DoubleSwing: 133,
      PoleArmMastery: 134,
      ThrowingMastery: 135,
      SpearMastery: 136,
      Taunt: 137,
      Shout: 138,
      Stun: 139,
      DoubleThrow: 140,
      IncreasedStamina: 141,
      FindItem: 142,
      LeapAttack: 143,
      Concentrate: 144,
      IronSkin: 145,
      BattleCry: 146,
      Frenzy: 147,
      IncreasedSpeed: 148,
      BattleOrders: 149,
      GrimWard: 150,
      Whirlwind: 151,
      Berserk: 152,
      NaturalResistance: 153,
      WarCry: 154,
      BattleCommand: 155,

      // General stuff
      IdentifyScroll: 217,
      BookofIdentify: 218,
      TownPortalScroll: 219,
      BookofTownPortal: 220,

      // Druid
      Raven: 221,
      PoisonCreeper: 222, // External
      PlaguePoppy: 222, // Internal
      Werewolf: 223, // External
      Wearwolf: 223, // Internal
      Lycanthropy: 224, // External
      ShapeShifting: 224, // Internal
      Firestorm: 225,
      OakSage: 226,
      SpiritWolf: 227, // External
      SummonSpiritWolf: 227, // Internal
      Werebear: 228, // External
      Wearbear: 228, // Internal
      MoltenBoulder: 229,
      ArcticBlast: 230,
      CarrionVine: 231, // External
      CycleofLife: 231, // Internal
      FeralRage: 232,
      Maul: 233,
      Fissure: 234, // Internal
      Eruption: 234, // Internal
      CycloneArmor: 235,
      HeartofWolverine: 236,
      SummonDireWolf: 237, // External
      SummonFenris: 237, // Internal
      Rabies: 238,
      FireClaws: 239,
      Twister: 240,
      SolarCreeper: 241, // External
      Vines: 241, // Internal
      Hunger: 242,
      ShockWave: 243,
      Volcano: 244,
      Tornado: 245,
      SpiritofBarbs: 246,
      Grizzly: 247, // External
      SummonGrizzly: 247, // Internal
      Fury: 248,
      Armageddon: 249,
      Hurricane: 250,

      // Assa
      FireBlast: 251, // External
      FireTrauma: 251, // Internal
      ClawMastery: 252,
      PsychicHammer: 253,
      TigerStrike: 254,
      DragonTalon: 255,
      ShockWeb: 256, // External
      ShockField: 256, // Internal
      BladeSentinel: 257,
      Quickness: 258, // Internal name
      BurstofSpeed: 258, // Shown name
      FistsofFire: 259,
      DragonClaw: 260,
      ChargedBoltSentry: 261,
      WakeofFire: 262, // External
      WakeofFireSentry: 262, // Internal
      WeaponBlock: 263,
      CloakofShadows: 264,
      CobraStrike: 265,
      BladeFury: 266,
      Fade: 267,
      ShadowWarrior: 268,
      ClawsofThunder: 269,
      DragonTail: 270,
      LightningSentry: 271,
      WakeofInferno: 272, // External
      InfernoSentry: 272, // Internal
      MindBlast: 273,
      BladesofIce: 274,
      DragonFlight: 275,
      DeathSentry: 276,
      BladeShield: 277,
      Venom: 278,
      ShadowMaster: 279,
      PhoenixStrike: 280, // External
      RoyalStrike: 280, // Internal
      WakeofDestructionSentry: 281, // Not used?
      Summoner: 500, // special
      tabs: {
        // Ama
        BowandCrossbow: 0,
        PassiveandMagic: 1,
        JavelinandSpear: 2,

        // Sorc
        Fire: 8,
        Lightning: 9,
        Cold: 10,

        // Necro
        Curses: 16,
        PoisonandBone: 17,
        NecroSummoning: 18,

        // Pala
        PalaCombat: 24,
        Offensive: 25,
        Defensive: 26,

        // Barb
        BarbCombat: 32,
        Masteries: 33,
        Warcries: 34,

        // Druid
        DruidSummon: 40,
        ShapeShifting: 41,
        Elemental: 42,

        // Assa
        Traps: 48,
        ShadowDisciplines: 49,
        MartialArts: 50,
      }
    },
};
/** @global */
export const NTIPAliasType: NTIPAliasRecord = {};
NTIPAliasType["shield"] = 2;
NTIPAliasType["armor"] = 3;
NTIPAliasType["gold"] = 4;
NTIPAliasType["bowquiver"] = 5;
NTIPAliasType["crossbowquiver"] = 6;
NTIPAliasType["playerbodypart"] = 7;
NTIPAliasType["herb"] = 8;
NTIPAliasType["potion"] = 9;
NTIPAliasType["ring"] = 10;
NTIPAliasType["elixir"] = 11;
NTIPAliasType["amulet"] = 12;
NTIPAliasType["charm"] = 13;
NTIPAliasType["notused"] = 14;
NTIPAliasType["boots"] = 15;
NTIPAliasType["gloves"] = 16;
NTIPAliasType["notused"] = 17;
NTIPAliasType["book"] = 18;
NTIPAliasType["belt"] = 19;
NTIPAliasType["gem"] = 20;
NTIPAliasType["torch"] = 21;
NTIPAliasType["scroll"] = 22;
NTIPAliasType["notused"] = 23;
NTIPAliasType["scepter"] = 24;
NTIPAliasType["wand"] = 25;
NTIPAliasType["staff"] = 26;
NTIPAliasType["bow"] = 27;
NTIPAliasType["axe"] = 28;
NTIPAliasType["club"] = 29;
NTIPAliasType["sword"] = 30;
NTIPAliasType["hammer"] = 31;
NTIPAliasType["knife"] = 32;
NTIPAliasType["spear"] = 33;
NTIPAliasType["polearm"] = 34;
NTIPAliasType["crossbow"] = 35;
NTIPAliasType["mace"] = 36;
NTIPAliasType["helm"] = 37;
NTIPAliasType["missilepotion"] = 38;
NTIPAliasType["quest"] = 39;
NTIPAliasType["bodypart"] = 40;
NTIPAliasType["key"] = 41;
NTIPAliasType["throwingknife"] = 42;
NTIPAliasType["throwingaxe"] = 43;
NTIPAliasType["javelin"] = 44;
NTIPAliasType["weapon"] = 45;
NTIPAliasType["meleeweapon"] = 46;
NTIPAliasType["missileweapon"] = 47;
NTIPAliasType["thrownweapon"] = 48;
NTIPAliasType["comboweapon"] = 49;
NTIPAliasType["anyarmor"] = 50;
NTIPAliasType["anyshield"] = 51;
NTIPAliasType["miscellaneous"] = 52;
NTIPAliasType["socketfiller"] = 53;
NTIPAliasType["secondhand"] = 54;
NTIPAliasType["stavesandrods"] = 55;
NTIPAliasType["missile"] = 56;
NTIPAliasType["blunt"] = 57;
NTIPAliasType["jewel"] = 58;
NTIPAliasType["classspecific"] = 59;
NTIPAliasType["amazonitem"] = 60;
NTIPAliasType["barbarianitem"] = 61;
NTIPAliasType["necromanceritem"] = 62;
NTIPAliasType["paladinitem"] = 63;
NTIPAliasType["sorceressitem"] = 64;
NTIPAliasType["assassinitem"] = 65;
NTIPAliasType["druiditem"] = 66;
NTIPAliasType["handtohand"] = 67;
NTIPAliasType["orb"] = 68;
NTIPAliasType["voodooheads"] = 69;
NTIPAliasType["auricshields"] = 70;
NTIPAliasType["primalhelm"] = 71;
NTIPAliasType["pelt"] = 72;
NTIPAliasType["cloak"] = 73;
NTIPAliasType["rune"] = 74;
NTIPAliasType["circlet"] = 75;
NTIPAliasType["healingpotion"] = 76;
NTIPAliasType["manapotion"] = 77;
NTIPAliasType["rejuvpotion"] = 78;
NTIPAliasType["staminapotion"] = 79;
NTIPAliasType["antidotepotion"] = 80;
NTIPAliasType["thawingpotion"] = 81;
NTIPAliasType["smallcharm"] = 82;
NTIPAliasType["mediumcharm"] = 83;
NTIPAliasType["largecharm"] = 84;
NTIPAliasType["amazonbow"] = 85;
NTIPAliasType["amazonspear"] = 86;
NTIPAliasType["amazonjavelin"] = 87;
NTIPAliasType["assassinclaw"] = 88;
NTIPAliasType["magicbowquiv"] = 89;
NTIPAliasType["magicxbowquiv"] = 90;
NTIPAliasType["chippedgem"] = 91;
NTIPAliasType["flawedgem"] = 92;
NTIPAliasType["standardgem"] = 93;
NTIPAliasType["flawlessgem"] = 94;
NTIPAliasType["perfectgem"] = 95;
NTIPAliasType["amethyst"] = 96;
NTIPAliasType["diamond"] = 97;
NTIPAliasType["emerald"] = 98;
NTIPAliasType["ruby"] = 99;
NTIPAliasType["sapphire"] = 100;
NTIPAliasType["topaz"] = 101;
NTIPAliasType["skull"] = 102;

/** @global */
export const NTIPAliasClassID: NTIPAliasRecord = {};
NTIPAliasClassID["hax"] = 0; NTIPAliasClassID["handaxe"] = 0;
NTIPAliasClassID["axe"] = 1;
NTIPAliasClassID["2ax"] = 2; NTIPAliasClassID["doubleaxe"] = 2;
NTIPAliasClassID["mpi"] = 3; NTIPAliasClassID["militarypick"] = 3;
NTIPAliasClassID["wax"] = 4; NTIPAliasClassID["waraxe"] = 4;
NTIPAliasClassID["lax"] = 5; NTIPAliasClassID["largeaxe"] = 5;
NTIPAliasClassID["bax"] = 6; NTIPAliasClassID["broadaxe"] = 6;
NTIPAliasClassID["btx"] = 7; NTIPAliasClassID["battleaxe"] = 7;
NTIPAliasClassID["gax"] = 8; NTIPAliasClassID["greataxe"] = 8;
NTIPAliasClassID["gix"] = 9; NTIPAliasClassID["giantaxe"] = 9;
NTIPAliasClassID["wnd"] = 10; NTIPAliasClassID["wand"] = 10;
NTIPAliasClassID["ywn"] = 11; NTIPAliasClassID["yewwand"] = 11;
NTIPAliasClassID["bwn"] = 12; NTIPAliasClassID["bonewand"] = 12;
NTIPAliasClassID["gwn"] = 13; NTIPAliasClassID["grimwand"] = 13;
NTIPAliasClassID["clb"] = 14; NTIPAliasClassID["club"] = 14;
NTIPAliasClassID["scp"] = 15; NTIPAliasClassID["scepter"] = 15;
NTIPAliasClassID["gsc"] = 16; NTIPAliasClassID["grandscepter"] = 16;
NTIPAliasClassID["wsp"] = 17; NTIPAliasClassID["warscepter"] = 17;
NTIPAliasClassID["spc"] = 18; NTIPAliasClassID["spikedclub"] = 18;
NTIPAliasClassID["mac"] = 19; NTIPAliasClassID["mace"] = 19;
NTIPAliasClassID["mst"] = 20; NTIPAliasClassID["morningstar"] = 20;
NTIPAliasClassID["fla"] = 21; NTIPAliasClassID["flail"] = 21;
NTIPAliasClassID["whm"] = 22; NTIPAliasClassID["warhammer"] = 22;
NTIPAliasClassID["mau"] = 23; NTIPAliasClassID["maul"] = 23;
NTIPAliasClassID["gma"] = 24; NTIPAliasClassID["greatmaul"] = 24;
NTIPAliasClassID["ssd"] = 25; NTIPAliasClassID["shortsword"] = 25;
NTIPAliasClassID["scm"] = 26; NTIPAliasClassID["scimitar"] = 26;
NTIPAliasClassID["sbr"] = 27; NTIPAliasClassID["sabre"] = 27;
NTIPAliasClassID["flc"] = 28; NTIPAliasClassID["falchion"] = 28;
NTIPAliasClassID["crs"] = 29; NTIPAliasClassID["crystalsword"] = 29;
NTIPAliasClassID["bsd"] = 30; NTIPAliasClassID["broadsword"] = 30;
NTIPAliasClassID["lsd"] = 31; NTIPAliasClassID["longsword"] = 31;
NTIPAliasClassID["wsd"] = 32; NTIPAliasClassID["warsword"] = 32;
NTIPAliasClassID["2hs"] = 33; NTIPAliasClassID["twohandedsword"] = 33;
NTIPAliasClassID["clm"] = 34; NTIPAliasClassID["claymore"] = 34;
NTIPAliasClassID["gis"] = 35; NTIPAliasClassID["giantsword"] = 35;
NTIPAliasClassID["bsw"] = 36; NTIPAliasClassID["bastardsword"] = 36;
NTIPAliasClassID["flb"] = 37; NTIPAliasClassID["flamberge"] = 37;
NTIPAliasClassID["gsd"] = 38; NTIPAliasClassID["greatsword"] = 38;
NTIPAliasClassID["dgr"] = 39; NTIPAliasClassID["dagger"] = 39;
NTIPAliasClassID["dir"] = 40; NTIPAliasClassID["dirk"] = 40;
NTIPAliasClassID["kri"] = 41; NTIPAliasClassID["kris"] = 41;
NTIPAliasClassID["bld"] = 42; NTIPAliasClassID["blade"] = 42;
NTIPAliasClassID["tkf"] = 43; NTIPAliasClassID["throwingknife"] = 43;
NTIPAliasClassID["tax"] = 44; NTIPAliasClassID["throwingaxe"] = 44;
NTIPAliasClassID["bkf"] = 45; NTIPAliasClassID["balancedknife"] = 45;
NTIPAliasClassID["bal"] = 46; NTIPAliasClassID["balancedaxe"] = 46;
NTIPAliasClassID["jav"] = 47; NTIPAliasClassID["javelin"] = 47;
NTIPAliasClassID["pil"] = 48; NTIPAliasClassID["pilum"] = 48;
NTIPAliasClassID["ssp"] = 49; NTIPAliasClassID["shortspear"] = 49;
NTIPAliasClassID["glv"] = 50; NTIPAliasClassID["glaive"] = 50;
NTIPAliasClassID["tsp"] = 51; NTIPAliasClassID["throwingspear"] = 51;
NTIPAliasClassID["spr"] = 52; NTIPAliasClassID["spear"] = 52;
NTIPAliasClassID["tri"] = 53; NTIPAliasClassID["trident"] = 53;
NTIPAliasClassID["brn"] = 54; NTIPAliasClassID["brandistock"] = 54;
NTIPAliasClassID["spt"] = 55; NTIPAliasClassID["spetum"] = 55;
NTIPAliasClassID["pik"] = 56; NTIPAliasClassID["pike"] = 56;
NTIPAliasClassID["bar"] = 57; NTIPAliasClassID["bardiche"] = 57;
NTIPAliasClassID["vou"] = 58; NTIPAliasClassID["voulge"] = 58;
NTIPAliasClassID["scy"] = 59; NTIPAliasClassID["scythe"] = 59;
NTIPAliasClassID["pax"] = 60; NTIPAliasClassID["poleaxe"] = 60;
NTIPAliasClassID["hal"] = 61; NTIPAliasClassID["halberd"] = 61;
NTIPAliasClassID["wsc"] = 62; NTIPAliasClassID["warscythe"] = 62;
NTIPAliasClassID["sst"] = 63; NTIPAliasClassID["shortstaff"] = 63;
NTIPAliasClassID["lst"] = 64; NTIPAliasClassID["longstaff"] = 64;
NTIPAliasClassID["cst"] = 65; NTIPAliasClassID["gnarledstaff"] = 65;
NTIPAliasClassID["bst"] = 66; NTIPAliasClassID["battlestaff"] = 66;
NTIPAliasClassID["wst"] = 67; NTIPAliasClassID["warstaff"] = 67;
NTIPAliasClassID["sbw"] = 68; NTIPAliasClassID["shortbow"] = 68;
NTIPAliasClassID["hbw"] = 69; NTIPAliasClassID["hunter'sbow"] = 69;
NTIPAliasClassID["lbw"] = 70; NTIPAliasClassID["longbow"] = 70;
NTIPAliasClassID["cbw"] = 71; NTIPAliasClassID["compositebow"] = 71;
NTIPAliasClassID["sbb"] = 72; NTIPAliasClassID["shortbattlebow"] = 72;
NTIPAliasClassID["lbb"] = 73; NTIPAliasClassID["longbattlebow"] = 73;
NTIPAliasClassID["swb"] = 74; NTIPAliasClassID["shortwarbow"] = 74;
NTIPAliasClassID["lwb"] = 75; NTIPAliasClassID["longwarbow"] = 75;
NTIPAliasClassID["lxb"] = 76; NTIPAliasClassID["lightcrossbow"] = 76;
NTIPAliasClassID["mxb"] = 77; NTIPAliasClassID["crossbow"] = 77;
NTIPAliasClassID["hxb"] = 78; NTIPAliasClassID["heavycrossbow"] = 78;
NTIPAliasClassID["rxb"] = 79; NTIPAliasClassID["repeatingcrossbow"] = 79;
NTIPAliasClassID["gps"] = 80; NTIPAliasClassID["rancidgaspotion"] = 80;
NTIPAliasClassID["ops"] = 81; NTIPAliasClassID["oilpotion"] = 81;
NTIPAliasClassID["gpm"] = 82; NTIPAliasClassID["chokinggaspotion"] = 82;
NTIPAliasClassID["opm"] = 83; NTIPAliasClassID["explodingpotion"] = 83;
NTIPAliasClassID["gpl"] = 84; NTIPAliasClassID["stranglinggaspotion"] = 84;
NTIPAliasClassID["opl"] = 85; NTIPAliasClassID["fulminatingpotion"] = 85;
NTIPAliasClassID["d33"] = 86; NTIPAliasClassID["decoygidbinn"] = 86;
NTIPAliasClassID["g33"] = 87; NTIPAliasClassID["thegidbinn"] = 87;
NTIPAliasClassID["leg"] = 88; NTIPAliasClassID["wirt'sleg"] = 88;
NTIPAliasClassID["hdm"] = 89; NTIPAliasClassID["horadricmalus"] = 89;
NTIPAliasClassID["hfh"] = 90; NTIPAliasClassID["hellforgehammer"] = 90;
NTIPAliasClassID["hst"] = 91; NTIPAliasClassID["horadricstaff"] = 91;
NTIPAliasClassID["msf"] = 92; NTIPAliasClassID["shaftofthehoradricstaff"] = 92;
NTIPAliasClassID["9ha"] = 93; NTIPAliasClassID["hatchet"] = 93;
NTIPAliasClassID["9ax"] = 94; NTIPAliasClassID["cleaver"] = 94;
NTIPAliasClassID["92a"] = 95; NTIPAliasClassID["twinaxe"] = 95;
NTIPAliasClassID["9mp"] = 96; NTIPAliasClassID["crowbill"] = 96;
NTIPAliasClassID["9wa"] = 97; NTIPAliasClassID["naga"] = 97;
NTIPAliasClassID["9la"] = 98; NTIPAliasClassID["militaryaxe"] = 98;
NTIPAliasClassID["9ba"] = 99; NTIPAliasClassID["beardedaxe"] = 99;
NTIPAliasClassID["9bt"] = 100; NTIPAliasClassID["tabar"] = 100;
NTIPAliasClassID["9ga"] = 101; NTIPAliasClassID["gothicaxe"] = 101;
NTIPAliasClassID["9gi"] = 102; NTIPAliasClassID["ancientaxe"] = 102;
NTIPAliasClassID["9wn"] = 103; NTIPAliasClassID["burntwand"] = 103;
NTIPAliasClassID["9yw"] = 104; NTIPAliasClassID["petrifiedwand"] = 104;
NTIPAliasClassID["9bw"] = 105; NTIPAliasClassID["tombwand"] = 105;
NTIPAliasClassID["9gw"] = 106; NTIPAliasClassID["gravewand"] = 106;
NTIPAliasClassID["9cl"] = 107; NTIPAliasClassID["cudgel"] = 107;
NTIPAliasClassID["9sc"] = 108; NTIPAliasClassID["runescepter"] = 108;
NTIPAliasClassID["9qs"] = 109; NTIPAliasClassID["holywatersprinkler"] = 109;
NTIPAliasClassID["9ws"] = 110; NTIPAliasClassID["divinescepter"] = 110;
NTIPAliasClassID["9sp"] = 111; NTIPAliasClassID["barbedclub"] = 111;
NTIPAliasClassID["9ma"] = 112; NTIPAliasClassID["flangedmace"] = 112;
NTIPAliasClassID["9mt"] = 113; NTIPAliasClassID["jaggedstar"] = 113;
NTIPAliasClassID["9fl"] = 114; NTIPAliasClassID["knout"] = 114;
NTIPAliasClassID["9wh"] = 115; NTIPAliasClassID["battlehammer"] = 115;
NTIPAliasClassID["9m9"] = 116; NTIPAliasClassID["warclub"] = 116;
NTIPAliasClassID["9gm"] = 117; NTIPAliasClassID["marteldefer"] = 117;
NTIPAliasClassID["9ss"] = 118; NTIPAliasClassID["gladius"] = 118;
NTIPAliasClassID["9sm"] = 119; NTIPAliasClassID["cutlass"] = 119;
NTIPAliasClassID["9sb"] = 120; NTIPAliasClassID["shamshir"] = 120;
NTIPAliasClassID["9fc"] = 121; NTIPAliasClassID["tulwar"] = 121;
NTIPAliasClassID["9cr"] = 122; NTIPAliasClassID["dimensionalblade"] = 122;
NTIPAliasClassID["9bs"] = 123; NTIPAliasClassID["battlesword"] = 123;
NTIPAliasClassID["9ls"] = 124; NTIPAliasClassID["runesword"] = 124;
NTIPAliasClassID["9wd"] = 125; NTIPAliasClassID["ancientsword"] = 125;
NTIPAliasClassID["92h"] = 126; NTIPAliasClassID["espandon"] = 126;
NTIPAliasClassID["9cm"] = 127; NTIPAliasClassID["dacianfalx"] = 127;
NTIPAliasClassID["9gs"] = 128; NTIPAliasClassID["tusksword"] = 128;
NTIPAliasClassID["9b9"] = 129; NTIPAliasClassID["gothicsword"] = 129;
NTIPAliasClassID["9fb"] = 130; NTIPAliasClassID["zweihander"] = 130;
NTIPAliasClassID["9gd"] = 131; NTIPAliasClassID["executionersword"] = 131;
NTIPAliasClassID["9dg"] = 132; NTIPAliasClassID["poignard"] = 132;
NTIPAliasClassID["9di"] = 133; NTIPAliasClassID["rondel"] = 133;
NTIPAliasClassID["9kr"] = 134; NTIPAliasClassID["cinquedeas"] = 134;
NTIPAliasClassID["9bl"] = 135; NTIPAliasClassID["stiletto"] = 135;
NTIPAliasClassID["9tk"] = 136; NTIPAliasClassID["battledart"] = 136;
NTIPAliasClassID["9ta"] = 137; NTIPAliasClassID["francisca"] = 137;
NTIPAliasClassID["9bk"] = 138; NTIPAliasClassID["wardart"] = 138;
NTIPAliasClassID["9b8"] = 139; NTIPAliasClassID["hurlbat"] = 139;
NTIPAliasClassID["9ja"] = 140; NTIPAliasClassID["warjavelin"] = 140;
NTIPAliasClassID["9pi"] = 141; NTIPAliasClassID["greatpilum"] = 141;
NTIPAliasClassID["9s9"] = 142; NTIPAliasClassID["simbilan"] = 142;
NTIPAliasClassID["9gl"] = 143; NTIPAliasClassID["spiculum"] = 143;
NTIPAliasClassID["9ts"] = 144; NTIPAliasClassID["harpoon"] = 144;
NTIPAliasClassID["9sr"] = 145; NTIPAliasClassID["warspear"] = 145;
NTIPAliasClassID["9tr"] = 146; NTIPAliasClassID["fuscina"] = 146;
NTIPAliasClassID["9br"] = 147; NTIPAliasClassID["warfork"] = 147;
NTIPAliasClassID["9st"] = 148; NTIPAliasClassID["yari"] = 148;
NTIPAliasClassID["9p9"] = 149; NTIPAliasClassID["lance"] = 149;
NTIPAliasClassID["9b7"] = 150; NTIPAliasClassID["lochaberaxe"] = 150;
NTIPAliasClassID["9vo"] = 151; NTIPAliasClassID["bill"] = 151;
NTIPAliasClassID["9s8"] = 152; NTIPAliasClassID["battlescythe"] = 152;
NTIPAliasClassID["9pa"] = 153; NTIPAliasClassID["partizan"] = 153;
NTIPAliasClassID["9h9"] = 154; NTIPAliasClassID["becdecorbin"] = 154;
NTIPAliasClassID["9wc"] = 155; NTIPAliasClassID["grimscythe"] = 155;
NTIPAliasClassID["8ss"] = 156; NTIPAliasClassID["jostaff"] = 156;
NTIPAliasClassID["8ls"] = 157; NTIPAliasClassID["quarterstaff"] = 157;
NTIPAliasClassID["8cs"] = 158; NTIPAliasClassID["cedarstaff"] = 158;
NTIPAliasClassID["8bs"] = 159; NTIPAliasClassID["gothicstaff"] = 159;
NTIPAliasClassID["8ws"] = 160; NTIPAliasClassID["runestaff"] = 160;
NTIPAliasClassID["8sb"] = 161; NTIPAliasClassID["edgebow"] = 161;
NTIPAliasClassID["8hb"] = 162; NTIPAliasClassID["razorbow"] = 162;
NTIPAliasClassID["8lb"] = 163; NTIPAliasClassID["cedarbow"] = 163;
NTIPAliasClassID["8cb"] = 164; NTIPAliasClassID["doublebow"] = 164;
NTIPAliasClassID["8s8"] = 165; NTIPAliasClassID["shortsiegebow"] = 165;
NTIPAliasClassID["8l8"] = 166; NTIPAliasClassID["largesiegebow"] = 166;
NTIPAliasClassID["8sw"] = 167; NTIPAliasClassID["runebow"] = 167;
NTIPAliasClassID["8lw"] = 168; NTIPAliasClassID["gothicbow"] = 168;
NTIPAliasClassID["8lx"] = 169; NTIPAliasClassID["arbalest"] = 169;
NTIPAliasClassID["8mx"] = 170; NTIPAliasClassID["siegecrossbow"] = 170;
NTIPAliasClassID["8hx"] = 171; NTIPAliasClassID["ballista"] = 171;
NTIPAliasClassID["8rx"] = 172; NTIPAliasClassID["chukonu"] = 172;
NTIPAliasClassID["qf1"] = 173; NTIPAliasClassID["khalim'sflail"] = 173;
NTIPAliasClassID["qf2"] = 174; NTIPAliasClassID["khalim'swill"] = 174;
NTIPAliasClassID["ktr"] = 175; NTIPAliasClassID["katar"] = 175;
NTIPAliasClassID["wrb"] = 176; NTIPAliasClassID["wristblade"] = 176;
NTIPAliasClassID["axf"] = 177; NTIPAliasClassID["hatchethands"] = 177;
NTIPAliasClassID["ces"] = 178; NTIPAliasClassID["cestus"] = 178;
NTIPAliasClassID["clw"] = 179; NTIPAliasClassID["claws"] = 179;
NTIPAliasClassID["btl"] = 180; NTIPAliasClassID["bladetalons"] = 180;
NTIPAliasClassID["skr"] = 181; NTIPAliasClassID["scissorskatar"] = 181;
NTIPAliasClassID["9ar"] = 182; NTIPAliasClassID["quhab"] = 182;
NTIPAliasClassID["9wb"] = 183; NTIPAliasClassID["wristspike"] = 183;
NTIPAliasClassID["9xf"] = 184; NTIPAliasClassID["fascia"] = 184;
NTIPAliasClassID["9cs"] = 185; NTIPAliasClassID["handscythe"] = 185;
NTIPAliasClassID["9lw"] = 186; NTIPAliasClassID["greaterclaws"] = 186;
NTIPAliasClassID["9tw"] = 187; NTIPAliasClassID["greatertalons"] = 187;
NTIPAliasClassID["9qr"] = 188; NTIPAliasClassID["scissorsquhab"] = 188;
NTIPAliasClassID["7ar"] = 189; NTIPAliasClassID["suwayyah"] = 189;
NTIPAliasClassID["7wb"] = 190; NTIPAliasClassID["wristsword"] = 190;
NTIPAliasClassID["7xf"] = 191; NTIPAliasClassID["warfist"] = 191;
NTIPAliasClassID["7cs"] = 192; NTIPAliasClassID["battlecestus"] = 192;
NTIPAliasClassID["7lw"] = 193; NTIPAliasClassID["feralclaws"] = 193;
NTIPAliasClassID["7tw"] = 194; NTIPAliasClassID["runictalons"] = 194;
NTIPAliasClassID["7qr"] = 195; NTIPAliasClassID["scissorssuwayyah"] = 195;
NTIPAliasClassID["7ha"] = 196; NTIPAliasClassID["tomahawk"] = 196;
NTIPAliasClassID["7ax"] = 197; NTIPAliasClassID["smallcrescent"] = 197;
NTIPAliasClassID["72a"] = 198; NTIPAliasClassID["ettinaxe"] = 198;
NTIPAliasClassID["7mp"] = 199; NTIPAliasClassID["warspike"] = 199;
NTIPAliasClassID["7wa"] = 200; NTIPAliasClassID["berserkeraxe"] = 200;
NTIPAliasClassID["7la"] = 201; NTIPAliasClassID["feralaxe"] = 201;
NTIPAliasClassID["7ba"] = 202; NTIPAliasClassID["silveredgedaxe"] = 202;
NTIPAliasClassID["7bt"] = 203; NTIPAliasClassID["decapitator"] = 203;
NTIPAliasClassID["7ga"] = 204; NTIPAliasClassID["championaxe"] = 204;
NTIPAliasClassID["7gi"] = 205; NTIPAliasClassID["gloriousaxe"] = 205;
NTIPAliasClassID["7wn"] = 206; NTIPAliasClassID["polishedwand"] = 206;
NTIPAliasClassID["7yw"] = 207; NTIPAliasClassID["ghostwand"] = 207;
NTIPAliasClassID["7bw"] = 208; NTIPAliasClassID["lichwand"] = 208;
NTIPAliasClassID["7gw"] = 209; NTIPAliasClassID["unearthedwand"] = 209;
NTIPAliasClassID["7cl"] = 210; NTIPAliasClassID["truncheon"] = 210;
NTIPAliasClassID["7sc"] = 211; NTIPAliasClassID["mightyscepter"] = 211;
NTIPAliasClassID["7qs"] = 212; NTIPAliasClassID["seraphrod"] = 212;
NTIPAliasClassID["7ws"] = 213; NTIPAliasClassID["caduceus"] = 213;
NTIPAliasClassID["7sp"] = 214; NTIPAliasClassID["tyrantclub"] = 214;
NTIPAliasClassID["7ma"] = 215; NTIPAliasClassID["reinforcedmace"] = 215;
NTIPAliasClassID["7mt"] = 216; NTIPAliasClassID["devilstar"] = 216;
NTIPAliasClassID["7fl"] = 217; NTIPAliasClassID["scourge"] = 217;
NTIPAliasClassID["7wh"] = 218; NTIPAliasClassID["legendarymallet"] = 218;
NTIPAliasClassID["7m7"] = 219; NTIPAliasClassID["ogremaul"] = 219;
NTIPAliasClassID["7gm"] = 220; NTIPAliasClassID["thundermaul"] = 220;
NTIPAliasClassID["7ss"] = 221; NTIPAliasClassID["falcata"] = 221;
NTIPAliasClassID["7sm"] = 222; NTIPAliasClassID["ataghan"] = 222;
NTIPAliasClassID["7sb"] = 223; NTIPAliasClassID["elegantblade"] = 223;
NTIPAliasClassID["7fc"] = 224; NTIPAliasClassID["hydraedge"] = 224;
NTIPAliasClassID["7cr"] = 225; NTIPAliasClassID["phaseblade"] = 225;
NTIPAliasClassID["7bs"] = 226; NTIPAliasClassID["conquestsword"] = 226;
NTIPAliasClassID["7ls"] = 227; NTIPAliasClassID["crypticsword"] = 227;
NTIPAliasClassID["7wd"] = 228; NTIPAliasClassID["mythicalsword"] = 228;
NTIPAliasClassID["72h"] = 229; NTIPAliasClassID["legendsword"] = 229;
NTIPAliasClassID["7cm"] = 230; NTIPAliasClassID["highlandblade"] = 230;
NTIPAliasClassID["7gs"] = 231; NTIPAliasClassID["balrogblade"] = 231;
NTIPAliasClassID["7b7"] = 232; NTIPAliasClassID["championsword"] = 232;
NTIPAliasClassID["7fb"] = 233; NTIPAliasClassID["colossussword"] = 233;
NTIPAliasClassID["7gd"] = 234; NTIPAliasClassID["colossusblade"] = 234;
NTIPAliasClassID["7dg"] = 235; NTIPAliasClassID["boneknife"] = 235;
NTIPAliasClassID["7di"] = 236; NTIPAliasClassID["mithrilpoint"] = 236;
NTIPAliasClassID["7kr"] = 237; NTIPAliasClassID["fangedknife"] = 237;
NTIPAliasClassID["7bl"] = 238; NTIPAliasClassID["legendspike"] = 238;
NTIPAliasClassID["7tk"] = 239; NTIPAliasClassID["flyingknife"] = 239;
NTIPAliasClassID["7ta"] = 240; NTIPAliasClassID["flyingaxe"] = 240;
NTIPAliasClassID["7bk"] = 241; NTIPAliasClassID["wingedknife"] = 241;
NTIPAliasClassID["7b8"] = 242; NTIPAliasClassID["wingedaxe"] = 242;
NTIPAliasClassID["7ja"] = 243; NTIPAliasClassID["hyperionjavelin"] = 243;
NTIPAliasClassID["7pi"] = 244; NTIPAliasClassID["stygianpilum"] = 244;
NTIPAliasClassID["7s7"] = 245; NTIPAliasClassID["balrogspear"] = 245;
NTIPAliasClassID["7gl"] = 246; NTIPAliasClassID["ghostglaive"] = 246;
NTIPAliasClassID["7ts"] = 247; NTIPAliasClassID["wingedharpoon"] = 247;
NTIPAliasClassID["7sr"] = 248; NTIPAliasClassID["hyperionspear"] = 248;
NTIPAliasClassID["7tr"] = 249; NTIPAliasClassID["stygianpike"] = 249;
NTIPAliasClassID["7br"] = 250; NTIPAliasClassID["mancatcher"] = 250;
NTIPAliasClassID["7st"] = 251; NTIPAliasClassID["ghostspear"] = 251;
NTIPAliasClassID["7p7"] = 252; NTIPAliasClassID["warpike"] = 252;
NTIPAliasClassID["7o7"] = 253; NTIPAliasClassID["ogreaxe"] = 253;
NTIPAliasClassID["7vo"] = 254; NTIPAliasClassID["colossusvoulge"] = 254;
NTIPAliasClassID["7s8"] = 255; NTIPAliasClassID["thresher"] = 255;
NTIPAliasClassID["7pa"] = 256; NTIPAliasClassID["crypticaxe"] = 256;
NTIPAliasClassID["7h7"] = 257; NTIPAliasClassID["greatpoleaxe"] = 257;
NTIPAliasClassID["7wc"] = 258; NTIPAliasClassID["giantthresher"] = 258;
NTIPAliasClassID["6ss"] = 259; NTIPAliasClassID["walkingstick"] = 259;
NTIPAliasClassID["6ls"] = 260; NTIPAliasClassID["stalagmite"] = 260;
NTIPAliasClassID["6cs"] = 261; NTIPAliasClassID["elderstaff"] = 261;
NTIPAliasClassID["6bs"] = 262; NTIPAliasClassID["shillelagh"] = 262;
NTIPAliasClassID["6ws"] = 263; NTIPAliasClassID["archonstaff"] = 263;
NTIPAliasClassID["6sb"] = 264; NTIPAliasClassID["spiderbow"] = 264;
NTIPAliasClassID["6hb"] = 265; NTIPAliasClassID["bladebow"] = 265;
NTIPAliasClassID["6lb"] = 266; NTIPAliasClassID["shadowbow"] = 266;
NTIPAliasClassID["6cb"] = 267; NTIPAliasClassID["greatbow"] = 267;
NTIPAliasClassID["6s7"] = 268; NTIPAliasClassID["diamondbow"] = 268;
NTIPAliasClassID["6l7"] = 269; NTIPAliasClassID["crusaderbow"] = 269;
NTIPAliasClassID["6sw"] = 270; NTIPAliasClassID["wardbow"] = 270;
NTIPAliasClassID["6lw"] = 271; NTIPAliasClassID["hydrabow"] = 271;
NTIPAliasClassID["6lx"] = 272; NTIPAliasClassID["pelletbow"] = 272;
NTIPAliasClassID["6mx"] = 273; NTIPAliasClassID["gorgoncrossbow"] = 273;
NTIPAliasClassID["6hx"] = 274; NTIPAliasClassID["colossuscrossbow"] = 274;
NTIPAliasClassID["6rx"] = 275; NTIPAliasClassID["demoncrossbow"] = 275;
NTIPAliasClassID["ob1"] = 276; NTIPAliasClassID["eagleorb"] = 276;
NTIPAliasClassID["ob2"] = 277; NTIPAliasClassID["sacredglobe"] = 277;
NTIPAliasClassID["ob3"] = 278; NTIPAliasClassID["smokedsphere"] = 278;
NTIPAliasClassID["ob4"] = 279; NTIPAliasClassID["claspedorb"] = 279;
NTIPAliasClassID["ob5"] = 280; NTIPAliasClassID["jared'sstone"] = 280;
NTIPAliasClassID["am1"] = 281; NTIPAliasClassID["stagbow"] = 281;
NTIPAliasClassID["am2"] = 282; NTIPAliasClassID["reflexbow"] = 282;
NTIPAliasClassID["am3"] = 283; NTIPAliasClassID["maidenspear"] = 283;
NTIPAliasClassID["am4"] = 284; NTIPAliasClassID["maidenpike"] = 284;
NTIPAliasClassID["am5"] = 285; NTIPAliasClassID["maidenjavelin"] = 285;
NTIPAliasClassID["ob6"] = 286; NTIPAliasClassID["glowingorb"] = 286;
NTIPAliasClassID["ob7"] = 287; NTIPAliasClassID["crystallineglobe"] = 287;
NTIPAliasClassID["ob8"] = 288; NTIPAliasClassID["cloudysphere"] = 288;
NTIPAliasClassID["ob9"] = 289; NTIPAliasClassID["sparklingball"] = 289;
NTIPAliasClassID["oba"] = 290; NTIPAliasClassID["swirlingcrystal"] = 290;
NTIPAliasClassID["am6"] = 291; NTIPAliasClassID["ashwoodbow"] = 291;
NTIPAliasClassID["am7"] = 292; NTIPAliasClassID["ceremonialbow"] = 292;
NTIPAliasClassID["am8"] = 293; NTIPAliasClassID["ceremonialspear"] = 293;
NTIPAliasClassID["am9"] = 294; NTIPAliasClassID["ceremonialpike"] = 294;
NTIPAliasClassID["ama"] = 295; NTIPAliasClassID["ceremonialjavelin"] = 295;
NTIPAliasClassID["obb"] = 296; NTIPAliasClassID["heavenlystone"] = 296;
NTIPAliasClassID["obc"] = 297; NTIPAliasClassID["eldritchorb"] = 297;
NTIPAliasClassID["obd"] = 298; NTIPAliasClassID["demonheart"] = 298;
NTIPAliasClassID["obe"] = 299; NTIPAliasClassID["vortexorb"] = 299;
NTIPAliasClassID["obf"] = 300; NTIPAliasClassID["dimensionalshard"] = 300;
NTIPAliasClassID["amb"] = 301; NTIPAliasClassID["matriarchalbow"] = 301;
NTIPAliasClassID["amc"] = 302; NTIPAliasClassID["grandmatronbow"] = 302;
NTIPAliasClassID["amd"] = 303; NTIPAliasClassID["matriarchalspear"] = 303;
NTIPAliasClassID["ame"] = 304; NTIPAliasClassID["matriarchalpike"] = 304;
NTIPAliasClassID["amf"] = 305; NTIPAliasClassID["matriarchaljavelin"] = 305;
NTIPAliasClassID["cap"] = 306;
NTIPAliasClassID["skp"] = 307; NTIPAliasClassID["skullcap"] = 307;
NTIPAliasClassID["hlm"] = 308; NTIPAliasClassID["helm"] = 308;
NTIPAliasClassID["fhl"] = 309; NTIPAliasClassID["fullhelm"] = 309;
NTIPAliasClassID["ghm"] = 310; NTIPAliasClassID["greathelm"] = 310;
NTIPAliasClassID["crn"] = 311; NTIPAliasClassID["crown"] = 311;
NTIPAliasClassID["msk"] = 312; NTIPAliasClassID["mask"] = 312;
NTIPAliasClassID["qui"] = 313; NTIPAliasClassID["quiltedarmor"] = 313;
NTIPAliasClassID["lea"] = 314; NTIPAliasClassID["leatherarmor"] = 314;
NTIPAliasClassID["hla"] = 315; NTIPAliasClassID["hardleatherarmor"] = 315;
NTIPAliasClassID["stu"] = 316; NTIPAliasClassID["studdedleather"] = 316;
NTIPAliasClassID["rng"] = 317; NTIPAliasClassID["ringmail"] = 317;
NTIPAliasClassID["scl"] = 318; NTIPAliasClassID["scalemail"] = 318;
NTIPAliasClassID["chn"] = 319; NTIPAliasClassID["chainmail"] = 319;
NTIPAliasClassID["brs"] = 320; NTIPAliasClassID["breastplate"] = 320;
NTIPAliasClassID["spl"] = 321; NTIPAliasClassID["splintmail"] = 321;
NTIPAliasClassID["plt"] = 322; NTIPAliasClassID["platemail"] = 322;
NTIPAliasClassID["fld"] = 323; NTIPAliasClassID["fieldplate"] = 323;
NTIPAliasClassID["gth"] = 324; NTIPAliasClassID["gothicplate"] = 324;
NTIPAliasClassID["ful"] = 325; NTIPAliasClassID["fullplatemail"] = 325;
NTIPAliasClassID["aar"] = 326; NTIPAliasClassID["ancientarmor"] = 326;
NTIPAliasClassID["ltp"] = 327; NTIPAliasClassID["lightplate"] = 327;
NTIPAliasClassID["buc"] = 328; NTIPAliasClassID["buckler"] = 328;
NTIPAliasClassID["sml"] = 329; NTIPAliasClassID["smallshield"] = 329;
NTIPAliasClassID["lrg"] = 330; NTIPAliasClassID["largeshield"] = 330;
NTIPAliasClassID["kit"] = 331; NTIPAliasClassID["kiteshield"] = 331;
NTIPAliasClassID["tow"] = 332; NTIPAliasClassID["towershield"] = 332;
NTIPAliasClassID["gts"] = 333; NTIPAliasClassID["gothicshield"] = 333;
NTIPAliasClassID["lgl"] = 334; NTIPAliasClassID["leathergloves"] = 334;
NTIPAliasClassID["vgl"] = 335; NTIPAliasClassID["heavygloves"] = 335;
NTIPAliasClassID["mgl"] = 336; NTIPAliasClassID["chaingloves"] = 336;
NTIPAliasClassID["tgl"] = 337; NTIPAliasClassID["lightgauntlets"] = 337;
NTIPAliasClassID["hgl"] = 338; NTIPAliasClassID["gauntlets"] = 338;
NTIPAliasClassID["lbt"] = 339; NTIPAliasClassID["boots"] = 339;
NTIPAliasClassID["vbt"] = 340; NTIPAliasClassID["heavyboots"] = 340;
NTIPAliasClassID["mbt"] = 341; NTIPAliasClassID["chainboots"] = 341;
NTIPAliasClassID["tbt"] = 342; NTIPAliasClassID["lightplatedboots"] = 342;
NTIPAliasClassID["hbt"] = 343; NTIPAliasClassID["greaves"] = 343;
NTIPAliasClassID["lbl"] = 344; NTIPAliasClassID["sash"] = 344;
NTIPAliasClassID["vbl"] = 345; NTIPAliasClassID["lightbelt"] = 345;
NTIPAliasClassID["mbl"] = 346; NTIPAliasClassID["belt"] = 346;
NTIPAliasClassID["tbl"] = 347; NTIPAliasClassID["heavybelt"] = 347;
NTIPAliasClassID["hbl"] = 348; NTIPAliasClassID["platedbelt"] = 348;
NTIPAliasClassID["bhm"] = 349; NTIPAliasClassID["bonehelm"] = 349;
NTIPAliasClassID["bsh"] = 350; NTIPAliasClassID["boneshield"] = 350;
NTIPAliasClassID["spk"] = 351; NTIPAliasClassID["spikedshield"] = 351;
NTIPAliasClassID["xap"] = 352; NTIPAliasClassID["warhat"] = 352;
NTIPAliasClassID["xkp"] = 353; NTIPAliasClassID["sallet"] = 353;
NTIPAliasClassID["xlm"] = 354; NTIPAliasClassID["casque"] = 354;
NTIPAliasClassID["xhl"] = 355; NTIPAliasClassID["basinet"] = 355;
NTIPAliasClassID["xhm"] = 356; NTIPAliasClassID["wingedhelm"] = 356;
NTIPAliasClassID["xrn"] = 357; NTIPAliasClassID["grandcrown"] = 357;
NTIPAliasClassID["xsk"] = 358; NTIPAliasClassID["deathmask"] = 358;
NTIPAliasClassID["xui"] = 359; NTIPAliasClassID["ghostarmor"] = 359;
NTIPAliasClassID["xea"] = 360; NTIPAliasClassID["serpentskinarmor"] = 360;
NTIPAliasClassID["xla"] = 361; NTIPAliasClassID["demonhidearmor"] = 361;
NTIPAliasClassID["xtu"] = 362; NTIPAliasClassID["trellisedarmor"] = 362;
NTIPAliasClassID["xng"] = 363; NTIPAliasClassID["linkedmail"] = 363;
NTIPAliasClassID["xcl"] = 364; NTIPAliasClassID["tigulatedmail"] = 364;
NTIPAliasClassID["xhn"] = 365; NTIPAliasClassID["mesharmor"] = 365;
NTIPAliasClassID["xrs"] = 366; NTIPAliasClassID["cuirass"] = 366;
NTIPAliasClassID["xpl"] = 367; NTIPAliasClassID["russetarmor"] = 367;
NTIPAliasClassID["xlt"] = 368; NTIPAliasClassID["templarcoat"] = 368;
NTIPAliasClassID["xld"] = 369; NTIPAliasClassID["sharktootharmor"] = 369;
NTIPAliasClassID["xth"] = 370; NTIPAliasClassID["embossedplate"] = 370;
NTIPAliasClassID["xul"] = 371; NTIPAliasClassID["chaosarmor"] = 371;
NTIPAliasClassID["xar"] = 372; NTIPAliasClassID["ornateplate"] = 372;
NTIPAliasClassID["xtp"] = 373; NTIPAliasClassID["mageplate"] = 373;
NTIPAliasClassID["xuc"] = 374; NTIPAliasClassID["defender"] = 374;
NTIPAliasClassID["xml"] = 375; NTIPAliasClassID["roundshield"] = 375;
NTIPAliasClassID["xrg"] = 376; NTIPAliasClassID["scutum"] = 376;
NTIPAliasClassID["xit"] = 377; NTIPAliasClassID["dragonshield"] = 377;
NTIPAliasClassID["xow"] = 378; NTIPAliasClassID["pavise"] = 378;
NTIPAliasClassID["xts"] = 379; NTIPAliasClassID["ancientshield"] = 379;
NTIPAliasClassID["xlg"] = 380; NTIPAliasClassID["demonhidegloves"] = 380;
NTIPAliasClassID["xvg"] = 381; NTIPAliasClassID["sharkskingloves"] = 381;
NTIPAliasClassID["xmg"] = 382; NTIPAliasClassID["heavybracers"] = 382;
NTIPAliasClassID["xtg"] = 383; NTIPAliasClassID["battlegauntlets"] = 383;
NTIPAliasClassID["xhg"] = 384; NTIPAliasClassID["wargauntlets"] = 384;
NTIPAliasClassID["xlb"] = 385; NTIPAliasClassID["demonhideboots"] = 385;
NTIPAliasClassID["xvb"] = 386; NTIPAliasClassID["sharkskinboots"] = 386;
NTIPAliasClassID["xmb"] = 387; NTIPAliasClassID["meshboots"] = 387;
NTIPAliasClassID["xtb"] = 388; NTIPAliasClassID["battleboots"] = 388;
NTIPAliasClassID["xhb"] = 389; NTIPAliasClassID["warboots"] = 389;
NTIPAliasClassID["zlb"] = 390; NTIPAliasClassID["demonhidesash"] = 390;
NTIPAliasClassID["zvb"] = 391; NTIPAliasClassID["sharkskinbelt"] = 391;
NTIPAliasClassID["zmb"] = 392; NTIPAliasClassID["meshbelt"] = 392;
NTIPAliasClassID["ztb"] = 393; NTIPAliasClassID["battlebelt"] = 393;
NTIPAliasClassID["zhb"] = 394; NTIPAliasClassID["warbelt"] = 394;
NTIPAliasClassID["xh9"] = 395; NTIPAliasClassID["grimhelm"] = 395;
NTIPAliasClassID["xsh"] = 396; NTIPAliasClassID["grimshield"] = 396;
NTIPAliasClassID["xpk"] = 397; NTIPAliasClassID["barbedshield"] = 397;
NTIPAliasClassID["dr1"] = 398; NTIPAliasClassID["wolfhead"] = 398;
NTIPAliasClassID["dr2"] = 399; NTIPAliasClassID["hawkhelm"] = 399;
NTIPAliasClassID["dr3"] = 400; NTIPAliasClassID["antlers"] = 400;
NTIPAliasClassID["dr4"] = 401; NTIPAliasClassID["falconmask"] = 401;
NTIPAliasClassID["dr5"] = 402; NTIPAliasClassID["spiritmask"] = 402;
NTIPAliasClassID["ba1"] = 403; NTIPAliasClassID["jawbonecap"] = 403;
NTIPAliasClassID["ba2"] = 404; NTIPAliasClassID["fangedhelm"] = 404;
NTIPAliasClassID["ba3"] = 405; NTIPAliasClassID["hornedhelm"] = 405;
NTIPAliasClassID["ba4"] = 406; NTIPAliasClassID["assaulthelmet"] = 406;
NTIPAliasClassID["ba5"] = 407; NTIPAliasClassID["avengerguard"] = 407;
NTIPAliasClassID["pa1"] = 408; NTIPAliasClassID["targe"] = 408;
NTIPAliasClassID["pa2"] = 409; NTIPAliasClassID["rondache"] = 409;
NTIPAliasClassID["pa3"] = 410; NTIPAliasClassID["heraldicshield"] = 410;
NTIPAliasClassID["pa4"] = 411; NTIPAliasClassID["aerinshield"] = 411;
NTIPAliasClassID["pa5"] = 412; NTIPAliasClassID["crownshield"] = 412;
NTIPAliasClassID["ne1"] = 413; NTIPAliasClassID["preservedhead"] = 413;
NTIPAliasClassID["ne2"] = 414; NTIPAliasClassID["zombiehead"] = 414;
NTIPAliasClassID["ne3"] = 415; NTIPAliasClassID["unravellerhead"] = 415;
NTIPAliasClassID["ne4"] = 416; NTIPAliasClassID["gargoylehead"] = 416;
NTIPAliasClassID["ne5"] = 417; NTIPAliasClassID["demonhead"] = 417;
NTIPAliasClassID["ci0"] = 418; NTIPAliasClassID["circlet"] = 418;
NTIPAliasClassID["ci1"] = 419; NTIPAliasClassID["coronet"] = 419;
NTIPAliasClassID["ci2"] = 420; NTIPAliasClassID["tiara"] = 420;
NTIPAliasClassID["ci3"] = 421; NTIPAliasClassID["diadem"] = 421;
NTIPAliasClassID["uap"] = 422; NTIPAliasClassID["shako"] = 422;
NTIPAliasClassID["ukp"] = 423; NTIPAliasClassID["hydraskull"] = 423;
NTIPAliasClassID["ulm"] = 424; NTIPAliasClassID["armet"] = 424;
NTIPAliasClassID["uhl"] = 425; NTIPAliasClassID["giantconch"] = 425;
NTIPAliasClassID["uhm"] = 426; NTIPAliasClassID["spiredhelm"] = 426;
NTIPAliasClassID["urn"] = 427; NTIPAliasClassID["corona"] = 427;
NTIPAliasClassID["usk"] = 428; NTIPAliasClassID["demonhead"] = 428;
NTIPAliasClassID["uui"] = 429; NTIPAliasClassID["duskshroud"] = 429;
NTIPAliasClassID["uea"] = 430; NTIPAliasClassID["wyrmhide"] = 430;
NTIPAliasClassID["ula"] = 431; NTIPAliasClassID["scarabhusk"] = 431;
NTIPAliasClassID["utu"] = 432; NTIPAliasClassID["wirefleece"] = 432;
NTIPAliasClassID["ung"] = 433; NTIPAliasClassID["diamondmail"] = 433;
NTIPAliasClassID["ucl"] = 434; NTIPAliasClassID["loricatedmail"] = 434;
NTIPAliasClassID["uhn"] = 435; NTIPAliasClassID["boneweave"] = 435;
NTIPAliasClassID["urs"] = 436; NTIPAliasClassID["greathauberk"] = 436;
NTIPAliasClassID["upl"] = 437; NTIPAliasClassID["balrogskin"] = 437;
NTIPAliasClassID["ult"] = 438; NTIPAliasClassID["hellforgeplate"] = 438;
NTIPAliasClassID["uld"] = 439; NTIPAliasClassID["krakenshell"] = 439;
NTIPAliasClassID["uth"] = 440; NTIPAliasClassID["lacqueredplate"] = 440;
NTIPAliasClassID["uul"] = 441; NTIPAliasClassID["shadowplate"] = 441;
NTIPAliasClassID["uar"] = 442; NTIPAliasClassID["sacredarmor"] = 442;
NTIPAliasClassID["utp"] = 443; NTIPAliasClassID["archonplate"] = 443;
NTIPAliasClassID["uuc"] = 444; NTIPAliasClassID["heater"] = 444;
NTIPAliasClassID["uml"] = 445; NTIPAliasClassID["luna"] = 445;
NTIPAliasClassID["urg"] = 446; NTIPAliasClassID["hyperion"] = 446;
NTIPAliasClassID["uit"] = 447; NTIPAliasClassID["monarch"] = 447;
NTIPAliasClassID["uow"] = 448; NTIPAliasClassID["aegis"] = 448;
NTIPAliasClassID["uts"] = 449; NTIPAliasClassID["ward"] = 449;
NTIPAliasClassID["ulg"] = 450; NTIPAliasClassID["bramblemitts"] = 450;
NTIPAliasClassID["uvg"] = 451; NTIPAliasClassID["vampirebonegloves"] = 451;
NTIPAliasClassID["umg"] = 452; NTIPAliasClassID["vambraces"] = 452;
NTIPAliasClassID["utg"] = 453; NTIPAliasClassID["crusadergauntlets"] = 453;
NTIPAliasClassID["uhg"] = 454; NTIPAliasClassID["ogregauntlets"] = 454;
NTIPAliasClassID["ulb"] = 455; NTIPAliasClassID["wyrmhideboots"] = 455;
NTIPAliasClassID["uvb"] = 456; NTIPAliasClassID["scarabshellboots"] = 456;
NTIPAliasClassID["umb"] = 457; NTIPAliasClassID["boneweaveboots"] = 457;
NTIPAliasClassID["utb"] = 458; NTIPAliasClassID["mirroredboots"] = 458;
NTIPAliasClassID["uhb"] = 459; NTIPAliasClassID["myrmidongreaves"] = 459;
NTIPAliasClassID["ulc"] = 460; NTIPAliasClassID["spiderwebsash"] = 460;
NTIPAliasClassID["uvc"] = 461; NTIPAliasClassID["vampirefangbelt"] = 461;
NTIPAliasClassID["umc"] = 462; NTIPAliasClassID["mithrilcoil"] = 462;
NTIPAliasClassID["utc"] = 463; NTIPAliasClassID["trollbelt"] = 463;
NTIPAliasClassID["uhc"] = 464; NTIPAliasClassID["colossusgirdle"] = 464;
NTIPAliasClassID["uh9"] = 465; NTIPAliasClassID["bonevisage"] = 465;
NTIPAliasClassID["ush"] = 466; NTIPAliasClassID["trollnest"] = 466;
NTIPAliasClassID["upk"] = 467; NTIPAliasClassID["bladebarrier"] = 467;
NTIPAliasClassID["dr6"] = 468; NTIPAliasClassID["alphahelm"] = 468;
NTIPAliasClassID["dr7"] = 469; NTIPAliasClassID["griffonheaddress"] = 469;
NTIPAliasClassID["dr8"] = 470; NTIPAliasClassID["hunter'sguise"] = 470;
NTIPAliasClassID["dr9"] = 471; NTIPAliasClassID["sacredfeathers"] = 471;
NTIPAliasClassID["dra"] = 472; NTIPAliasClassID["totemicmask"] = 472;
NTIPAliasClassID["ba6"] = 473; NTIPAliasClassID["jawbonevisor"] = 473;
NTIPAliasClassID["ba7"] = 474; NTIPAliasClassID["lionhelm"] = 474;
NTIPAliasClassID["ba8"] = 475; NTIPAliasClassID["ragemask"] = 475;
NTIPAliasClassID["ba9"] = 476; NTIPAliasClassID["savagehelmet"] = 476;
NTIPAliasClassID["baa"] = 477; NTIPAliasClassID["slayerguard"] = 477;
NTIPAliasClassID["pa6"] = 478; NTIPAliasClassID["akarantarge"] = 478;
NTIPAliasClassID["pa7"] = 479; NTIPAliasClassID["akaranrondache"] = 479;
NTIPAliasClassID["pa8"] = 480; NTIPAliasClassID["protectorshield"] = 480;
NTIPAliasClassID["pa9"] = 481; NTIPAliasClassID["gildedshield"] = 481;
NTIPAliasClassID["paa"] = 482; NTIPAliasClassID["royalshield"] = 482;
NTIPAliasClassID["ne6"] = 483; NTIPAliasClassID["mummifiedtrophy"] = 483;
NTIPAliasClassID["ne7"] = 484; NTIPAliasClassID["fetishtrophy"] = 484;
NTIPAliasClassID["ne8"] = 485; NTIPAliasClassID["sextontrophy"] = 485;
NTIPAliasClassID["ne9"] = 486; NTIPAliasClassID["cantortrophy"] = 486;
NTIPAliasClassID["nea"] = 487; NTIPAliasClassID["hierophanttrophy"] = 487;
NTIPAliasClassID["drb"] = 488; NTIPAliasClassID["bloodspirit"] = 488;
NTIPAliasClassID["drc"] = 489; NTIPAliasClassID["sunspirit"] = 489;
NTIPAliasClassID["drd"] = 490; NTIPAliasClassID["earthspirit"] = 490;
NTIPAliasClassID["dre"] = 491; NTIPAliasClassID["skyspirit"] = 491;
NTIPAliasClassID["drf"] = 492; NTIPAliasClassID["dreamspirit"] = 492;
NTIPAliasClassID["bab"] = 493; NTIPAliasClassID["carnagehelm"] = 493;
NTIPAliasClassID["bac"] = 494; NTIPAliasClassID["furyvisor"] = 494;
NTIPAliasClassID["bad"] = 495; NTIPAliasClassID["destroyerhelm"] = 495;
NTIPAliasClassID["bae"] = 496; NTIPAliasClassID["conquerorcrown"] = 496;
NTIPAliasClassID["baf"] = 497; NTIPAliasClassID["guardiancrown"] = 497;
NTIPAliasClassID["pab"] = 498; NTIPAliasClassID["sacredtarge"] = 498;
NTIPAliasClassID["pac"] = 499; NTIPAliasClassID["sacredrondache"] = 499;
NTIPAliasClassID["pad"] = 500; NTIPAliasClassID["kurastshield"] = 500;
NTIPAliasClassID["pae"] = 501; NTIPAliasClassID["zakarumshield"] = 501;
NTIPAliasClassID["paf"] = 502; NTIPAliasClassID["vortexshield"] = 502;
NTIPAliasClassID["neb"] = 503; NTIPAliasClassID["minionskull"] = 503;
NTIPAliasClassID["neg"] = 504; NTIPAliasClassID["hellspawnskull"] = 504;
NTIPAliasClassID["ned"] = 505; NTIPAliasClassID["overseerskull"] = 505;
NTIPAliasClassID["nee"] = 506; NTIPAliasClassID["succubusskull"] = 506;
NTIPAliasClassID["nef"] = 507; NTIPAliasClassID["bloodlordskull"] = 507;
NTIPAliasClassID["elx"] = 508; NTIPAliasClassID["elixir"] = 508;
NTIPAliasClassID["hpo"] = 509;
NTIPAliasClassID["mpo"] = 510;
NTIPAliasClassID["hpf"] = 511;
NTIPAliasClassID["mpf"] = 512;
NTIPAliasClassID["vps"] = 513; NTIPAliasClassID["staminapotion"] = 513;
NTIPAliasClassID["yps"] = 514; NTIPAliasClassID["antidotepotion"] = 514;
NTIPAliasClassID["rvs"] = 515; NTIPAliasClassID["rejuvenationpotion"] = 515;
NTIPAliasClassID["rvl"] = 516; NTIPAliasClassID["fullrejuvenationpotion"] = 516;
NTIPAliasClassID["wms"] = 517; NTIPAliasClassID["thawingpotion"] = 517;
NTIPAliasClassID["tbk"] = 518; NTIPAliasClassID["tomeoftownportal"] = 518;
NTIPAliasClassID["ibk"] = 519; NTIPAliasClassID["tomeofidentify"] = 519;
NTIPAliasClassID["amu"] = 520; NTIPAliasClassID["amulet"] = 520;
NTIPAliasClassID["vip"] = 521; NTIPAliasClassID["topofthehoradricstaff"] = 521;
NTIPAliasClassID["rin"] = 522; NTIPAliasClassID["ring"] = 522;
NTIPAliasClassID["gld"] = 523; NTIPAliasClassID["gold"] = 523;
NTIPAliasClassID["bks"] = 524; NTIPAliasClassID["scrollofinifuss"] = 524;
NTIPAliasClassID["bkd"] = 525; NTIPAliasClassID["keytothecairnstones"] = 525;
NTIPAliasClassID["aqv"] = 526; NTIPAliasClassID["arrows"] = 526;
NTIPAliasClassID["tch"] = 527; NTIPAliasClassID["torch"] = 527;
NTIPAliasClassID["cqv"] = 528; NTIPAliasClassID["bolts"] = 528;
NTIPAliasClassID["tsc"] = 529; NTIPAliasClassID["scrolloftownportal"] = 529;
NTIPAliasClassID["isc"] = 530; NTIPAliasClassID["scrollofidentify"] = 530;
NTIPAliasClassID["hrt"] = 531; NTIPAliasClassID["heart"] = 531;
NTIPAliasClassID["brz"] = 532; NTIPAliasClassID["brain"] = 532;
NTIPAliasClassID["jaw"] = 533; NTIPAliasClassID["jawbone"] = 533;
NTIPAliasClassID["eyz"] = 534; NTIPAliasClassID["eye"] = 534;
NTIPAliasClassID["hrn"] = 535; NTIPAliasClassID["horn"] = 535;
NTIPAliasClassID["tal"] = 536; NTIPAliasClassID["tail"] = 536;
NTIPAliasClassID["flg"] = 537; NTIPAliasClassID["flag"] = 537;
NTIPAliasClassID["fng"] = 538; NTIPAliasClassID["fang"] = 538;
NTIPAliasClassID["qll"] = 539; NTIPAliasClassID["quill"] = 539;
NTIPAliasClassID["sol"] = 540; NTIPAliasClassID["soul"] = 540;
NTIPAliasClassID["scz"] = 541; NTIPAliasClassID["scalp"] = 541;
NTIPAliasClassID["spe"] = 542; NTIPAliasClassID["spleen"] = 542;
NTIPAliasClassID["key"] = 543;
NTIPAliasClassID["luv"] = 544; NTIPAliasClassID["theblacktowerkey"] = 544;
NTIPAliasClassID["xyz"] = 545; NTIPAliasClassID["potionoflife"] = 545;
NTIPAliasClassID["j34"] = 546; NTIPAliasClassID["ajadefigurine"] = 546;
NTIPAliasClassID["g34"] = 547; NTIPAliasClassID["thegoldenbird"] = 547;
NTIPAliasClassID["bbb"] = 548; NTIPAliasClassID["lamesen'stome"] = 548;
NTIPAliasClassID["box"] = 549; NTIPAliasClassID["horadriccube"] = 549;
NTIPAliasClassID["tr1"] = 550; NTIPAliasClassID["horadricscroll"] = 550;
NTIPAliasClassID["mss"] = 551; NTIPAliasClassID["mephisto'ssoulstone"] = 551;
NTIPAliasClassID["ass"] = 552; NTIPAliasClassID["bookofskill"] = 552;
NTIPAliasClassID["qey"] = 553; NTIPAliasClassID["khalim'seye"] = 553;
NTIPAliasClassID["qhr"] = 554; NTIPAliasClassID["khalim'sheart"] = 554;
NTIPAliasClassID["qbr"] = 555; NTIPAliasClassID["khalim'sbrain"] = 555;
NTIPAliasClassID["ear"] = 556;
NTIPAliasClassID["gcv"] = 557; NTIPAliasClassID["chippedamethyst"] = 557;
NTIPAliasClassID["gfv"] = 558; NTIPAliasClassID["flawedamethyst"] = 558;
NTIPAliasClassID["gsv"] = 559; NTIPAliasClassID["amethyst"] = 559;
NTIPAliasClassID["gzv"] = 560; NTIPAliasClassID["flawlessamethyst"] = 560;
NTIPAliasClassID["gpv"] = 561; NTIPAliasClassID["perfectamethyst"] = 561;
NTIPAliasClassID["gcy"] = 562; NTIPAliasClassID["chippedtopaz"] = 562;
NTIPAliasClassID["gfy"] = 563; NTIPAliasClassID["flawedtopaz"] = 563;
NTIPAliasClassID["gsy"] = 564; NTIPAliasClassID["topaz"] = 564;
NTIPAliasClassID["gly"] = 565; NTIPAliasClassID["flawlesstopaz"] = 565;
NTIPAliasClassID["gpy"] = 566; NTIPAliasClassID["perfecttopaz"] = 566;
NTIPAliasClassID["gcb"] = 567; NTIPAliasClassID["chippedsapphire"] = 567;
NTIPAliasClassID["gfb"] = 568; NTIPAliasClassID["flawedsapphire"] = 568;
NTIPAliasClassID["gsb"] = 569; NTIPAliasClassID["sapphire"] = 569;
NTIPAliasClassID["glb"] = 570; NTIPAliasClassID["flawlesssapphire"] = 570;
NTIPAliasClassID["gpb"] = 571; NTIPAliasClassID["perfectsapphire"] = 571;
NTIPAliasClassID["gcg"] = 572; NTIPAliasClassID["chippedemerald"] = 572;
NTIPAliasClassID["gfg"] = 573; NTIPAliasClassID["flawedemerald"] = 573;
NTIPAliasClassID["gsg"] = 574; NTIPAliasClassID["emerald"] = 574;
NTIPAliasClassID["glg"] = 575; NTIPAliasClassID["flawlessemerald"] = 575;
NTIPAliasClassID["gpg"] = 576; NTIPAliasClassID["perfectemerald"] = 576;
NTIPAliasClassID["gcr"] = 577; NTIPAliasClassID["chippedruby"] = 577;
NTIPAliasClassID["gfr"] = 578; NTIPAliasClassID["flawedruby"] = 578;
NTIPAliasClassID["gsr"] = 579; NTIPAliasClassID["ruby"] = 579;
NTIPAliasClassID["glr"] = 580; NTIPAliasClassID["flawlessruby"] = 580;
NTIPAliasClassID["gpr"] = 581; NTIPAliasClassID["perfectruby"] = 581;
NTIPAliasClassID["gcw"] = 582; NTIPAliasClassID["chippeddiamond"] = 582;
NTIPAliasClassID["gfw"] = 583; NTIPAliasClassID["flaweddiamond"] = 583;
NTIPAliasClassID["gsw"] = 584; NTIPAliasClassID["diamond"] = 584;
NTIPAliasClassID["glw"] = 585; NTIPAliasClassID["flawlessdiamond"] = 585;
NTIPAliasClassID["gpw"] = 586; NTIPAliasClassID["perfectdiamond"] = 586;
NTIPAliasClassID["hp1"] = 587; NTIPAliasClassID["minorhealingpotion"] = 587;
NTIPAliasClassID["hp2"] = 588; NTIPAliasClassID["lighthealingpotion"] = 588;
NTIPAliasClassID["hp3"] = 589; NTIPAliasClassID["healingpotion"] = 589;
NTIPAliasClassID["hp4"] = 590; NTIPAliasClassID["greaterhealingpotion"] = 590;
NTIPAliasClassID["hp5"] = 591; NTIPAliasClassID["superhealingpotion"] = 591;
NTIPAliasClassID["mp1"] = 592; NTIPAliasClassID["minormanapotion"] = 592;
NTIPAliasClassID["mp2"] = 593; NTIPAliasClassID["lightmanapotion"] = 593;
NTIPAliasClassID["mp3"] = 594; NTIPAliasClassID["manapotion"] = 594;
NTIPAliasClassID["mp4"] = 595; NTIPAliasClassID["greatermanapotion"] = 595;
NTIPAliasClassID["mp5"] = 596; NTIPAliasClassID["supermanapotion"] = 596;
NTIPAliasClassID["skc"] = 597; NTIPAliasClassID["chippedskull"] = 597;
NTIPAliasClassID["skf"] = 598; NTIPAliasClassID["flawedskull"] = 598;
NTIPAliasClassID["sku"] = 599; NTIPAliasClassID["skull"] = 599;
NTIPAliasClassID["skl"] = 600; NTIPAliasClassID["flawlessskull"] = 600;
NTIPAliasClassID["skz"] = 601; NTIPAliasClassID["perfectskull"] = 601;
NTIPAliasClassID["hrb"] = 602; NTIPAliasClassID["herb"] = 602;
NTIPAliasClassID["cm1"] = 603; NTIPAliasClassID["smallcharm"] = 603;
NTIPAliasClassID["cm2"] = 604; NTIPAliasClassID["largecharm"] = 604;
NTIPAliasClassID["cm3"] = 605; NTIPAliasClassID["grandcharm"] = 605;
NTIPAliasClassID["rps"] = 606;
NTIPAliasClassID["rpl"] = 607;
NTIPAliasClassID["bps"] = 608;
NTIPAliasClassID["bpl"] = 609;
NTIPAliasClassID["r01"] = 610; NTIPAliasClassID["elrune"] = 610;
NTIPAliasClassID["r02"] = 611; NTIPAliasClassID["eldrune"] = 611;
NTIPAliasClassID["r03"] = 612; NTIPAliasClassID["tirrune"] = 612;
NTIPAliasClassID["r04"] = 613; NTIPAliasClassID["nefrune"] = 613;
NTIPAliasClassID["r05"] = 614; NTIPAliasClassID["ethrune"] = 614;
NTIPAliasClassID["r06"] = 615; NTIPAliasClassID["ithrune"] = 615;
NTIPAliasClassID["r07"] = 616; NTIPAliasClassID["talrune"] = 616;
NTIPAliasClassID["r08"] = 617; NTIPAliasClassID["ralrune"] = 617;
NTIPAliasClassID["r09"] = 618; NTIPAliasClassID["ortrune"] = 618;
NTIPAliasClassID["r10"] = 619; NTIPAliasClassID["thulrune"] = 619;
NTIPAliasClassID["r11"] = 620; NTIPAliasClassID["amnrune"] = 620;
NTIPAliasClassID["r12"] = 621; NTIPAliasClassID["solrune"] = 621;
NTIPAliasClassID["r13"] = 622; NTIPAliasClassID["shaelrune"] = 622;
NTIPAliasClassID["r14"] = 623; NTIPAliasClassID["dolrune"] = 623;
NTIPAliasClassID["r15"] = 624; NTIPAliasClassID["helrune"] = 624;
NTIPAliasClassID["r16"] = 625; NTIPAliasClassID["iorune"] = 625;
NTIPAliasClassID["r17"] = 626; NTIPAliasClassID["lumrune"] = 626;
NTIPAliasClassID["r18"] = 627; NTIPAliasClassID["korune"] = 627;
NTIPAliasClassID["r19"] = 628; NTIPAliasClassID["falrune"] = 628;
NTIPAliasClassID["r20"] = 629; NTIPAliasClassID["lemrune"] = 629;
NTIPAliasClassID["r21"] = 630; NTIPAliasClassID["pulrune"] = 630;
NTIPAliasClassID["r22"] = 631; NTIPAliasClassID["umrune"] = 631;
NTIPAliasClassID["r23"] = 632; NTIPAliasClassID["malrune"] = 632;
NTIPAliasClassID["r24"] = 633; NTIPAliasClassID["istrune"] = 633;
NTIPAliasClassID["r25"] = 634; NTIPAliasClassID["gulrune"] = 634;
NTIPAliasClassID["r26"] = 635; NTIPAliasClassID["vexrune"] = 635;
NTIPAliasClassID["r27"] = 636; NTIPAliasClassID["ohmrune"] = 636;
NTIPAliasClassID["r28"] = 637; NTIPAliasClassID["lorune"] = 637;
NTIPAliasClassID["r29"] = 638; NTIPAliasClassID["surrune"] = 638;
NTIPAliasClassID["r30"] = 639; NTIPAliasClassID["berrune"] = 639;
NTIPAliasClassID["r31"] = 640; NTIPAliasClassID["jahrune"] = 640;
NTIPAliasClassID["r32"] = 641; NTIPAliasClassID["chamrune"] = 641;
NTIPAliasClassID["r33"] = 642; NTIPAliasClassID["zodrune"] = 642;
NTIPAliasClassID["jew"] = 643; NTIPAliasClassID["jewel"] = 643;
NTIPAliasClassID["ice"] = 644; NTIPAliasClassID["malah'spotion"] = 644;
NTIPAliasClassID["0sc"] = 645; NTIPAliasClassID["scrollofknowledge"] = 645;
NTIPAliasClassID["tr2"] = 646; NTIPAliasClassID["scrollofresistance"] = 646;
NTIPAliasClassID["pk1"] = 647; NTIPAliasClassID["keyofterror"] = 647;
NTIPAliasClassID["pk2"] = 648; NTIPAliasClassID["keyofhate"] = 648;
NTIPAliasClassID["pk3"] = 649; NTIPAliasClassID["keyofdestruction"] = 649;
NTIPAliasClassID["dhn"] = 650; NTIPAliasClassID["diablo'shorn"] = 650;
NTIPAliasClassID["bey"] = 651; NTIPAliasClassID["baal'seye"] = 651;
NTIPAliasClassID["mbr"] = 652; NTIPAliasClassID["mephisto'sbrain"] = 652;
NTIPAliasClassID["toa"] = 653; NTIPAliasClassID["tokenofabsolution"] = 653;
NTIPAliasClassID["tes"] = 654; NTIPAliasClassID["twistedessenceofsuffering"] = 654;
NTIPAliasClassID["ceh"] = 655; NTIPAliasClassID["chargedessenceofhatred"] = 655;
NTIPAliasClassID["bet"] = 656; NTIPAliasClassID["burningessenceofterror"] = 656;
NTIPAliasClassID["fed"] = 657; NTIPAliasClassID["festeringessenceofdestruction"] = 657;
NTIPAliasClassID["std"] = 658; NTIPAliasClassID["standardofheroes"] = 658;

/** @global */
export const NTIPAliasClass: NTIPAliasRecord = {};
NTIPAliasClass["normal"] = 0;
NTIPAliasClass["exceptional"] = 1;
NTIPAliasClass["elite"] = 2;

/** @global */
export const NTIPAliasQuality: NTIPAliasRecord = {};
NTIPAliasQuality["lowquality"] = 1;
NTIPAliasQuality["normal"] = 2;
NTIPAliasQuality["superior"] = 3;
NTIPAliasQuality["magic"] = 4;
NTIPAliasQuality["set"] = 5;
NTIPAliasQuality["rare"] = 6;
NTIPAliasQuality["unique"] = 7;
NTIPAliasQuality["crafted"] = 8;

/** @global */
export const NTIPAliasFlag: NTIPAliasRecord = {};
NTIPAliasFlag["identified"] = 0x10;
NTIPAliasFlag["eth"] = 0x400000; NTIPAliasFlag["ethereal"] = 0x400000;
NTIPAliasFlag["runeword"] = 0x4000000;

// rare item colors
/** @global */
export const NTIPAliasColor: NTIPAliasRecord = {};
NTIPAliasColor["black"] = 3;
NTIPAliasColor["white"] = 20;
NTIPAliasColor["orange"] = 19;
NTIPAliasColor["lightyellow"] = 13;
NTIPAliasColor["lightred"] = 7;
NTIPAliasColor["lightgold"] = 15;
NTIPAliasColor["lightblue"] = 4;
NTIPAliasColor["lightpurple"] = 17;
NTIPAliasColor["crystalblue"] = 6;
NTIPAliasColor["crystalred"] = 9;
NTIPAliasColor["crystalgreen"] = 12;
NTIPAliasColor["darkyellow"] = 14;
NTIPAliasColor["darkred"] = 8;
NTIPAliasColor["darkgold"] = 16;
NTIPAliasColor["darkgreen"] = 11;
NTIPAliasColor["darkblue"] = 5;

/** @global */
export const NTIPAliasStat: NTIPAliasRecord = {};
NTIPAliasStat["strength"] = 0;
NTIPAliasStat["energy"] = 1;
NTIPAliasStat["dexterity"] = 2;
NTIPAliasStat["vitality"] = 3;
NTIPAliasStat["statpts"] = 4;
NTIPAliasStat["newskills"] = 5;
NTIPAliasStat["hitpoints"] = 6;
NTIPAliasStat["maxhp"] = 7;
NTIPAliasStat["mana"] = 8;
NTIPAliasStat["maxmana"] = 9;
NTIPAliasStat["stamina"] = 10;
NTIPAliasStat["maxstamina"] = 11;
NTIPAliasStat["level"] = 12;
NTIPAliasStat["experience"] = 13;
NTIPAliasStat["gold"] = 14;
NTIPAliasStat["goldbank"] = 15;
NTIPAliasStat["itemarmorpercent"] = [16, 0];	NTIPAliasStat["enhanceddefense"] = [16, 0];
NTIPAliasStat["itemmaxdamagepercent"] = [17, 0];
NTIPAliasStat["itemmindamagepercent"] = [18, 0];	NTIPAliasStat["enhanceddamage"] = [18, 0];
NTIPAliasStat["tohit"] = 19;
NTIPAliasStat["toblock"] = 20;
NTIPAliasStat["plusmindamage"] = [21, 1];
NTIPAliasStat["mindamage"] = 21;
NTIPAliasStat["plusmaxdamage"] = [22, 1];
NTIPAliasStat["maxdamage"] = 22;
NTIPAliasStat["secondarymindamage"] = 23;
NTIPAliasStat["secondarymaxdamage"] = 24;
NTIPAliasStat["damagepercent"] = 25;
NTIPAliasStat["manarecovery"] = 26;
NTIPAliasStat["manarecoverybonus"] = 27;
NTIPAliasStat["staminarecoverybonus"] = 28;
NTIPAliasStat["lastexp"] = 29;
NTIPAliasStat["nextexp"] = 30;

NTIPAliasStat["armorclass"] = 31;	NTIPAliasStat["defense"] = 31;
NTIPAliasStat["plusdefense"] = [31, 0];

NTIPAliasStat["armorclassvsmissile"] = 32;
NTIPAliasStat["armorclassvshth"] = 33;
NTIPAliasStat["normaldamagereduction"] = 34;
NTIPAliasStat["magicdamagereduction"] = 35;
NTIPAliasStat["damageresist"] = 36;
NTIPAliasStat["magicresist"] = 37;
NTIPAliasStat["maxmagicresist"] = 38;
NTIPAliasStat["fireresist"] = 39;
NTIPAliasStat["maxfireresist"] = 40;
NTIPAliasStat["lightresist"] = 41;
NTIPAliasStat["maxlightresist"] = 42;
NTIPAliasStat["coldresist"] = 43;
NTIPAliasStat["maxcoldresist"] = 44;
NTIPAliasStat["poisonresist"] = 45;
NTIPAliasStat["maxpoisonresist"] = 46;
NTIPAliasStat["damageaura"] = 47;
NTIPAliasStat["firemindam"] = 48;
NTIPAliasStat["firemaxdam"] = 49;
NTIPAliasStat["lightmindam"] = 50;
NTIPAliasStat["lightmaxdam"] = 51;
NTIPAliasStat["magicmindam"] = 52;
NTIPAliasStat["magicmaxdam"] = 53;
NTIPAliasStat["coldmindam"] = 54;
NTIPAliasStat["coldmaxdam"] = 55;
NTIPAliasStat["coldlength"] = 56;
NTIPAliasStat["poisondamage"] = [57, 1];
NTIPAliasStat["poisonmindam"] = 57;
NTIPAliasStat["poisonmaxdam"] = 58;
NTIPAliasStat["poisonlength"] = 59;
NTIPAliasStat["lifedrainmindam"] = 60;	NTIPAliasStat["lifeleech"] = 60;
NTIPAliasStat["lifedrainmaxdam"] = 61;
NTIPAliasStat["manadrainmindam"] = 62;	NTIPAliasStat["manaleech"] = 62;
NTIPAliasStat["manadrainmaxdam"] = 63;
NTIPAliasStat["stamdrainmindam"] = 64;
NTIPAliasStat["stamdrainmaxdam"] = 65;
NTIPAliasStat["stunlength"] = 66;
NTIPAliasStat["velocitypercent"] = 67;
NTIPAliasStat["attackrate"] = 68;
NTIPAliasStat["otheranimrate"] = 69;
NTIPAliasStat["quantity"] = 70;
NTIPAliasStat["value"] = 71;
NTIPAliasStat["durability"] = 72;
NTIPAliasStat["maxdurability"] = 73;
NTIPAliasStat["hpregen"] = 74;
NTIPAliasStat["itemmaxdurabilitypercent"] = 75;
NTIPAliasStat["itemmaxhppercent"] = 76;
NTIPAliasStat["itemmaxmanapercent"] = 77;
NTIPAliasStat["itemattackertakesdamage"] = 78;
NTIPAliasStat["itemgoldbonus"] = 79;
NTIPAliasStat["itemmagicbonus"] = 80;
NTIPAliasStat["itemknockback"] = 81;
NTIPAliasStat["itemtimeduration"] = 82;

NTIPAliasStat["itemaddclassskills"] = 83;
NTIPAliasStat["itemaddamazonskills"] = [83, 0];	NTIPAliasStat["amazonskills"] = [83, 0];
NTIPAliasStat["itemaddsorceressskills"] = [83, 1];	NTIPAliasStat["sorceressskills"] = [83, 1];
NTIPAliasStat["itemaddnecromancerskills"] = [83, 2];	NTIPAliasStat["necromancerskills"] = [83, 2];
NTIPAliasStat["itemaddpaladinskills"] = [83, 3];	NTIPAliasStat["paladinskills"] = [83, 3];
NTIPAliasStat["itemaddbarbarianskills"] = [83, 4];	NTIPAliasStat["barbarianskills"] = [83, 4];
NTIPAliasStat["itemadddruidskills"] = [83, 5];	NTIPAliasStat["druidskills"] = [83, 5];
NTIPAliasStat["itemaddassassinskills"] = [83, 6];	NTIPAliasStat["assassinskills"] = [83, 6];

NTIPAliasStat["unsentparam1"] = 84;
NTIPAliasStat["itemaddexperience"] = 85;
NTIPAliasStat["itemhealafterkill"] = 86;
NTIPAliasStat["itemreducedprices"] = 87;
NTIPAliasStat["itemdoubleherbduration"] = 88;
NTIPAliasStat["itemlightradius"] = 89;
NTIPAliasStat["itemlightcolor"] = 90;
NTIPAliasStat["itemreqpercent"] = 91;
NTIPAliasStat["itemlevelreq"] = 92;
NTIPAliasStat["itemfasterattackrate"] = 93;	NTIPAliasStat["ias"] = 93;
NTIPAliasStat["itemlevelreqpct"] = 94;
NTIPAliasStat["lastblockframe"] = 95;
NTIPAliasStat["itemfastermovevelocity"] = 96;	NTIPAliasStat["frw"] = 96;

// oskill
NTIPAliasStat["itemnonclassskill"] = 97;
// Amazon
NTIPAliasStat["plusskillcriticalstrike"] = [97, 9];
NTIPAliasStat["plusskillguidedarrow"] = [97, 22];
NTIPAliasStat["plusskillvalkyrie"] = [97, sdk.skills.Valkyrie];
// Sorceress
NTIPAliasStat["plusskillwarmth"] = [97, sdk.skills.Warmth];
NTIPAliasStat["plusskillinferno"] = [97, sdk.skills.Inferno];
NTIPAliasStat["plusskillfireball"] = [97, sdk.skills.FireBall];
NTIPAliasStat["plusskillfirewall"] = [97, sdk.skills.FireWall];
NTIPAliasStat["plusskillteleport"] = [97, sdk.skills.Teleport];
NTIPAliasStat["plusskillmeteor"] = [97, sdk.skills.Meteor];
NTIPAliasStat["plusskillfiremastery"] = [97, sdk.skills.FireMastery];
NTIPAliasStat["plusskillhydra"] = [97, sdk.skills.Hydra];
// Barbarian
NTIPAliasStat["plusskillbattlecry"] = [97, 146];
NTIPAliasStat["plusskillbattleorders"] = [97, 149];
NTIPAliasStat["plusskillbattlecommand"] = [97, 155];
NTIPAliasStat["plusskillwhirlwind"] = [97, sdk.skills.Whirlwind];
NTIPAliasStat["plusskillberserk"] = [97, sdk.skills.Berserk];
// Druid
NTIPAliasStat["plusskillwerewolf"] = [97, 223];
NTIPAliasStat["plusskillwerebear"] = [97, sdk.skills.Werebear];
NTIPAliasStat["plusskillshapeshifting"] = [97, 224];	NTIPAliasStat["plusskilllycanthropy"] = [97, 224];
NTIPAliasStat["plusskillsummonspiritwolf"] = [97, 227];
NTIPAliasStat["plusskillferalrage"] = [97, 232];
NTIPAliasStat["plusskillarticblast"] = [97, sdk.skills.ArcticBlast];
// paladin
NTIPAliasStat["plusskillzeal"] = [97, sdk.skills.Zeal];
NTIPAliasStat["plusskillvengeance"] = [97, sdk.skills.Vengeance];

NTIPAliasStat["state"] = 98;
NTIPAliasStat["itemfastergethitrate"] = 99;	NTIPAliasStat["fhr"] = 99;
NTIPAliasStat["monsterplayercount"] = 100;
NTIPAliasStat["skillpoisonoverridelength"] = 101;
NTIPAliasStat["itemfasterblockrate"] = 102;	NTIPAliasStat["fbr"] = 102;
NTIPAliasStat["skillbypassundead"] = 103;
NTIPAliasStat["skillbypassdemons"] = 104;
NTIPAliasStat["itemfastercastrate"] = 105;	NTIPAliasStat["fcr"] = 105;
NTIPAliasStat["skillbypassbeasts"] = 106;

NTIPAliasStat["itemsingleskill"] = 107;
// Amazon skills
NTIPAliasStat["skillmagicarrow"] = [107, 6];
NTIPAliasStat["skillfirearrow"] = [107, 7];
NTIPAliasStat["skillinnersight"] = [107, 8];
NTIPAliasStat["skillcriticalstrike"] = [107, 9];
NTIPAliasStat["skilljab"] = [107, 10];
NTIPAliasStat["skillcoldarrow"] = [107, 11];
NTIPAliasStat["skillmultipleshot"] = [107, 12];
NTIPAliasStat["skilldodge"] = [107, 13];
NTIPAliasStat["skillpowerstrike"] = [107, 14];
NTIPAliasStat["skillpoisonjavelin"] = [107, 15];
NTIPAliasStat["skillexplodingarrow"] = [107, 16];
NTIPAliasStat["skillslowmissiles"] = [107, 17];
NTIPAliasStat["skillavoid"] = [107, 18];
NTIPAliasStat["skillimpale"] = [107, 19];
NTIPAliasStat["skilllightningbolt"] = [107, 20];
NTIPAliasStat["skillicearrow"] = [107, 21];
NTIPAliasStat["skillguidedarrow"] = [107, 22];
NTIPAliasStat["skillpenetrate"] = [107, 23];
NTIPAliasStat["skillchargedstrike"] = [107, 24];
NTIPAliasStat["skillplaguejavelin"] = [107, 25];
NTIPAliasStat["skillstrafe"] = [107, 26];
NTIPAliasStat["skillimmolationarrow"] = [107, 27];
NTIPAliasStat["skilldecoy"] = [107, 28];
NTIPAliasStat["skillevade"] = [107, 29];
NTIPAliasStat["skillfend"] = [107, 30];
NTIPAliasStat["skillfreezingarrow"] = [107, 31];
NTIPAliasStat["skillvalkyrie"] = [107, 32];
NTIPAliasStat["skillpierce"] = [107, 33];
NTIPAliasStat["skilllightningstrike"] = [107, 34];
NTIPAliasStat["skilllightningfury"] = [107, 35];
// Sorceress skills
NTIPAliasStat["skillfirebolt"] = [107, 36];
NTIPAliasStat["skillwarmth"] = [107, 37];
NTIPAliasStat["skillchargedbolt"] = [107, 38];
NTIPAliasStat["skillicebolt"] = [107, 39];
NTIPAliasStat["skillfrozenarmor"] = [107, 40];
NTIPAliasStat["skillinferno"] = [107, 41];
NTIPAliasStat["skillstaticfield"] = [107, 42];
NTIPAliasStat["skilltelekinesis"] = [107, 43];
NTIPAliasStat["skillfrostnova"] = [107, 44];
NTIPAliasStat["skilliceblast"] = [107, 45];
NTIPAliasStat["skillblaze"] = [107, 46];
NTIPAliasStat["skillfireball"] = [107, 47];
NTIPAliasStat["skillnova"] = [107, 48];
NTIPAliasStat["skilllightning"] = [107, 49];
NTIPAliasStat["skillshiverarmor"] = [107, 50];
NTIPAliasStat["skillfirewall"] = [107, 51];
NTIPAliasStat["skillenchant"] = [107, 52];
NTIPAliasStat["skillchainlightning"] = [107, 53];
NTIPAliasStat["skillteleport"] = [107, 54];
NTIPAliasStat["skillglacialspike"] = [107, 55];
NTIPAliasStat["skillmeteor"] = [107, 56];
NTIPAliasStat["skillthunderstorm"] = [107, 57];
NTIPAliasStat["skillenergyshield"] = [107, 58];
NTIPAliasStat["skillblizzard"] = [107, 59];
NTIPAliasStat["skillchillingarmor"] = [107, 60];
NTIPAliasStat["skillfiremastery"] = [107, 61];
NTIPAliasStat["skillhydra"] = [107, 62];
NTIPAliasStat["skilllightningmastery"] = [107, 63];
NTIPAliasStat["skillfrozenorb"] = [107, 64];
NTIPAliasStat["skillcoldmastery"] = [107, 65];
// Necromancer skills
NTIPAliasStat["skillamplifydamage"] = [107, 66];
NTIPAliasStat["skillteeth"] = [107, 67];
NTIPAliasStat["skillbonearmor"] = [107, 68];
NTIPAliasStat["skillskeletonmastery"] = [107, 69];
NTIPAliasStat["skillraiseskeleton"] = [107, 70];
NTIPAliasStat["skilldimvision"] = [107, 71];
NTIPAliasStat["skillweaken"] = [107, 72];
NTIPAliasStat["skillpoisondagger"] = [107, 73];
NTIPAliasStat["skillcorpseexplosion"] = [107, 74];
NTIPAliasStat["skillclaygolem"] = [107, 75];
NTIPAliasStat["skillironmaiden"] = [107, 76];
NTIPAliasStat["skillterror"] = [107, 77];
NTIPAliasStat["skillbonewall"] = [107, 78];
NTIPAliasStat["skillgolemmastery"] = [107, 79];
NTIPAliasStat["skillskeletalmage"] = [107, 80];
NTIPAliasStat["skillconfuse"] = [107, 81];
NTIPAliasStat["skilllifetap"] = [107, 82];
NTIPAliasStat["skillpoisonexplosion"] = [107, 83];
NTIPAliasStat["skillbonespear"] = [107, 84];
NTIPAliasStat["skillbloodgolem"] = [107, 85];
NTIPAliasStat["skillattract"] = [107, 86];
NTIPAliasStat["skilldecrepify"] = [107, 87];
NTIPAliasStat["skillboneprison"] = [107, 88];
NTIPAliasStat["skillsummonresist"] = [107, 89];
NTIPAliasStat["skillirongolem"] = [107, 90];
NTIPAliasStat["skilllowerresist"] = [107, 91];
NTIPAliasStat["skillpoisonnova"] = [107, 92];
NTIPAliasStat["skillbonespirit"] = [107, 93];
NTIPAliasStat["skillfiregolem"] = [107, 94];
NTIPAliasStat["skillrevive"] = [107, 95];
// Paladin skills
NTIPAliasStat["skillsacrifice"] = [107, 96];
NTIPAliasStat["skillsmite"] = [107, 97];
NTIPAliasStat["skillmight"] = [107, 98];
NTIPAliasStat["skillprayer"] = [107, 99];
NTIPAliasStat["skillresistfire"] = [107, 100];
NTIPAliasStat["skillholybolt"] = [107, 101];
NTIPAliasStat["skillholyfire"] = [107, 102];
NTIPAliasStat["skillthorns"] = [107, 103];
NTIPAliasStat["skilldefiance"] = [107, 104];
NTIPAliasStat["skillresistcold"] = [107, 105];
NTIPAliasStat["skillzeal"] = [107, 106];
NTIPAliasStat["skillcharge"] = [107, 107];
NTIPAliasStat["skillblessedaim"] = [107, 108];
NTIPAliasStat["skillcleansing"] = [107, 109];
NTIPAliasStat["skillresistlightning"] = [107, 110];
NTIPAliasStat["skillvengeance"] = [107, 111];
NTIPAliasStat["skillblessedhammer"] = [107, 112];
NTIPAliasStat["skillconcentration"] = [107, 113];
NTIPAliasStat["skillholyfreeze"] = [107, 114];
NTIPAliasStat["skillvigor"] = [107, 115];
NTIPAliasStat["skillconversion"] = [107, 116];
NTIPAliasStat["skillholyshield"] = [107, 117];
NTIPAliasStat["skillholyshock"] = [107, 118];
NTIPAliasStat["skillsanctuary"] = [107, 119];
NTIPAliasStat["skillmeditation"] = [107, 120];
NTIPAliasStat["skillfistoftheheavens"] = [107, 121];
NTIPAliasStat["skillfanaticism"] = [107, 122];
NTIPAliasStat["skillconviction"] = [107, 123];
NTIPAliasStat["skillredemption"] = [107, 124];
NTIPAliasStat["skillsalvation"] = [107, 125];
// Barbarian skills
NTIPAliasStat["skillbash"] = [107, 126];
NTIPAliasStat["skillswordmastery"] = [107, 127];
NTIPAliasStat["skillaxemastery"] = [107, 128];
NTIPAliasStat["skillmacemastery"] = [107, 129];
NTIPAliasStat["skillhowl"] = [107, 130];
NTIPAliasStat["skillfindpotion"] = [107, 131];
NTIPAliasStat["skillleap"] = [107, 132];
NTIPAliasStat["skilldoubleswing"] = [107, 133];
NTIPAliasStat["skillpolearmmastery"] = [107, 134];
NTIPAliasStat["skillthrowingmastery"] = [107, 135];
NTIPAliasStat["skillspearmastery"] = [107, 136];
NTIPAliasStat["skilltaunt"] = [107, 137];
NTIPAliasStat["skillshout"] = [107, 138];
NTIPAliasStat["skillstun"] = [107, 139];
NTIPAliasStat["skilldoublethrow"] = [107, 140];
NTIPAliasStat["skillincreasedstamina"] = [107, 141];
NTIPAliasStat["skillfinditem"] = [107, 142];
NTIPAliasStat["skillleapattack"] = [107, 143];
NTIPAliasStat["skillconcentrate"] = [107, 144];
NTIPAliasStat["skillironskin"] = [107, 145];
NTIPAliasStat["skillbattlecry"] = [107, 146];
NTIPAliasStat["skillfrenzy"] = [107, 147];
NTIPAliasStat["skillincreasedspeed"] = [107, 148];
NTIPAliasStat["skillbattleorders"] = [107, 149];
NTIPAliasStat["skillgrimward"] = [107, 150];
NTIPAliasStat["skillwhirlwind"] = [107, 151];
NTIPAliasStat["skillberserk"] = [107, 152];
NTIPAliasStat["skillnaturalresistance"] = [107, 153];
NTIPAliasStat["skillwarcry"] = [107, 154];
NTIPAliasStat["skillbattlecommand"] = [107, 155];
// Druid skills
NTIPAliasStat["skillraven"] = [107, 221];
NTIPAliasStat["skillpoisoncreeper"] = [107, 222];
NTIPAliasStat["skillwerewolf"] = [107, 223];
NTIPAliasStat["skilllycanthropy"] = [107, 224];
NTIPAliasStat["skillfirestorm"] = [107, 225];
NTIPAliasStat["skilloaksage"] = [107, 226];
NTIPAliasStat["skillsummonspiritwolf"] = [107, 227];
NTIPAliasStat["skillwerebear"] = [107, 228];
NTIPAliasStat["skillmoltenboulder"] = [107, 229];
NTIPAliasStat["skillarcticblast"] = [107, 230];
NTIPAliasStat["skillcarrionvine"] = [107, 231];
NTIPAliasStat["skillferalrage"] = [107, 232];
NTIPAliasStat["skillmaul"] = [107, 233];
NTIPAliasStat["skillfissure"] = [107, 234];
NTIPAliasStat["skillcyclonearmor"] = [107, 235];
NTIPAliasStat["skillheartofwolverine"] = [107, 236];
NTIPAliasStat["skillsummondirewolf"] = [107, 237];
NTIPAliasStat["skillrabies"] = [107, 238];
NTIPAliasStat["skillfireclaws"] = [107, 239];
NTIPAliasStat["skilltwister"] = [107, 240];
NTIPAliasStat["skillsolarcreeper"] = [107, 241];
NTIPAliasStat["skillhunger"] = [107, 242];
NTIPAliasStat["skillshockwave"] = [107, 243];
NTIPAliasStat["skillvolcano"] = [107, 244];
NTIPAliasStat["skilltornado"] = [107, 245];
NTIPAliasStat["skillspiritofbarbs"] = [107, 246];
NTIPAliasStat["skillsummongrizzly"] = [107, 247];
NTIPAliasStat["skillfury"] = [107, 248];
NTIPAliasStat["skillarmageddon"] = [107, 249];
NTIPAliasStat["skillhurricane"] = [107, 250];
// Assassin skills
NTIPAliasStat["skillfireblast"] = [107, 251];
NTIPAliasStat["skillclawmastery"] = [107, 252];
NTIPAliasStat["skillpsychichammer"] = [107, 253];
NTIPAliasStat["skilltigerstrike"] = [107, 254];
NTIPAliasStat["skilldragontalon"] = [107, 255];
NTIPAliasStat["skillshockweb"] = [107, 256];
NTIPAliasStat["skillbladesentinel"] = [107, 257];
NTIPAliasStat["skillburstofspeed"] = [107, 258];
NTIPAliasStat["skillfistsoffire"] = [107, 259];
NTIPAliasStat["skilldragonclaw"] = [107, 260];
NTIPAliasStat["skillchargedboltsentry"] = [107, 261];
NTIPAliasStat["skillwakeoffire"] = [107, 262];
NTIPAliasStat["skillweaponblock"] = [107, 263];
NTIPAliasStat["skillcloakofshadows"] = [107, 264];
NTIPAliasStat["skillcobrastrike"] = [107, 265];
NTIPAliasStat["skillbladefury"] = [107, 266];
NTIPAliasStat["skillfade"] = [107, 267];
NTIPAliasStat["skillshadowwarrior"] = [107, 268];
NTIPAliasStat["skillclawsofthunder"] = [107, 269];
NTIPAliasStat["skilldragontail"] = [107, 270];
NTIPAliasStat["skilllightningsentry"] = [107, 271];
NTIPAliasStat["skillwakeofinferno"] = [107, 272];
NTIPAliasStat["skillmindblast"] = [107, 273];
NTIPAliasStat["skillbladesofice"] = [107, 274];
NTIPAliasStat["skilldragonflight"] = [107, 275];
NTIPAliasStat["skilldeathsentry"] = [107, 276];
NTIPAliasStat["skillbladeshield"] = [107, 277];
NTIPAliasStat["skillvenom"] = [107, 278];
NTIPAliasStat["skillshadowmaster"] = [107, 279];
NTIPAliasStat["skillphoenixstrike"] = [107, 280];

NTIPAliasStat["itemrestinpeace"] = 108;
NTIPAliasStat["curseresistance"] = 109;
NTIPAliasStat["itempoisonlengthresist"] = 110;
NTIPAliasStat["itemnormaldamage"] = 111;
NTIPAliasStat["itemhowl"] = 112;
NTIPAliasStat["itemstupidity"] = 113;
NTIPAliasStat["itemdamagetomana"] = 114;
NTIPAliasStat["itemignoretargetac"] = 115;
NTIPAliasStat["itemfractionaltargetac"] = 116;
NTIPAliasStat["itempreventheal"] = 117;
NTIPAliasStat["itemhalffreezeduration"] = 118;
NTIPAliasStat["itemtohitpercent"] = 119;
NTIPAliasStat["itemdamagetargetac"] = 120;
NTIPAliasStat["itemdemondamagepercent"] = 121;
NTIPAliasStat["itemundeaddamagepercent"] = 122;
NTIPAliasStat["itemdemontohit"] = 123;
NTIPAliasStat["itemundeadtohit"] = 124;
NTIPAliasStat["itemthrowable"] = 125;
NTIPAliasStat["itemelemskill"] = 126;
NTIPAliasStat["itemallskills"] = 127;
NTIPAliasStat["itemattackertakeslightdamage"] = 128;
NTIPAliasStat["ironmaidenlevel"] = 129;
NTIPAliasStat["lifetaplevel"] = 130;
NTIPAliasStat["thornspercent"] = 131;
NTIPAliasStat["bonearmor"] = 132;
NTIPAliasStat["bonearmormax"] = 133;
NTIPAliasStat["itemfreeze"] = 134;
NTIPAliasStat["itemopenwounds"] = 135;
NTIPAliasStat["itemcrushingblow"] = 136;
NTIPAliasStat["itemkickdamage"] = 137;
NTIPAliasStat["itemmanaafterkill"] = 138;
NTIPAliasStat["itemhealafterdemonkill"] = 139;
NTIPAliasStat["itemextrablood"] = 140;
NTIPAliasStat["itemdeadlystrike"] = 141;
NTIPAliasStat["itemabsorbfirepercent"] = 142;
NTIPAliasStat["itemabsorbfire"] = 143;
NTIPAliasStat["itemabsorblightpercent"] = 144;
NTIPAliasStat["itemabsorblight"] = 145;
NTIPAliasStat["itemabsorbmagicpercent"] = 146;
NTIPAliasStat["itemabsorbmagic"] = 147;
NTIPAliasStat["itemabsorbcoldpercent"] = 148;
NTIPAliasStat["itemabsorbcold"] = 149;
NTIPAliasStat["itemslow"] = 150;

NTIPAliasStat["itemaura"] = 151;
NTIPAliasStat["mightaura"] = [151, 98];
NTIPAliasStat["holyfireaura"] = [151, 102];
NTIPAliasStat["thornsaura"] = [151, 103];
NTIPAliasStat["defianceaura"] = [151, 104];
NTIPAliasStat["concentrationaura"] = [151, 113];
NTIPAliasStat["holyfreezeaura"] = [151, 114];
NTIPAliasStat["vigoraura"] = [151, 115];
NTIPAliasStat["holyshockaura"] = [151, 118];
NTIPAliasStat["sanctuaryaura"] = [151, 119];
NTIPAliasStat["meditationaura"] = [151, 120];
NTIPAliasStat["fanaticismaura"] = [151, 122];
NTIPAliasStat["convictionaura"] = [151, 123];
NTIPAliasStat["redemptionaura"] = [151, 124];

NTIPAliasStat["itemindestructible"] = 152;
NTIPAliasStat["itemcannotbefrozen"] = 153;
NTIPAliasStat["itemstaminadrainpct"] = 154;
NTIPAliasStat["itemreanimate"] = 155;
NTIPAliasStat["itempierce"] = 156;
NTIPAliasStat["itemmagicarrow"] = 157;
NTIPAliasStat["itemexplosivearrow"] = 158;
NTIPAliasStat["itemthrowmindamage"] = 159;
NTIPAliasStat["itemthrowmaxdamage"] = 160;
NTIPAliasStat["itemskillhandofathena"] = 161;
NTIPAliasStat["itemskillstaminapercent"] = 162;
NTIPAliasStat["itemskillpassivestaminapercent"] = 163;
NTIPAliasStat["itemskillconcentration"] = 164;
NTIPAliasStat["itemskillenchant"] = 165;
NTIPAliasStat["itemskillpierce"] = 166;
NTIPAliasStat["itemskillconviction"] = 167;
NTIPAliasStat["itemskillchillingarmor"] = 168;
NTIPAliasStat["itemskillfrenzy"] = 169;
NTIPAliasStat["itemskilldecrepify"] = 170;
NTIPAliasStat["itemskillarmorpercent"] = 171;
NTIPAliasStat["alignment"] = 172;
NTIPAliasStat["target0"] = 173;
NTIPAliasStat["target1"] = 174;
NTIPAliasStat["goldlost"] = 175;
NTIPAliasStat["conversionlevel"] = 176;
NTIPAliasStat["conversionmaxhp"] = 177;
NTIPAliasStat["unitdooverlay"] = 178;
NTIPAliasStat["attackvsmontype"] = 179;
NTIPAliasStat["damagevsmontype"] = 180;
NTIPAliasStat["fade"] = 181;
NTIPAliasStat["armoroverridepercent"] = 182;
NTIPAliasStat["unused183"] = 183;
NTIPAliasStat["unused184"] = 184;
NTIPAliasStat["unused185"] = 185;
NTIPAliasStat["unused186"] = 186;
NTIPAliasStat["sundercold"] = 187;

NTIPAliasStat["itemaddskilltab"] = 188;
NTIPAliasStat["itemaddbowandcrossbowskilltab"] = [188, 0];
NTIPAliasStat["bowandcrossbowskilltab"] = [188, 0];
NTIPAliasStat["itemaddpassiveandmagicskilltab"] = [188, 1];
NTIPAliasStat["passiveandmagicskilltab"] = [188, 1];
NTIPAliasStat["itemaddjavelinandspearskilltab"] = [188, 2];
NTIPAliasStat["javelinandspearskilltab"] = [188, 2];
NTIPAliasStat["itemaddfireskilltab"] = [188, 8];
NTIPAliasStat["fireskilltab"] = [188, 8];
NTIPAliasStat["itemaddlightningskilltab"] = [188, 9];
NTIPAliasStat["lightningskilltab"] = [188, 9];
NTIPAliasStat["itemaddcoldskilltab"] = [188, 10];
NTIPAliasStat["coldskilltab"] = [188, 10];
NTIPAliasStat["itemaddcursesskilltab"] = [188, 16];
NTIPAliasStat["cursesskilltab"] = [188, 16];
NTIPAliasStat["itemaddpoisonandboneskilltab"] = [188, 17];
NTIPAliasStat["poisonandboneskilltab"] = [188, 17];
NTIPAliasStat["itemaddnecromancersummoningskilltab"] = [188, 18];
NTIPAliasStat["necromancersummoningskilltab"] = [188, 18];
NTIPAliasStat["itemaddpalicombatskilltab"] = [188, 24];
NTIPAliasStat["palicombatskilltab"] = [188, 24];
NTIPAliasStat["itemaddoffensiveaurasskilltab"] = [188, 25];
NTIPAliasStat["offensiveaurasskilltab"] = [188, 25];
NTIPAliasStat["itemadddefensiveaurasskilltab"] = [188, 26];
NTIPAliasStat["defensiveaurasskilltab"] = [188, 26];
NTIPAliasStat["itemaddbarbcombatskilltab"] = [188, 32];
NTIPAliasStat["barbcombatskilltab"] = [188, 32];
NTIPAliasStat["itemaddmasteriesskilltab"] = [188, 33];
NTIPAliasStat["masteriesskilltab"] = [188, 33];
NTIPAliasStat["itemaddwarcriesskilltab"] = [188, 34];
NTIPAliasStat["warcriesskilltab"] = [188, 34];
NTIPAliasStat["itemadddruidsummoningskilltab"] = [188, 40];
NTIPAliasStat["druidsummoningskilltab"] = [188, 40];
NTIPAliasStat["itemaddshapeshiftingskilltab"] = [188, 41];
NTIPAliasStat["shapeshiftingskilltab"] = [188, 41];
NTIPAliasStat["itemaddelementalskilltab"] = [188, 42];
NTIPAliasStat["elementalskilltab"] = [188, 42];
NTIPAliasStat["itemaddtrapsskilltab"] = [188, 48];
NTIPAliasStat["trapsskilltab"] = [188, 48];
NTIPAliasStat["itemaddshadowdisciplinesskilltab"] = [188, 49];
NTIPAliasStat["shadowdisciplinesskilltab"] = [188, 49];
NTIPAliasStat["itemaddmartialartsskilltab"] = [188, 50];
NTIPAliasStat["martialartsskilltab"] = [188, 50];

NTIPAliasStat["sunderfire"] = 189;
NTIPAliasStat["sunderlightning"] = 190;
NTIPAliasStat["sunderpoison"] = 191;
NTIPAliasStat["sunderphysical"] = 192;
NTIPAliasStat["sundermagic"] = 193;
NTIPAliasStat["itemnumsockets"] = 194;	NTIPAliasStat["sockets"] = 194;
NTIPAliasStat["itemskillonattack"] = [195, 1];
NTIPAliasStat["itemskillonattacklevel"] = [195, 2];
NTIPAliasStat["itemskillonkill"] = [196, 1];
NTIPAliasStat["itemskillonkilllevel"] = [196, 2];
NTIPAliasStat["itemskillondeath"] = [197, 1];
NTIPAliasStat["itemskillondeathlevel"] = [197, 2];

NTIPAliasStat["itemskillonhit"] = [198, 1];
NTIPAliasStat["itemskillonhitlevel"] = [198, 2];
NTIPAliasStat["amplifydamageonhit"] = [198, 4225];

NTIPAliasStat["itemskillonlevelup"] = [199, 1];
NTIPAliasStat["itemskillonleveluplevel"] = [199, 2];
NTIPAliasStat["unused200"] = 200;
NTIPAliasStat["itemskillongethit"] = [201, 1];
NTIPAliasStat["itemskillongethitlevel"] = [201, 2];
NTIPAliasStat["unused202"] = 202;
NTIPAliasStat["unused203"] = 203;

NTIPAliasStat["itemchargedskill"] = [204, 1];
NTIPAliasStat["itemchargedskilllevel"] = [204, 2];
NTIPAliasStat["teleportcharges"] = [204, 3461];

NTIPAliasStat["unused204"] = 205;
NTIPAliasStat["unused205"] = 206;
NTIPAliasStat["unused206"] = 207;
NTIPAliasStat["unused207"] = 208;
NTIPAliasStat["unused208"] = 209;
NTIPAliasStat["unused209"] = 210;
NTIPAliasStat["unused210"] = 211;
NTIPAliasStat["unused211"] = 212;
NTIPAliasStat["unused212"] = 213;
NTIPAliasStat["itemarmorperlevel"] = 214;
NTIPAliasStat["itemarmorpercentperlevel"] = 215;
NTIPAliasStat["itemhpperlevel"] = 216;
NTIPAliasStat["itemmanaperlevel"] = 217;
NTIPAliasStat["itemmaxdamageperlevel"] = 218;
NTIPAliasStat["itemmaxdamagepercentperlevel"] = 219;
NTIPAliasStat["itemstrengthperlevel"] = 220;
NTIPAliasStat["itemdexterityperlevel"] = 221;
NTIPAliasStat["itemenergyperlevel"] = 222;
NTIPAliasStat["itemvitalityperlevel"] = 223;
NTIPAliasStat["itemtohitperlevel"] = 224;
NTIPAliasStat["itemtohitpercentperlevel"] = 225;
NTIPAliasStat["itemcolddamagemaxperlevel"] = 226;
NTIPAliasStat["itemfiredamagemaxperlevel"] = 227;
NTIPAliasStat["itemltngdamagemaxperlevel"] = 228;
NTIPAliasStat["itempoisdamagemaxperlevel"] = 229;
NTIPAliasStat["itemresistcoldperlevel"] = 230;
NTIPAliasStat["itemresistfireperlevel"] = 231;
NTIPAliasStat["itemresistltngperlevel"] = 232;
NTIPAliasStat["itemresistpoisperlevel"] = 233;
NTIPAliasStat["itemabsorbcoldperlevel"] = 234;
NTIPAliasStat["itemabsorbfireperlevel"] = 235;
NTIPAliasStat["itemabsorbltngperlevel"] = 236;
NTIPAliasStat["itemabsorbpoisperlevel"] = 237;
NTIPAliasStat["itemthornsperlevel"] = 238;
NTIPAliasStat["itemfindgoldperlevel"] = 239;
NTIPAliasStat["itemfindmagicperlevel"] = 240;
NTIPAliasStat["itemregenstaminaperlevel"] = 241;
NTIPAliasStat["itemstaminaperlevel"] = 242;
NTIPAliasStat["itemdamagedemonperlevel"] = 243;
NTIPAliasStat["itemdamageundeadperlevel"] = 244;
NTIPAliasStat["itemtohitdemonperlevel"] = 245;
NTIPAliasStat["itemtohitundeadperlevel"] = 246;
NTIPAliasStat["itemcrushingblowperlevel"] = 247;
NTIPAliasStat["itemopenwoundsperlevel"] = 248;
NTIPAliasStat["itemkickdamageperlevel"] = 249;
NTIPAliasStat["itemdeadlystrikeperlevel"] = 250;
NTIPAliasStat["itemfindgemsperlevel"] = 251;
NTIPAliasStat["itemreplenishdurability"] = 252;
NTIPAliasStat["itemreplenishquantity"] = 253;
NTIPAliasStat["itemextrastack"] = 254;
NTIPAliasStat["itemfinditem"] = 255;
NTIPAliasStat["itemslashdamage"] = 256;
NTIPAliasStat["itemslashdamagepercent"] = 257;
NTIPAliasStat["itemcrushdamage"] = 258;
NTIPAliasStat["itemcrushdamagepercent"] = 259;
NTIPAliasStat["itemthrustdamage"] = 260;
NTIPAliasStat["itemthrustdamagepercent"] = 261;
NTIPAliasStat["itemabsorbslash"] = 262;
NTIPAliasStat["itemabsorbcrush"] = 263;
NTIPAliasStat["itemabsorbthrust"] = 264;
NTIPAliasStat["itemabsorbslashpercent"] = 265;
NTIPAliasStat["itemabsorbcrushpercent"] = 266;
NTIPAliasStat["itemabsorbthrustpercent"] = 267;
NTIPAliasStat["itemarmorbytime"] = 268;
NTIPAliasStat["itemarmorpercentbytime"] = 269;
NTIPAliasStat["itemhpbytime"] = 270;
NTIPAliasStat["itemmanabytime"] = 271;
NTIPAliasStat["itemmaxdamagebytime"] = 272;
NTIPAliasStat["itemmaxdamagepercentbytime"] = 273;
NTIPAliasStat["itemstrengthbytime"] = 274;
NTIPAliasStat["itemdexteritybytime"] = 275;
NTIPAliasStat["itemenergybytime"] = 276;
NTIPAliasStat["itemvitalitybytime"] = 277;
NTIPAliasStat["itemtohitbytime"] = 278;
NTIPAliasStat["itemtohitpercentbytime"] = 279;
NTIPAliasStat["itemcolddamagemaxbytime"] = 280;
NTIPAliasStat["itemfiredamagemaxbytime"] = 281;
NTIPAliasStat["itemltngdamagemaxbytime"] = 282;
NTIPAliasStat["itempoisdamagemaxbytime"] = 283;
NTIPAliasStat["itemresistcoldbytime"] = 284;
NTIPAliasStat["itemresistfirebytime"] = 285;
NTIPAliasStat["itemresistltngbytime"] = 286;
NTIPAliasStat["itemresistpoisbytime"] = 287;
NTIPAliasStat["itemabsorbcoldbytime"] = 288;
NTIPAliasStat["itemabsorbfirebytime"] = 289;
NTIPAliasStat["itemabsorbltngbytime"] = 290;
NTIPAliasStat["itemabsorbpoisbytime"] = 291;
NTIPAliasStat["itemfindgoldbytime"] = 292;
NTIPAliasStat["itemfindmagicbytime"] = 293;
NTIPAliasStat["itemregenstaminabytime"] = 294;
NTIPAliasStat["itemstaminabytime"] = 295;
NTIPAliasStat["itemdamagedemonbytime"] = 296;
NTIPAliasStat["itemdamageundeadbytime"] = 297;
NTIPAliasStat["itemtohitdemonbytime"] = 298;
NTIPAliasStat["itemtohitundeadbytime"] = 299;
NTIPAliasStat["itemcrushingblowbytime"] = 300;
NTIPAliasStat["itemopenwoundsbytime"] = 301;
NTIPAliasStat["itemkickdamagebytime"] = 302;
NTIPAliasStat["itemdeadlystrikebytime"] = 303;
NTIPAliasStat["itemfindgemsbytime"] = 304;
NTIPAliasStat["itempiercecold"] = 305;
NTIPAliasStat["itempiercefire"] = 306;
NTIPAliasStat["itempierceltng"] = 307;
NTIPAliasStat["itempiercepois"] = 308;
NTIPAliasStat["itemdamagevsmonster"] = 309;
NTIPAliasStat["itemdamagepercentvsmonster"] = 310;
NTIPAliasStat["itemtohitvsmonster"] = 311;
NTIPAliasStat["itemtohitpercentvsmonster"] = 312;
NTIPAliasStat["itemacvsmonster"] = 313;
NTIPAliasStat["itemacpercentvsmonster"] = 314;
NTIPAliasStat["firelength"] = 315;
NTIPAliasStat["burningmin"] = 316;
NTIPAliasStat["burningmax"] = 317;
NTIPAliasStat["progressivedamage"] = 318;
NTIPAliasStat["progressivesteal"] = 319;
NTIPAliasStat["progressiveother"] = 320;
NTIPAliasStat["progressivefire"] = 321;
NTIPAliasStat["progressivecold"] = 322;
NTIPAliasStat["progressivelightning"] = 323;
NTIPAliasStat["itemextracharges"] = 324;
NTIPAliasStat["progressivetohit"] = 325;
NTIPAliasStat["poisoncount"] = 326;
NTIPAliasStat["damageframerate"] = 327;
NTIPAliasStat["pierceidx"] = 328;
NTIPAliasStat["passivefiremastery"] = 329;
NTIPAliasStat["passiveltngmastery"] = 330;
NTIPAliasStat["passivecoldmastery"] = 331;
NTIPAliasStat["passivepoismastery"] = 332;
NTIPAliasStat["passivefirepierce"] = 333;
NTIPAliasStat["passiveltngpierce"] = 334;
NTIPAliasStat["passivecoldpierce"] = 335;
NTIPAliasStat["passivepoispierce"] = 336;
NTIPAliasStat["passivecriticalstrike"] = 337;
NTIPAliasStat["passivedodge"] = 338;
NTIPAliasStat["passiveavoid"] = 339;
NTIPAliasStat["passiveevade"] = 340;
NTIPAliasStat["passivewarmth"] = 341;
NTIPAliasStat["passivemasterymeleeth"] = 342;
NTIPAliasStat["passivemasterymeleedmg"] = 343;
NTIPAliasStat["passivemasterymeleecrit"] = 344;
NTIPAliasStat["passivemasterythrowth"] = 345;
NTIPAliasStat["passivemasterythrowdmg"] = 346;
NTIPAliasStat["passivemasterythrowcrit"] = 347;
NTIPAliasStat["passiveweaponblock"] = 348;
NTIPAliasStat["passivesummonresist"] = 349;
NTIPAliasStat["modifierlistskill"] = 350;
NTIPAliasStat["modifierlistlevel"] = 351;
NTIPAliasStat["lastsenthppct"] = 352;
NTIPAliasStat["sourceunittype"] = 353;
NTIPAliasStat["sourceunitid"] = 354;
NTIPAliasStat["shortparam1"] = 355;
NTIPAliasStat["questitemdifficulty"] = 356;
NTIPAliasStat["passivemagmastery"] = 357;
NTIPAliasStat["passivemagpierce"] = 358;


// Doesnt really exists, but is calculated in getStatEx
NTIPAliasStat["allres"] = 555;
