module.exports = {
    coded : "2019-05-05",

    name : "ready",
    description : "This is the \"Ready Event\" handler",
    usage : "`bot.events.get(\"ready\").execute(bot)`",

    execute(bot){

        srpg = bot.srpg;

        console.log("---==☆ Client ☆==---\n");

        /*let users = 0;
        let bots = 0;

        bot.users.cache.forEach(user => {
            if(user.bot){
                bots++
            };
        });

        bot.guilds.cache.forEach(g => {
            users+=g.memberCount;
        });

        users = users - bots;*/


        let users = bot.users.cache.size;
        let bots = null;
        let rifts = 0;
        let partners = 0;

        bot.settings.g.forEach(g => {
            if(g.partnered) partners++
            if(g.rift) rifts++
        });


        let log = [];

        log += `    Name : ${bot.user.tag}`;
        log += `\n      ID : ${bot.user.id}`;
        log += `\n   Alpha : ${bot.system.alpha}`;

        log += `\n\n  Guilds : ${bot.guilds.cache.size}`;
        log += `\nSettings : ${bot.settings.g.size}`;
        log += `\n   Rifts : ${rifts}`;
        log += `\n   Users : ${users}`;
        log += `\nSettings : ${bot.settings.u.size}`;
        log += `\n    Bots : ${bots}`;

        log += `\n\n  Owners : ${bot.support.owners.length}`;
        log += `\n Support : ${bot.support.users.length}`;
        log += `\nPartners : ${partners}`;


        /*
        log += `\n\nShadow's Role Play Game`;
        log += `\n Version : ${srpg.version}`;
        log += `\nCommands : ${srpg.cmds.general.size}`;
        log += `\n\n   Users : n/a`;
        log += `\nFactions : n/a`;
        */

        console.log(log);
        console.log("\n---==☆ End Client ☆==---\n");


        e = new discord.MessageEmbed()
            .setColor(bot.defaults.color)
            .setAuthor("Boot Log", bot.user.avatarURL)
            .setDescription(`\`\`\`css\n---==☆ Client ☆==---\n\n${log}\n\n---==☆ End Client ☆==---\`\`\``)

        bot.support.shadowServers.forEach(guild => {
            ch = bot.channels.cache.get(guild.support);
            ch.send(e);
        });





      //Set bot Presence
        /*if(bot.system.alpha) bot.user.setPresence({
            activtiy: {name:`as an Alpha.`},
            status: 'idle'
        });*/
        if(bot.system.alpha){
            //bot.user.setStatus('idle');
            //bot.user.setPresence(`in Dev Mode. | ${bot.prefix.global}help`, { type: "Streaming", url: 'https://www.twitch.tv/scion_spy'});

            bot.user.setPresence({
                status: "idle",
                activity: {
                    type: "STREAMING",
                    name: `in Dev Mode. | ${bot.prefix.global}help`,
                    url: "https://www.twitch.tv/scion_spy"
                }
            });
        }else{
            //bot.user.setStatus('dnd');
            //bot.user.setPresence(`in "${bot.config.prefixes.global}help"`, {type: "playing"});
            bot.user.setPresence({
                status: "dnd",
                activity: {
                    type: "PLAYING",
                    name: `in "${bot.config.prefixes.global}help"`
                }
            });
        };

        /**
         * [0] PLAYING
         * • {type: ' '}
         * [1] STREAMING
         * • {type: ' ', url: ' '}
         * [2] LISTENING
         * • {type: ' '}
         * [3] WATCHING
         * • {type: ' '}
         * [4] CUSTOM_STATUS
         * • {}
         * [5] COMPETING
         * •
        */

        //bot.relay.connect(null, 12784, bot);
        bot.functions.get("_").init({ bot:bot });
    },
};
