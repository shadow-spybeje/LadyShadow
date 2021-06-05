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
        e = new discord.MessageEmbed();

        array = [
            "---==☆ Partners ☆==---",
            `☆ ${bot.users.cache.get('116930717241311236').tag} (Feb - 2017) [Dev]`, //Luke

            "\n---==☆ Patreons/Donators ☆==---",
            `☆ ${bot.users.cache.get('102102717165506560').tag} [SRPG Cipher (En/De)Coder]`, //Raven,

            "\n ---==☆ Longtime Supporters ☆==---",
            `☆ ${bot.users.cache.get('321547168747880448').tag} (May - 2017)`, //Steve
            `☆ ${bot.users.cache.get('299853946837794816').tag} (May - 2017)`, //Ando
            `☆ ${bot.users.cache.get('276742457083953154').tag} (May - 2018)`, //Kyon
            `☆ ${bot.users.cache.get('430638153309880321').tag} (Jun - 2018)`, //Ashlea
            `☆ ${bot.users.cache.get('258356634227572737').tag} (Sept - 2018) [Dev]`, //Anewold
        ]

        e.setColor(bot.settings.g.get(message.guild.id).color);
        e.setTitle("Author Credits");
        e.setDescription(`The Authors would like to thank:\`\`\`css\n${array.join("\n")}\`\`\``);

        message.channel.send(e);
    },
};
