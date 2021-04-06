module.exports = {
    name: "fish",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..fish',
    cooldown: 45, //seconds(s),
    cooldowny: 35,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const inventory = require("../../schemas/inventory")
inventory.findOne({ User: message.author.id }, async (err, data) => {
            if(0 >= data.PlasticHand) {
        return message.channel.send(`U dont have a Plastic Hand what a poor`);
        } else {
            const random = Math.floor(Math.random() * 101)
            const rando = Math.floor(Math.random() * 3)+1
if(random < 7){
                    const O = [
                        "yohoho i love barnacles",
                        "yar yar yar",
                        "shut up fish im gonna kill you",
                        "imma just roll here"
                    ]
const rando = Math.floor(Math.random() * O.length)
const ra = O[rando]
message.reply(`The fish is too strong,oh nyo. Type this sentence to make him to lick your hook.YOU HAVE 10S TO TYPE THAT\nType: \`${ra}\``)
                try {
                    let msgs = await message.channel.awaitMessages(
                        (u2) => u2.author.id === message.author.id,
                        { time: 10000, max: 1, errors: ["time"] }
                      );
if (msgs.first().content == ra) {
message.reply(`You made that fish to lick that hook, and he died because you pissed on the hook, you got <:legedary_fish:820642438360072192> 1 Legendary Fish`)
bot.addItem(message.author.id, "LegendaryFish", 1)
} else {
    if(data.LifeShield == 0){
        message.channel.send(`The fish has been killed you, idk how but yes, you died`)
bot.rmv(message.author.id, await bot.bal(message.author.id))
} else {
message.channel.send(`The fish has been killed you, idk how but yes, you died\nBut your <:life:820648609741668392> Life Shield saved you.`)
bot.removeItem(message.author.id, "LifeShield", 1)                                                  
}
}
} catch (e) {
if(data.LifeShield== 0){
message.channel.send(`The fish has been killed you, idk how but yes, you died`)
bot.rmv(message.author.id, await bot.bal(message.author.id))
}else{
message.channel.send(`The fish has been killed you, idk how but yes, you died\nBut your <:life:820648609741668392> Life Shield saved you.`)
bot.removeItem(message.author.id, "LifeShield", 1)                                                  
}
}                                          
} else if(random < 20){
message.reply(`You caught <:rare_fish:816368038110035999> 1 Rare Fish.`)
bot.addItem(message.author.id, "RareFish", 1)
} else if(random < 80){
   message.reply(`You caught <:fish:816367967733547038> ${rando} fishes.`)
   bot.addItem(message.author.id, "Fish", rando)
} else if(random < 101){
                    message.reply(`Lol you didnt fished anything.`)
                }}})}}