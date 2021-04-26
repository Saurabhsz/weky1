const { Message } = require('discord.js')

module.exports = async (client, message) => {
  const bot = client
  // bot.timer = (timestamp) => {
  //   const timeLeft = timestamp - Date.now();
  //   const days = Math.floor(timeLeft / 86400000);
  //   const hours = Math.floor(timeLeft / 3600000) - (days * 24);
  //   const minutes = Math.floor(timeLeft / 60000) - (days * 1440) - (hours * 60);
  //   const seconds = Math.floor(timeLeft / 1000) - (days * 86400) - (hours * 3600) - (minutes * 60);
  //   const mseconds = (timeLeft / 1000) - (days * 86400) - (hours * 3600) - (minutes * 60);
  //   let string = '';
  //   if (days) string = string + `${days} ${days == 1 ? 'day ' : 'days '}`;
  //   if (hours) string = string + `${hours} ${hours == 1 ? 'hour ' : 'hours '}`;
  //   if (minutes) string = string + `${minutes} ${minutes == 1 ? 'minute ' : 'minutes '}`;
  //   if (seconds) string = string + `${seconds} ${seconds == 1 ? 'second ' : 'seconds '}`;
  //   if (!string.length) string = `${mseconds.toFixed(1)} second`;
  //   return string;
  // };
const eco = require('./schemas/Money')
client.createProfile = (id) => {
  const inventory = require("./schemas/inventory")
  inventory.findOne({
    User: id
}, 
(err, data) => {
        new inventory({
            User: id
        }).save();
 })
}
// Creating balance document
client.createBalance = (id) => {
    const inventory = require("./schemas/Money")
    inventory.findOne({
      id: id
  }, 
  (err, data) => {
          new inventory({
              id: id
          }).save();
   })
  }
//Checking user's balance
client.bal = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.Wallet)
  })
  client.space = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.space)
  })
  client.Bank = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.Bank)
  })
//Adding money to the user wallet
client.add = (id, amount, message) => {
  eco.findOne({ id }, async(err, data) => {

var brr = 0

if(err) console.log(err)
if(data){
const inventory = require("./schemas/inventory")
inventory.findOne({User: id},(err, b) => {
  if(!b) {
    client.createProfile(id)
  }
if(b.BoosterEffect !== 0){
  brr += 0.10;
    b.BoosterEffect -= 1;
    b.save()
}
if(message.guild.id === '830003680983646278') {
  brr += 0.15
}
if (message.channel.name.includes('🌝')){
  brr += 0.01
}
if (message.channel.name.includes('weky')){
  brr += 0.01
}
if(data.premium === 1){
  brr += 0.25
}
if(brr === 0){
    data.Wallet += amount
    data.save()
} else {
    data.Wallet += Math.round(amount*brr+amount)
    data.save()
}
})
} else {
  client.createBalance(id)
}
  })
}
//Removing money from the user wallet
client.rmv = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.Wallet -= amount
  data.save()
} else {
  client.createBalance(id)
}
    })
  }
//Adding space into bank
client.addSpace = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.space += amount
  data.save()
} else {
  client.createBalance(id)
}
    })
  }
//Removing space from bank
client.removeSpace = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.space -= amount
  data.save()
} else {
  bot.createBalance(id)
}
    })
  }
//Adding money directlly in bank
  bot.addBankMoney = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.Bank += amount
  data.save()
} else {
    bot.createBalance(id)
}
    })
  }
//Removing money directlly from bank
  bot.removeBankMoney = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.Bank -= amount
} else {
    bot.createBalance(id)
}
data.save()
    })
  }
//Creating inventory document
//Adding item
  bot.addItem = (id, item, amount) => {
    const inventory = require("./schemas/inventory")
    inventory.findOne({
      User: id
  }, 
  (err, data) => {
      if(!data) {
bot.createProfile(id)
      } else {
          data[item] += amount
          data.save()
      }
   })
  }
  bot.voted = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
      const inventory = require("./schemas/inventory")
      inventory.findOne({User: id},(err, b) => {
        if(!b) {
      bot.createProfile(id)
        } else {
        b.SpaceScript += 3
        b.CommonBox += 2
        b.save()
          data.Wallet += 30000
          data.save()
        }
      })
      } else {
        bot.createBalance(id)
      }
        })
  }
//Removing item
  bot.removeItem = (id, item, amount) => {
    const inventory = require("./schemas/inventory")
    inventory.findOne({
      User: id
  }, 
  (err, data) => {
      if(!data) {
bot.createProfile(id)
      } else {
          data[item] -= amount
          data.save()
      }
   })
  }
  //counts
  bot.ADDcmdsUSED = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.usedCommands++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.ADDbjWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.blackjackWins++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.ADDfsWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.fasttypeWins++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.ADDfWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.fightWins++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.ADDsgWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.shuffleGuessWins++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.ADDtttWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.tictactoeWins++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.ADDtWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.triviaWins++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.ADDsWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.slotsWins++
        data.save()
      } else {
          bot.createBalance(id)
      }
          })
  }
  bot.cmdsUSED = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.usedCommands)
  })
  bot.bjWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.blackjackWins)
  })
  bot.fsWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.fasttypeWins)
  })
  bot.fWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.fightWins)
  })
  bot.sgWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.shuffleGuessWins)
  })
  bot.tttWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.tictactoeWins)
  })
  bot.tWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.triviaWins)
  })
  bot.sWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.slotsWins)
  })
}