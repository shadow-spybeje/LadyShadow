changelog = {
    "example" : {version : {first : "2.0.1", last : "2.0.1"}, log : "Just a Version placeholder"},


    "2.0.2" : {version : "2.0.2", date : "Unreleased", log : "`Cmds-`Changelog - You can now view all SRPG Changelogs right here!! `..srpg help changelog` for more info.\n\n`Cmds-`User - You can now view your user stats. This includes Kills, and Deaths. You ClanName, and faction! The list will grow as we progress with the SRPG Module.\n\n`Cmds-`Combat - Combat is giving me a headache.. However, it is making some headway!!\n• Under our combat command, you can engage in combat, and duke it out with a Rat!! Yes, that's all.. Just a rat. However, in the background, we also keep track of your health, combat logs, kill/death stats, Specific kill types (Rats, Mice, Insects, Bears, Xenomorphs, Chipmunks...), as well as Respawn you upon death!!\n• There's much more behind this, boring, irritating code. But the point is: Combat.Attack is just about done!! Next up, Combat.Pass, and Combat.Flee. Following that, we'll allow the community to give it a shot, maybe have a \"Monster Creator\" board (Give us a suggestion, we'll add it during the trials, only for the trials.)\n\n`Items-`Legacy User,\n`Items-`Alpha Tester - These items have now been populated into the game, they will be given to the appropriate users when the ol' V.2's \"Voting Pots\" are given out.\n• Make sure you've registered!! Or else you wont be granted these awards!!"},


    "2.0.1" : {version : "2.0.1", date : "2019-08-17", log : "`Classes-`All classes were brought to the same stats in order to give `Balance` to the game. This will change in future updates.\n\n`Items-`Added some Additional Item Images and Colors.\n`Items-`\"BoogyBear\" now has an official description.\n\n`Cmds-`Srpg Shop - Shop will display all of the non-hidden item of the game.\n`Cmds-`Srpg User - You can display your SRPG User information.\n`Cmds-`Srpg Help - Added the commands Shop and User.\n\n```css\n{\n\ \ default: { _class: 'Default', stats: { hp: 10, def: 3, str: 5 } },\n\ \ hunter: { _class: 'Hunter', stats: { hp: 360, def: 45, str: 30 } },\n\ \ mage: { _class: 'Mage', stats: { hp: 240, def: 15, str: 10 } },\n\ \ warrior: { _class: 'Warrior', stats: { hp: 600, def: 75, str: 75 } }\n}```"},
};



module.exports = {
    coded : "2019-08-28",

    name : "changelog",
    description : "The S.RPG Changelog",
    usage : `[version]`,
    example : `${changelog["example"].version.first} - ${changelog["example"].version.last}`,

    help : "other",

    execute(message, args){
        if(args[0].toLowerCase() == "example") return message.channel.send("Alright look, I have a business to run, so if you'd stop wasting my time..\nThanks.");

        if(args.length == 0) args.push(changelog["example"].version.last);

        message.channel.send(`Changelog \`v.${args[0]}\` -- \`${changelog[args[0]].date}\`\n\n`+changelog[args[0]].log, {split: true});
    }
};
