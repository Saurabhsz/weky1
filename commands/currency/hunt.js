
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

            const inventory = require("../../schemas/inventory")
            inventory.findOne({ User: message.author.id }, async (err, ata) => {
            if(0 >= ata.Sniper) {
        return message.reply(`You dont have a sniper lmao`);
        } else {
           const random = Math.floor(Math.random() * 100) + 1
           const rm = Math.floor(Math.random() * 3)+1
           if(random < 5){
            if(0 >= ata.LifeShield){
                message.reply(`You saw a bear coming, but you was lazy to shot on it so you shooted yourself`)
client.rmv(message.author.id, await client.bal(message.author.id))
                               } else {
                                message.reply(`You saw a bear coming, but you was lazy to shot on it so you shooted yourself\nBut your <:life:820648609741668392> Life Shield saved you.`)
ata.LifeShield -= 1
ata.save()
                               }
           }else if(random < 20){
               const n = Math.floor(Math.random() * 3)
               if(n == 0){
message.reply(`You didnt caught anything but atleast you found a 1 Laptop`)
ata.Laptop += 1
ata.save()
               } else if(n == 1){
                message.reply(`You didnt caught anything but atleast you found a <:spacescript:814122006437167134> 1 Space Script`)
                ata.SpaceScript += 1
                ata.save()
               } else if(n == 2){
                message.reply(`You didnt caught anything but atleast you found a <:life:820648609741668392> 1 Life Shield`)
ata.LifeShield += 1
ata.save()
               } else if(n == 3){
                message.reply(`You didnt caught anything but atleast you found a <:Sniper:818044125580492800> 1 Sniper`)
ata.Sniper += 1
ata.save()
               }
        } else if(random < 30){
    message.reply(`You went hunting and caught :bear: 1 bear`)
    ata.Bear += 1
    ata.save()
        } else if(random < 40){
            message.reply(`You went hunting and caught :eagle: ${rm} eagles`)
            ata.Eagle += rm
            ata.save()
               
           } else if(random < 70){
            message.reply(`You went hunting and caught :tiger: ${rm} tigers`)
            ata.Tiger += rm
            ata.save()
           } else if(random < 80){
               message.reply(`You went hunting and caught 🦊 ${rm} foxes`)
           ata.Fox += rm
           ata.save()
           } else if(random < 101){
            message.reply(`You went hunting but didnt caught anything :rolling_eyes:`)
           }}})
           
};

module.exports.help = {
    aliases: [],
      name: 'hunt',
      description: 'Hunting animals',
      usage: config.prefix + 'hunt',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 50000,
};
