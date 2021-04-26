
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

const { MessageEmbed } = require("discord.js")
      if(message.content.includes(',')) return message.channel.send(`In your message CAN'T be . and ,`)
    var number = parseFloat(args[0])
    if(!number) return message.channel.send(`Please specify how much you want to bet!`)
    if (isNaN(number)) return message.channel.send("Thats not a valid number");
    if(number > await client.bal(message.author.id)) {
        return message.channel.send("You dont have that much money why you bad at me bro :/");
    }
    if(number < 100){
      return message.channel.send("You can gamble only 100 above coins")
  }
  if(number > 500000){
      return message.channel.send(`You can't gamble more than 500,000 coins.`)
  }
    const arrray = [
      "2.1",
      "2.2",
      "2.3",
      "2.4",
      "2.5",
      "2.9",
      "3.0",
      "3.1",
      "3.2",
      "3.3",
      "3.4",
      "3.5"]
    const r =  parseInt(Math.floor(Math.random() * arrray.length));
    const okk = arrray[r]
const Discord = require('discord.js')
const slots = ['<:slotsGrapes:825973525755068437>', '<:slotsCherries:825972970190012426>', '<:slotsLemon:825972330311712779>'];
const slotOne = slots[Math.floor(Math.random() * slots.length)];
const slotTwo = slots[Math.floor(Math.random() * slots.length)];
const slotThree = slots[Math.floor(Math.random() * slots.length)];
const slotfour = slots[Math.floor(Math.random() * slots.length)];
const slotfive = slots[Math.floor(Math.random() * slots.length)];
const slotsix = slots[Math.floor(Math.random() * slots.length)];
const slotseven = slots[Math.floor(Math.random() * slots.length)];
const sloteight = slots[Math.floor(Math.random() * slots.length)];
const slotnine = slots[Math.floor(Math.random() * slots.length)];
if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
    const won = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(`Slots are rollin'...`,
        `\n|${slotOne}|${slotTwo}|${slotThree} |\n|———-—|\n` +
        `|${slotfour}|${slotfive}|${slotsix} |\n|———-—|\n` +
        `|${slotseven}|${sloteight}|${slotnine} |\n`)
        .addField(`Details:`,`Won: ${Math.round(number*okk)};\nGambled: ${Math.round(number)};\nMupliplier: x${okk}\nNew balance: ${await client.bal(message.author.id)}`)
        .setFooter("Winner");
    message.channel.send(won)
    client.add(message.author.id, Math.round(number*okk), message)
    client.ADDsWin(message.author.id)
} else {
    const lost = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`Slots are rollin'...`, 
    `\n|${slotOne}${slotTwo}${slotThree} |\n|———-—|\n` +
    `|${slotfour}${slotfive}${slotsix} |\n|———-—|\n` +
    `|${slotseven}${sloteight}${slotnine} |\n`)
    .addField(`Details`,`Lost : ${Math.round(number)}`)
    .setFooter("Loser");
    message.channel.send(lost)
    client.rmv(message.author.id, Math.round(number))
}
};

module.exports.help = {
    aliases: ['slot'],
      name: 'slots',
      description: 'Betting coins in slots game.',
      usage: config.prefix + 'slots ~amount~',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};