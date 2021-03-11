module.exports.config = {
    name: "ascii",
    aliases: ["asciiart"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..ascii',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const figlet = require('figlet');

            if(!args[0]) return message.channel.send('Please provide some text');
    
            msg = args.slice(0).join(" ");
    
            figlet.text(msg, function (err, data){
                if(err){
                    console.log('Something went wrong');
                    console.dir(err);
                }
                if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')
    
                message.channel.send('```' + data + '```')
            })
}
}