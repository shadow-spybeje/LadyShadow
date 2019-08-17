module.exports = {
    coded : "2019-08-17",

    name : "celebrate",
    description : "Celebrate Lillth's Birhtday.",

    help : "",
    easteregg : true,
    guildOnly : true,

    execute (message) {
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

        ch = bot.channels.get("569001544926887946");
        ch.send(`{\n\ \ ${userInfo.id}\n\ \ ${userInfo.tag}\n}` ,{code:"js"});


        ch.fetchMessage("612187492820582410").then(msg => {
            let num = Number(msg.content);
            if(!isNaN(num)){
                num++

                msg.edit(num);
                message.channel.send(`You're person ${num} to celebrate Lillith's 4'th birthday!!\n🎉🎂🎊`);
            };

        }).catch(console.error);
    },
};
