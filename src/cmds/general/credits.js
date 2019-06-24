module.exports = {
    coded : "2019-06-08",
    name : "credits",
    description : "",
    usage : "",
    help : "general",
    args : false,
    guildOnly : false,
    owner : false,
    admin : false,
    execute(message){
        bot = message.client;
        e = new discord.RichEmbed();

        e.setColor(bot.settings.g.get(message.guild.id).color);
        e.setTitle("Author Credits");
        e.setDescription(`The Authors would like to thank:\`\`\`css\n---==☆ Partners ☆==---\n☆ ${bot.users.get('116930717241311236').tag} (Feb - 2017) [Dev]\n\n---==☆ Patreons/Donators ☆==---\n☆ \n\n ---==☆ Longtime Supporters ☆==---\n☆ ${bot.users.get('321547168747880448').tag} (May - 2017)\n☆ ${bot.users.get('299853946837794816').tag} (May - 2017)\n☆ ${bot.users.get('276742457083953154').tag} (May - 2018)\n☆ ${bot.users.get('430638153309880321').tag} (Jun - 2018)\n☆ ${bot.users.get('258356634227572737').tag} (Sept - 2018) [Dev]\`\`\``);

        message.channel.send(e);
    },
};
