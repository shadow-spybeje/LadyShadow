/*
 * {HSF}LadyShadow#7111
 *  Alpha - v.4.0.0
 *  Feburary 25'th, 2019
 *  Devd by : ScionSpy & Bejabjay
*/

console.log(`\n\n\n---==☆ System Boot-Up ☆==---\n`);

const discord = require('discord.js');
const bot = new discord.Client();
const collect = require('./system/bot/collections.js').execute(bot);
collect;


//----------
//----------


bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e));


//----------
//----------


bot.on('ready', () => { bot.events.get('ready').execute(bot); });
bot.on('message', (message) => { bot.events.get('message').execute(bot, message); });
bot.on("messageDelete", (message) => { bot.events.get('messageDeleted').execute(bot, message); });

bot.on('guildCreate', (guild) => { bot.events.get('newGuild').execute(bot, guild); });
bot.on('guildDelete', (guild) => { bot.events.get('oldGuild').execute(bot, guild); });

bot.on("guildMemberAdd", (member) => { bot.events.get('newMember').execute(bot, member); });
bot.on("guildMemberRemove", (member) => { bot.events.get("oldMember").execute(bot, member); });

bot.on("guildUpdate", (oldGuild, newGuild) => {

});


bot.login(bot.token);
