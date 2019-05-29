module.exports = {
    coded : "2019-05-28",
    name : "srpg",
    description : "The bridge cmd into the SRPG Module.",
    usage : "",

    execute(message){
        bot = message.client;
        srpg = bot.srpg;

        e = new discord.RichEmbed()
          .setTitle("S.RPG")
          .setFooter(bot.functions.get('date').execute(Date.now()))
          .setColor(bot.settings.g.get(message.guild.id).color)
          .setAuthor(bot.users.get(bot.support.owners[0]).tag, bot.users.get(bot.support.owners[0].avatarURL))
          .setDescription(`Thank you for trying to use The SRPG, however we're still working on connecting the S.RPG Module to Shadow.\n  This is moving along nicely, and will enable 2 bots to use the s.RPG simultaneously, and seemlessly.\n\n  For more info, you can join the support server, \`${bot.settings.g.get(message.guild.id).prefix}invite\` and ping me or the \`@Support\` team.\n  GitHub @ [Shadow-SpyBeje/Shadow-RPG](https://github.com/shadow-spybeje/Shadow-RPG)\n\n\`\`\`css\nS.RPG Info\n Version : ${srpg.version}\nCommands : ${srpg.cmds.size}\`\`\``);

        message.channel.send(e);
    }
}
