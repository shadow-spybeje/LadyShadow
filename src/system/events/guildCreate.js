const fs = require('fs');

module.exports = {
    coded : "2019-05-06",

    name : "newGuild",
    description : "An event that triggers when Shadow joins a guild.",
    usage : "bot.events.get('newGuild').execute(bot, guild)",

    execute(bot, guild){

        console.log(`System: JoinedGuild : Name: ${guild.name} || ID: ${guild.id}\n• • Time: ${bot.functions.get('date').execute(Date.now())}\nNew Count : ${bot.guilds.size}\n`);


        let users = 0;
        let bots = 0;

        guild.members.forEach(member => {
            if(member.user.bot){
                bots++
            }else{
                users++
            };
        });


        e = new discord.RichEmbed()
            .setTitle(guild.name)
            .setThumbnail(guild.iconURL)
            .setFooter(`Joined a Guild (Guild Count : ${bot.guilds.size}) || `+bot.functions.get('date').execute(Date.now()), bot.user.avatarURL)
            .setColor("GREEN")
            .setDescription(`\`\`\`css\n---==☆ New Guild ☆==---\`\`\`\`\`\`css\nGuild ID : ${guild.id}\nM.Count : ${guild.memberCount}\n\n---==+ Cached +==---\n Members : ${users}\n    Bots : ${bots}\n\n Created : ${guild.createdAt})\`\`\``)




        bot.support.shadowServers.forEach(guild => {
            ch = bot.channels.get(guild.server);
            ch.send(e);
        });

        try{
            bot.functions.get('default').execute("guild", guild, bot);
        } catch(err){
            console.log(`System: JoinedGuild: fs.writeFileSync: Failed to create guildSETTINGS!! :: ID: ${guild.id}`);
            console.error(err);
            bot.support.shadowServers.forEach(guild => {
                ch = bot.channels.get(guild.server);

                errEmbed = new discord.RichEmbed()
                  .setTitle("Cannot Create Settings!!")
                  .setColor("ff0000")
                  .setDescription(err)

                ch.send(errEmbed);
                //ch.send(`Failed to create Guild \`SETTINGS\`.\nPlease review the code, and manually create!!`);
            });
        };
    }
}
