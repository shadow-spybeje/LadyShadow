module.exports = {
  coded : "2019-02-25",

  name : "ping",
  description : "Ping Pong.",
  help : "general",

  execute (message){
    bot = message.client;
    settings = { color : bot.config.default.color };
    if(message.channel.type == 'text') settings = bot.settings.g.get(message.guild.id);

    e = new discord.MessageEmbed()
      .setColor(settings.color)

    message.channel.send("Pong!!")
      .then(msg => {
        e.setDescription(`\`\`\`css\nBot : ${msg.createdTimestamp - message.createdTimestamp}ms\nAPI : ${Math.round(bot.ws.ping)}ms\`\`\``);
        msg.edit(e);
      });
  },
};
