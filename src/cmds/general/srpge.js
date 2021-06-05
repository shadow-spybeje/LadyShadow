//const srpg = require("srpg");
module.exports = {
    name : "srpge",
    aliases : ["srpge"],

    execute(message){
        bot = message.client;
        let prefix = bot.config.default.prefix;
        if(message.channel.type == "text") prefix = bot.settings.g.get(message.guild.id).prefix;

        srpg.getCommand(message, prefix.length);
    }
};
