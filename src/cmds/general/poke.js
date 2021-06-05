module.exports = {
  coded : "2019-03-01",

  name : "poke",
  aliases : ["boop"],
  description : "Get someone's attention.",
  usage : "<userMention>",

  guildOnly : true,
  args : true,
  help : "general",

  execute(message, args){
    bot = message.client;

    let member = "";
    member = message.mentions.members.first();
    if(!member) message.guild.members.cache.get(args[0]);


    if(!member) {
      error = new discord.MessageEmbed()
        .setTitle("Missing Members")
        .setColor("ff0000")
        .setDescription(`But **${message.author.username}**,\n  that user doesn't exist on this server..`);
      message.channel.send(error);
    }else{
      e = new discord.MessageEmbed()
        .setColor(bot.settings.g.get(message.guild.id).color)
        .setDescription(`${member}, you were just poked by ${message.author}!!`)

      message.channel.send(e);
    };
  },
};
