const fs = require('fs');

module.exports = {
    coded : "2019-05-06",

    name : "oldGuild",
    description : "An event that triggers when Shadow leaves guild.",
    usage : "bot.events.get('oldGuild').execute(bot, guild)",

    execute(bot, guild){

        console.log(`System: LeftGuild : Name: ${guild.name} || ID: ${guild.id}\n• • Time: ${bot.functions.get('date').execute(Date.now())}\n`);


        let users = 0;
        let bots = 0;

        guild.members.forEach(member => {
            if(member.user.bot){
                bots++
            }else{
                users++
            };
        });

        let settings = bot.settings.g.get(guild.id);
        let joined = settings.joined;

        e = new discord.RichEmbed()
            .setTitle(guild.name)
            .setThumbnail(guild.iconURL)
            .setFooter(`Left a Guild || `+bot.functions.get('date').execute(Date.now()), bot.user.avatarURL)
            .setColor("RED")
            .setDescription(`\`\`\`css\n---==☆ Old Guild ☆==---\`\`\`\`\`\`css\nGuild ID : ${guild.id}\n Members : ${users}\n    Bots : ${bots-1}\n Joined : ${joined})\`\`\``)




        bot.support.shadowServers.forEach(guild => {
            ch = bot.channels.get(guild.server);
            ch.send(e);
        });

        try{
            file = require(`../../../../.././bot_db/ladyShadow/settings/guilds/${guild.id}.json`);
            if(file) fs.unlink(`../.././bot_db/ladyShadow/settings/guilds/${guild.id}.json`, (err) => console.error(err));
            bot.collections.get('settings').execute(bot, fs);
        }catch(err){
            console.log(`System: LeftGuild: fs.unlink: Failed to UNLINK guildSETTINGS!! :: ID: ${guild.id}`);
            console.error(err);
            bot.support.shadowServers.forEach(guild => {
                ch = bot.channels.get(guild.server);
                ch.send(`Failed to delete Guild \`SETTINGS\`.\nPlease review the code and manually delete the file!!`);
            });
        };
    }
}
