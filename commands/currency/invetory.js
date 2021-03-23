const Discord = require("discord.js");
module.exports = {
    name: "inventory",
    aliases: ["inv"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..inventory',
    cooldown: 6, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const member = message.mentions.users.first() || message.author;
    const Money = require("../../schemas/Money")
Money.findOne({
    id: member.id
},
 (err, data) => {
    if(err) console.log(err);
    if(!data){
    const newD = new Money({
        id: member.id
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
if(data.Lootbox != 0) resp += `**<:gotcha_box:816990104803475457> Gotcha Box - ** ${data.Lootbox}\n`
if(data.silvermoon != 0) resp += `**<:silver_moon:816983800260067338> Silver Moon - ** ${data.silvermoon}\n`
if(data.gun != 0) resp += `**<:Sniper:818044125580492800> Sniper - ** ${data.gun}\n`
if(data.fishleg != 0) resp += `**<:legedary_fish:820642438360072192> Legendary Fish - ** ${data.fishleg}\n`
if(data.bread != 0) resp += `**<:bready:820948539823226901> Bread - ** ${data.bread}\n`
if(data.life != 0) resp += `**<:life:820648609741668392> Life Shield - ** ${data.life}\n`
if(data.fox != 0) resp += `**:fox: Foxes - ** ${data.fox}\n`
if(data.tiger != 0) resp += `**:tiger: Tigers - ** ${data.tiger}\n`
if(data.eagle != 0) resp += `**:eagle: Eagles - ** ${data.eagle}\n`
if(data.bear != 0) resp += `**:bear: Bears - ** ${data.bear}\n`
const { MessageEmbed } = require("discord.js");
        const Embed = new MessageEmbed()
        .setTitle(`${member.username}\' Inventory`)
        .setDescription(resp)
        message.channel.send(Embed)
}
})
}
}