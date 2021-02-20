const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {
    const fetch = require('node-fetch');
    const res = await (await fetch('https://api.monkedev.com/fun/8ball?key=' + 'scNyfoysHunZd79reAL5VEsQV')).json();
    console.log(res);
}

module.exports.config = {
    name: "80s",
    description: "80s vibe go brrrrrr",
    usage: "/80s @user",
    accessableby: "Members",
    aliases: ["80seconds"]
}