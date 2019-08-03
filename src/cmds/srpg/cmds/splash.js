const longURL = ["https://cdn.discordapp.com/attachments/437456275668729859/591514411072749578/sketch-1561098076185.png", "https://cdn.discordapp.com/attachments/437456275668729859/591509884558901257/sketch-1561096603808.png", "https://cdn.discordapp.com/attachments/437456275668729859/591514418597330956/sketch-1561098023619.png", "https://cdn.discordapp.com/attachments/437456275668729859/591514419339722752/sketch-1561097982452.png"];


const shortURL = ["http://tinyurl.com/yy83ar8g", "http://tinyurl.com/y3597vjv", "http://tinyurl.com/y3luajtp", "http://tinyurl.com/y5gto43o"];


module.exports = {
    coded : "2019-06-20",
    name : "splash",
    description : "The S.RPG Splash Screen.",

    execute(message, args){
        bot = message.client;

        e = new discord.RichEmbed()
          .setColor(bot.srpg.config.color)
          .setImage(shortURL[Math.round(Math.random() * (shortURL.length - 1))])

          .setDescription("Welcome to the official world of Shadow.\n Where your limits will be pushed, and your weaknesses exposed.\n\nYou will be tested, against both ally, and foe.\n Do you have what it takes to survive the onslaught??")
          .setFooter("Coming Soon!!")

        return message.channel.send(e);
    }
}
