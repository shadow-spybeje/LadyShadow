const discord = require('discord.js');

module.exports = {
    coded : "2019-05-26",
    name : "messageUpdated",
    description : "Event Triggered when a message is updated.",
    usage : "bot.events.get('messageUpdated').execute(bot, message)",

    execute(bot, oldMessage, newMessage){

        if(newMessage.channel.type != "text") return;
        settings = bot.settings.g.get(newMessage.guild.id);
        if(!settings.chatlog) return;

        if(newMessage.content == oldMessage.content) return;

        oContent = oldMessage.content;
        nContent = newMessage.content;

        if(oContent == "") oContent = "`oldMessage.content` was empty.";
        if(nContent == "") nContent = "`newMessage.content` is empty.";

        let e = new discord.RichEmbed()
          .setTitle("Message Edited")
          .setColor("663399")
          .setFooter(bot.functions.get('date').execute(Date.now()))

          .addField("Author", `${newMessage.author.tag}  (${newMessage.author.id})`, true)
          .addField("Message ID", newMessage.id, true)
          .addField("Message Channel", `<#${newMessage.channel.id}>`)
          .addField("Old Message", oContent)
          .addField("New Message", nContent)

          newMessage.guild.channels.get(settings.chatlog).send(e);
    },
};
