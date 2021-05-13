const { Message } = require('discord.js')

module.exports = async (client, message) => {
const eco = require('./schemas/Money')
//Currency add-remove-display
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
client.bal = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.Wallet)
  })
client.space = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.space)
  })
client.Bank = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.Bank)
  })
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
client.removeSpace = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.space -= amount
  data.save()
} else {
  client.createBalance(id)
}
    })
  }
client.addBankMoney = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.Bank += amount
  data.save()
} else {
  client.createBalance(id)
}
    })
  }
client.removeBankMoney = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.Bank -= amount
} else {
    client.createBalance(id)
}
data.save()
    })
  }
//Inventory
client.addItem = (id, item, amount) => {
    const inventory = require("./schemas/inventory")
    inventory.findOne({
      User: id
  }, 
  (err, data) => {
      if(!data) {
client.createProfile(id)
      } else {
          data[item] += amount
          data.save()
      }
   })
  }
client.removeItem = (id, item, amount) => {
    const inventory = require("./schemas/inventory")
    inventory.findOne({
      User: id
  }, 
  (err, data) => {
      if(!data) {
client.createProfile(id)
      } else {
          data[item] -= amount
          data.save()
      }
   })
  }
// Misc
client.setStatus = (id, string) => {
    eco.findOne({ id }, async(err, data) => {
if(err) throw err
if(data){
  data.status = string
  data.save()
} else {
  client.createBalance(id)
}
    })
  }
client.status = async (id) => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    return data.status
  }
//Stats
client.ADDcmdsUSED = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.usedCommands++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDIQ = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.IQ += amount
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDEvilness = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.Evilness += amount
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDGoodness = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.Goodness += amount
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDbjWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.blackjackWins++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDfsWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.fasttypeWins++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDfWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.fightWins++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDsgWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.shuffleGuessWins++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDtttWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.tictactoeWins++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDtWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.triviaWins++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.ADDsWin = (id) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.slotsWins++
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.RMVIQ = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.IQ -= amount
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.RMVEvilness = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.Evilness -= amount
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
client.RMVGoodness = (id, amount) => {
    eco.findOne({ id }, async(err, data) => {
      if(err) console.log(err)
      if(data){
        data.Goodness -= amount
        data.save()
      } else {
          client.createBalance(id)
      }
          })
  }
//----------------------------
client.cmdsUSED = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.usedCommands)
  })
client.bjWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.blackjackWins)
  })
client.fsWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.fasttypeWins)
  })
client.fWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.fightWins)
  })
client.sgWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.shuffleGuessWins)
  })
client.tttWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.tictactoeWins)
  })
client.tWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.triviaWins)
  })
client.sWin = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.slotsWins)
  })
client.IQ = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.IQ)
  })
client.Evilness = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.Evilness)
  })
client.Goodness = (id) => new Promise(async ful => {
    const data = await eco.findOne({ id })
    if(!data) {client.createBalance(id)}
    ful(data.Goodness)
  })
}