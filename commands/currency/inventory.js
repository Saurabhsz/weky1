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
    guarded: true,
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const member = message.mentions.users.first() || message.author;
inventory.findOne({ User: member.id }, async(err, data) => {
    if(!data) {
message.reply(new Discord.MessageEmbed().setTitle(`${member.username}'s inventory`).setDescription(`Empty :(`).setColor("RANDOM"))
bot.createProfile(message.author.id)    
}
        var s = ""
        if(data.Laptop) s+=`<:laptop:814147340947554314> **Laptop**s — ${data.Laptop}\n`
        if(data.Phone) s+=`📱 **Phone**s — ${data.Phone}\n`
        if(data.Bread) s+=`<:bready:820948539823226901> **Bread**s — ${data.Bread}\n`
        if(data.PlasticHand) s+=`<:plastic_hand:816373271569498173> **Plastic Hand**s — ${data.PlasticHand}\n`
        if(data.LifeShield) s+=`<:life:820648609741668392> **Life Shield**s — ${data.Phone}\n`
        if(data.GotchaBox) s+=`<:gotcha_box:816990104803475457> **Gotcha Box**es — ${data.GotchaBox}\n`
        if(data.Fox) s+=`🦊 **Fox**es — ${data.Fox}\n`
        if(data.Eagle) s+=`🦅 **Eagle**s — ${data.Eagle}\n`
        if(data.Tiger) s+=`🐯 **Tiger**s — ${data.Tiger}\n`
        if(data.Bear) s+=`🐻 **Bear**s — ${data.Bear}\n`
        if(data.Fish) s+=`<:fish:816367967733547038> **Fish**es — ${data.Fish}\n`
        if(data.RareFish) s+=`<:rare_fish:816368038110035999> **Rare Fish**es — ${data.RareFish}\n`
        if(data.LegendaryFish) s+=`<:legedary_fish:820642438360072192> **Legendary Fish**es — ${data.LegendaryFish}\n`
        if(data.Bread) s+=`<:bready:820948539823226901> **Bread**es — ${data.Bread}\n`
        if(data.WekyMoon) s+=`🌝 **Weky Moon**s — ${data.WekyMoon}\n`
        if(data.WekyRipOff) s+=`<:ripoff:815192242331451423> **Weky Rip Off**s — ${data.WekyRipOff}\n`
        if(data.SilverMoon) s+=`<:silver_moon:816983800260067338> **Silver Moon**s — ${data.SilverMoon}\n`
    message.reply(new Discord.MessageEmbed().setTitle(`${member.username}'s inventory`).setDescription(s))
})
}
}