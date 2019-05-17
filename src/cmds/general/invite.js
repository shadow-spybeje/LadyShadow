const discord = require('discord.js');

module.exports = {
  coded : "2019-03-06",

  name : "invite",
  aliases : ["inv"],
  description : "Provides bot links.",
  usage : "",

  cooldown : 4,


  execute(message, args){
    bot = message.client;

    e = new discord.RichEmbed()
      .setTitle("Invite")
      .setAuthor(bot.user.tag)
      .setThumbnail(bot.user.avatarURL)
      .setColor(bot.settings.g.get(message.guild.id).color)
      .setDescription("[Bot](https://discordapp.com/oauth2/authorize?client_id=347872963636494337&scope=bot&permissions=470150359)\n[Support](https://discord.gg/9FUpBPQ)")
      .setFooter(`Developers : ${bot.users.get(bot.support.owners[0]).tag} | ${bot.users.get(bot.support.owners[1]).tag}`)


    message.channel.send(e);
  },
};
