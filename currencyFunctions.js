const { Message } = require('discord.js')

module.exports = async (bot, message) => {
const eco = require('./schemas/Money')
bot.createProfile = (id) => {
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
bot.createBalance = (id) => {
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
  bot.bal = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.Wallet)
  })
  bot.space = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.space)
  })
  bot.Bank = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {bot.createBalance(id)}
    ful(data.Bank)
  })
//Adding money to the user wallet
bot.add = (id, amount) => {
  eco.findOne({ id }, async(err, data) => {
    bot.on('message', async message => {
    var brr = ''
if(err) console.log(err)
if(data){
const inventory = require("./schemas/inventory")
inventory.findOne({User: id},(err, b) => {
  if(!b) {
bot.createProfile(id)
  }
if(b.BoosterEffect !== 0){ brr += `0.10`
    b.BoosterEffect -= 1;
    b.save()
}
if(message.guild.id === '830003680983646278') {brr += `0.30`}
if(brr === ''){
    data.Wallet += amount
    data.save()
    console.log(brr)
} else {
    data.Wallet += Math.round(amount*brr)
    data.save()
    console.log(brr)
}
})
} else {
  bot.createBalance(id)
}
    })
  })
}
//Removing money from the user wallet
  bot.rmv = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.Wallet -= amount
  data.save()
} else {
    bot.createBalance(id)
}
    })
  }
//Adding space into bank
  bot.addSpace = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.space += amount
  data.save()
} else {
    bot.createBalance(id)
}
    })
  }
//Removing space from bank
  bot.removeSpace = (id, amount) => {
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