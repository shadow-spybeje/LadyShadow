module.exports = {
    coded : "2019-06-20",
    name : "splash",
    description : "The S.RPG Splash Screen.",

    execute(message, args){
        bot = message.client;
        shortURL = bot.srpg.images.cover.shortURL;

        e = new discord.RichEmbed()
          .setColor(bot.srpg.config.color)
          .setImage(shortURL[Math.floor(Math.random() * shortURL.length)])

          .setDescription("Welcome to the official world of Shadow.\n Where your limits will be pushed, and your weaknesses exposed.\n\nYou will be tested, against both ally, and foe.\n Do you have what it takes to survive the onslaught??")
          .setFooter("Coming Soon!!")

        return message.channel.send(e);
    }
}
