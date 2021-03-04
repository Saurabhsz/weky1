const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const Money = require("../schemas/Money")
Money.findOne({
    id: message.author.id
},
 (err, data) => {
    if(err) console.log(err);
    if(!data){
    const newD = new Money({
        id: message.author.id
    })
    newD.save();
} else {
var resp = "";

if(data.Laptop != 0) resp += `**<:laptop:814147340947554314> Laptop - ** ${data.Laptop}\n`
if(data.banknote != 0) resp += `**<:spacescript:814122006437167134> Space Script - ** ${data.banknote}\n`
if(data.wekymoon != 0) resp += `**🌝 Weky's Moon - ** ${data.wekymoon}\n`
if(data.wekyripoff != 0) resp += `**<:ripoff:815192242331451423> Weky's Rip Off - ** ${data.wekyripoff}\n`
if(data.fishing != 0) resp += `**<:plastichand:816373822784667719> Plastic Hand - ** ${data.fishing}\n`
if(data.fish != 0) resp += `**<:fish:816367967733547038> Fish - ** ${data.fish}\n`
if(data.fishrare != 0) resp += `**<:rare_fish:816368038110035999> Rare Fish - ** ${data.fishrare}\n`
if(data.silvermoon != 0) resp += `**<:silver_moon:816983800260067338> Silver Moon - ** ${data.silvermoon}\n`
if(data.Lootbox != 0) resp += `**<:gotcha_box:816990104803475457> Gotcha Lootbox - ** ${data.Lootbox}\n`
const { MessageEmbed } = require("discord.js");
        const Embed = new MessageEmbed()
        .setTitle(`${message.author.username}\' Inventory`)
        .setDescription(resp)
        message.channel.send(Embed)
}
})
}
module.exports.config = {
    name: "invetory",
    description: "see your inventory!",
    usage: "..inventory",
    accessableby: "Members",
    aliases: ["inv"]
}