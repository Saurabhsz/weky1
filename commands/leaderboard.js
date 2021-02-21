module.exports.run = async (bot, message, args) => {
MongoClient.connect("mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data", function(err, db) {
    if (err) throw err;
    var dbo = db.db("Data");
    var sortSelection = { Wallet: 1 };
  
    dbo.collection("moneydatas").find().sort(sortSelection).toArray(function(err, result) {
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