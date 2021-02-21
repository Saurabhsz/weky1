module.exports.run = async (bot, message, args) => {
    var MongoClient = require('mongoose').MongoClient;
    var url = "mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Data");
      var mysort = { Wallet: 1 };
      dbo.collection("moneydatas").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    });
}
  module.exports.config = {
    name: "lb",
    aliases: ["leaderboard"]
}