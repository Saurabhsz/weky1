module.exports.run = async (bot, message, args) => {
    const mongo = require("mongoose");
    
    mongo.setURL("mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data"); // You only need to do this ONCE per process.

    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
     
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
     
    const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard, true); // We process the leaderboard.
     
    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}${e.Wallet.toLocaleString()}`);
     
    message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
}
  module.exports.config = {
    name: "lb",
    aliases: ["leaderboard"]
}