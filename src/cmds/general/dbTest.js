module.exports = {
    name: "dbtest",
    coded : "2019-02-25",
    description : "",
    help : "general",

    async execute(message, args){
        function print(msg){
            message.channel.send(msg);
            console.log(msg);
        };

        const _database = {
            "url": "mongodb://localhost:27017/",
            "name": "Bots_Minme"
        };
        const MongoClient = require("mongodb").MongoClient;
        const Mongo = new MongoClient(_database.url, {useUnifiedTopology:true});
        const database = await Mongo.connect(onDatabaseConnectCB);

        /**
          * Opens a connection with the {_database.name} database.
          * @param {*} err Error or null
          * @param {*} db The database, null if `err`
          * @returns `database`
         */
        async function onDatabaseConnectCB(err, db){
            print("onDatabaseConnectCB")
            if(err) throw err;
            let database = await db.db(_database.name);


            let data = await database.collection("config").find({}).toArray();
            data = JSON.stringify(data)
            print(data)
            message.channel.send(data);

        }
    }
}
