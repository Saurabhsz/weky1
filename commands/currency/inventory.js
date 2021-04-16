const Discord = require("discord.js");
const inventory = require("../../schemas/inventory")
const items = require("../../shopItems")
module.exports = {
    name: "inventory",
    aliases: ["inv"],
    dmOnly: false,
    guildOnly: true,
    usage: '..inventory @user',
    cooldown: 6,
    cooldowny: 3,
    guarded: true,
    permissions: ["NONE"],
    async execute(bot, message, args) {
        let embed1, embed2, embed3, embed4, embed5, pages, member, membe
        if(!member){
            member = message.author;
            membe = member.tag
        } else {
            member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])
            membe = member.user.tag
        }
inventory.findOne({ User: member.id }, async(err, data) => {
    if(!data) {
message.reply(new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(`Empty :(`).setColor("RANDOM"))
bot.createProfile(message.author.id)    
}


        var s = ""
        if(data.Laptop) s+=`<:laptop:814147340947554314> **Laptop**s — ${data.Laptop}\nType: *Command-Runner*\n`
        if(data.SpaceScript) s+=`<:spacescript:814122006437167134> **Space Script**s — ${data.SpaceScript}\nType: *Power*\n`
        if(data.Phone) s+=`📱 **Phone**s — ${data.Phone}\nType: *Command-Runner*\n`
        if(data.FaceButLie) s+=`<:Facebutlie:827130020286955530> **Face But Lie**s — ${data.FaceButLie}\nType: *Collectable*\n`
        if(data.Bread) s+=`<:bready:820948539823226901> **Bread**s — ${data.Bread}\nType: *Power*\n`
        
        var S = ""
        if(data.SliceOfTomato)S+=`<:SliceOfTomato:829653483162304522> **Slice Of Tomato**es — ${data.SliceOfTomato}\nType: *Collectable*\n`
        if(data.PlasticHand) S+=`<:plastichand:816373822784667719> **Plastic Hand**s — ${data.PlasticHand}\nType: *Command-Runner*\n`
        if(data.Sniper) S+=`<:Sniper:818044125580492800> **Sniper**s — ${data.Sniper}\nType: *Command-Runner*\n`
        if(data.LifeShield) S+=`<:life:820648609741668392> **Life Shield**s — ${data.LifeShield}\nType: *Power*\n`
        if(data.EnergyDrink) S+=`<:energydrink:826100589426769990> **Energy Drink**s — ${data.EnergyDrink}\nType: *Power*\n`
        
        var E = ""
        if(data.GotchaBox) E+=`<:gotcha_box:816990104803475457> **Gotcha Box**es — ${data.GotchaBox}\nType: *Collectable*\n`
        if(data.CommonBox) E+=`<:common_box:832589376746815499> **Common Box**es — ${data.CommonBox}\nType: *Collectable*\n`
        if(data.Fox) E+=`🦊 **Fox**es — ${data.Fox}\nType: *Collectable*\n`
        if(data.Eagle) E+=`🦅 **Eagle**s — ${data.Eagle}\nType: *Collectable*\n`
        if(data.Tiger) E+=`🐯 **Tiger**s — ${data.Tiger}\nType: *Collectable*\n`
        
        var O = ""
        if(data.Bear) O+=`🐻 **Bear**s — ${data.Bear}\nType: *Collectable*\n`
        if(data.Fish) O+=`<:fish:816367967733547038> **Fish**es — ${data.Fish}\nType: *Collectable*\n`
        if(data.RareFish) O+=`<:rare_fish:816368038110035999> **Rare Fish**es — ${data.RareFish}\nType: *Collectable*\n`
        if(data.LegendaryFish) O+=`<:legedary_fish:820642438360072192> **Legendary Fish**es — ${data.LegendaryFish}\nType: *Collectable*\n`
        if(data.WekyMoon) O+=`🌝 **Weky Moon**s — ${data.WekyMoon}\nType: *Collectable*\n`
        
        var Q = ""
        if(data.WekyRipOff) Q+=`<:ripoff:815192242331451423> **Weky Rip Off**s — ${data.WekyRipOff}\nType: *Collectable*\n`
        if(data.SilverMoon) Q+=`<:silver_moon:816983800260067338> **Silver Moon**s — ${data.SilverMoon}\nType: *Collectable*\n`
        embed1 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(s).setColor("RANDOM")
        embed2 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(S).setColor("RANDOM")
        embed3 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(E).setColor("RANDOM")
        embed4 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(O).setColor("RANDOM")
        embed5 = new Discord.MessageEmbed().setTitle(`${membe}'s inventory`).setDescription(Q).setColor("RANDOM")
        const recon = require("reconlx");
        const ReactionPages = recon.ReactionPages;
        if(s === "") pages = [embed2, embed3, embed4, embed5];
        if(S === "") pages = [embed1, embed3, embed4, embed5];
        if(E === "") pages = [embed1, embed2, embed4, embed5];
        if(O === "") pages = [embed1, embed2, embed3, embed5];
        if(Q === "") pages = [embed1, embed2, embed3, embed4];
        const textPageChange = false;
        const emojis = ["🤛 ", "🤜"];
        const time = 30000;
        ReactionPages(message, pages, textPageChange, emojis, time);
})
}
}