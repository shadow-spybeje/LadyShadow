module.exports = {
    coded : "2019-08-02",

    name : "user",
    description : "View yuor SRPG Character info!!\n\n--> Future Update: View Other's info!!",
    //usage : "[@user]",

    help : "general",
    //args : true,

    execute(message, args){
        bot = message.client;
        u = bot.srpg.users.get(message.author.id);

        info = [
            `Class : ${u.class}`,
            `\ \ \ HP : ${u.stats.hp*60}`,
            `\ \ DEF : ${u.stats.def*15}`,
            `\ \ STR : ${u.stats.str*10}`,
        ];

        e = new discord.RichEmbed()
            .setAuthor(`${u.name}\nOf : ${bot.srpg.clans.get(u.clan).name}`)
            .setDescription(`\`\`\`css\n${info.join('\n')}\`\`\``)
            .setColor(bot.srpg.config.color)
            .setFooter(bot.functions.get('date').execute(Date.now()))
        //

        message.channel.send(e);
    },
};
