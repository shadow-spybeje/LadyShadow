module.exports = {
    coded : "2019-08-17",

    name : "celebrate",
    description : "Celebrate Lillth's Birthday.",

    help : "",
    easteregg : true,
    guildOnly : true,

    execute (message) {

        //return // for use when it's NOT shadow's birthday.

        let numID = "612187492820582410"; //"numID" is the message that shadow keeps track of the celebrants with.
        let announceID = "612198752840581150"; //"announceID" is the announcements msg that lets everyone know how many celebrants there are.
        //Leave above id's [ "" ] when NOT shadow's birthday.

        bot = message.client;

        let userF = function (id, tag) {
            info = {
                id : id,
                tag : tag,
            };

            return info;
        };

        let u = message.author;
        userInfo = userF(u.id, u.tag)

        //@Moonglade#shdw
        ch = bot.channels.get("569001544926887946");
        ch.send(`{\n\ \ ${userInfo.id}\n\ \ ${userInfo.tag}\n}` ,{code:"js"});


        ch.fetchMessage(numID).then(msg => {
            let num = Number(msg.content);
            if(!isNaN(num)){
                num++

                msg.edit(num);
                message.channel.send(`You're person ${num} to celebrate my 4'th birthday!!\n🎉🎂🎊`);

            };

        }).catch(console.error);

        //@ShadowSupport#shdw_announcements
        bot.channels.get("417094117789794304").fetchMessage(announceID).then(msg => {

            msg.edit(`${num} people have celebrated my Birthday!! 😄`);

        }).catch(console.error);
    },
};
