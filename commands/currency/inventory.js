
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const Discord = require("discord.js");
const inventory = require("../../schemas/inventory")
        let embed1, embed2, embed3, embed4, embed5, pages, member, membe
        member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author
        if(member.id === message.author.id){
            membe = member.tag
        } else {
            membe = member.user.tag
        }
inventory.findOne({ User: member.id }, async(err, ata) => {
    if(!ata) {
message.reply(new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(`Empty :(`).setColor("RANDOM"))
client.createProfile(message.author.id)    
}


        var s = ""
        if(ata.Laptop) s+=`<:laptop:814147340947554314> **Laptop**s — ${ata.Laptop}\nType: *Command-Runner*\n`
        if(ata.SpaceScript) s+=`<:spacescript:814122006437167134> **Space Script**s — ${ata.SpaceScript}\nType: *Power*\n`
        if(ata.Phone) s+=`📱 **Phone**s — ${ata.Phone}\nType: *Command-Runner*\n`
        if(ata.FaceButLie) s+=`<:Facebutlie:827130020286955530> **Face But Lie**s — ${ata.FaceButLie}\nType: *Collectable*\n`
        if(ata.Bread) s+=`<:bready:820948539823226901> **Bread**s — ${ata.Bread}\nType: *Power*\n`
        
        var S = ""
        if(ata.SliceOfTomato)S+=`<:SliceOfTomato:829653483162304522> **Slice Of Tomato**es — ${ata.SliceOfTomato}\nType: *Collectable*\n`
        if(ata.PlasticHand) S+=`<:plastichand:816373822784667719> **Plastic Hand**s — ${ata.PlasticHand}\nType: *Command-Runner*\n`
        if(ata.Sniper) S+=`<:Sniper:818044125580492800> **Sniper**s — ${ata.Sniper}\nType: *Command-Runner*\n`
        if(ata.LifeShield) S+=`<:life:820648609741668392> **Life Shield**s — ${ata.LifeShield}\nType: *Power*\n`
        if(ata.EnergyDrink) S+=`<:energydrink:826100589426769990> **Energy Drink**s — ${ata.EnergyDrink}\nType: *Power*\n`
        
        var E = ""
        if(ata.GotchaBox) E+=`<:gotcha_box:816990104803475457> **Gotcha Box**es — ${ata.GotchaBox}\nType: *Collectable*\n`
        if(ata.CommonBox) E+=`<:common_box:832589376746815499> **Common Box**es — ${ata.CommonBox}\nType: *Collectable*\n`
        if(ata.Fox) E+=`🦊 **Fox**es — ${ata.Fox}\nType: *Collectable*\n`
        if(ata.Eagle) E+=`🦅 **Eagle**s — ${ata.Eagle}\nType: *Collectable*\n`
        if(ata.Tiger) E+=`🐯 **Tiger**s — ${ata.Tiger}\nType: *Collectable*\n`
        
        var O = ""
        if(ata.Bear) O+=`🐻 **Bear**s — ${ata.Bear}\nType: *Collectable*\n`
        if(ata.Fish) O+=`<:fish:816367967733547038> **Fish**es — ${ata.Fish}\nType: *Collectable*\n`
        if(ata.RareFish) O+=`<:rare_fish:816368038110035999> **Rare Fish**es — ${ata.RareFish}\nType: *Collectable*\n`
        if(ata.LegendaryFish) O+=`<:legedary_fish:820642438360072192> **Legendary Fish**es — ${ata.LegendaryFish}\nType: *Collectable*\n`
        if(ata.WekyMoon) O+=`🌝 **Weky Moon**s — ${ata.WekyMoon}\nType: *Collectable*\n`
        
        var Q = ""
        if(ata.SilverMoon) Q+=`<:silver_moon:816983800260067338> **Silver Moon**s — ${ata.SilverMoon}\nType: *Collectable*\n`
        if(ata.WekyRipOff) Q+=`<:ripoff:815192242331451423> **Weky Rip Off**s — ${ata.WekyRipOff}\nType: *Collectable*\n`
        if(ata.WekyArmor) Q+=`<:wekyArmor:842330972305227777> **Weky Armor**s — ${ata.WekyArmor}\nType: *Collectable*\n`
        embed1 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(s).setColor("RANDOM")
        embed2 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(S).setColor("RANDOM")
        embed3 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(E).setColor("RANDOM")
        embed4 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(O).setColor("RANDOM")
        embed5 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(Q).setColor("RANDOM")
        pages = [embed1, embed2, embed3, embed4, embed5]
        const recon = require("reconlx");
        const ReactionPages = recon.ReactionPages;
        const textPageChange = false;
        const emojis = ["🤛", "🤜"];
        const time = 30000;
        ReactionPages(message, pages, textPageChange, emojis, time);
})
};

module.exports.help = {
    aliases: ['inv'],
      name: 'inventory',
      description: 'Displaying all your items',
      usage: config.prefix + 'inventory {none OR @user}',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};