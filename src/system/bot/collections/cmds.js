module.exports = {
  coded : "2019-03-16",

  name : "cmds",
  description : "Logs all of Shadows Main Cmds.",


  execute(bot, fs){
    const generalCmds = fs.readdirSync('./src/cmds/general').filter(file => file.endsWith('.js'));
    const supportCmds = fs.readdirSync('./src/cmds/support').filter(file => file.endsWith('.js'));
    const ownerCmds = fs.readdirSync('./src/cmds/owner').filter(file => file.endsWith('.js'));
    const unloadedCmds = fs.readdirSync('./src/cmds/unloaded').filter(file => file.endsWith('.js'));

    const srpgCmds = fs.readdirSync('./src/cmds/srpg').filter(file => file.endsWith('.js'));

    let general = [];
    let support = [];
    let owner = [];
    let unloaded = [];
    let srpg = [];

    for (const file of generalCmds) { 	const cmd = require(`../../.././cmds/general/${file}`);
      bot.cmds.general.set(cmd.name, cmd);
      general.push(cmd.name);
    };
    for (const file of supportCmds) { 	const cmd = require(`../../.././cmds/support/${file}`);
    bot.cmds.support.set(cmd.name, cmd);
    support.push(`[☆]`+cmd.name);
    };
    for (const file of ownerCmds) { 	const cmd = require(`../../.././cmds/owner/${file}`);
    bot.cmds.owner.set(cmd.name, cmd);
    owner.push(`[★]`+cmd.name);
    };
    for (const file of unloadedCmds) { 	const cmd = require(`../../.././cmds/unloaded/${file}`);
    bot.cmds.unloaded.set(cmd.name, cmd);
    unloaded.push(`[✪]`+cmd.name);
    };

    for (const file of srpgCmds) { 	const cmd = require(`../../.././cmds/srpg/${file}`);
    bot.cmds.srpg.set(cmd.name, cmd);
    srpg.push(`[⚔]`+cmd.name);
    };

    array = general.concat(support.concat(owner.concat(srpg)))
    coma = ""; if(unloaded) coma = ", ";

    console.log(`System:  Commands   :: Loaded : ${array.length} UnLoaded : ${unloaded.length} Type : [★] - Owner || [☆] - Support || [🗡] - S.RPG || [✪] - UnLoaded\n• • ${array.join(', ')}${coma}${unloaded.join(', ')}\n`)
  }
};
