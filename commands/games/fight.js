
module.exports = {
  name: "fight",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..fight',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {  
    const challenger = message.author;
    const oppenent = message.mentions.users.first();
    if (!oppenent) return message.channel.send(`Please mention who you want to fight`);
    if(oppenent.bot) return message.channel.send(`Idk how is in your planet, but in mine, bots dont fight`)
    const question = await message.channel.send(`${oppenent}, do you want to fight with ${challenger}?`);
  
    ['✅', '❌'].forEach(async el => await question.react(el));
  
    const filter = (reaction, user) => ['✅', '❌'].includes(reaction.emoji.name) && user.id === oppenent.id;
  
    const response = await question.awaitReactions(filter, { max: 1, time: 60000 });
    const reaction = response.first();
  
    if (reaction.emoji.name === '❌') { return question.edit("Cancelled this fight."); } else {
      const challengerHealth = 100;
      const oppenentHealth = 100;
  
      const challengerLastAttack = 'heal';
      const oppenentLastAttack = 'heal';
  
      const gameData = [
        { member: challenger, health: challengerHealth, lastAttack: challengerLastAttack },
        { member: oppenent, health: oppenentHealth, lastAttack: oppenentLastAttack }
      ];
  
      let player = 0;
  
      const checkHealth = (member) => {
        if (gameData[member].health <= 0) return true;
        else return false;
      };
  
      await message.channel.send(`${challenger}, you go first\n Please choose: \`attack\` or \`heal\``);
      const gameFilter = m => m.author.id === challenger.id || m.author.id === oppenent.id;
      const gameCollector = message.channel.createMessageCollector(gameFilter);
  
      gameCollector.on('collect', msg => {
        if (msg.author.id === gameData[player].member.id) {
          if (!checkHealth(player)) {
            const selection = msg.content.toLowerCase();
            if (selection !== 'attack' && selection !== 'heal') {
              return message.channel.send('Not a valid thing.\nPlease choose: \`attack\` or \`heal\`');
            }
  
            if (selection === 'attack') {
              // eslint-disable-next-line no-mixed-operators
              let randNumb = Math.floor(Math.random() * (60 - 12) + 12);
              const tempPlayer = (player + 1) % 2;
              if (gameData[tempPlayer].lastAttack === 'heal') randNumb = Math.floor(randNumb / 2);
              gameData[tempPlayer].health -= randNumb;
              gameData[player].lastAttack = 'attack';
              message.channel.send(`${gameData[player].member} — ${gameData[player].health} HP, has attacked you and dealt **${randNumb} damange**`);
              message.channel.send(`${gameData[tempPlayer].member} — ${gameData[tempPlayer].health} HP, Please choose: \`attack\` or \`heal\`.`);
              player = (player + 1) % 2;
            } else if (selection === 'heal') {
              let randrNumb = Math.floor(Math.random() * (20 - 12) + 12);
              const tempPlayer = (player + 1) % 2;
              if (gameData[tempPlayer].lastAttack === 'heal') randNumb = Math.floor(randrNumb / 2);
              gameData[player].health += randrNumb;
              gameData[player].lastAttack = 'attack';
              message.channel.send(`${gameData[player].member} — ${gameData[player].health} HP, has healed **${randrNumb} HP**`);
              message.channel.send(`${gameData[tempPlayer].member} — ${gameData[tempPlayer].health} HP, Please choose: \`attack\` or \`heal\``);
              player = (player + 1) % 2;
            }
  
            if (checkHealth(player)) {
              gameCollector.stop();
              const tempPlayer = (player + 1) % 2;
              message.channel.send(`🏆 Game ended!, ${gameData[tempPlayer].member} has won`);
            }
          } else {
            message.channel.send(`🏆 ${gameData[player].member} has won the game!`);
          }
        }
      });
    }   
  }
}