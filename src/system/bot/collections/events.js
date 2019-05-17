module.exports = {
    coded : "2019-05-05",

    name : "events",
    description : "Logs all of Shadows Events.",


    execute(bot, fs){
      const eventFiles = fs.readdirSync('./src/system/events').filter(file => file.endsWith('.js'));

      for (const file of eventFiles) { 	const event = require(`../.././events/${file}`);
        bot.events.set(event.name, event);
      };

      console.log(`System:   Events    :: Loaded : ${bot.events.size} Type : \n• • ${bot.events.map(e => e.name).join(', ')}\n`)
    }
};
