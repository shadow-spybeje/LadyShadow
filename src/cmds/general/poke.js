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
    let member = "";
    member = message.mentions.members.first();
    if(!member) message.guild.members.get(args[0]);

    message.channel.send(`\`\`\`css\nArgs : ${args}\`\`\``)

    if(!member) {
      error = new discord.RichEmbed()
        .setTitle("Missing Members")
        .setColor("ff0000")
        .setDescription(`But **${message.author.username}**,\n  that user doesn't exist on this server..`);
      message.channel.send(error);
    }else{
      e = new discord.RichEmbed()
        .setColor(bot.settings.g.get(message.guild.id).color)
        .setDescription(`${member}, you were just poked by ${message.author}!!`)

      message.channel.send(e);
    };
  },
};
