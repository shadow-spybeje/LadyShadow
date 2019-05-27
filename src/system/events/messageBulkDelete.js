const discord = require('discord.js');

module.exports = {
    coded : "2019-05-26",
    name : "messageBulkDelete",
    description : "Event Triggered when a group of messages are deleted.",
    usage : "bot.events.get('messageBulkDelete').execute(bot, message)",

    execute(bot, message){

        settings = bot.settings.g.get(message.guild.id);
        if(!settings.chatlog) return;

        content = message.content;
        if(!content) content = "A total of ${message.size} messages were just deleted!!";


        let e = new discord.RichEmbed()
          .setTitle("Multiple Messages Deleted")
          .setColor("DARK_RED")
          .setFooter(bot.functions.get('date').execute(Date.now()))

          .addField("Message Channel", `<#${message.first().channel.id}>`)
          .addField("Message Content", content)

        message.guild.channels.get(settings.chatlog).send(e);
    },
};
