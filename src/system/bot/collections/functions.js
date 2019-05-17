module.exports = {
    coded : "2019-03-25",
    name : "functions",
    description : "Logs all of the functions used within Shadow.",

    execute(bot, fs){


      const funcFiles = fs.readdirSync('./src/system/bot/functions').filter(file => file.endsWith('.js'));

      for (const file of funcFiles) { 	const func = require(`../functions/${file}`);
        bot.functions.set(func.name, func);
      };

      console.log(`System:  Functions  :: Loaded : ${bot.functions.size} Type : \n• • ${bot.functions.map(c => c.name).join(', ')}\n`)
    }
  };
