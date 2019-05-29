const discord = require('discord.js');

module.exports = {
    coded : "2019-05-26",
    name : "messageDeleted",
    description : "Event Triggered when a message is deleted.",
    usage : "bot.events.get('messageDeleted').execute(bot, message)",

    execute(bot, message){

      if(message.channel.type != "text") return;
        settings = bot.settings.g.get(message.guild.id);
        if(!settings.chatlog) return;

        content = message.content;
        if(!content) content = "No content to display.\nThis is either due to the message only containing an attachment, or an embed.";


        let e = new discord.RichEmbed()
          .setTitle("Message Deleted")
          .setColor("DARK_RED")
          .setFooter(bot.functions.get('date').execute(Date.now()))

          .addField("Author", `${message.author.tag}  (${message.author.id})`, true)
          .addField("Message ID", message.id, true)
          .addField("Message Channel", `<#${message.channel.id}>`)
          .addField("Message Content", content)

        message.guild.channels.get(settings.chatlog).send(e);
    },
};
