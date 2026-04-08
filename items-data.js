const itemsByRarity = [
  {
    "rarity": "LEGENDARY",
    "items": [
      {
        "id": 2,
        "name": "Alien Head",
        "tags": [
          "cooldown"
        ],
        "image": "alien",
        "description": "{misc:Reduce skill cooldown} by {misc:25%} {+25%}."
      },
      {
        "id": 4,
        "name": "Shattering Justice",
        "tags": [
          "status"
        ],
        "image": "hammer",
        "description": "After hitting an enemy {offense:5} times, reduce their {offense:armor} by {offense:60} for {offense:8} {+8} seconds."
      },
      {
        "id": 11,
        "name": "War Bonds",
        "tags": [
          "economy",
          "hp%"
        ],
        "image": "warBonds",
        "description": "During boss events, {misc:5} missiles bombard the area, dealing {offense:2.5%} {+2.5%} {offense:of boss' Max Health in damage}.\nBefore the boss event, gain additional missiles, up to a maximum of {misc:20} {+5}, per {misc:50} gold gained.{misc:Gold Requirement scales over time}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 14,
        "name": "Aegis",
        "tags": [
          "defensive"
        ],
        "image": "fullBarrier",
        "description": "Healing past full grants you a {defense:temporary barrier} for {defense:50%} {+50%} of the amount you {defense:healed}."
      },
      {
        "id": 18,
        "name": "Brilliant Behemoth",
        "tags": [
          "aoe",
          "raw damage"
        ],
        "image": "behemoth",
        "description": "All your {offense:attacks explode} in a {offense:4m} {+1.5m} radius for a bonus {offense:60%} TOTAL damage to nearby enemies."
      },
      {
        "id": 24,
        "name": "Growth Nectar",
        "tags": [
          "raw damage"
        ],
        "image": "growthNectar",
        "description": "Grants {misc:4%} increase to {misc:ALL stats} for each buff, up to a maximum of {misc:4} {+4}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 30,
        "name": "Sentient Meat Hook",
        "tags": [
          "proc"
        ],
        "image": "hook",
        "description": "{offense:20%} {+20%} chance on hit to {offense:fire homing hooks} at up to {offense:10} {+5} enemies for {offense:100%} TOTAL damage."
      },
      {
        "id": 32,
        "name": "Defensive Microbots",
        "tags": [
          "defensive"
        ],
        "image": "microbot",
        "description": "Shoot down {offense:1} {+1} projectiles within {offense:20m} every {offense:0.5 seconds}. {misc:Recharge rate scales with attack speed}."
      },
      {
        "id": 35,
        "name": "57 Leaf Clover",
        "tags": [
          "proc"
        ],
        "image": "clover",
        "description": "All random effects are rolled {misc:+1} {+1} {misc:times for a favorable outcome}."
      },
      {
        "id": 42,
        "name": "Laser Scope",
        "tags": [
          "crit"
        ],
        "image": "scope",
        "description": "{offense:Critical Strikes} deal an additional {offense:100% damage} {+100%}",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 48,
        "name": "Ceremonial Dagger",
        "tags": [
          "on kill",
          "proc"
        ],
        "image": "dagger",
        "description": "Killing an enemy fires out {offense:3 homing daggers} that deal {offense:150%} {+150%} base damage."
      },
      {
        "id": 55,
        "name": "Spare Drone Parts",
        "tags": [
          "summon",
          "proc"
        ],
        "image": "droneBox",
        "description": "Gain {offense:Col. Droneman}.\nDrones gain {offense:+50%} {+50%} attack speed and cooldown reduction.\nDrones gain {offense:10%} chance to fire a {offense:missile} on hit, dealing {offense:300%} TOTAL damage.\nDrones gain an {offense:automatic chain gun} that deals {offense:6x100%} damage, bouncing to {offense:2} enemies.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 60,
        "name": "Substandard Duplicator",
        "tags": [
          "economy"
        ],
        "image": "duplicator",
        "description": "{misc:Picking up an item} gives you a {misc:temporary copy} of itself. Temporary items last an additional {offense:10} {+10} {offense:seconds}.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 70,
        "name": "Dio's Best Friend",
        "tags": [
          "defensive"
        ],
        "image": "dio",
        "description": "{misc:Upon Death}, this item will be {misc:consumed} and you will {defense:return to life} with {defense:3 seconds of invulnerability}."
      },
      {
        "id": 76,
        "name": "H3AD-5T v2",
        "tags": [
          "movement",
          "aoe"
        ],
        "image": "cuffs",
        "description": "Increase {misc:jump height}.\nCreates a {offense:5m-100m} radius {offense:kinetic explosion} on hitting the ground, dealing {offense:1000%-10000%} base damage that scales up with {offense:fall distance}.\nRecharges in {offense:10} {-50%} seconds."
      },
      {
        "id": 87,
        "name": "Happiest Mask",
        "tags": [
          "on kill",
          "summon"
        ],
        "image": "mask",
        "description": "Killing enemies has a {offense:7%} chance to {offense:spawn a ghost} of the killed enemy with {offense:1500%} damage. Lasts {offense:30s} {+30s}."
      },
      {
        "id": 93,
        "name": "Wake of Vultures",
        "tags": [
        ],
        "image": "headhunter",
        "description": "Gain the {offense:power} of any killed elite monster for {offense:8s} {+5s}."
      },
      {
        "id": 101,
        "name": "Frost Relic",
        "tags": [
          "on kill",
          "status",
          "aoe",
          "proc"
        ],
        "image": "ice",
        "description": "Killing an enemy surrounds you with an {offense:ice storm} that deals {offense:1200% damage per second} and {misc:slows} enemies by {misc:80%} for {misc:1.5s}.\nThe storm {offense:grows with every kill}, increasing it's radius by {offense:2m}.\nStacks up to {offense:18m} {+12m}."
      },
      {
        "id": 103,
        "name": "Ben's Raincoat",
        "tags": [
          "defensive"
        ],
        "image": "rainCoat",
        "description": "Prevents {misc:1} {+1} {offense:debuff} and instead grants a {defense:temporary barrier} for {defense:10%} of {defense:maximum health}. Recharges every {misc:5} seconds.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 105,
        "name": "Rejuvenation Rack",
        "tags": [
          "defensive"
        ],
        "image": "horn",
        "description": "{defense:Heal +100%} {+100%} more."
      },
      {
        "id": 110,
        "name": "Sonorous Whispers",
        "tags": [
          "economy",
          "on kill"
        ],
        "image": "sonorousWhispers",
        "description": "When a large monster is killed it will always drop an item. All elites have a {misc:4%} chance of dropping an item {+1%}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 114,
        "name": "Brainstalks",
        "tags": [
          "cooldown",
          "on kill"
        ],
        "image": "brain",
        "description": "Upon killing an elite monster, {offense:enter a frenzy} for {offense:4s} {+4s} where {misc:skills have no cooldowns}."
      },
      {
        "id": 117,
        "name": "Resonance Disc",
        "tags": [
          "on kill",
          "aoe",
          "proc"
        ],
        "image": "disc",
        "description": "Killing {offense:4} enemies in {misc:7 seconds} charges the Resonance Disc.\nThe disc launches itself toward a target for {offense:300%} base damage {+300%}, piercing all enemies it doesn't kill, and then explodes for {offense:1000%} base damage {+1000%}.\nReturns to the user, striking all enemies along the way for {offense:300%} base damage {+300%}."
      },
      {
        "id": 136,
        "name": "Runic Lens",
        "tags": [
          "proc",
          "aoe"
        ],
        "image": "runicLens",
        "description": "{offense:3%} chance on hit to call a meteor strike, dealing {offense:2000%} base damage. Every {offense:100%} attack damage dealth increases the activation chance by {offense:3%} {+3%} and damage by {offense:150%} {+50%}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 145,
        "name": "Pocket I.C.B.M",
        "tags": [
          "aoe",
          "proc"
        ],
        "image": "hugeMissile",
        "description": "All missile items and equipments fire an additional {offense:2 missiles}. Increase missile damage by {offense:0%} {+50%}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 150,
        "name": "N'kuhana's Opinion",
        "tags": [
          "defensive",
          "raw damage",
          "proc",
          "electric"
        ],
        "image": "opinion",
        "description": "Store {defense:100%} {+100%} of healing as {defense:Soul Energy}.\nAfter your {defense:Soul Energy} reaches {defense:10%} of your {defense:maximum health}, {offense:fire a skull} that deals {offense:250%} of your {defense:Soul Energy} as {offense:damage}."
      },
      {
        "id": 156,
        "name": "Symbiotic Scorpion",
        "tags": [
          "status"
        ],
        "image": "scorpion",
        "description": "{offense:100%} chance on hit to reduce {offense:armor} by {offense:2} {+2} {offense:permanently}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 160,
        "name": "Interstellar Desk Plant",
        "tags": [
          "on kill",
          "defensive",
          "aoe"
        ],
        "image": "deskPlant",
        "description": "On kill, plant a {defense:healing} fruit seed that grows into a plant after {misc:5} seconds.\nThe plant {defense:heals} for {defense:10%} of {defense:maximum health} every second to all allies withing {defense:5m} {+5m}. Last {misc:10} seconds."
      },
      {
        "id": 168,
        "name": "Bottled Chaos",
        "tags": [
        ],
        "image": "bottle",
        "description": "Trigger a {offense:random equipment} effect {offense:1} {+1} time(s).",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 176,
        "name": "Item Scrap, Red",
        "tags": [
          "economy"
        ],
        "image": "scraps3",
        "description": "Does nothing. Prioritized when used with 3D Printers.\nDrifter: +30% attack speed per stack."
      },
      {
        "id": 183,
        "name": "Networked Suffering",
        "tags": [
          "status",
          "aoe"
        ],
        "image": "switch",
        "description": "Infect up to {misc:4} {+2} enemies with a computer virus that duplicates {offense:50% of all damage taken} and sends it to a global damage pool.\nEvery 3 seconds, ALL infected enemies suffer {offense:100% pooled damage}.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 188,
        "name": "Unstable Tesla Coil",
        "tags": [
          "aoe",
          "proc",
          "electric"
        ],
        "image": "tesla",
        "description": "Fire out {offense:lightning} that hits {offense:3} {+2} enemies for {offense:200%} base damage every {offense:0.5s}.\nThe Tesla Coil switches off every {offense:10 seconds}."
      },
      {
        "id": 204,
        "name": "Electric Boomerang",
        "tags": [
          "proc",
          "status",
          "electric"
        ],
        "image": "electricBoomerang",
        "description": "{offense:15%} chance on hit to fire an electric boomerang that slices through enemies dealing {offense:120% base damage} and deals an additional {offense:120%} {+120%} {offense:base damage per second} and {offense:stuns} all enemies hit.\nCan {offense:strike} enemies on the way back.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 208,
        "name": "Souldbound Catalyst",
        "tags": [
          "cooldown"
        ],
        "image": "soul",
        "description": "{offense:Kills reduce} {misc:equipment cooldown} by {misc:4s} {+2s}."
      },
      {
        "id": 224,
        "name": "Hardlight Afterburner",
        "tags": [
          "cooldown"
        ],
        "image": "burner",
        "description": "Add {misc:+2} {+2} charges of your {misc:Utility skill}.\n{misc:Reduces Utility skill cooldown} by {misc:33%}."
      },
      {
        "id": 231,
        "name": "Orphaned Core",
        "tags": [
          "summon",
          "proc"
        ],
        "image": "core",
        "description": "Gain a friendly {offense:Solus unit} that launches itself at enemies for {offense:400%} damage, plus an additional {offense:400%} per stack. It inherits your {misc:movement-related items} and can be petted to cleanse negative and cooldown effects. Recharges after {misc:15s}.",
        "expansion": "Alloyed Collective"
      }
    ]
  },
  {
    "rarity": "LUNAR",
    "items": [
      {
        "id": -1,
        "name": "Hook of Heresy",
        "tags": [
        ],
        "image": "purpleBlade",
        "description": "{misc:Replace your Secondary Skill} with {misc:Slicing Maelstrom}.\nCharge up a projectile that deals {offense:875% damage per second} to nearby enemies, exploding after {misc:3} seconds to deal {offense:700% damage} and {offense:root} enemies for {misc:3} {+3} seconds. Recharges after 5 {+5} seconds."
      },
      {
        "id": 7,
        "name": "Effigy of Grief",
        "tags": [
          "status",
        ],
        "image": "slow",
        "description": "ALL characters are {misc:slowed by 50%} and has their {offense:armor reduced by 20}.\nCan place up to {misc:5}.\nCooldown: {misc:15s}"
      },
      {
        "id": 9,
        "name": "Gesture of the Drowned",
        "tags": [
          "cooldown"
        ],
        "image": "fossil",
        "description": "{misc:Reduce equipment cooldown} by {misc:50%} {+15%}.\nForces your Equipment to {misc:activate} whenever it is off {misc:cooldown}."
      },
      {
        "id": 31,
        "name": "Helfire Tincture",
        "tags": [
          "status"
        ],
        "image": "burn",
        "description": "{offense:Ignite} ALL characters within 15m. Deal {offense:5% of your maximum health/second as burning} to yourself.\nThe burn is {offense:0.5x} stronger on allies, and {offense:24x} stronger on enemies.\nCooldown: {misc:45s}"
      },
      {
        "id": 43,
        "name": "Glowing Meteorite",
        "tags": [
          "aoe",
          "proc"
        ],
        "image": "meteorite",
        "description": "{offense:Rain meteors} from the sky, damaging ALL characters for {offense:600% damage per blast}.\nLast 20 seconds.\nCooldown: {misc:140s}"
      },
      {
        "id": 57,
        "name": "Spinel Affliction",
        "tags": [
          "hp%",
          "defensive"
        ],
        "image": "tonic",
        "description": "Drink the Tonic, gaining a boost for 15 seconds.\nIncreases {offense:damage} by {offense:+100%}.\nIncreases {offense:attack speed} by {offense:+70%}.\nIncreases {offense:armor} by {offense:+20}.\nIncreases {defense:maximum health} by {defense:+50%}.\nIncreases {defense:passive health regeneration} by {defense:+300%}.\nIncreases {misc:movespeed} by {misc:+30%}.\nWhen the tonic wears off, you have {debuff:20%} chance to gain a {debuff:Tonic Affliction, reducing all of your stats} by {debuff:-5%} {-5%}.\nCooldown: {misc:60s}"
      },
      {
        "id": 82,
        "name": "Focused Convergence",
        "tags": [
        ],
        "image": "orb",
        "description": "Teleporters charge {misc:30%} {+30%} {misc:faster}, but the size of the Teleporter zone is {debuff:50%} {-50%} smaller."
      },
      {
        "id": 88,
        "name": "Brittle Crown",
        "tags": [
          "economy"
        ],
        "image": "crown",
        "description": "{misc:30% chance on hit} to gain {misc:2} {+2} {misc:gold}. {misc:Scales over time}.\nOn taking damage, {debuff:lose gold} equal to {debuff:100%} {+100%} of the {debuff:maximum health percentage you lost}."
      },
      {
        "id": 91,
        "name": "Light Flux Pauldron",
        "tags": [
          "cooldown"
        ],
        "image": "coolJacket",
        "description": "Decrease {misc:skill cooldowns} by {misc:50%} {+50%}. Decrease {offense:attack speed} by {offense:50%} {+50%}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 92,
        "name": "Stone Flux Pauldron",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "pauldron",
        "description": "Increase {defense:max health} by {defense:100%} {+100%}. Reduce {misc:movement speed} by {misc:50%} {+50%}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 123,
        "name": "Purity",
        "tags": [
          "cooldown",
          "proc"
        ],
        "image": "snowflake",
        "description": "All skill cooldowns are reduced by {misc:2} {+1} seconds. All random effects are rolled {misc:+1} {+1} times for an {debuff:unfavorable outcome}."
      },
      {
        "id": 124,
        "name": "Shaped Glass",
        "tags": [
          "raw damage"
        ],
        "image": "sword",
        "description": "Increase base damage by {offense:100%} {+100%}.\n{defense:Reduce maximum health by 50%} {+50%}."
      },
      {
        "id": 125,
        "name": "Visions of Heresy",
        "tags": [
        ],
        "image": "weirdOrb",
        "description": "{misc:Replace your Primary Skill} with {misc:Hungering Gaze}.\nFire a flurry of {misc:tracking shards} that detonate after a delay, dealing {offense:120%} base damage. Hold up to 12 charges {+12} that reload after 2 seconds {+2}."
      },
      {
        "id": 127,
        "name": "Essence of Heresy",
        "tags": [
          "aoe",
          "status"
        ],
        "image": "ocarina",
        "description": "{misc:Replace your Special Skill} with {misc:Ruin}.\nDealing damage adds a stack of {offense:Ruin} for 10 {+10} seconds. Activating the skill {offense:detonates} all Ruin stack at unlimited range, dealing {offense:300% damage} plus {offense:120% damage per stack of Ruin}.\nRecharges after 8 {+8} seconds."
      },
      {
        "id": 128,
        "name": "Egocentrism",
        "tags": [
          "aoe",
          "proc"
        ],
        "image": "whiteBall",
        "description": "Every {misc:3} {-50%} seconds, gain an {offense:orbiting bomb} that detonates on impact for {offense:360%} damage, up to a maximum of {misc:3} {+1} {misc:bombs}.\nEvery {misc:60} seconds, a random item is {misc:converted} into this item.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 129,
        "name": "Beads of Fealty",
        "tags": [],
        "image": "beads",
        "description": "Seems to do nothing... {debuff:but...}"
      },
      {
        "id": 130,
        "name": "Strides of Heresy",
        "tags": [
          "movement",
          "defensive"
        ],
        "image": "weirdArm",
        "description": "{misc:Replace your Utility Skill} with {misc:Shadowfade}.\nFade away, becoming {misc:intangible} and gaining {misc:+30% movement speed}. {defense:Heal} for {defense:25%} {+25%} {defense:of your maximum health}. Lasts 3 {+3} seconds."
      },
      {
        "id": 144,
        "name": "Defiant Gouge",
        "tags": [],
        "image": "tools",
        "description": "Using a Shrine summons {debuff:enemies} nearby. {misc:Scales over time}."
      },
      {
        "id": 152,
        "name": "Longstanding Solitude",
        "tags": [
          "economy"
        ],
        "image": "longstandingSolitude",
        "description": "{misc:On level up} gain a free unlock for the next purchase {+1} but all gold is converted to experience.\nAnything that costs gold is {misc:increased by 50%} {+50%}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 167,
        "name": "Mercurial Rachis",
        "tags": [
          "raw damage"
        ],
        "image": "spin",
        "description": "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within {misc:16m} {+50%}, causing them to deal {offense:+50%} damage."
      },
      {
        "id": 169,
        "name": "Eulogy Zero",
        "tags": [
        ],
        "image": "domino",
        "description": "Items have a {misc:5%} {+5%} chance to become a {misc:Lunar} item instead.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 172,
        "name": "Corpsebloom",
        "tags": [
          "defensive"
        ],
        "image": "flower",
        "description": "{defense:Heal +100%} {+100%} more.\n{defense:All healing is applied over time}.\nCan {defense:heal} for a {defense:maximum} of {defense:10%} {-50%} of your {defense:health per second}."
      },
      {
        "id": 185,
        "name": "Transcendence",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "transc",
        "description": "{defense:Convert} all but {defense:1 health} into {defense:regenerating shields}.\n{defense:Gain 50%} {+25%} {defense:maximum health}."
      },
      {
        "id": 218,
        "name": "Neutronium Weight",
        "tags": [
          "status"
        ],
        "image": "weight",
        "description": "{debuff:Reduces your stats while in combat}, but {misc:send this item to an enemy} on hit. On death, this item will be sent to it's holder's killer.\nReduces {offense:damage} by 30% {+10%), {offense:attack speed} by 30% {+10%}, {misc:movement speed} by 30% {+10%}, and {misc:armor} by 35 {+15}.",
        "expansion": "Alloyed Collective"
      }
    ]
  },
  {
    "rarity": "EQUIPMENT",
    "items": [
      {
        "id": "E0",
        "name": "Preon Accumulator",
        "tags": [
          "aoe",
          "electric"
        ],
        "image": "beam",
        "description": "Fires preon tendrils, zapping enemies within 35m up to {offense:600% damage/second}.\nOn contact, detonate in an enormous 20m explosion for {offense:4000% damage}.\nCooldown: {misc:140s}"
      },
      {
        "id": "E1",
        "name": "Primordial Cube",
        "tags": [
          "aoe"
        ],
        "image": "blackhole",
        "description": "Fire a black hole that {misc:draws enemies within 30m into it's center}. Last 10 seconds.\nCooldown: {misc:60s}"
      },
      {
        "id": "E2",
        "name": "Trophy Hunter's Tricorn",
        "tags": [
          "execute"
        ],
        "image": "oldGun",
        "description": "{offense:Execute} any enemy capable of spawning a {offense:unique reward}, and it will drop that {offense:item}. Equipment is {misc:consumed} on use.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": "E5",
        "name": "Blast Shower",
        "tags": [
          "defensive"
        ],
        "image": "potThing",
        "description": "{misc:Cleanse} all negative effects. Includes debuffs, damage over time, and nearby projectiles.\nCooldown: {misc:20s}"
      },
      {
        "id": "E6",
        "name": "Disposable Missile Launcher",
        "tags": [
          "aoe",
          "proc"
        ],
        "image": "missile",
        "description": "Fire a swarm of {offense:12} missiles that deal {offense:12x300%} damage.\nCooldown: {misc:45s}"
      },
      {
        "id": "E8",
        "name": "Ocular HUD",
        "tags": [
          "crit"
        ],
        "image": "hud",
        "description": "Gain {offense:+100% Critical Strike Chance} for 8 seconds.\nCooldown: {misc:60s}"
      },
      {
        "id": "E9",
        "name": "Forgive Me Please",
        "tags": [
          "on kill"
        ],
        "image": "voodoo",
        "description": "Throw a cursed doll out that {offense:triggers} any {offense:On-kill} effects you have every {misc:1} second for {misc:8} seconds.\nCooldown: {misc:45s}"
      },
      {
        "id": "E10",
        "name": "The Back-up",
        "tags": [
          "summon"
        ],
        "image": "drone",
        "description": "Call {offense:4 Strike Drones} to fight for you.\nLast 25 seconds.\nCooldown: {misc:100s}"
      },
      {
        "id": "E27",
        "name": "Volcania Egg",
        "tags": [
          "aoe",
          "movement"
        ],
        "image": "egg",
        "description": "Turn into a {offense:draconic fireball} for {offense:5} seconds. Deal {offense:500% damage} on impact.\nDetonates at the end for {offense:800% damage}.\nCooldown: {misc:30s}"
      },
      {
        "id": "E28",
        "name": "Foreign Fruit",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "fruit",
        "description": "Instantly heal for {defense:50% of your maximum health}.\nCooldown: {misc:45s}"
      },
      {
        "id": "E29",
        "name": "Jade Elephant",
        "tags": [
          "defensive"
        ],
        "image": "elephant",
        "description": "Gain {offense:500 armor} for {misc:5 seconds}.\nCooldown: {misc:45s}"
      },
      {
        "id": "E30",
        "name": "Eccentric Vase",
        "tags": [
          "movement"
        ],
        "image": "vase",
        "description": "Create a {misc:quantum tunnel} of up to {misc:1000m} in length. Lasts 30 seconds.\nCooldown: {misc:45s}"
      },
      {
        "id": "E32",
        "name": "The Crowdfunder",
        "tags": [
          "raw damage",
          "economy",
          "proc"
        ],
        "image": "gatling",
        "description": "Fires a continuous barrage that deals {offense:100% damage per bullet}.\nCosts $1 per bullet. Costs increases over time.\nCooldown: {misc:5s}"
      },
      {
        "id": "E34",
        "name": "Goobo Jr.",
        "tags": [
          "summon"
        ],
        "image": "goobo",
        "description": "Spawn a gummy clone that has {offense:300% damage} and {defense:300% health}. Expires in {misc:30} seconds.\nCooldown: {misc:100s}",
        "expansion": "Survivors of the Void"
      },
      {
        "id": "E35",
        "name": "Seed of Life",
        "tags": [
          "defensive"
        ],
        "image": "seedOfLife",
        "description": "{defense:Revive} {misc:dead, friendly Survivors} upon activation. {misc:Dying} while holding this equipment {defense:returns only you to life}. {defense:Reviving} gives {defense:3s of invulnerability} and {misc:consumes} the equipment.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": "E38",
        "name": "Milky Chrisalis",
        "tags": [
          "movement"
        ],
        "image": "larva",
        "description": "Sprout wings and {misc:fly for 15 seconds}.\nGain {misc:+20% movement speed} for the duration.\nCooldown: {misc:60s}"
      },
      {
        "id": "E39",
        "name": "Super Massive Leech",
        "tags": [
          "defensive"
        ],
        "image": "leech",
        "description": "{defense:Heal} for {defense:20%} of the {offense:damage} you deal. Lasts {defense:8} seconds.\nCooldown: {misc:60s}"
      },
      {
        "id": "E40",
        "name": "Royal Capacitor",
        "tags": [
          "aoe",
          "status",
          "electric"
        ],
        "image": "lightning",
        "description": "Call down a lightning strike on a targeted monster, dealing {offense:3000% damage} and {offense:stunning} nearby monsters.\nCooldown: {misc:20s}"
      },
      {
        "id": "E44",
        "name": "Molotov (6-Pack)",
        "tags": [
          "aoe",
          "status"
        ],
        "image": "molotov",
        "description": "Throw {offense:6} molotov cocktails that {offense:ignites} enemies for {offense:500% base damage}. Each molotov leaves a burning area for {offense:200% damage per second}.\nCooldown: {misc:45s}",
        "expansion": "Survivors of the Void"
      },
      {
        "id": "E45",
        "name": "Executive Card",
        "tags": [
          "economy"
        ],
        "image": "creditCard",
        "description": "Whenever you make a gold purchase, get {misc:10%} of the spent gold back. If the purchase is a {misc:multishop} terminal, the other terminals will {misc:remaing open}.\nCooldown: {misc:0.1s}",
        "expansion": "Survivors of the Void"
      },
      {
        "id": "E48",
        "name": "Deus Ex Machina",
        "tags": [
          "defensive",
          "cooldown"
        ],
        "image": "statue",
        "description": "Briefly enter a countering stance that lets you parry {misc:any and ALL} damage. A successful parry {defense:nullifies incoming damage}, reduces your equipment cooldown by {offense:75%}, and grants {offense:Blessing}, causing your next attack to ALWAYS activate your on-hit effects.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": "E49",
        "name": "Gnarled Woodsprite",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "spirit",
        "description": "Gain a Woodsprite follower that heals a friendly target for {defense:10% of their maximum health} instantly, then {defense:1.5% of your maximum health} every second.\nActivating the equipment assigns a new target, or yourself if there are no targets available.\nCooldown: {misc:15s}"
      },
      {
        "id": 51,
        "name": "Recycler",
        "tags": [
          "economy"
        ],
        "image": "recycler",
        "description": "{misc:Transform} an Item or Equipment into a different one. {misc:Can only be converted in the same tier one time}.\nCooldown: {misc:45s}"
      },
      {
        "id": 52,
        "name": "Sawmerang",
        "tags": [
          "aoe",
          "status"
        ],
        "image": "metalSpin",
        "description": "Throw {offense:three large saw blades} that slice through enemies for {offense:3x400%} damage.\nAlso deals an additional {offense:3x100% damage per second} while {offense:bleeding} enemies.\nCan {offense:strike} enemies again on the way back.\nCooldown: {misc:45s}"
      },
      {
        "id": 53,
        "name": "Radar Scanner",
        "tags": [
          "economy"
        ],
        "image": "radar",
        "description": "{misc:Reveal} all interactables within 500m for {misc:10 seconds}.\nCooldown: {misc:45s}"
      },
      {
        "id": 56,
        "name": "Gorag's Opus",
        "tags": [
          "raw damage",
          "movement"
        ],
        "image": "drum",
        "description": "All allies enter a {offense:frenzy} for {misc:7} seconds. Increases {misc:movement speed} by {misc:50%} and {offense:attack speed} by {offense:100%}.\nCooldown: {misc:45s}"
      },
      {
        "id": 58,
        "name": "Remote Caffeinator",
        "tags": [
          "defensive",
          "aoe"
        ],
        "image": "fridge",
        "description": "Request an {offense:Eclipse Zero Vending Machine} from the {offense:UES Safe Travels}. Delivery guaranteed in {misc:5 seconds}, dealing {offense:2000% damage}. {defense:Heal} up to 3 targets for {defense:25% of their maximum health}.\nCooldown: {misc:60s}",
        "expansion": "Survivors of the Void"
      }
    ]
  },
  {
    "rarity": "COMMON",
    "items": [
      {
        "id": 3,
        "name": "Repulsion Armor Plate",
        "tags": [
          "defensive"
        ],
        "image": "armor",
        "description": "Reduce all {offense:incoming damage} by {offense:5} {+5}. Cannot be reduced below {offense:1}."
      },
      {
        "id": 6,
        "name": "Mocha",
        "tags": [
          "movement"
        ],
        "image": "mocha",
        "description": "Increases {offense:attack speed} by {offense:7.5%} {+7.5%} and {misc:movement speed} by {misc:7%} {+7%}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 8,
        "name": "Bolstering Lantern",
        "tags": [
        ],
        "image": "bolsteringLantern",
        "description": "Increase your {offense:attack speed} by {offense:7.5%} for up to {misc:4} {+2} enemies and allies within {misc:20} {+5} meters.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 12,
        "name": "Eclipse Lite",
        "tags": [
          "defensive"
        ],
        "image": "energyDrink",
        "description": "When a skill comes off cooldown, gain a {offense:temporary barrier} for {defense:1%} {+0.25%} of your maximum health per second of the skill's base cooldown.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 13,
        "name": "Topaz Brooch",
        "tags": [
          "defensive"
        ],
        "image": "shieldBrooch",
        "description": "Gain a {defense:temporary barrier} on kill for {defense:15 health} {+15}."
      },
      {
        "id": 15,
        "name": "Tougher Times",
        "tags": [
          "defensive"
        ],
        "image": "bear",
        "description": "{defense:15%} {+15%} chance to {defense:block} incoming damage.\n{misc:Unaffected by luck}."
      },
      {
        "id": 19,
        "name": "Trip-Tip Dagger",
        "tags": [
          "status",
          "proc"
        ],
        "image": "tritip",
        "description": "{offense:10%} {+10%} chance to {offense:bleed} an enemy for {offense:240%} base damage."
      },
      {
        "id": 29,
        "name": "Armor-Piercing Rounds",
        "tags": [
          "raw damage"
        ],
        "image": "bossDamage",
        "description": "Deal an additional {offense:20%} damage {+20%} to bosses."
      },
      {
        "id": 41,
        "name": "Hiker's Boots",
        "tags": [
          "crit"
        ],
        "image": "boots",
        "description": "Striking enemies from a higher elevation grants {offense:+1%} {+1%} {offense:critical strike chance} and {offense:critical strike damage}, up to {misc:10 times}. Lasts 10 seconds.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 43,
        "name": "Lens-Maker's Glasses",
        "tags": [
          "crit"
        ],
        "image": "glasses",
        "description": "Your attacks have a {offense:10%} {+10%} chance to \"{offense:Critically Strike}\", dealing {offense:double damage}."
      },
      {
        "id": 46,
        "name": "Crowbar",
        "tags": [
          "raw damage"
        ],
        "image": "crowbar",
        "description": "Deal {offense:75%} {+75%} damage to enemies above {offense:90% health}."
      },
      {
        "id": 50,
        "name": "Warped Echo",
        "tags": [
          "defensive"
        ],
        "image": "warpedEcho",
        "description": "The next source of damage is {defense:reduced} by {defense:20%} and spread into {misc:3} {+1} {misc:hits}.\nAll echoed damage is {misc:non-lethal} except for the final hit.\nRecharges every {misc:15s}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 80,
        "name": "Bundle of Fireworks",
        "tags": [
          "aoe",
          "proc"
        ],
        "image": "firework",
        "description": "Activating an interactable {offense:launches 8} {+4} {offense:fireworks} that deal {offense:300%} base damage."
      },
      {
        "id": 83,
        "name": "Delicate Watch",
        "tags": [
          "raw damage"
        ],
        "image": "brokenWatch",
        "description": "Increase damage by {offense:20%} {+20%}. Taking damage to below {debuff:25% health} {misc:breaks} this item.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 89,
        "name": "Roll of Pennies",
        "tags": [
          "economy"
        ],
        "image": "pennies",
        "description": "Gain {misc:3} {+3} {misc:gold} on {offense:taking damage} from an enemy. {misc:Scales over time}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 91,
        "name": "Fresh Meat",
        "tags": [
          "defensive"
        ],
        "image": "steak",
        "description": "Increases {defense:maximum health} by {defense:25} {+25}."
      },
      {
        "id": 95,
        "name": "Cautious Slug",
        "tags": [
          "defensive"
        ],
        "image": "slug",
        "description": "Increases {defense:base health regeneration} by {defense:+3 hp/s} {+3 hp/s} while outside of combat."
      },
      {
        "id": 96,
        "name": "Power Elixir",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "elixir",
        "description": "Taking damage to below {debuff:25% health} {misc:consumes} this item, {defense:healing} you for {defense:75%} of {defense:maximum health}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 99,
        "name": "Paul's Goat Hoof",
        "tags": [
          "movement"
        ],
        "image": "goat",
        "description": "Increases {misc:movement speed} by {misc:14%} {+14%}."
      },
      {
        "id": 102,
        "name": "Gasoline",
        "tags": [
          "on kill",
          "status"
        ],
        "image": "gasoline",
        "description": "Killing an enemy {offense:ignites} all enemies within {offense:12m} {+4m} for {offense:150%} base damage.\nAdditionally, ennemies {offense:burn} for {offense:150%} {+75%} base damage."
      },
      {
        "id": 104,
        "name": "Chronic Expansion",
        "tags": [
          "on kill",
          "raw damage"
        ],
        "image": "chronicExpansion",
        "description": "Killing an enemy increases your damage by {offense:3.5%} {+1%}, up to {misc:10} {+5}, for {misc:7s}. Dealing damage refreshes the timer.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 119,
        "name": "Warbanner",
        "tags": [
          "raw damage",
          "movement"
        ],
        "image": "warbanner",
        "description": "On {misc:level up} or starting the {misc:Teleporter event}, drop a banner that strengthens all allies within {misc:16m} {+8m}.\nRaise {offense:attack} and {misc:movement speed} by {offense:30%}."
      },
      {
        "id": 135,
        "name": "Medkit",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "medkit",
        "description": "2 seconds after getting hurt, {defense:heal} for {defense:20} plus an additional {defense:5%} {+5%} of {defense:maximum health}."
      },
      {
        "id": 147,
        "name": "Bustling Fungus",
        "tags": [
          "defensive"
        ],
        "image": "fungus",
        "description": "After standing still for {defense:1} seconds create a zone that {defense:heals} for {defense:4.5%} {+2.25%} of your {defense:health} every second to all allies within {defense:3m} {+1.5m}."
      },
      {
        "id": 149,
        "name": "Focus Crystal",
        "tags": [
          "raw damage"
        ],
        "image": "redCrystal",
        "description": "Increase damage to enemies withing {offense:13m} by {offense:20%} {+20%}."
      },
      {
        "id": 153,
        "name": "Oddly-shaped Opal",
        "tags": [
          "defensive"
        ],
        "image": "opal",
        "description": "{defense:Increase armor} by {defense:100} {+100} while out of danger.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 157,
        "name": "Personal Shield Generator",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "shield",
        "description": "Gain a {defense:shield} equal to {defense:8%} {+8%} of your maximum healt. Recharges outside of danger."
      },
      {
        "id": 178,
        "name": "Item Scrap, White",
        "tags": [
          "economy"
        ],
        "image": "scraps1",
        "description": "Does nothing. Prioritized when used with 3D Printers.\nDrifter: +6% movement speed per stack."
      },
      {
        "id": 181,
        "name": "Backup Magazine",
        "tags": [
          "cooldown"
        ],
        "image": "backupMag",
        "description": "Add {misc:+1} {+1} charge of your {misc:Secondary skill}."
      },
      {
        "id": 193,
        "name": "Elusive Antlers",
        "tags": [
          "movement",
          "defensive"
        ],
        "image": "antlerShield",
        "description": "Spawns orbs of energy nearby every {misc:10s} {-10%}, giving {misc:+12% movement speed} up to {misc:3} {+1} {misc:times} for {misc:12s}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 196,
        "name": "Energy Drink",
        "tags": [
          "movement"
        ],
        "image": "drink",
        "description": "{misc:Sprint speed} is improved by {misc:25%} {+25%}."
      },
      {
        "id": 202,
        "name": "Sticky Bomb",
        "tags": [
          "proc"
        ],
        "image": "stickyBomb",
        "description": "{offense:5%} {+5%} chance on hit to attach a {offense:bomb} to an enemy, detonating for {offense:180%} TOTAL damage."
      },
      {
        "id": 205,
        "name": "Stun Grenade",
        "tags": [
          "proc",
          "status"
        ],
        "image": "stunGrenade",
        "description": "{misc:5%} {+5%} chance on hit to {misc:stun} enemies for {misc:2} seconds."
      },
      {
        "id": 206,
        "name": "Soldier's Syringe",
        "tags": [
          "raw damage"
        ],
        "image": "syringe",
        "description": "Increase {offense:Attack Speed} by {offense:15%} {+15%}."
      },
      {
        "id": 217,
        "name": "Monster Tooth",
        "tags": [
          "on kill",
          "defensive"
        ],
        "image": "monsterTooth",
        "description": "Killing an ennemy spawns a {defense:healing orb} that heals for {defense:8} plus an additional {defense:2%} {+2%} of {defense:maximum health}."
      },
      {
        "id": 219,
        "name": "Rusted Key",
        "tags": [
          "economy"
        ],
        "image": "key",
        "description": "A {misc:hidden cache} containing an item ({defense:80%}/{debuff:20%}) will appear in a random location {misc:on each stage}.\nOpening the cache {misc:consumes} this item."
      }
    ]
  },
  {
    "rarity": "UNIQUE",
    "items": [
      {
        "id": 5,
        "name": "Artifact Key",
        "tags": [],
        "image": "artifactKey",
        "description": "A stone shard with immense power."
      },
      {
        "id": 17,
        "name": "Queen's Gland",
        "tags": [
          "summon"
        ],
        "image": "beetle",
        "description": "Every 30 seconds, {misc:summon a Beetle Guard} with bonus {offense:300%} damage and {defense:100%} health.\nCan have up to {misc:1} {+1} Guards at a time."
      },
      {
        "id": 20,
        "name": "Shatterspleen",
        "tags": [
          "crit",
          "status",
          "aoe",
          "proc"
        ],
        "image": "critBleed",
        "description": "{offense:Critical Strikes bleed} enemies for {offense:240%} base damage. {offense:Bleeding} enemies {offense:explode} on death for {offense:400%} {+400%} damage, plus an additional {offense:15%} {+15%} of their maximum health."
      },
      {
        "id": 79,
        "name": "Molten Perforator",
        "tags": [
          "proc",
          "status"
        ],
        "image": "magmaTooth",
        "description": "{offense:10%} chance on hit to call forth {offense:3 magma balls} that deal {offense:300%} {+300%} damage and {offense:igniting} all enemies."
      },
      {
        "id": 116,
        "name": "Titanic Knurl",
        "tags": [
          "defensive"
        ],
        "image": "knurl",
        "description": "{defense:Increases maximum health} by {defense:40} {+40} and {defense:base health regeneration} by {defense:+1.6 hp/s} {+1.6 hp/s}."
      },
      {
        "id": 120,
        "name": "Charged Perforator",
        "tags": [
          "proc",
          "electric"
        ],
        "image": "whiteHook",
        "description": "{offense:10%} chance on hit to do down a lightning strike, dealing {offense:500%} {+500%} damage."
      },
      {
        "id": 133,
        "name": "Encrypted Cerebellum",
        "tags": [],
        "image": "cerebellum",
        "description": "Contains encrypted remnants of the Collective network. Needs to be decrypted before it can be returned.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 134,
        "name": "Exposed Cerebellum",
        "tags": [],
        "image": "exposedCerebellum",
        "description": "A swarming data nexus representing the Collective network. Can be given to a powerful entity.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 139,
        "name": "Defense Nucleus",
        "tags": [
          "summon"
        ],
        "image": "triangleSummon",
        "description": "Killing elite monsters spawns an {offense:Alpha Construct}. Limited to {misc:4} {+4}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 151,
        "name": "Genesis Loop",
        "tags": [
          "aoe",
          "defensive",
          "hp%",
          "electric"
        ],
        "image": "weirdTail",
        "description": "Falling below {debuff:25% health} causes you to explode, dealing {offense:6000% base damage}. Recharges every {misc:30 seconds} {-50%}."
      },
      {
        "id": 154,
        "name": "Planula",
        "tags": [
          "defensive"
        ],
        "image": "magmaEgg",
        "description": "Heal from {offense:incoming damage} for {defense:15} {+15}"
      },
      {
        "id": 155,
        "name": "Pearl",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "pearl",
        "description": "Increases {defense:maximum health} by {defense:10%} {+10%}."
      },
      {
        "id": 163,
        "name": "Prison Matrix",
        "tags": [
          "defensive"
        ],
        "image": "matrix",
        "description": "Gain {misc:+50% armor}. Can be placed in a Matrix Terminal.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 165,
        "name": "Sentry Key",
        "tags": [
          "movement"
        ],
        "image": "pyramid",
        "description": "Gain {misc:+15% move speed}. Can be placed in a Sentry Terminal or used for decryption.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 173,
        "name": "Empathy Cores",
        "tags": [
          "summon"
        ],
        "image": "doubleDrone",
        "description": "Every 30 seconds, {misc:summon two Solus Probes} that gain {offense:+100%} {+100%} damage per {misc:ally on your team}."
      },
      {
        "id": 180,
        "name": "Item Scrap, Yellow",
        "tags": [
          "economy"
        ],
        "image": "scraps4",
        "description": "Does nothing. Prioritized when used with 3D Printers.\nDrifter: -15% skill cooldowns per stack."
      },
      {
        "id": 186,
        "name": "Irradiant Pearl",
        "tags": [
          "raw damage"
        ],
        "image": "shinyPearl",
        "description": "Increases {misc:ALL stats} by {misc:10%} {+10%}."
      },
      {
        "id": 187,
        "name": "Faulty Conductor",
        "tags": [
          "raw damage",
          "aoe",
          "electric"
        ],
        "image": "conductor",
        "description": "Every {misc:15} {-20%} {misc:seconds}, release a wave of electricity that {defense:energizes} nearby allies for {misc:7} seconds.\nEnergized allies gain {offense:+30% attack and movement speed}, and ALWAYS land {offense:critical strikes} with {misc:electric} items and attacks.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 189,
        "name": "Mired Urn",
        "tags": [
          "status",
          "raw damage",
          "defensive"
        ],
        "image": "tarUrn",
        "description": "While in combat, the nearest 1 {+1} enemies to you within {offense:13m} whill be \"tethered\" to you, dealing {offense:100% damage per second}, applying {offense:tar}, and {defense:healing} your for {defense:100%} of the damage dealt."
      },
      {
        "id": 198,
        "name": "Little Disciple",
        "tags": [
          "raw damage",
          "proc",
          "electric"
        ],
        "image": "sprintingWisp",
        "description": "Fire a {offense:tracking wisp} for {offense:300%} {+300%} {offense:damage}.\nFires every {misc:1.6} seconds while sprinting. Fire rate increases with {misc:movement speed}."
      },
      {
        "id": "E215",
        "name": "Halcyon Seed",
        "tags": [
          "summon"
        ],
        "image": "goldenSeed",
        "description": "Summon {offense:Aurelionite} during the teleporter event.\nIt has {offense:100%} {+50%} {offense:damage} and {defense:100%} {+100%} {defense:health}."
      },
      {
        "id": 232,
        "name": "Functional Coupler",
        "tags": [],
        "image": "coupler",
        "description": "Hold {misc:1 additional equipment}. Press interact and equipment together to cycle the held equipment.",
        "expansion": "Alloyed Collective"
      }
    ]
  },
  {
    "rarity": "UNCOMMON",
    "items": [
      {
        "id": 7,
        "name": "Predatory Instincts",
        "tags": [
          "crit"
        ],
        "image": "hat",
        "description": "{offense:Critical Strikes} increase {offense:attack speed} by {offense:12%}.\nMaximum cap of {offense:36%} {+24%} {offense:attack speed}."
      },
      {
        "id": 10,
        "name": "Bandolier",
        "tags": [
          "cooldown",
          "on kill"
        ],
        "image": "bandolier",
        "description": "{misc:18%} {+10%} chance on kill to drop an ammo pack that {misc:resets all cooldowns}."
      },
      {
        "id": 22,
        "name": "Ghor's Tome",
        "tags": [
          "economy"
        ],
        "image": "goldBook",
        "description": "{misc:4%} {+4%} chance on kill to drop a treasure worth {misc:25 gold}. {misc:Scales over time.}."
      },
      {
        "id": 33,
        "name": "Ukulele",
        "tags": [
          "proc",
          "aoe",
          "electric"
        ],
        "image": "ukulele",
        "description": "{offense:25%} chance to fire a {offense:chain lightning} for {offense:80%} TOTAL damage up to {offense:3} {+2} targets within {offense:20m} {+2m}."
      },
      {
        "id": 49,
        "name": "Death Mark",
        "tags": [
          "status"
        ],
        "image": "deathMark",
        "description": "Enemies with {offense:4} or more debuffs are {offense:marked for death}, increasing damage taken by {offense:50%} from all sources for {misc:7} {+7} seconds."
      },
      {
        "id": 59,
        "name": "Box of Dynamite",
        "tags": [
          "summon",
          "aoe",
          "proc"
        ],
        "image": "dynamiteBox",
        "description": "Gain {offense:Lt. Droneboy}. While in combat, your drones drop sticks of dynamite that detonate for {offense:240% damage} {+85%}, stunning enemies. Recharges after {misc:10} seconds.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 63,
        "name": "War Horn",
        "tags": [
        ],
        "image": "warHorn",
        "description": "Activating your Equipment gives you {offense:+70% attack speed} for {offense:8s} {+4s}."
      },
      {
        "id": 64,
        "name": "Fuel Cell",
        "tags": [
          "cooldown"
        ],
        "image": "cell",
        "description": "Hold an {misc:additional equipment charge} {+1}.\n{misc:Reduce equipment cooldown} by {misc:15%} {+15%}."
      },
      {
        "id": 66,
        "name": "Old Guillotine",
        "tags": [
          "execute"
        ],
        "image": "guillotine",
        "description": "Instantly kill Elite Monsters below {debuff:13%} {+13%} {debuff:health}."
      },
      {
        "id": 67,
        "name": "Will-O'-the-wisp",
        "tags": [
          "on kill",
          "aoe"
        ],
        "image": "wisp",
        "description": "On killing an enemy, spawn a {offense:lava pillar} in a {offense:12m} {+2.4m} radius for {offense:350%} {+280%} base damage."
      },
      {
        "id": 74,
        "name": "Chance Doll",
        "tags": [
          "economy"
        ],
        "image": "chanceDoll",
        "description": "On Shrine of Chance success, {misc:40%} {+10%} chance to get higher rarity items.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 75,
        "name": "Prayer Beads",
        "tags": [
          "raw damage",
          "hp%"
        ],
        "image": "prayerBreads",
        "description": "Grows in power by absorbing experience, storing {misc:20%} {+5%} bonus stats ({defense:health}, {defense:regeneration}, and {offense:damage}). On removal, gain all stored stats.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 77,
        "name": "Hopoo Feather",
        "tags": [
          "movement"
        ],
        "image": "feather",
        "description": "Gain {misc:+1} {+1} maximum {misc:jump count}."
      },
      {
        "id": 78,
        "name": "Kjaro's Band",
        "tags": [
          "raw damage"
        ],
        "image": "fireRing",
        "description": "Hits that deals {offense:more than 400% damage} also blasts enemies with a {offense:runic flame tornado}, dealing {offense:300%} {+300%} TOTAL damage. Recharge every {misc:10} seconds."
      },
      {
        "id": 85,
        "name": "Shipping Request Form",
        "tags": [
          "economy"
        ],
        "image": "form",
        "description": "A {misc:delivery} containing 2 items (79%/{defense:20%}/{debuff:1%}) will appear in a random location {misc:on each stage}. {Increases rarity chances of the items}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 94,
        "name": "Harvester's Scythe",
        "tags": [
          "crit",
          "defensive"
        ],
        "image": "scythe",
        "description": "Gain {offense:5% critical chance}.\n{offense:Critical strikes} {defense:heal} for {defense:8} {+4} {defense:health}."
      },
      {
        "id": 100,
        "name": "Runald's Band",
        "tags": [
          "raw damage",
          "status"
        ],
        "image": "iceRing",
        "description": "Hits that deals {offense:more than 400% damage} also blasts enemies with a {offense:runic ice blast}, {misc:slowing} them by {misc:80%} for {misc:3s} {+3s} and dealing {offense:250%} {+250%} TOTAL damage. Recharge every {misc:10} seconds."
      },
      {
        "id": 106,
        "name": "Luminous Shot",
        "tags": [
          "cooldown",
          "raw damage",
          "electric"
        ],
        "image": "luminousShot",
        "description": "Activating {misc:secondary skill} stores up to {misc:5 charges} {+1}. Requires {misc:3 charges} for your {misc:Primary skill} to fire lightning stikres, dealing {offense:175% TOTAL damage} {+50%} each.\n{misc:Reduces Secondary skill cooldown by 20%}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 108,
        "name": "Infusion",
        "tags": [
          "defensive"
        ],
        "image": "infusion",
        "description": "Killing an enemy increases your {defense:health permanently} by {defense:1} {+1}, up to a {defense:maximum} of {defense:100} {+100} {defense:health}."
      },
      {
        "id": 111,
        "name": "Wax Quail",
        "tags": [
          "movement"
        ],
        "image": "quail",
        "description": "{misc:Jumping} while {misc:sprinting} boosts you forward by {misc:10m} {+10m}."
      },
      {
        "id": 112,
        "name": "Faraday Spur",
        "tags": [
          "movement",
          "aoe",
          "electric"
        ],
        "image": "faraday",
        "description": "Moving around builds up {misc:charge}, granting up to {misc:+160% movement speed} and {misc:+200% jump height} at 100%.\nAt 25% charge or higher, jumping triggers an {offense:explosive discharge} for {offense:400%} {+280%} {offense:damage} in a 5m to 32.3m {+7.5m} area.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 115,
        "name": "Breaching Fin",
        "tags": [
          "status",
          "movement"
        ],
        "image": "breachingFin",
        "description": "Grounded enemies hit with any {misc:skill} are {misc:launched} and {misc:stunned}. Enemies hit while airborne are {misc:launched} again up to {misc:2 times} {+1}. Launched enemies take increased damage by {offense:10%} from all sources per launch. Recharges after {misc:15s}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 121,
        "name": "Sale Star",
        "tags": [
          "economy"
        ],
        "image": "saleStar",
        "description": "Gain an extra item on the first chest opened per stage. {Each additional Sale Star increase the chance of getting more items by 5%$}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 140,
        "name": "AtG Missile Mk. 1",
        "tags": [
          "proc",
          "aoe"
        ],
        "image": "missile_mk",
        "description": "{offense:10%} chance to fire a missile that deals {offense:300%} {+300%} TOTAL damage."
      },
      {
        "id": 146,
        "name": "Hunter's Harpoon",
        "tags": [
          "movement",
          "on kill"
        ],
        "image": "harpoon",
        "description": "Killing an enemy increases {misc:movement speed} by {misc:125%}, fading over {misc:1} {+0.5} seconds.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 158,
        "name": "Old War Stealthkit",
        "tags": [
          "defensive",
          "movement"
        ],
        "image": "phasing",
        "description": "Falling below {debuff:25% health} gives you a {misc:40% movement speed} and {misc:invisibility} for {misc:5s}.\nRecharges every {misc:30 seconds} {-50%}."
      },
      {
        "id": 166,
        "name": "Shuriken",
        "tags": [
          "proc"
        ],
        "image": "shuriken",
        "description": "Activation your {misc:Primary skill} also throws a {offense:shuriken} that deals {offense:400%} {+100%} base damage. You can hold up to {misc:3} {+1} {offense:shurikens} which all reload over {misc:10} seconds.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 170,
        "name": "Regenerating Scrap",
        "tags": [
          "economy"
        ],
        "image": "orangeScrap",
        "description": "Does nothing. Prioritized when used with 3D Printers. At the start of each stage, it regenerates.\nDrifter: counts as scrap for Trash to Treasure.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 174,
        "name": "Item Scrap, Green",
        "tags": [
          "economy"
        ],
        "image": "scraps2",
        "description": "Does nothing. Prioritized when used with 3D Printers.\nDrifter: +3 HP/s regeneration per stack."
      },
      {
        "id": 182,
        "name": "Leeching Seed",
        "tags": [
          "defensive"
        ],
        "image": "seed",
        "description": "Dealing damage {defense:heals} you for {defense:1} {+1} {defense:health}."
      },
      {
        "id": 184,
        "name": "Kinetic Dampener",
        "tags": [
          "defensive",
          "status",
          "electric"
        ],
        "image": "energyShield",
        "description": "Increases armor by {misc:30} {+30} while you have a shield. When shield breaks, release a stunning pulse for {offense:100% damage} plus an amount {offense:equal to 100%} {+10%} {offense:of your max shield}. Grants a shield for {defense:4% of your max health}.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 191,
        "name": "Chronobauble",
        "tags": [
          "status",
        ],
        "image": "bauble",
        "description": "{misc:Slow} enemies for {misc:-60% movement speed} for {misc:2s} {+2s}."
      },
      {
        "id": 194,
        "name": "Collector's Compulsion",
        "tags": [
          "raw damage",
          "hp%"
        ],
        "image": "bag",
        "description": "Picking up {offense:an item or other collectible} increases {misc:all stats} by {misc:+3%} for 20 seconds, up to {misc:3} {+2} {misc:times}. Barrels grant minor pickups.",
        "expansion": "Alloyed Collective"
      },
      {
        "id": 195,
        "name": "Rose Buckler",
        "tags": [
          "defensive"
        ],
        "image": "buckler",
        "description": "{defense:Increase armor} by {defense:30} {+30} while {misc:sprinting}."
      },
      {
        "id": 197,
        "name": "Red Whip",
        "tags": [
          "movement"
        ],
        "image": "whip",
        "description": "Leaving combat boosts {misc:movement speed} by {misc:30%} {+30%}."
      },
      {
        "id": 199,
        "name": "Squid Polyp",
        "tags": [
          "summon"
        ],
        "image": "squidTurret",
        "description": "Activating an interactable summons a {offense:Squid Turret} that attacks nearby enemies at {offense:100%} {+100%} {offense:attack speed}. Lasts {misc:30} seconds."
      },
      {
        "id": 203,
        "name": "Ignition Tank",
        "tags": [
          "status"
        ],
        "image": "tank",
        "description": "Ignite effects deal {offense:+300%} {+300%} more damage over time.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 207,
        "name": "Lepton Daisy",
        "tags": [
          "defensive"
        ],
        "image": "healFlower",
        "description": "Release a {defense:healing nova} during the Teleporter event, {defense:healing} all nearby allies for {defense:50%} of their maximum health. Occurs {defense:1} {+1} times."
      },
      {
        "id": 210,
        "name": "Unstable Transmitter",
        "tags": [
          "defensive",
          "status"
        ],
        "image": "unstableTramsmitter",
        "description": "Falling below {debuff:25% health} gives you a {defense:temporary barrier} and a dimensional aura that {offense:bleeds} and {misc:teleports} away enemies for {misc:8s}.\n{offense:Enemies killed} by the aura {misc:extend} the duration by {misc:1s}.\nAt the start of each stage, it regenerates.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 214,
        "name": "Razorwire",
        "tags": [
          "proc",
        ],
        "image": "razorHeadband",
        "description": "Getting hit causes you to explode in a burst of razors, dealing {offense:160% damage}.\nHits up to {offense:5} {+2} targets in a {offense:25m} {+10m} radius."
      },
      {
        "id": 221,
        "name": "Noxious Thorn",
        "tags": [
          "status",
        ],
        "image": "noxiousThorn",
        "description": "Gain {offense:10%} chance to {offense:bleed} an enemy. On killing an enemy, {offense:transfer 33%} of every debuff stack to {offense:1 enemy} {+1} within {misc:20m} {+5m}.",
        "expansion": "Seekers of the Storm"
      },
      {
        "id": 228,
        "name": "Berzerker's Pauldron",
        "tags": [
          "on kill",
          "movement"
        ],
        "image": "berzerk",
        "description": "{offense:Killing 4 enemies} within {offense:1} second sends you into a {offense:frenzy} for {offense:6s} {+4s}.\nIncreases {misc:movement speed} by {misc:50%} and {offense:attack speed} by {offense:100%}."
      }
    ]
  },
  {
    "rarity": "VOID",
    "items": [
      {
        "id": 16,
        "name": "Safer Spaces",
        "tags": [
          "defensive"
        ],
        "image": "corruptedBear",
        "description": "{defense:Block} incoming damage once. Recharges after {misc:15 seconds} {-10%}.\n{corrupt:Corrupts all Tougher Times}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 21,
        "name": "Needletick",
        "tags": [
        ],
        "image": "needletick",
        "description": "{offense:10%} {+10%} chance to {offense:collapse} an enemy for {offense:400%} base damage.\n{corrupt:Corrupts all Tri-Tip Daggers}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 34,
        "name": "Polylute",
        "tags": [
          "proc",
          "electric"
        ],
        "image": "corruptedThing",
        "description": "{offense:25%} chance to fire {offense:lightning} for {offense:60%} TOTAL damage up to {offense:3} {+3} times.\n{corrupt:Corrupts all Ukuleles}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 36,
        "name": "Benthic Bloom",
        "tags": [
          "economy"
        ],
        "image": "corruptedClover",
        "description": "{misc:Upgrades 3} {+3} randoms items to items of the next {misc:higher rarity} at the {misc:start of each stage}.\n{corrupt:Corrupts all 57 Leaf Clovers}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 44,
        "name": "Lost Seer's Lenses",
        "tags": [
          "execute"
        ],
        "image": "corruptedGlasses",
        "description": "Your attacks have a {offense:0.5%} {+0.5%} chance to {offense:instantly kill} a {offense:non-Boss enemy}.\n{corrupt:Corrupts all Lens-Maker's Glasses}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 61,
        "name": "Singularity Band",
        "tags": [
          "raw damage",
          "aoe",
          "proc"
        ],
        "image": "superRing",
        "description": "Hits that deal {offense:more than 400% damage} also fire a black hole that {misc:draws enemies within 15m into its center}.\nLasts {misc:5} seconds before collapsing, dealing {offense:100%} {+100%} TOTAL damage.\nRecharges every {misc:20} seconds.\n{corrupt:Corrupts all Kjaro's Band and Runald's Band}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 65,
        "name": "Lysate Cell",
        "tags": [
          "cooldown"
        ],
        "image": "purpleCell",
        "description": "Add {misc:+1} {+1} charge of your {misc:Special skill}.\n{corrupt:Corrupts all Fuell Cells}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 68,
        "name": "Voidsent Flame",
        "tags": [
          "aoe",
          "raw damage",
          "proc"
        ],
        "image": "flame",
        "description": "Upon hitting an enemy at or above {offense:100% health}, {offense:detonate} them in a {offense:12m} {+2.4m} radius burst for {offense:260%} {+156%} base damage.\n{corrupt:Corrupts all Will-o'-the-wisps}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 72,
        "name": "Pluripotent Larva",
        "tags": [
          "defensive"
        ],
        "image": "hauntedBear",
        "description": "{misc:Upon death}, this item will be {misc:consumed} and you will {defense:return to life} with {defense:3 seconds of invulnerability}, and all of your items that can be {misc:corrupted} will be.\n{corrupt:Corrupts all Dio's Best Friends}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 141,
        "name": "Plasma Shrimp",
        "tags": [
          "defensive",
          "proc"
        ],
        "image": "superMissile",
        "description": "Gain a {defense:shield} equal to {defense:10%} of your maximum health. While you have a {defense:shield}, hitting an enemy fires a missile that deals {offense:40%} {+50%} TOTAL damage.\n{corrupt:Corrupts all AtG Missile Mk. 1s}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 148,
        "name": "Weeping Fungus",
        "tags": [
          "defensive"
        ],
        "image": "weirdShroom",
        "description": "{defense:Heals} for {defense:2%} {+2%} of your {defense:health} every second {misc:while sprinting}.\n{corrupt:Corrupts all Bustling Fungi}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 192,
        "name": "Tentabauble",
        "tags": [
          "status"
        ],
        "image": "plantTentacle",
        "description": "{misc:5%} {+5%} chance on hit to {offense:root} enemies for {misc:1s} {+1s}.\n{corrupt:Corrupts all Chronobaubles}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 220,
        "name": "Encrusted Key",
        "tags": [
          "economy"
        ],
        "image": "corruptedKey",
        "description": "A {misc:hidden cache} containing an item (60%/{defense:30%}/{debuff:10%}) will appear in a random location {misc:on each stage}. Opening the cache {misc:consumes} this item.\n{corrupt:Corrupts all Rusted Key}.",
        "expansion": "Survivors of the Void"
      },
      {
        "id": 225,
        "name": "Newly Hatched Zoea",
        "tags": [
          "offense",
          "summon"
        ],
        "image": "corruptedScorpion",
        "description": "Every {misc:60} {-50%} seconds, gain a random {corrupt:Void} ally. Can have up to {misc:1} {+1} allies at a time.\n{corrupt:Corrupts all Unique Items}.",
        "expansion": "Survivors of the Void"
      }
    ]
  },
  {
    "rarity": "MEAL",
    "items": [
      {
        "id": 23,
        "name": "Quick Fix",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "instantNoodles",
        "description": "Increases {defense:bonus health and regeneration gains} by {defense:50%} {+15%}. Does not affect bonuses from leveling up.",
        "recipe": {
          "base": [
            {
              "image": "scraps1",
              "name": "Item Scrap, White"
            }
          ],
          "options": [
            {
              "image": "mocha",
              "name": "Mocha"
            },
            {
              "image": "energyDrink",
              "name": "Eclipse Lite"
            },
            {
              "image": "steak",
              "name": "Bison Steak"
            },
            {
              "image": "slug",
              "name": "Cautious Slug"
            },
            {
              "image": "elixir",
              "name": "Power Elixir"
            },
            {
              "image": "fungus",
              "name": "Bustling Fungus"
            },
            {
              "image": "antlerShield",
              "name": "Elusive Antlers"
            },
            {
              "image": "drink",
              "name": "Energy Drink"
            },
            {
              "image": "monsterTooth",
              "name": "Monster Tooth"
            }
          ]
        },
        "expansion": "Alloyed Collective"
      },
      {
        "id": 38,
        "name": "Seared Steak",
        "tags": [
          "defensive",
          "hp%"
        ],
        "image": "steack",
        "description": "Increases {defense:maximum health} by {defense:50} {+50}, plus an additional {defense:5%} {+5%} of your {defense:max health}.",
        "recipe": {
          "base": [
            {
              "image": "steak",
              "name": "Bison Steak"
            }
          ],
          "options": [
            {
              "image": "mocha",
              "name": "Mocha"
            },
            {
              "image": "energyDrink",
              "name": "Eclipse Lite"
            },
            {
              "image": "steak",
              "name": "Bison Steak"
            },
            {
              "image": "slug",
              "name": "Cautious Slug"
            },
            {
              "image": "elixir",
              "name": "Power Elixir"
            },
            {
              "image": "fungus",
              "name": "Bustling Fungus"
            },
            {
              "image": "antlerShield",
              "name": "Elusive Antlers"
            },
            {
              "image": "drink",
              "name": "Energy Drink"
            },
            {
              "image": "monsterTooth",
              "name": "Monster Tooth"
            }
          ]
        },
        "expansion": "Alloyed Collective"
      },
      {
        "id": 201,
        "name": "Hearty Stew",
        "tags": [
          "defensive",
          "raw damage"
        ],
        "image": "ramen",
        "description": "Increases {defense:regeneration} by {defense:+2.5} {+2.5} {defense:HP/s}. At full health, your regeneration is added to your {offense:base damage}.",
        "recipe": {
          "base": [
            {
              "image": "healFlower",
              "name": "Lepton Daisy"
            }
          ],
          "options": [
            {
              "image": "healFlower",
              "name": "Lepton Daisy"
            },
            {
              "image": "leech",
              "name": "Leeching Seed"
            },
            {
              "image": "squidTurret",
              "name": "Squid Polyp"
            },
            {
              "image": "noxiousThorn",
              "name": "Noxious Thorn"
            }
          ]
        },
        "expansion": "Alloyed Collective"
      },
      {
        "id": 222,
        "name": "Ultimate Meal",
        "tags": [
          "proc"
        ],
        "image": "ultimateMeal",
        "description": "At full health, all random effects are rolled {defense:+2} {+2} extra times for a better outcome.",
        "recipe": {
          "base": [
            {
              "image": "clover",
              "name": "57 Leaf Clover"
            }
          ],
          "options": [
            {
              "image": "clover",
              "name": "57 Leaf Clover"
            },
            {
              "image": "alien",
              "name": "Alien Head"
            },
            {
              "image": "growthNectar",
              "name": "Growth Nectar"
            },
            {
              "image": "headhunter",
              "name": "Wake of Vultures"
            },
            {
              "image": "ice",
              "name": "Frost Relic"
            },
            {
              "image": "horn",
              "name": "Rejuvenation Rack"
            },
            {
              "image": "brain",
              "name": "Brainstalks"
            },
            {
              "image": "scorpion",
              "name": "Symbiotic Scorpion"
            },
            {
              "image": "deskPlant",
              "name": "Interstellar Desk Plant"
            },
            {
              "image": "bottle",
              "name": "Bottled Chaos"
            }
          ]
        },
        "expansion": "Alloyed Collective"
      },
      {
        "id": 230,
        "name": "Sautéed Worms",
        "tags": [
          "summon",
          "status",
          "proc",
          "electric"
        ],
        "image": "worms",
        "description": "On hit, {misc:10% chance} to summon a spectral wyrm that seeks out and damages and ignites enemies for 500% {+500%} {offense:TOTAL damage per second} for {misc:10 seconds.}",
        "recipe": {
          "base": [
            {
              "image": "magmaTooth",
              "name": "Molten Perforator"
            }
          ],
          "options": [
            {
              "image": "whiteHook",
              "name": "Charged Perforator"
            }
          ]
        },
        "expansion": "Alloyed Collective"
      }
    ]
  }
];