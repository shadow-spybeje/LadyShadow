module.exports = {
    coded : "2019-05-16",
    name : "load",
    description : "Load a command into the List.",
    usage : "<cmd> <newCat>",
    //args : true,
    help : "dev",

    execute(message){
        message.channel.send('..eval \ncat = "general";\ncmd = "";\n\nconst cmdFile = require(`.././${cat}/${cmd}`);\nbot.cmds.general.set(cmd, cmdFile);', {code:'css'});
    },
};
