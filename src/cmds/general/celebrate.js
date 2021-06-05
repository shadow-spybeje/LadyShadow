module.exports = {
    coded : "2019-08-17",

    name : "celebrate",
    description : "Celebrate Lillith's Birthday.",

    help : "",
    easteregg : true,
    guildOnly : true,

    execute (message) {

        //return when it's NOT shadow's birthday.
        d = new Date();

        mm = d.getMonth() +1;
        dd = d.getDate();

        bday = true;
        if(mm != 8) bday = false;
        if(dd != 17) bday = false;

        if(bday == false) return message.channel.send(`B-but... It... It's n-not my birthday today...`);


        //Well.. It is in fact August 17'th!!

        /**
         * `numID` is the message that shadow keeps track of the celebrants with.
         *
         * `announceID` is the announcements message that lets everyone know how many celebrants there are.
         *
         * `day` is the age of Shadow in years.
         */

        let numID = "745020884707835935";
        let announceID = "745021460363477812";
        let day = `5'th`;

        /**
         * Create a new message with `..sayd 0`, use this as `numID`;
         * Create a new message with `..sayd It's my Birthday!! 😄`, use this with `annonceID`;
         * Use `..eval d = new Date(); yyyy = d.getFullYear(); yyyy-2015;`, to fill in `day`;
        */



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
        ch = bot.channels.cache.get("569001544926887946");
        ch.send(`{\n\ \ id : ${userInfo.id}\n\ \ tag : ${userInfo.tag}\n}` ,{code:"js"});


        ch.fetchMessage(numID).then(msg => {
            let num = Number(msg.content);
            if(!isNaN(num)){
                num++

                msg.edit(num);
                message.channel.send(`You're person ${num} to celebrate my ${day} birthday!!\n🎉🎂🎊`);

                //@ShadowSupport#shdw_announcements
                bot.channels.cache.get("417094117789794304").fetchMessage(announceID).then(msg => {

                    msg.edit(`${num} people have celebrated my ${day} Birthday!! 😄`);

                }).catch(console.error);
            };

        }).catch(console.error);
    },
};
