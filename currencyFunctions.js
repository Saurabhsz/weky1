const { Message } = require('discord.js')

module.exports = async (bot, message) => {
const eco = require('./schemas/Money')
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
if(err) console.log(err)
if(data){
  data.Wallet += amount
  data.save()
} else {
    bot.createBalance(id)
}
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
  bot.item = (id, item, amount) => {
    const inventory = require("./schemas/inventory")
    inventory.findOne({
      User: id
  }, 
  (err, data) => {
      if(!data) {
bot.createProfile(id)
      } else {
          if(amount > data[item] ){
            return false
          }else if(amount < data[item] ){
            return true
          }
      }
   })
}
}