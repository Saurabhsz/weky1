const Discord = require('discord.js');
module.exports = {
  name: "withdraw",
  aliases: ["with"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..with amount',
  cooldown: 60, //seconds(s)
  cooldowny: 45,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle('You were walking to the fast-food!')
.setDescription('🍕 - 35% chance of getting Gotcha Box, 1000 coins max\n🍔 - 30% chance of getting Gotcha Box, 1300 coins max\n🍟 - 2 Slices Of Tomato instead of 1, 400 coins max\n🌯 - 130% for all items means 100% for coins, 1500 coins max');

message.channel.send(embed).then(msg => {
    // setup the options here
    msg.react('🍕')
    msg.react('🍔')
    msg.react('🍟')
    msg.react('🌯')

    const filter = (reaction, user) => {
        // replace with your options
        let e = reaction.emoji.name === '🍕' || reaction.emoji.name === '🍔' || reaction.emoji.name === '🍟' || reaction.emoji.name === '🌯'
        let u = user.id === message.author.id;
        return e && u
    };

    const collector = msg.createReactionCollector(filter, { time: 15 * 1000 }); // 15 seconds

    collector.on('collect', (reaction, user) => {
        reaction.users.remove(user); // remove user reaction
        var pizza,burger,fries,buritto,pizzaMsg,burgerMsg,friesMsg,burritoMsg
        switch (reaction.emoji.name) {
            // replace with your options
            case '🍕':
                pizza = Math.floor(Math.random() * 101)+1
                if(pizza < 8){
                    pizzaMsg = `You lucky ducky found <:SliceOfTomato:829653483162304522> **1 Slice Of Tomato** in the pizza, yes its rare`
                bot.addItem(message.author.id, 'SliceOfTomato', 1)
                }else if(pizza < 20){
                    pizzaMsg = 'Someone saw you dancing with your pizza, and gave you <:bready:820948539823226901> **1 Bread**'
                bot.addItem(message.author.id, 'Bread', 1)
                }else if(pizza < 35){
                    pizzaMsg = 'The pizza had a shard of gold, but fool gold, you traded it for <:gotcha_box:816990104803475457> **1 Gotcha Box**'
                bot.addItem(message.author.id, 'GotchaBox', 1)
                } else if(pizza < 101){
                    var randomCoins = Math.floor(Math.random() * 1000)
                    pizzaMsg = 'You found **'+randomCoins+' coins** while you were walking with the pizza'
                    bot.add(message.author.id, randomCoins)
                }
                message.channel.send(pizzaMsg);
                break;
            case '🍔':
                burger = Math.floor(Math.random() * 101)+1
                if(burger < 8){
                    burgerMsg = `You lucky ducky found <:SliceOfTomato:829653483162304522> **1 Slice Of Tomato** in the hamburger, yes its rare`
                bot.addItem(message.author.id, 'SliceOfTomato', 1)
                }else if(burger < 20){
                    burgerMsg = 'Someone saw you dancing with your hamburger, and gave you <:bready:820948539823226901> **1 Bread**'
                bot.addItem(message.author.id, 'Bread', 1)
                }else if(burger < 30){
                    burgerMsg = 'The hamburger had a shard of gold, but fool gold, you traded it for <:gotcha_box:816990104803475457> **1 Gotcha Box**'
                bot.addItem(message.author.id, 'GotchaBox', 1)
                } else if(burger < 101){
                    var randomCoins = Math.floor(Math.random() * 1300)
                    burgerMsg = 'You found **'+randomCoins+' coins** while you were walking with the hamburger'
                    bot.add(message.author.id, randomCoins)
                }
                message.channel.send(burgerMsg);
                break;
            case '🍟':
                fries = Math.floor(Math.random() * 101)+1
                if(fries < 8){
                    friesMsg = `You lucky ducky found <:SliceOfTomato:829653483162304522> **2 Slice Of Tomato** in the fries.. rare af`
                bot.addItem(message.author.id, 'SliceOfTomato', 2)
                }else if(fries < 20){
                    friesMsg = 'Someone saw you dancing with your fries, and gave you <:bready:820948539823226901> **1 Bread**'
                bot.addItem(message.author.id, 'Bread', 1)
                }else if(fries < 30){
                    friesMsg = 'The fries had a shard of gold, but fool gold, you traded it for <:gotcha_box:816990104803475457> **1 Gotcha Box**'
                bot.addItem(message.author.id, 'GotchaBox', 1)
                } else if(fries < 101){
                    var randomCoins = Math.floor(Math.random() * 400)
                    friesMsg = 'You found **'+randomCoins+' coins** while you were walking with the fries'
                    bot.add(message.author.id, randomCoins)
                }
                message.channel.send(friesMsg);
                break;
                case '🌯':
                    buritto = Math.floor(Math.random() * 130)+1
                    if(buritto < 8){
                        burritoMsg = `You lucky ducky found <:SliceOfTomato:829653483162304522> **1 Slice Of Tomato** in the burrito, not that rare buut`
                    bot.addItem(message.author.id, 'SliceOfTomato', 1)
                    }else if(buritto < 20){
                        burritoMsg = 'Someone saw you dancing with your burrito, and gave you <:bready:820948539823226901> **1 Bread**'
                    bot.addItem(message.author.id, 'Bread', 1)
                    }else if(buritto < 30){
                        burritoMsg = 'The burrito had a shard of gold, but fool gold, you traded it for <:gotcha_box:816990104803475457> **1 Gotcha Box**'
                    bot.addItem(message.author.id, 'GotchaBox', 1)
                    } else if(buritto < 101){
                        var randomCoins = Math.floor(Math.random() * 1500)
                        burritoMsg = 'You found **'+randomCoins+' coins** while you were walking with the burrito'
                        bot.add(message.author.id, randomCoins)
                    }
                    message.channel.send(burritoMsg);
                    break;
        }
    });

    collector.on('end', (collected) => {
        message.reactions.cache.each(r => {
            // remove all the reactions when it finish
            r.remove();
        })
    });
})}}