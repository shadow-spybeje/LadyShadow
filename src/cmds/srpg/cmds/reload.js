module.exports = {
    coded : "2019-06-20",
    name : "reload",
    description : "Reloads an SRPG Commad.",
    usage : "<cmd>",

    help : "owner",
    args : true,

    execute(message, args){
        bot = message.client;

        // Grab the command title to reload.
        if(!args || args.length < 1) return message.reply("Provide a `Cmd`to reload.");
        cmd = args.pop();

        // Cross Refrence the existing cmds with the 'cmd'
        if(!bot.cmds.srpg.has(cmd)) {
            return message.reply(`\`${cmd}\` is not an S.RPG Command.`);
        };

        // delete the old 'cmd'
        bot.cmds.srpg.delete(cmd);

        // collect the new 'cmd' code.
        delete require.cache[require.resolve(`./${cmd}`)];
        const cmdFile = require(`./${cmd}`)

        // Apply the new code.
        bot.cmds.srpg.set(cmd, cmdFile);


        // Announce the finish.
        e = new discord.RichEmbed();
        e.setColor("ffff00")
        e.setTitle("Reload")
        e.setDescription(`__**${cmd}**__ has been reloaded.\nPath : \`./LadyShadow_/src/cmds/srpg/cmds/${cmd}.js\``)
        e.setFooter(bot.functions.get("date").execute(Date.now()))

        message.channel.send(e);
    }
}
