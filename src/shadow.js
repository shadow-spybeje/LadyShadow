/*
 * {HSF}LadyShadow#7111
 *  Alpha - v.4.0.0
 *  Feburary 25'th, 2019
 *  Devd by : ScionSpy & Bejebajay
*/



console.log(`\n\n\n---==☆ System Boot-Up ☆==---\n`);

const discord = require('discord.js');
const bot = new discord.Client({
	ws: {
	  intents: 14087
	}
});//513 //515
/**
 * 515: GUILDS, GUILD_MESSAGES
 * 12901: GUILDS, GUILD_MESSAGES, DIRECT_MESSAGES, DIRECT_MESSAGE_RECTIONS
 * 13831: GUILDS, GUILD_MEMBERS*, GUILD_BANS, GUILD_MESSAGES, GUILD_MESSAGE_REACTIONS, DIRECT_MESSAGES, DIRECT_MESSAGE_REACTIONS
 * 14087: GUILDS, GUILD_MEMBERS*, GUILD_BANS, GUILD_MESSAGES, GUILD_MESSAGE_REACTIONS, GUILD_PRSESNCES, DIRECT_MESSAGES, DIRECT_MESSAGE_REACTIONS
 */
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


  //Message Stuff.
bot.on('message', (message) => {
	if(message.partial){ message.fetch().then(msg => { message=msg }).catch(err => { return console.log(err) })};
	bot.events.get('message').execute(bot, message);
});
bot.on("messageDelete", (message) => { bot.events.get('messageDeleted').execute(bot, message); });
bot.on("messageBulkDelete", (messages) => { bot.events.get('messageBulkDelete').execute(bot, messages); });
bot.on("messageUpdate", (oldMessage, newMessage) => { bot.events.get('messageUpdated').execute(bot, oldMessage, newMessage); });


  //Guild Stuff
bot.on('guildCreate', (guild) => { bot.events.get('newGuild').execute(bot, guild); });
bot.on('guildDelete', (guild) => { bot.events.get('oldGuild').execute(bot, guild); });
bot.on("guildMemberAdd", (member) => { bot.events.get('newMember').execute(bot, member); });
bot.on("guildMemberRemove", (member) => { bot.events.get("oldMember").execute(bot, member); });
bot.on("guildUpdate", (oldGuild, newGuild) => {  });


bot.login(bot.token);
