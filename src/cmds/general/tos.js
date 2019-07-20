roles = {
    "town" : ["Jailor", "Veteran", "Vampire Hunter^", "Vigilante", "Investigator", "Lookout", "Sheriff", "Spy", "Bodyguard", "Doctor", "Escort", "Mayor", "Medium", "Retributionist", "Transporter"],
    "neut" : ["Amnesiac^", "Survivor^", "Vampire^", "Executioner", "Jester", "Witch", "Arsonist", "SerialKiller", "Werewolf"],
    "mafia" : ["Godfather", "Mafioso", "Blackmailer", "Consigliere", "Consort", "Disguiser", "Forger", "Framer", "Janitor"],
};


module.exports = {
    coded : '2019-07-19',

    name : "tos",
    usage : "roles",
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
                return message.channel.send(`---==☆ Town ☆==---\n• ${roles.town.join(',\n• ')}\n\n---==☆ Nuetral ☆==---\n• ${roles.neut.join(',\n• ')}\n\n---==☆ Mafia ☆==---\n• ${roles.mafia.join(',\n• ')}`, {code:'css'});
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
                role = "transporter";
            break;











            case("amnesiac"):
            case("amne"):
                role = "amnesiac";
            break;
            case("survivor"):
            case("surv"):
                role = "survivor";
            break;
            case("vampire"):
            case("vamp"):
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
                role = "mafioso";
            break;
            case("blackmailer"):
            case("bmr"):
            case("bm"):
                role = "blacklmailer";
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





        message.channel.send(bot.tos.roleCards[role]);
    },
};
