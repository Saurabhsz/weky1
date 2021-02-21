const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose')
const { loadCommands } = require('./util/loadCommands');

const bot = new Discord.Client({disableEveryone: true});

mongoose.connect('mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})
require('./util/loadEvents')(bot);
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});
bot.on("message", async (message) => {
    if(message.content === '/lb'){
    const leaderboardData = require('./schemas/Money')
async function getLeaderboard() {
    var replyString = "";
    await leaderboardData.findOne({
        id: message.author.id
    }, (err, data) => {
        if(err) return console.log(err)
        if(data == null) {
            return message.channel.send(`There was an error or no one from here has been used any currency command from Weky.`)
        } else {
            var Array_names = [];
            var Array_values = [];
            
            Array_names = JSON.parse(data.id)
            Array_values = JSON.parse(data.Wallet)
            var first_num = Math.max(...Array_values)

            for (let index = 0; index < Array_values.length; index++) {
                const element = Array_values[index];
                if(element == first_num)
                console.log(element)
                replyString += element + `  -  ` + Array_names[index] + "\n";

                Array_values.splice(index, 1);
                Array_names.splice(index, 1);
break;
            }
        }
        var first_num = Math.max(...Array_values)

        for (let index = 0; index < Array_values.length; index++) {
            const element = Array_values[index];
            if(element == first_num)
            console.log(element)
            replyString += element + `  -  ` + Array_names[index] + "\n";

            Array_values.splice(index, 1);
            Array_names.splice(index, 1);
break;
        }
    }) 
    message.channel.send(replyString)
}
getLeaderboard();
    }
})
bot.on('guildMemberAdd', (member) => {
    const embed = new MessageEmbed();
    const { MessageEmbed } = require("discord.js");
    const Embed = new MessageEmbed()
    .setDescription(`Welcome **<@${member.id}>**, have fun there!`)
    .setTimestamp()
    member.bot.channels.cache.get('811222075053572106').send(Embed);
  });
bot.on("message", async message => {
    bot.user.setActivity(`Playing in ${bot.guilds.cache.size} servers | /help`,  {type: "PLAYING"})

    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    const input = message.content.slice(prefix.length).trim().split(' ');
      const commandArgs = input.join(' ');
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      let cmd = messageArray[0];

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})


bot.login(process.env.token);