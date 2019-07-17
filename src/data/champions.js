const champions = {
  "Aatrox": {
    "id": "266",
    "key": "Aatrox",
    "name": "Aatrox",
    "origin": ["Demon"],
    "class": ["Blademaster"],
    "cost": 3,
    "ability": {
      "name": "The Darkin Blade",
      "description": "Aatrox cleaves the area in front of him, dealing damage to enemies inside it.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [{ "type": "Damage", "value": "350 / 575 / 850" }]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 1
      },
      "defense": {
        "health": 750,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Ahri": {
    "id": "103",
    "key": "Ahri",
    "name": "Ahri",
    "cost": 2,
    "origin": ["Wild"],
    "class": ["Sorcerer"],
    "ability": {
      "name": "Spirit Orb",
      "description": "Ahri fires an orb in a line that returns to her, damaging enemies it passes through.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [{ "type": "Damage", "value": "100 / 175 / 250" }]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.55,
        "dps": 28,
        "range": 3
      },
      "defense": {
        "health": 450,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "guinsoosrageblade",
      "rabadonsdeathcap"
    ]
  },
  "Akali": {
    "id": "84",
    "key": "Akali",
    "name": "Akali",
    "cost": 4,
    "origin": ["Ninja"],
    "class": ["Assassin"],
    "ability": {
      "name": "Five Point Strike",
      "description": "Akali throws shurikens in front of her, dealing damage.",
      "type": "Active",
      "manaCost": 25,
      "manaStart": 0,
      "stats": [{ "type": "Damage", "value": "200 / 375 / 550" }]
    },
    "stats": {
      "offense": {
        "damage": 70,
        "attackSpeed": 0.75,
        "dps": 53,
        "range": 1
      },
      "defense": {
        "health": 700,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "hextechgunblade",
      "infinityedge"
    ]
  },
  "Anivia": {
    "id": "34",
    "key": "Anivia",
    "name": "Anivia",
    "origin": ["Glacial"],
    "class": ["Elementalist"],
    "cost": 5,
    "ability": {
      "name": "Glacial Storm",
      "description": "Anivia channels a large hailstorm, damaging enemies inside of it.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "700 / 950 / 1200" },
        { "type": "Attack Speed Slow", "value": "50 / 70 / 90" },
        { "type": "Storm Duration", "value": "8s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 4
      },
      "defense": {
        "health": 650,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "morellonomicon",
      "rabadonsdeathcap"
    ]
  },
  "Ashe": {
    "id": "22",
    "key": "Ashe",
    "name": "Ashe",
    "origin": ["Glacial"],
    "class": ["Ranger"],
    "cost": 3,
    "ability": {
      "name": "Enchanted Crystal Arrow",
      "description": "Ashe fires an arrow that travels across the map, damages, and stuns (stun duration based on each hex traveled).",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
          { "type": "Damage", "value": "700 / 950 / 1200" },
          { "type": "Stun Duration (per hex traveled)", "value": "1s / 1.5s / 2s" }
        ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 0.7,
        "dps": 42,
        "range": 5
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "guinsoosrageblade",
      "runaanshurricane"
    ]
  },
  "AurelionSol": {
    "id": "136",
    "key": "AurelionSol",
    "name": "Aurelion Sol",
    "origin": ["Dragon"],
    "class": ["Sorcerer"],
    "cost": 4,
    "ability": {
      "name": "Voice of Light",
      "description": "Aurelion Sol breathes a large blast of fire in a line, dealing damage to enemies.",
      "type": "Active",
      "manaCost": 125,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "250 / 450 / 650" },
        { "type": "Channel Duration", "value": "0.35s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 3
      },
      "defense": {
        "health": 600,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "guinsoosrageblade",
      "rabadonsdeathcap"
    ]
  },
  "Blitzcrank": {
    "id": "53",
    "key": "Blitzcrank",
    "name": "Blitzcrank",
    "origin": ["Robot"],
    "class": ["Brawler"],
    "cost": 2,
    "ability": {
      "name": "Rocket Grab",
      "description": "Blitzcrank pulls the furthest enemy to him.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "100 / 350 / 800" },
        { "type": "Stun Duration", "value": "2.5s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "warmogsarmor",
      "dragonsclaw"
    ]
  },
  "Brand": {
    "id": "63",
    "key": "Brand",
    "name": "Brand",
    "origin": ["Demon"],
    "class": ["Elementalist"],
    "cost": 4,
    "ability": {
      "name": "Pyroclasm",
      "description": "Brand launches a bouncing fireball, damaging enemies hit.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "200 / 300 / 400" },
        { "type": "Bounces", "value": "4 / 4 / 6" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 0.6,
        "dps": 36,
        "range": 3
      },
      "defense": {
        "health": 700,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "guinsoosrageblade",
      "rabadonsdeathcap"
    ]
  },
  "Braum": {
    "id": "201",
    "key": "Braum",
    "name": "Braum",
    "origin": ["Glacial"],
    "class": ["Guardian"],
    "cost": 2,
    "ability": {
      "name": "Unbreakable",
      "description": "Braum creates a barrier that blocks all incoming damage.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Damage Reduction", "value": "60 / 75 / 90" },
        { "type": "Duration", "value": "4s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 1
      },
      "defense": {
        "health": 750,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "zekesherald",
      "dragonsclaw"
    ]
  },
  "Chogath": {
    "id": "31",
    "key": "Chogath",
    "name": "Cho'Gath",
    "origin": ["Void"],
    "class": ["Brawler"],
    "cost": 4,
    "ability": {
      "name": "Rupture",
      "description": "Cho'gath ruptures an area, stunning and damaging enemies inside of it.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        { "type": "Damage", "value": "200 / 400 / 600" },
        { "type": "Knockup Duration", "value": "2s / 2.25s / 2.5s" },
        { "type": "AoE Radius", "value": "3 hexes" },
        { "type": "Delay", "value": "1.5s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 70,
        "attackSpeed": 0.55,
        "dps": 39,
        "range": 1
      },
      "defense": {
        "health": 1100,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "warmogsarmor",
      "dragonsclaw"
    ]
  },
  "Darius": {
    "id": "122",
    "key": "Darius",
    "name": "Darius",
    "origin": ["Imperial"],
    "class": ["Knight"],
    "cost": 1,
    "ability": {
      "name": "Decimate",
      "description": "Darius swings his axe, damaging nearby enemies and healing himself based off his missing health.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "150 / 225 / 300" },
        { "type": "Heal", "value": "100 / 150 / 200" },
        { "type": "Delay", "value": "1.5" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "warmogsarmor",
      "phantomdancer"
    ]
  },
  "Draven": {
    "id": "119",
    "key": "Draven",
    "name": "Draven",
    "origin": ["Imperial"],
    "class": ["Blademaster"],
    "cost": 4,
    "ability": {
      "name": "Spinning Axes",
      "description": "Draven gains bonus on-hit damage and Attack Speed. Stacks up to two times.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [
        { "type": "Buff Duration", "value": "8s" },
        { "type": "Attack Damage Multiplier", "value": "150% / 200% / 250%" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 0.65,
        "dps": 49,
        "range": 3
      },
      "defense": {
        "health": 700,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "infinityedge",
      "rapidfirecannon",
      "phantomdancer"
    ]
  },
  "Elise": {
    "id": "60",
    "key": "Elise",
    "name": "Elise",
    "origin": ["Demon"],
    "class": ["Shapeshifter"],
    "cost": 2,
    "ability": {
      "name": "Spider Form",
      "description": "Elise fires a cocoon stunning the nearest enemy and transforms, summoning 2 Spiderlings.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Life Steal", "value": "60% / 90% / 120%" },
        { "type": "Number of Spiderlings", "value": "2 / 3 / 4" },
        { "type": "Spiderling Health", "value": "500" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 40,
        "range": 2
      },
      "defense": {
        "health": 500,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "warmogsarmor",
      "guinsoosrageblade",
      "phantomdancer"
    ]
  },
  "Evelynn": {
    "id": "28",
    "key": "Evelynn",
    "name": "Evelynn",
    "origin": ["Demon"],
    "class": ["Assassin"],
    "cost": 3,
    "ability": {
      "name": "Last Caress",
      "description": "Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against low health enemies.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "200 / 250 / 300" },
        { "type": "Crit Multiplier", "value": "3 / 4 / 5" },
        { "type": "Crit Threshold", "value": "0.5" },
        { "type": "Blink Distance", "value": "3" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 50,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "rabadonsdeathcap",
      "morellonomicon"
    ]
  },
  "Fiora": {
    "id": "114",
    "key": "Fiora",
    "name": "Fiora",
    "origin": ["Noble"],
    "class": ["Blademaster"],
    "cost": 1,
    "ability": {
      "name": "Riposte",
      "description": "Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "100 / 175 / 250" },
        { "type": "Stun Duration", "value": "1.5s" },
        { "type": "Block Duration", "value": "1.5s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.7,
        "dps": 28,
        "range": 1
      },
      "defense": {
        "health": 400,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "frozenheart",
      "zekesherald",
      "phantomdancer"
    ]
  },
  "Gangplank": {
    "id": "41",
    "key": "Gangplank",
    "name": "Gangplank",
    "origin": ["Pirate"],
    "class": ["Gunslinger", "Blademaster"],
    "cost": 3,
    "ability": {
      "name": "Powder Kegs",
      "description": "Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies.",
      "type": "Passive",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [{ "type": "Damage", "value": "200 / 325 / 450" }]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.6,
        "dps": 33,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "morellonomicon"
    ]
  },
  "Garen": {
    "id": "86",
    "key": "Garen",
    "name": "Garen",
    "origin": ["Noble"],
    "class": ["Knight"],
    "cost": 1,
    "ability": {
      "name": "Judgement",
      "description": "Garen rapidly spins his sword around his body, becoming immune to magic damage and dealing damage to nearby enemies.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Total Damage", "value": "450 / 585 / 720" },
        { "type": "Damage per Tick", "value": "50 / 65 / 80" },
        { "type": "Total Ticks", "value": "9" },
        { "type": "Spin Duration", "value": "4s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.55,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "warmogsarmor",
      "phantomdancer"
    ]
  },
  "Gnar": {
    "id": "150",
    "key": "Gnar",
    "name": "Gnar",
    "origin": ["Wild", "Yordle"],
    "class": ["Shapeshifter"],
    "cost": 4,
    "ability": {
      "name": "GNAR!",
      "description": "Gnar transforms and jumps behind the furthest enemy, damaging and shoving enemies backwards.",
      "type": "Active",
      "manaCost": 125,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "200 / 300 / 400" },
        { "type": "CC Duration", "value": "2s" },
        { "type": "Knockback Distance", "value": "2 hexes" },
        { "type": "Transform Duration", "value": "60s" },
        { "type": "Transform HP", "value": "300 / 600 / 900" },
        { "type": "Transform Damage", "value": "30 / 60 / 90" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.7,
        "dps": 31,
        "range": 2
      },
      "defense": {
        "health": 850,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "frozenheart",
      "warmogsarmor",
      "phantomdancer"
    ]
  },
  "Graves": {
    "id": "104",
    "key": "Graves",
    "name": "Graves",
    "origin": ["Pirate"],
    "class": ["Gunslinger"],
    "cost": 1,
    "ability": {
      "name": "Buckshot",
      "description": "Graves' attacks deal splash damage to nearby enemies.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [{ "type": "Damage Multiplier", "value": "0.1 / 0.2 / 0.3" }]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.5,
        "dps": 28,
        "range": 1
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "redbuff",
      "titanichydra",
      "warmogsarmor"
    ]
  },
  "Karthus": {
    "id": "30",
    "key": "Karthus",
    "name": "Karthus",
    "origin": ["Phantom"],
    "class": ["Sorcerer"],
    "cost": 5,
    "ability": {
      "name": "Requiem",
      "description": "Karthus deals damage to a number of random enemies after a long channel.",
      "type": "Active",
      "manaCost": 85,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "350 / 600 / 850" },
        { "type": "Targets", "value": "4 / 7 / 10" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 3
      },
      "defense": {
        "health": 850,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Kassadin": {
    "id": "38",
    "key": "Kassadin",
    "name": "Kassadin",
    "origin": ["Void"],
    "class": ["Sorcerer"],
    "cost": 1,
    "ability": {
      "name": "Nether Blade",
      "description": "Kassadin's attacks steal mana from enemies, converting it into a shield.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [
        { "type": "Shield Duration", "value": "4s" },
        { "type": "Mana Steal", "value": "20 / 40 / 60" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.65,
        "dps": 29,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Katarina": {
    "id": "55",
    "key": "Katarina",
    "name": "Katarina",
    "origin": ["Imperial"],
    "class": ["Assassin"],
    "cost": 3,
    "ability": {
      "name": "Death Lotus",
      "description": "Katarina channels and fires daggers at a number of nearby enemies, dealing damage and reducing healing.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "600 / 900 / 1200" },
        { "type": "Channel Duration", "value": "2.5s" },
        { "type": "Grievous Wounds Duration", "value": "3s" },
        { "type": "Targets", "value": "3 / 5 / 7" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 450,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Kayle": {
    "id": "10",
    "key": "Kayle",
    "name": "Kayle",
    "origin": ["Noble"],
    "class": ["Knight"],
    "cost": 5,
    "ability": {
      "name": "Divine Judgement",
      "description": "Kayle shields an ally, making them immune to damage.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "500 / 800 / 1100" },
        { "type": "Shield Duration", "value": "2s / 3s / 4s" },
        { "type": "Extra Targets", "value": "0 / 1 / 2" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 1.1,
        "dps": 66,
        "range": 3
      },
      "defense": {
        "health": 800,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "guinsoosrageblade",
      "seraphsembrace"
    ]
  },
  "Kennen": {
    "id": "85",
    "key": "Kennen",
    "name": "Kennen",
    "origin": ["Ninja", "Yordle"],
    "class": ["Elementalist"],
    "cost": 3,
    "ability": {
      "name": "Slicing Maelstrom",
      "description": "Kennen summons a storm around him, dealing damage and stunning enemies inside of it.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        { "type": "Damage", "value": "300 / 480 / 660" },
        { "type": "Damage per Tick", "value": "50 / 80 / 110" },
        { "type": "Stun Duration", "value": "1.5s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 70,
        "attackSpeed": 0.65,
        "dps": 36,
        "range": 2
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Khazix": {
    "id": "121",
    "key": "Khazix",
    "name": "Kha'Zix",
    "origin": ["Void"],
    "class": ["Assassin"],
    "cost": 1,
    "ability": {
      "name": "Taste their Fear",
      "description": "Kha'Zix slashes the closest enemy, dealing bonus damage to enemies that are alone.",
      "type": "Active",
      "manaCost": 50,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "150 / 250 / 350" },
        { "type": "Isolation Damage", "value": "400 / 600 / 800" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "infinityedge",
      "phantomdancer"
    ]
  },
  "Kindred": {
    "id": "203",
    "key": "Kindred",
    "name": "Kindred",
    "origin": ["Phantom"],
    "class": ["Ranger"],
    "cost": 4,
    "ability": {
      "name": "Lamb's Respite",
      "description": "Kindred creates a zone around herself that prevents allies from dying.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        { "type": "Duration", "value": "4s / 5s / 6s" },
        { "type": "Minimum HP", "value": "300 / 600 / 900" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.65,
        "dps": 36,
        "range": 3
      },
      "defense": {
        "health": 600,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "infinityedge"
    ]
  },
  "Leona": {
    "id": "89",
    "key": "Leona",
    "name": "Leona",
    "origin": ["Noble"],
    "class": ["Guardian"],
    "cost": 4,
    "ability": {
      "name": "Solar Flare",
      "description": "Leona calls down a solar ray, stunning enemies in the center and dealing damage to enemies inside it.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        { "type": "Damage", "value": "175 / 250 / 325" },
        { "type": "Stun Duration", "value": "5s / 8s / 11s" },
        { "type": "Stun Delay", "value": "0.625s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.55,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 750,
        "armor": 55,
        "magicResist": 20
      }
    },
    "items": [
      "zekesherald",
      "frozenheart"
    ]
  },
  "Lissandra": {
    "id": "127",
    "key": "Lissandra",
    "name": "Lissandra",
    "origin": ["Glacial"],
    "class": ["Elementalist"],
    "cost": 2,
    "ability": {
      "name": "Frozen Tomb",
      "description": "Lissandra encases the target in ice, dealing damage to nearby enemies. Below half HP, Lissandra instead encases herself, becoming untargetable.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "225 / 300 / 375" },
        { "type": "Enemy Stun Duration", "value": "1.5s" },
        { "type": "Untargetable Duration", "value": "2s" },
        { "type": "Slow Duration", "value": "3s" },
        { "type": "Slow Field Duration", "value": "3s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.6,
        "dps": 24,
        "range": 3
      },
      "defense": {
        "health": 450,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Lucian": {
    "id": "236",
    "key": "Lucian",
    "name": "Lucian",
    "origin": ["Noble"],
    "class": ["Gunslinger"],
    "cost": 2,
    "ability": {
      "name": "Relentless Pursuit",
      "description": "Lucian dashes away to safety and attacks an enemy twice, once with Attack Damage and once with Spell Damage.",
      "type": "Active",
      "manaCost": 35,
      "manaStart": 0,
      "stats": [
        { "type": "Damage Per Bullet", "value": "25 / 45 / 65" },
        { "type": "Shots", "value": "20 / 25 / 30" },
        { "type": "Duration", "value": "3s" },
        { "type": "Recast Lockout", "value": "0.75" },
        { "type": "% Damage to Minions", "value": "200" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 3
      },
      "defense": {
        "health": 600,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "infinityedge",
      "spearofshojin",
      "rapidfirecannon"
    ]
  },
  "Lulu": {
    "id": "117",
    "key": "Lulu",
    "name": "Lulu",
    "origin": ["Yordle"],
    "class": ["Sorcerer"],
    "cost": 2,
    "ability": {
      "name": "Wild Growth",
      "description": "Lulu grants an ally bonus Health, knocking up enemies near them.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 0,
      "stats": [
        { "type": "Bonus HP", "value": "300 / 475 / 650" },
        { "type": "Extra Targets", "value": "0 / 1 / 2" },
        { "type": "Duration", "value": "6s" },
        { "type": "Knockup Duration", "value": "1.25s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 2
      },
      "defense": {
        "health": 500,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "rabadonsdeathcap",
      "spearofshojin"
    ]
  },
  "MissFortune": {
    "id": "21",
    "key": "MissFortune",
    "name": "Miss Fortune",
    "origin": ["Pirate"],
    "class": ["Gunslinger"],
    "cost": 5,
    "ability": {
      "name": "Bullet Time",
      "description": "Miss Fortune channels and fires several waves of bullets in a cone.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Channel Duration", "value": "3s" },
        { "type": "Total Damage", "value": "800 / 1250 / 1700" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 0.85,
        "dps": 64,
        "range": 3
      },
      "defense": {
        "health": 650,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "guinsoosrageblade",
      "rabadonsdeathcap",
      "morellonomicon"
    ]
  },
  "Mordekaiser": {
    "id": "82",
    "key": "Mordekaiser",
    "name": "Mordekaiser",
    "origin": ["Phantom"],
    "class": ["Knight"],
    "cost": 1,
    "ability": {
      "name": "Obliterate",
      "description": "Mordekaiser slams his mace in front him, dealing damage in a line.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "150 / 250 / 350" },
        { "type": "Start Distance", "value": "2" },
        { "type": "Length", "value": 3 }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 500,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "frozenheart",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Morgana": {
    "id": "25",
    "key": "Morgana",
    "name": "Morgana",
    "origin": ["Demon"],
    "class": ["Sorcerer"],
    "cost": 3,
    "ability": {
      "name": "Soul Shackles",
      "description": "Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        { "type": "Damage", "value": "250 / 350 / 450" },
        { "type": "Chain Duration", "value": "3s" },
        { "type": "Stun Duration", "value": "2s / 4s / 6s" },
        { "type": "Range", "value": "3" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 2
      },
      "defense": {
        "health": 650,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "rabadonsdeathcap",
      "seraphsembrace"
    ]
  },
  "Nidalee": {
    "id": "76",
    "key": "Nidalee",
    "name": "Nidalee",
    "origin": ["Wild"],
    "class": ["Shapeshifter"],
    "cost": 1,
    "ability": {
      "name": "Primal Surge",
      "description": "Nidalee heals herself and the weakest ally, then transforms.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "HoT total heal", "value": "150 / 225 / 600" },
        { "type": "HoT Duration", "value": "6s" },
        { "type": "Transform Damage", "value": "20 / 65 / 120" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.65,
        "dps": 33,
        "range": 3
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "bloodthirster",
      "guinsoosrageblade"
    ]
  },
  "Poppy": {
    "id": "78",
    "key": "Poppy",
    "name": "Poppy",
    "origin": ["Yordle"],
    "class": ["Knight"],
    "cost": 3,
    "ability": {
      "name": "Keeper's Verdict",
      "description": "Poppy brings down her hammer, knocking away nearby enemies.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "300 / 400 / 500" },
        { "type": "Knockback Duration", "value": "1s" },
        { "type": "Stun Duration", "value": "1.5s / 2.5s / 3.5s" },
        { "type": "Delay", "value": "0.75s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.5,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 800,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "frozenheart",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Pyke": {
    "id": "555",
    "key": "Pyke",
    "name": "Pyke",
    "origin": ["Pirate"],
    "class": ["Assassin"],
    "cost": 2,
    "ability": {
      "name": "Phantom Undertow",
      "description": "Pyke dashes behind the furthest enemy, creating an afterimage that stuns enemies it passes through.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 50,
      "stats": [
        { "type": "Damage", "value": "150 / 200 / 250" },
        { "type": "Stun Duration", "value": "2s / 2.5s / 3s" },
        { "type": "Stun Delay", "value": "1" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 0.6,
        "dps": 36,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "rabadonsdeathcap",
      "guinsoosrageblade"
    ]
  },
  "RekSai": {
    "id": "421",
    "key": "RekSai",
    "name": "Rek'Sai",
    "origin": ["Void"],
    "class": ["Brawler"],
    "cost": 2,
    "ability": {
      "name": "Burrow",
      "description": "Rek'Sai burrows for a short duration becoming untargetable and healing. When Rek'Sai unburrows she deals damage and knocks up the closest enemy.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "150 / 200 / 250" },
        { "type": "Heal Amount", "value": "300 / 400 / 500" },
        { "type": "Heal Tick Rate", "value": "0.5s" },
        { "type": "Burrow Duration", "value": "2s" },
        { "type": "Knockup Duration", "value": "1s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 40,
        "attackSpeed": 0.65,
        "dps": 26,
        "range": 1
      },
      "defense": {
        "health": 650,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "frozenheart",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Rengar": {
    "id": "107",
    "key": "Rengar",
    "name": "Rengar",
    "origin": ["Wild"],
    "class": ["Assassin"],
    "cost": 3,
    "ability": {
      "name": "Savagery",
      "description": "Rengar leaps to the weakest enemy and stabs them.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Damage Multiplier", "value": "2.1 / 3.2 / 4.3" },
        { "type": "Attack Speed", "value": "300 / 400 / 500" },
        { "type": "Crit", "value": "0.25" },
        { "type": "Buff Duration", "value": "6s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 55,
        "attackSpeed": 0.55,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "infinityedge",
      "guinsoosrageblade",
      "rapidfirecannon"
    ]
  },
  "Sejuani": {
    "id": "113",
    "key": "Sejuani",
    "name": "Sejuani",
    "origin": ["Glacial"],
    "class": ["Knight"],
    "cost": 4,
    "ability": {
      "name": "Glacial Prison",
      "description": "Sejuani creates a large glacial storm, stunning enemies within it after a short delay.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        { "type": "Damage", "value": "100 / 175 / 250" },
        { "type": "Stun Duration", "value": "3s / 4s / 5s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.55,
        "dps": 25,
        "range": 1
      },
      "defense": {
        "health": 850,
        "armor": 35,
        "magicResist": 25
      }
    },
    "items": [
      "frozenheart",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Shen": {
    "id": "98",
    "key": "Shen",
    "name": "Shen",
    "origin": ["Ninja"],
    "class": ["Blademaster"],
    "cost": 2,
    "ability": {
      "name": "Spirit's Refuge",
      "description": "Shen creates a zone around himself, allowing allies to dodge all attacks.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [{ "type": "Zone Duration", "value": "3s / 4s / 5s" }]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.6,
        "dps": 39,
        "range": 1
      },
      "defense": {
        "health": 650,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "thornmail",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Shyvana": {
    "id": "102",
    "key": "Shyvana",
    "name": "Shyvana",
    "origin": ["Dragon"],
    "class": ["Shapeshifter"],
    "cost": 3,
    "ability": {
      "name": "Dragon's Descent",
      "description": "Shyvana dashes away and transforms. While transformed, Shyvana's attacks become ranged and light the ground on fire.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Transform Damage", "value": "50 / 90 / 130" },
        { "type": "Burn Damage", "value": "200 / 300 / 400" },
        { "type": "Burn Duration", "value": "3s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.65,
        "dps": 33,
        "range": 4
      },
      "defense": {
        "health": 550,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "frozenheart",
      "phantomdancer",
      "warmogsarmor"
    ]
  },
  "Swain": {
    "id": "50",
    "key": "Swain",
    "name": "Swain",
    "origin": ["Imperial", "Demon"],
    "class": ["Shapeshifter"],
    "cost": 5,
    "ability": {
      "name": "Demonflare",
      "description": "Swain transforms, draining health from all nearby enemies.",
      "type": "Active",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Soulflare Damage", "value": "300 / 600 / 900" },
        { "type": "Damage Per Tick", "value": "50 / 100 / 150" },
        { "type": "Heal Per Tick", "value": "50 / 90 / 130" },
        { "type": "Transform Duration", "value": "6s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 0.65,
        "dps": 42,
        "range": 2
      },
      "defense": {
        "health": 850,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "morellonomicon",
      "phantomdancer",
      "dragonsclaw"
    ]
  },
  "Tristana": {
    "id": "18",
    "key": "Tristana",
    "name": "Tristana",
    "origin": ["Yordle"],
    "class": ["Gunslinger"],
    "cost": 1,
    "ability": {
      "name": "Explosive Charge",
      "description": "Tristana places a bomb on her current target that detonates after 4 attacks, damaging nearby enemies.",
      "type": "Active",
      "manaCost": 50,
      "manaStart": 0,
      "stats": [
        { "type": "Charge Damage", "value": "150 / 225 / 300" },
        { "type": "Charge Duration", "value": "4s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.7,
        "dps": 35,
        "range": 4
      },
      "defense": {
        "health": 500,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "runaanshurricane",
      "guinsoosrageblade"
    ]
  },
  "Varus": {
    "id": "110",
    "key": "Varus",
    "name": "Varus",
    "origin": ["Demon"],
    "class": ["Ranger"],
    "cost": 2,
    "ability": {
      "name": "Piercing Arrow",
      "description": "Varus charges and fires an arrow, dealing damage to all enemies in a line.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "400 / 600 / 800" },
        { "type": "Cast Time", "value": "1.5s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.7,
        "dps": 35,
        "range": 4
      },
      "defense": {
        "health": 500,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "rabadonsdeathcap",
      "guinsoosrageblade"
    ]
  },
  "Vayne": {
    "id": "67",
    "key": "Vayne",
    "name": "Vayne",
    "origin": ["Noble"],
    "class": ["Ranger"],
    "cost": 1,
    "ability": {
      "name": "Silver Bolts",
      "description": "Vayne deals bonus true damage every third attack based on the enemy's maximum health.",
      "type": "Passive",
      "manaCost": null,
      "manaStart": null,
      "stats": [{ "type": "Max Health Damage", "value": "8% / 10% / 12%" }]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.6,
        "dps": 27,
        "range": 3
      },
      "defense": {
        "health": 550,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "rapidfirecannon",
      "runaanshurricane",
      "guinsoosrageblade"
    ]
  },
  "Veigar": {
    "id": "45",
    "key": "Veigar",
    "name": "Veigar",
    "origin": ["Yordle"],
    "class": ["Sorcerer"],
    "cost": 3,
    "ability": {
      "name": "Primordial Burst",
      "description": "Veigar blasts an enemy with magical energy. This spell instantly kills if the enemy is a lower star level than Veigar.",
      "type": "Active",
      "manaCost": 85,
      "manaStart": 0,
      "stats": [{ "type": "Damage", "value": "300 / 500 / 700" }]
    },
    "stats": {
      "offense": {
        "damage": 45,
        "attackSpeed": 0.55,
        "dps": 25,
        "range": 3
      },
      "defense": {
        "health": 450,
        "armor": 20,
        "magicResist": 20
      }
    },
    "items": [
      "spearofshojin",
      "rabadonsdeathcap",
      "guinsoosrageblade"
    ]
  },
  "Volibear": {
    "id": "106",
    "key": "Volibear",
    "name": "Volibear",
    "origin": ["Glacial"],
    "class": ["Brawler"],
    "cost": 3,
    "ability": {
      "name": "Thunder Claws",
      "description": "Volibear's attacks bounce between enemies.",
      "type": "Passive",
      "manaCost": 100,
      "manaStart": 0,
      "stats": [
        { "type": "Chain Damage Multiplier", "value": "80% / 90% / 100%" },
        { "type": "Bounces", "value": "3 / 4 / 5" },
        { "type": "Buff Duration", "value": "20s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 75,
        "attackSpeed": 0.55,
        "dps": 38,
        "range": 1
      },
      "defense": {
        "health": 650,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "warmogsarmor",
      "phantomdancer"
    ]
  },
  "Warwick": {
    "id": "19",
    "key": "Warwick",
    "name": "Warwick",
    "origin": ["Wild"],
    "class": ["Brawler"],
    "cost": 1,
    "ability": {
      "name": "Infinite Duress",
      "description": "Warwick pounces onto the lowest health enemy, stunning and damaging them.",
      "type": "Active",
      "manaCost": 150,
      "manaStart": 50,
      "stats": [
        { "type": "Damage", "value": "150 / 225 / 300" },
        { "type": "Hits", "value": "3" },
        { "type": "Duration", "value": "1.5s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 50,
        "attackSpeed": 0.6,
        "dps": 30,
        "range": 1
      },
      "defense": {
        "health": 600,
        "armor": 30,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "warmogsarmor",
      "phantomdancer"
    ]
  },
  "Yasuo": {
    "id": "157",
    "key": "Yasuo",
    "name": "Yasuo",
    "origin": ["Exile"],
    "class": ["Blademaster"],
    "cost": 5,
    "ability": {
      "name": "Steel Tempest",
      "description": "Yasuo stabs forward dealing damage. On third cast, Yasuo launches a tornado dealing damage and knocking up enemies in a line.",
      "type": "Active",
      "manaCost": 25,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "150 / 250 / 350" },
        { "type": "Range", "value": "2" },
        { "type": "Empowered Range", "value": "4 hexes" },
        { "type": "Knockup Duration", "value": "1.25s" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 65,
        "attackSpeed": 1,
        "dps": 65,
        "range": 1
      },
      "defense": {
        "health": 700,
        "armor": 35,
        "magicResist": 20
      }
    },
    "items": [
      "titanichydra",
      "warmogsarmor",
      "phantomdancer"
    ]
  },
  "Zed": {
    "id": "238",
    "key": "Zed",
    "name": "Zed",
    "origin": ["Ninja"],
    "class": ["Assassin"],
    "cost": 2,
    "ability": {
      "name": "Razor Shuriken",
      "description": "Zed fires a shuriken in a line, damaging enemies it passes through.",
      "type": "Active",
      "manaCost": 75,
      "manaStart": 0,
      "stats": [
        { "type": "Damage", "value": "200 / 300 / 400" },
        { "type": "Range", "value": "4" }
      ]
    },
    "stats": {
      "offense": {
        "damage": 60,
        "attackSpeed": 0.65,
        "dps": 39,
        "range": 1
      },
      "defense": {
        "health": 500,
        "armor": 25,
        "magicResist": 20
      }
    },
    "items": [
      "infinityedge",
      "bloodthirster",
      "rapidfirecannon"
    ]
  }
}


export default champions;