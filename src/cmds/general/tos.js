roles = {
    "town" : ["Jailor", "Veteran", "VampireHunter^", "Vigilante", "Investigator", "Lookout", "Sheriff", "Spy", "Bodyguard", "Doctor", "Escort", "Mayor", "Medium", "Retributionist", "Transporter"],
    "neutral" : ["Amnesiac^", "Survivor^", "Vampire^", "Executioner", "Jester", "Witch", "Arsonist", "SerialKiller", "Werewolf"],
    "mafia" : ["Godfather", "Mafioso", "Blackmailer", "Consigliere", "Consort", "Disguiser", "Forger", "Framer", "Janitor"],
};


module.exports = {
    coded : '2019-07-19',

    name : "tos",
    usage : "list",
    description : "Get information on a Town of Salem Role.",

    help : "basic",
    args : true,

    execute(message, args){
        const bot = message.client;
        let prefix = "..";
        if(message.channel.type == "text") prefix = bot.settings.g.get(message.guild.id).prefix;

        target = args.shift().toLowerCase();



        let role = "";

        switch(target){
            case("list"):
                return message.channel.send(`\`${bot.settings.g.get(message.guild.id).prefix}tos <role>\` \`\`\`css\n---==☆ Town ☆==---\n• ${roles.town.join(',\n• ')}\n\n---==☆ Nuetral ☆==---\n• ${roles.neutral.join(',\n• ')}\n\n---==☆ Mafia ☆==---\n• ${roles.mafia.join(',\n• ')}\`\`\``);
            break;
            case("jailor"):
                role = "jailor";
            break;
            case("veteran"):
            case("vet"):
                role = "veteran";
            break;
            case("vampirehunter"):
            case("vamphunter"):
            case("hunter"):
            case("vh"):
                role = "vampirehunter";
            break;
            case("vigilante"):
            case("vigi"):
            case("vig"):
                role = "vigilante";
            break;
            case("investigator"):
            case("invest"):
            case("inv"):
                role = "investigator";
            break;
            case("lookout"):
            case("lo"):
                role = "lookout";
            break;
            case("sheriff"):
            case("sher"):
            case("sh"):
                role = "sheriff";
            break;
            case("spy"):
                role = "spy";
            break;
            case("bodyguard"):
            case("bg"):
                role = "bodyguard";
            break;
            case("doctor"):
            case("doc"):
                role = "doctor";
            break;
            case("escort"):
            case("esc"):
                role = "escort";
            break;
            case("mayor"):
            case("may"):
                role = "mayor";
            break;
            case("medium"):
            case("med"):
                role = "medium";
            break;
            case("retributionist"):
            case("retri"):
            case("ret"):
                role = "retributionist";
            break;
            case("transporter"):
            case("trans"):
            case("trany"):
            case("tran"):
                role = "transporter";
            break;











            case("amnesiac"):
            case("amne"):
            case("amn"):
                role = "amnesiac";
            break;
            case("survivor"):
            case("surv"):
                role = "survivor";
            break;
            case("vampire"):
            case("vamp"):
            case("vam"):
                role = "vampire";
            break;
            case("executioner"):
            case("exe"):
                role = "executioner";
            break;
            case("jester"):
            case("jest"):
                role = "jester";
            break;
            case("witch"):
                role = "witch";
            break;
            case("arsonist"):
            case("arson"):
            case("arso"):
                role = "arsonist";
            break;
            case("serialkiller"):
            case("sk"):
                role = "serialkiller";
            break;
            case("werewolf"):
            case("wolf"):
            case("ww"):
                role = "werewolf";
            break;











            case("godfather"):
            case("gf"):
                role = "godfather";
            break;
            case("mafioso"):
            case("mafi"):
            case("mafi"):
                role = "mafioso";
            break;
            case("blackmailer"):
            case("bmr"):
            case("bm"):
                role = "blackmailer";
            break;
            case("consigliere"):
            case("consig"):
            case("consi"):
                role = "consigliere";
            break;
            case("consort"):
            case("conso"):
                role = "consort";
            break;
            case("disguiser"):
            case("disg"):
                role = "disguiser";
            break;
            case("forger"):
            case("forge"):
            case("forg"):
            case("for"):
            case("fo"):
                role = "forger";
            break;
            case("framer"):
            case("fram"):
            case("fra"):
            case("fr"):
                role = "framer";
            break;
            case("janitor"):
            case("jani"):
            case("jan"):
                role = "janitor";
            break;
            default:
                return message.channel.send(`No role or tag by \`${target}\` was found.\n Try \`${prefix}tos list\``);
        };


        r = bot.tos.roleCards[role];

        if(!r.misc) r.misc = {"color" :"", "image1" :"", "image2" :""};


        if(!r.misc.image1) r.misc.image1 = "https://images-ext-2.discordapp.net/external/TKiNNYnxau8LIENVXG_KRfMy4O7NgPXJjw2kqhrO0Lk/https/fontmeme.com/images/town-of-salem-game-font_m.jpg?width=270&height=270";
        if(!r.misc.image2) r.misc.image2 = "http://images6.fanpop.com/image/photos/40100000/TOS-logo-town-of-salem-40120225-200-200.png";


        if(!r.misc.color){
            let color = "";

            roles.town.some(Role => {if(role == Role.toLowerCase()) return color = "GREEN"});
            roles.neutral.some(Role => {if(role == Role.toLowerCase()) return color = "00ffff"});
            roles.mafia.some(Role => {if(role == Role.toLowerCase()) return color = "ff0000"});

            r.misc.color = color;
        };


        e = new discord.RichEmbed()
          .setAuthor(`${r.name} - ${r.alignment}`, r.misc.image2)
          .setThumbnail(r.misc.image1)
          .setColor(r.misc.color)
          .setDescription(`Atk: **${r.attack}**\nDef: **${r.defence}**`)
          .addField("Results", `• Sh: **${r.results.sher}**\n• Invest: **${r.results.invest}**\n• Other: **${r.results.other}**`,true)
          .addField("Misc", `• Can Visit: **${r.canVisit}**\n• Unique: **${r.unique}**`, true)
          .addField("Abilities", r.abilities)
          .addField("Attributes", r.attributes.join("\n"))
          .setFooter(`Goal: ${r.goal}`)

        message.channel.send(e);
    },
};
