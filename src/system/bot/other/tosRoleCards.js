exports.roleCards = {
    /**
     * Town
     * * Tk - Killing
     * * * Jailor
     * * * Veteran
     * * * Vampire Hunter
     * * * Vigilante
     * * Ti - Investigative
     * * * Investigator
     * * * Lookout
     * * * Sheriff
     * * * Spy
     * * Tp - Protective
     * * * Bodyguard
     * * * Doctor
     * * Ts - Support
     * * * Escort
     * * * Mayor
     * * * Medium
     * * * Retributionist
     * * * Transporter
     * Neutral
     * * Nb - Benign
     * * * Amnesiac
     * * * Survivor
     * * Nc - Chaos
     * * * Vampire
     * * Ne - Evil
     * * * Executioner
     * * * Jester
     * * * Witch
     * * Nk - Killing
     * * * Arsonist
     * * * Serial Killer
     * * * Werewolf
     *
     * Mafia
     * * Mk - Killing
     * * * Godfather
     * * * Mafioso
     * * Ms - Support
     * * * Blackmailer
     * * * Consigliere
     * * * Consort
     * * Md - Deception
     * * * Disguiser
     * * * Forger
     * * * Framer
     * * * Janitor
    */


    /**
     * T | Town
     * * Tk - Killing
     * * Ti - Investigative
     * * Tp - Protective
     * * Ts - Support
    */


    /**
     * Tk | Town (Killing)
     * * Jailor
     * * Veteran
     * * Vampire Hunter
     * * Vigilante
     */


    "jailor" : {
        "name" : "Jailor",
        "alias" : "Jailor",
        "alignment" : "Tk | Town (Killing)",
        "canVisit" : false,
        "unique" : true,

        "attack" : "Unstoppable",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "You may chose one persion during the day to Jail for the night.",
        "attributes" : ["-You may anonymously talk with your prisoner.", "-You can chose to attack your prisoner.", "The jailed target cannot preform their night ability."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Spy, Bm, Jailor",
            "other" : "Jailor",
        },
    },


    "veteran" : {
        "name" : "Veteran",
        "alias" : "Vet",
        "alignment" : "Tk | Town (Killing)",
        "canVisit" : false,
        "unique" : true,

        "attack" : "Powerful",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Decide if you will go on alert.",
        "attributes" : ["-While on alert you gain Basic Defence.", "-While on alert, you attack anyone who visits you.", "-You can only go on alert 3 times.", "-You cannot be roleblocked."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Vig, Vet, Mafi",
            "other" : "Veteran",
        },
    },


    "vampirehunter" : {
        "name" : "Vampire Hunter",
        "alias" : "VH",
        "alignment" : "Tk | Town (Killing)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "Basic",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Check for Vampires each night.",
        "attributes" : ["-If you find a Vampire you will attack them.", "-If a Vampire visits you, you will attack them.", "-You can hear Vampires at night.", "-If all the Vampires die you will become a Vigilante."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Surv, VH, Amne",
            "other" : "Vampire Hunter",
        },
    },


    "vigilante" : {
        "name" : "Vigilante",
        "alias" : "Vig",
        "alignment" : "Tk | Town (Killing)",
        "canVisit" : true,
        "unique" : true,

        "attack" : "Basic",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Chose to take justice into your own hands and shoot someone.",
        "attributes" : ["-If you shoot another Town member you will commut suicide over the guilt.", "-You can only shoot your gun 3 times."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Vig, Vet, Mafi",
            "other" : "Vigilante",
        },
    },


    /**
     * Ti | Town (Investigative)
     * * Investigator
     * * Lookout
     * * Sheriff
     * * Spy
    */


    "investigator" : {
        "name" : "Investigator",
        "alias" : "invest",
        "alignment" : "Ti | Town (Investigative)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Investigate one person each night for a clue to their role.",
        "attributes" : ["-None"],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Inv, May, Consi",
            "other" : "Investigator",
        },
    },


    "lookout" : {
        "name" : "Lookout",
        "alias" : "Lo",
        "alignment" : "Ti | Town (Investigative)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "Watch one person at night to see who visits them.",
        "attributes" : ["-None"],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Lo, For, Witch",
            "other" : "Lookout",
        },
    },


    "sheriff" : {
        "name" : "Sheriff",
        "alias" : "Sh | Sher",
        "alignment" : "Ti | Town (Investigative)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "",
        "abilities" : "-Interrogate one person each night for suspicious activity.",
        "attributes" : ["-You know if your target is suspicious."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Sh, Exe, Ww",
            "other" : "Sheriff",
        },
    },


    "spy" : {
        "name" : "Spy",
        "alias" : "Spy",
        "alignment" : "Ti | Town (Investigative)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "",
        "abilities" : "You may bug a players house to see what happens to them that night.",
        "attributes" : ["-You will know who the Mafia and Coven visit each night."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Spy, Bm, Jailor",
            "other" : "Spy",
        },
    },


    /**
     * Tp | Town (Protective)
     * * Bodyguard
     * * Doctor
    */


    "bodyguard" : {
        "name" : "Bodyguard",
        "alias" : "BG",
        "alignment" : "Tp | Town (Protective)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "Powerful",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Protect a player from direct attacks at night.",
        "attributes" : ["-If your target is directly attacked or is the victim of a harmful visit, you and the visitor will fight.", "-If you successfully protect someone you can still be Healed"],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Bg, Gf, Arso",
            "other" : "Bodyguard",
        },
    },


    "doctor" : {
        "name" : "Doctor",
        "alias" : "Doc",
        "alignment" : "Tp | Town (Protective)",
        "canVisit" : false,
        "unique" : false,

        "attack" : "None",
        "defence" : "Powerful",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Heal one person each night granting them Powerful defence.",
        "attributes" : ["-You may only Heal yourself once.", "-You will know if your target is attacked."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Doc, Disg, Sk",
            "other" : "Doctor",
        },
    },


    /**
     * Ts | Town (Support)
     * * Escort
     * * Mayor
     * * Medium
     * * Retributionist
     * * Transporter
    */


    "escort" : {
        "name" : "Escort",
        "alias" : "Esc",
        "alignment" : "Ts | Town (Support)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Disctract someone each night.",
        "attributes" : ["-Distraction blocks you target from using their ability.", "-You cannot be role blocked."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Exc, Tran, Conso",
            "other" : "Escort",
        },
    },


    "mayor" : {
        "name" : "Mayor",
        "alias" : "May",
        "alignment" : "Ts | Town (Support)",
        "canVisit" : false,
        "unique" : true,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-You may reveal yourself as the Mayor of the Town.",
        "attributes" : ["-Once you have revealed yourself as Mayor your vote counts as 3 votes.", "-You may not be Healed once you have revealed yourself.", "-Once revealed you can't whisper, or be wispered to."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Inv, May, Consi",
            "other" : "Mayor",
        },
    },


    "medium" : {
        "name" : "Medium",
        "alias" : "Med",
        "alignment" : "Ts | Town (Support)",
        "canVisit" : false,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-When dead speak to a living person at night.",
        "attributes" : ["-You will speak to the dead anonymously each night you are alive.", "-You may only speak to a living person once."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Med, Jan, Ret",
            "other" : "Retributionist",
        },
    },


    "retributionist" : {
        "name" : "Retributionist",
        "alias" : "Retri | Ret",
        "alignment" : "Ts | Town (Support)",
        "canVisit" : false,
        "unique" : true,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Lynch every Crimial and Evildoer.",
        "abilities" : "-You may revive a dead Town member.",
        "attributes" : ["-You may only resurrect one person."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Med, Jan, Ret",
            "other" : "Retributionist",
        },
    },


    "transporter" : {
        "name" : "Transporter",
        "alias" : "Tran",
        "alignment" : "Ts | Town (Support)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Lynch every Criminal and Evildoer.",
        "abilities" : "-Choose two people to transport at night.",
        "attributes" : ["-Transporting two people swaps all targets against them.", "-You may transport yourself.", "-Your targets will know they were transported."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Esc, Tran, Conso",
            "other" : "Transporter",
        },
    },


    /**
     * N | Neutral
     * * Nb - Benign
     * * Nc - Chaos
     * * Ne - Evil
     * * Nk - Killing
    */


    /**
     * Nb | Neutral (Benign)
     * * Amnesiac
     * * Survivor
    */


    "amnesiac" : {
        "name" : "Amnesiac",
        "alias" : "Amne",
        "alignment" : "Nb | Neutral (Benign)",
        "canVisit" : false,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Remember who you were and complete that roles goal.",
        "abilities" : "-Remember who you are by selecting a graveyard role.",
        "attributes" : ["-When you choose a role it will be revealed to all the players in the game.", "-You can't choose a unique town role."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Surv, VH, Amne",
            "other" : "Amnesiac",
        },
    },


    "survivor" : {
        "name" : "Survivor",
        "alias" : "Surv",
        "alignment" : "Nb | Neutral (Benign)",
        "canVisit" : false,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Live until the end of the game.",
        "abilities" : "-Put on a bulletprrof vest at night.",
        "attributes" : ["-Putting on a bulletprrof vest gives you Basicdefense.", "-You can only use the bulletprrof vest 4 times."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Surv, VH, Amne",
            "other" : "Survivor",
        },
    },


    /**
     * Nc | Neutral (Chaos)
     * * Vampire
    */


    "vampire" : {
        "name" : "Vampire",
        "alias" : "Vamp",
        "alignment" : "Nc | Neutral (Chaos)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Convert everyone that would oppose you.",
        "abilities" : "-Convert others to Vampires at night.",
        "attributes" : ["-Vampires vote at night to bite a target.", "-The youngest Vampire will visit the target at night."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Fram, Vamp, Jest",
            "other" : "Vampire",
        },
    },


    /**
     * Ne | Neutral (Evil)
     * * Executioner
     * * Jester
     * * Witch
    */


    "executioner" : {
        "name" : "Executioner",
        "alias" : "Exe",
        "alignment" : "Ne | Neutral (Evil)",
        "canVisit" : false,
        "unique" : false,

        "attack" : "None",
        "defence" : "Basic",

        "goal" : "Get your targer lynched at any cost.",
        "abilities" : "-Trick the Town into lynching your target.",
        "attributes" : ["-Your target is [Player_Name]", "-If your target is killed at night you will become a Jester."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Sh, Exe, Ww",
            "other" : "Executioner",
        },
    },


    "jester" : {
        "name" : "Jester",
        "alias" : "Jest",
        "alignment" : "Ne | Neutral (Evil)",
        "canVisit" : false,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Get yourself lynched by any means necessary.",
        "abilities" : "-Trick the town ito voting against you.",
        "attributes" : ["-If you are lynched you will attack one of your guilty voters the following night with an Unstoppable attack."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Fram, Vamp, Jest",
            "other" : "Jester",
        },
    },


    "witch" : {
        "name" : "Witch",
        "alias" : "Witch",
        "alignment" : "Ne | Neutral (Evil)",
        "canVisit" : true,
        "unique" : true,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Survive to see the town lose the game.",
        "abilities" : "-Control someone each night.",
        "attributes" : ["-You can force people to target themselves.", "-Your victim will know they are being controlled.", "-You have a mystical barrier that grants you Basic defence until you are attacked.", "-You will know the role of the player you Control."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Lo, Forg, Witch",
            "other" : "Witch",
        },
    },


    /**
     * Nk - Neutral (Killing)
     * * Arsonist
     * * Serial Killer
     * * Werewolf
    */


    "arsonist" : {
        "name" : "Arsonist",
        "alias" : "Arso | Arson",
        "alignment" : "Nk | Neutral (Killing)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "Unstoppable",
        "defence" : "Basic",

        "goal" : "Live to see everyone burn.",
        "abilities" : "-You may Douse someone in gasaline, or ignite Doused targets.",
        "attributes" : ["-Select yourself to ignite doused people.", "-If you take no action, you will attempt to clean gasoline off yourself."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Bg, Gf, Arso",
            "other" : "Arsonist",
        },
    },


    "serialkillar" : {
        "name" : "Serial Killer",
        "alias" : "Sk",
        "alignment" : "Nk | Neutral (Killing)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "Basic",
        "defence" : "Basic",

        "goal" : "Kill everyone who would oppose you.",
        "abilities" : "-You may choose to attack a player each night.",
        "attributes" : ["-If you are role blocked you will attack the role blocker instead of your target."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Doc, Disg, Sk",
            "other" : "Serial Killer",
        },
    },


    "werewolf" : {
        "name" : "Were Wolf",
        "alias" : "Ww",
        "alignment" : "Nk | Neutral (Killing)",
        "canVisit" : true,
        "unique" : true,

        "attack" : "Powerful",
        "defence" : "Basic",

        "goal" : "Kill everyone who would oppose you.",
        "abilities" : "-Transform into a Werewolf during the full moon.",
        "attributes" : ["-You will Rampage at a players house when you attack."],

        "results" : {
            "sher" : "Odd # Nights: Ns/Gf\n• Full moons: Sus",
            "invest" : "Sh, Exe, Ww",
            "other" : "Werewolf",
        },
    },


    /**
     * M | Mafia
     * * Mk - Killing
     * * Ms - Support
     * * Md - Deception
    */


    /**
     * Mk - Killing
     * * GodFather
     * * Mafioso
    */


    "godfather" : {
        "name" : "Godfather",
        "alias" : "Gf",
        "alignment" : "Mk | Mafia (Killing)",
        "canVisit" : true,
        "unique" : true,

        "attack" : "Basic",
        "defence" : "Basic",

        "goal" : "Kill anyone that would not submit to the Mafia.",
        "abilities" : "-You may chose to attack a player each night.",
        "attributes" : ["-If there is a Mafioso he will attack the target instead of you.", "-You will appear to be a town member to the Sheriff.", "-You can talk with the other Mafia at night."],

        "results" : {
            "sher" : "Ns/Gf",
            "invest" : "Bg, Gf, Arso",
            "other" : "Godfather",
        },
    },


    "mafioso" : {
        "name" : "Mafioso",
        "alias" : "Mafi",
        "alignment" : "Mk | Mafia (Killing)",
        "canVisit" : true,
        "unique" : true,

        "attack" : "Basic",
        "defence" : "None",

        "goal" : "Kill anyone that will not submit to the Mafia.",
        "abilities" : "-Carry out the Godfather's orders.",
        "attributes" : ["-You can attack if the Godfather doesn't give you orders.", "-If the Godfather dies you will become the next Godfather.", "-You can talk with the other Mafia at night."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Vig, Vet, Mafi",
            "other" : "Mafioso",
        },
    },


    /**
     * Ms | Mafia (Support)
     * * Blackmailer
     * * Consigliere
     * * Consort
    */


    "blackmailer" : {
        "name" : "Blackmailer",
        "alias" : "Bm",
        "alignment" : "Ms | Mafia (Support)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Kill anyone that will not submit to the Mafia.",
        "abilities" : "-Chose one person each night to blackmail.",
        "attributes" : ["-Blackmailed targets cannot talk during the day.", "-You can hear private messages.", "-If there are no kill capable Mafia roles left you will become a Mafioso.", "-Yopu can talk with the other Mafia at night."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Spy, Bm, Jailer",
            "other" : "Blackmailer",
        },
    },


    "consigliere" : {
        "name" : "Consigliere",
        "alias" : "Consi",
        "alignment" : "Ms | Mafia (Support)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Kill anoyone who will not submit to the Mafia.",
        "abilities" : "-Check one person for their exact role each night.",
        "attributes" : ["-If there are no kill capable Mafia roles left you will become a Mafioso.", "-You can talk with the other Mafia at night."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Inv, May, Consi",
            "other" : "Consigliere",
        },
    },


    "consort" : {
        "name" : "Consort",
        "alias" : "Conso",
        "alignment" : "Ms | Mafia (Support)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Kill anoyone who will not submit to the Mafia.",
        "abilities" : "Distract someone each night.",
        "attributes" : ["-Distraction blocks you target from using their role's night ability.", "-If there are no kill capable Mafia roles left you will become a Mafioso.", "-You can talk with the other Mafia at night."],

        "results" : {
            "sher" : "Sus",
            "invest" : "",
            "other" : "",
        },
    },


    /**
     * Md | Mafia (Deception)
     * * Disguiser
     * * Forger
     * * Framer
     * * Janitor
    */


    "disguiser" : {
        "name" : "Disguiser",
        "alias" : "Disg",
        "alignment" : "Md | Mafia (Deception)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Kill anoyone who will not submit to the Mafia.",
        "abilities" : "-Choose a target to disguise yourself as.",
        "attributes" : ["-You will appear to be the role of your target to the investigator.", "-If you are killed you will appear to be the role of your target."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Doc, Disg, Sk",
            "other" : "Disguiser",
        },
    },


    "forger" : {
        "name" : "Forger",
        "alias" : "Forg",
        "alignment" : "Md | Mafia (Deception)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Kill anoyone who will not submit to the Mafia.",
        "abilities" : "-Choose a person and rewrite their last will at night.",
        "attributes" : ["-If your target dies thei last will is replaced with your forgery.", "-You may only preform 3 forgeries."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Lo, Forg, Witch",
            "other" : "Forger",
        },
    },


    "framer" : {
        "name" : "Framer",
        "alias" : "Fram",
        "alignment" : "Md | Mafia (Deception)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Kill anoyone who will not submit to the Mafia.",
        "abilities" : "-Choose someone to frame at night.",
        "attributes" : ["-If your target is investigated they will appear to be a member of the Mafia.", "-If there are no kill capable Mafia roles left you will become a Mafioso."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Fram, Vamp, Jest",
            "other" : "Framer",
        },
    },


    "janitor" : {
        "name" : "Janitor",
        "alias" : "Jani",
        "alignment" : "Md | Mafia (Deception)",
        "canVisit" : true,
        "unique" : false,

        "attack" : "None",
        "defence" : "None",

        "goal" : "Kill anoyone who will not submit to the Mafia.",
        "abilities" : "-Choose a person to clean at night.",
        "attributes" : ["-If your target dies their role and last will won't be revealed to the Town.", "-Only you will see the cleaned targets role and last will.", "-You may only preform 3 cleanings."],

        "results" : {
            "sher" : "Sus",
            "invest" : "Med, Jan, Ret",
            "other" : "Janitor",
        },
    },
};
