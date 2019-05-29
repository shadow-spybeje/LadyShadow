module.exports = {
    coded : "2019-05-05",

    name : "ready",
    description : "This is the \"Ready Event\" handler",
    usage : "`bot.events.get(\"ready\").execute(bot)`",

    execute(bot){

        //Connect to the SRPG,
        function bootSRPG(){
            const SRPG = require('../../../.././Shadow-RPG').execute();
            bot.srpg = SRPG;
        };

        function logger(){
            srpg = bot.srpg;
            console.log("---==☆ Client ☆==---\n");

            let users = 0;
            let bots = 0;

            bot.users.forEach(user => {
                if(user.bot){
                    bots++
                };
            });

            bot.guilds.forEach(g => {
                users+=g.memberCount;
            });

            users = users - bots;


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

            log += `\n\n  Guilds : ${bot.guilds.size}`;
            log += `\nSettings : ${bot.settings.g.size}`;
            log += `\n   Rifts : ${rifts}`;
            log += `\n   Users : ${users}`;
            log += `\nSettings : ${bot.settings.u.size}`;
            log += `\n    Bots : ${bots}`;

            log += `\n\n  Owners : ${bot.support.owners.length}`;
            log += `\n Support : ${bot.support.users.length}`;
            log += `\nPartners : ${partners}`;


            log += `\n\nShadow's Role Play Game`;
            log += `\n Version : ${srpg.version}`;
            log += `\nCommands : ${srpg.cmds.size}`;
            log += `\n\n   Users : n/a`;
            log += `\nFactions : n/a`;

            console.log(log);
            console.log("\n---==☆ End Client ☆==---\n");


            e = new discord.RichEmbed()
            .setColor(bot.defaults.color)
            .setAuthor("Boot Log", bot.user.avatarURL)
            .setDescription(`\`\`\`css\n---==☆ Client ☆==---\n\n${log}\n\n---==☆ End Client ☆==---\`\`\``)

            bot.support.shadowServers.forEach(guild => {
                ch = bot.channels.get(guild.support);
                ch.send(e);
            });
        };


        async function conLog(){
            await bootSRPG();
            await logger();
        };
        conLog();



      //Set bot Presence
        //if(alpha) bot.user.setActivity(`as an Alpha.`, {type: "playing"});
        if(bot.system.alpha){
            bot.user.setStatus('idle');
            bot.user.setActivity(`in Dev Mode. | ${bot.prefix.global}help`, { type: "Streaming", url: 'https://www.twitch.tv/scion_spy%22%7D'});
        };

        if(!bot.system.alpha){
            bot.user.setStatus('dnd');
            bot.user.setActivity(`in "${bot.config.prefixes.global}help"`, {type: "playing"});
        };

        /**
         * [0] Playing
         * • {type: ' '}
         * [1] Streaming
         * • {type: ' ', url: ' '}
         * [2] Listening
         * • {type: ' '}
         * [3] Watching
         * • {type: ' '}
        */
    },
};
