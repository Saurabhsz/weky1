const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "gift",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..gift amount <item> @user',
  cooldown: 15, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
if(!member) return message.channel.send(`Please use this format:\n\`..gift amount <item> @user\``)
    var num = parseFloat(args[0])
    if(!num) return message.channel.send(`Please use this format:\n\`..gift amount <item> @user\``)
    const Money = require('../../schemas/Money')

    if(!args[1]) return message.channel.send(`Please use this format:\n\`..gift amount <item> @user\``)
if(args[1] === 'laptop') {

Money.findOne({
  id: message.author.id
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: message.author.id
    });
    newD.save();
    let user1 = message.guild.members.cache.get(message.author.id);
    user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else if(num > data.Laptop) {
    return message.channel.send("You dont have " + num + " Laptops");
  } else {
   data.Laptop -= num
   data.save();
   const e = data.Laptop
   Money.findOne({
    id: member.id
  }, (err,data) => {
    if(err) console.log(err);
    if(!data){
      newD = new Money({
        id: member.id
      });
      newD.save();
    } else {
    
     data.Laptop += num
     data.save()
     const ee = data.Laptop
   message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} laptops**, you have now ${e} laptops and they have ${ee}`)
    }
  });
  }
});
} else if(args[1] === 'space' || args[1] === 'spacescript' || args[1] === 'script') {
  Money.findOne({
    id: message.author.id
  }, (err,data) => {
    if(err) console.log(err);
    if(!data){
      newD = new Money({
        id: message.author.id
      });
      newD.save();
      let user11 = message.guild.members.cache.get(message.author.id);
      user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
    } else if(num > data.banknote) {
      return message.channel.send("You dont have " + num + " Space Scripts");
    } else {
     data.banknote -= num
     data.save();
     const e = data.banknote
     Money.findOne({
      id: member.id
    }, (err,data) => {
      if(err) console.log(err);
      if(!data){
        newD = new Money({
          id: member.id
        });
        newD.save();
      } else {
      
       data.banknote += num
       data.save()
       const ee = data.banknote
     message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Space Scripts**, you have now ${e} Space Scripts and they have ${ee}`)
      }
    });
    }
  });
  }else if(args[1] === 'sniper') {
    Money.findOne({
      id: message.author.id
    }, (err,data) => {
      if(err) console.log(err);
      if(!data){
        newD = new Money({
          id: message.author.id
        });
        newD.save();
        let user1 = message.guild.members.cache.get(message.author.id);
        user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
      } else if(num > data.gun) {
        return message.channel.send("You dont have " + num + " Snipers");
      } else {
       data.gun -= num
       data.save();
       const e = data.gun
       Money.findOne({
        id: member.id
      }, (err,data) => {
        if(err) console.log(err);
        if(!data){
          newD = new Money({
            id: member.id
          });
          newD.save();
        } else {
        
         data.gun += num
         data.save()
         const ee = data.gun
       message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Snipers**, you have now ${e} snipers and they have ${ee}`)
        }
      });
      }
    });
    }else if(args[1] === 'gotcha' || args[1] === 'gotchabox' || args[1] === 'gbox') {
      Money.findOne({
        id: message.author.id
      }, (err,data) => {
        if(err) console.log(err);
        if(!data){
          newD = new Money({
            id: message.author.id
          });
          newD.save();
          let user1 = message.guild.members.cache.get(message.author.id);
          user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
        } else if(num > data.Lootbox) {
          return message.channel.send("You dont have " + num + " Gotcha boxes");
        } else {
         data.Lootbox -= num
         data.save();
         const e = data.Lootbox
         Money.findOne({
          id: member.id
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
            newD = new Money({
              id: member.id
            });
            newD.save();
          } else {
          
           data.Lootbox += num
           data.save()
           const ee = data.Lootbox
         message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Gotcha boxes**, you have now ${e} gotcha boxes and they have ${ee}`)
          }
        });
        }
      });
      }else if(args[1] === 'plastic' || args[1] === 'hand' || args[1] === 'plastichand') {
        Money.findOne({
          id: message.author.id
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
            newD = new Money({
              id: message.author.id
            });
            newD.save();
            let user1 = message.guild.members.cache.get(message.author.id);
            user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
          } else if(num > data.fishing) {
            return message.channel.send("You dont have " + num + " Plastic hands");
          } else {
           data.fishing -= num
           data.save();
           const e = data.fishing
           Money.findOne({
            id: member.id
          }, (err,data) => {
            if(err) console.log(err);
            if(!data){
              newD = new Money({
                id: member.id
              });
              newD.save();
            } else {
            
             data.fishing += num
             data.save()
             const ee = data.fishing
           message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Plastic Hands**, you have now ${e} plastic hands and they have ${ee}`)
            }
          });
          }
        });
        }else if(args[1] === 'eagle' || args[1] === 'eg') {
          Money.findOne({
            id: message.author.id
          }, (err,data) => {
            if(err) console.log(err);
            if(!data){
              newD = new Money({
                id: message.author.id
              });
              newD.save();
              let user1 = message.guild.members.cache.get(message.author.id);
              user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else if(num > data.eagle) {
              return message.channel.send("You dont have " + num + " Eagles");
            } else {
             data.eagle -= num
             data.save();
             const e = data.eagle
             Money.findOne({
              id: member.id
            }, (err,data) => {
              if(err) console.log(err);
              if(!data){
                newD = new Money({
                  id: member.id
                });
                newD.save();
              } else {
              
               data.eagle += num
               data.save()
               const ee = data.eagle
             message.channel.send(`${message.author.username} gifted ${member} **${num} Eagles**, you have now ${e} eagles and they have ${ee}`)
              }
            });
            }
          });
          }else if(args[1] === 'fox' || args[1] === 'fx') {
            Money.findOne({
              id: message.author.id
            }, (err,data) => {
              if(err) console.log(err);
              if(!data){
                newD = new Money({
                  id: message.author.id
                });
                newD.save();
                let user1 = message.guild.members.cache.get(message.author.id);
                user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
              } else if(num > data.fox) {
                return message.channel.send("You dont have " + num + " Foxes");
              } else {
               data.fox -= num
               data.save();
               const e = data.fox
               Money.findOne({
                id: member.id
              }, (err,data) => {
                if(err) console.log(err);
                if(!data){
                  newD = new Money({
                    id: member.id
                  });
                  newD.save();
                } else {
                
                 data.fox += num
                 data.save()
                 const ee = data.fox
               message.channel.send(`${message.author.username} gifted ${member} **${num} Foxes**, you have now ${e} foxes and they have ${ee}`)
                }
              });
              }
            });
            }else if(args[1] === 'tiger' || args[1] === 'tig') {
              Money.findOne({
                id: message.author.id
              }, (err,data) => {
                if(err) console.log(err);
                if(!data){
                  newD = new Money({
                    id: message.author.id
                  });
                  newD.save();
                  let user1 = message.guild.members.cache.get(message.author.id);
                  user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
                } else if(num > data.tiger) {
                  return message.channel.send("You dont have " + num + " Tigers");
                } else {
                 data.tiger -= num
                 data.save();
                 const e = data.tiger
                 Money.findOne({
                  id: member.id
                }, (err,data) => {
                  if(err) console.log(err);
                  if(!data){
                    newD = new Money({
                      id: member.id
                    });
                    newD.save();
                  } else {
                  
                   data.tiger += num
                   data.save()
                   const ee = data.tiger
                 message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Tigers**, you have now ${e} tigers and they have ${ee}`)
                  }
                });
                }
              });
              }else if(args[1] === 'moon' || args[1] === 'wmoon' || args[1] === 'wekymoon') {
                Money.findOne({
                  id: message.author.id
                }, (err,data) => {
                  if(err) console.log(err);
                  if(!data){
                    newD = new Money({
                      id: message.author.id
                    });
                    newD.save();
                    let user1 = message.guild.members.cache.get(message.author.id);
                    user1.user.send(`Hello , **thanks for starting using Weky Bot**!\nYou got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
                  } else if(num > data.wekymoon) {
                    return message.channel.send("You dont have " + num + " Weky Moons");
                  } else {
                   data.wekymoon -= num
                   data.save();
                   const e = data.wekymoon
                   Money.findOne({
                    id: member.id
                  }, (err,data) => {
                    if(err) console.log(err);
                    if(!data){
                      newD = new Money({
                        id: member.id
                      });
                      newD.save();
                    } else {
                    
                     data.wekymoon += num
                     data.save()
                     const ee = data.wekymoon
                   message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Weky Moons**, you have now ${e} weky moons and they have ${ee}`)
                    }
                  });
                  }
                });
                }else if(args[1] === 'bear') {
                  Money.findOne({
                    id: message.author.id
                  }, (err,data) => {
                    if(err) console.log(err);
                    if(!data){
                      newD = new Money({
                        id: message.author.id
                      });
                      newD.save();
                      let user1 = message.guild.members.cache.get(message.author.id);
                      user1.user.send(`Hello , **thanks for starting using Weky Bot**!\nYou got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
                    } else if(num > data.bear) {
                      return message.channel.send("You dont have " + num + " Bears");
                    } else {
                     data.bear -= num
                     data.save();
                     const e = data.bear
                     Money.findOne({
                      id: member.id
                    }, (err,data) => {
                      if(err) console.log(err);
                      if(!data){
                        newD = new Money({
                          id: member.id
                        });
                        newD.save();
                      } else {
                      
                       data.bear += num
                       data.save()
                       const ee = data.bear
                     message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Bears**, you have now ${e} bears and they have ${ee}`)
                      }
                    });
                    }
                  });
                  }else if(args[1] === 'wekyrip' || args[1] === 'rip' || args[1] === 'wekyripoff' || args[1] === 'ripoff') {
                    Money.findOne({
                      id: message.author.id
                    }, (err,data) => {
                      if(err) console.log(err);
                      if(!data){
                        newD = new Money({
                          id: message.author.id
                        });
                        newD.save();
                        let user1 = message.guild.members.cache.get(message.author.id);
                        user1.user.send(`Hello , **thanks for starting using Weky Bot**!\nYou got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
                      } else if(num > data.wekyripoff) {
                        return message.channel.send("You dont have " + num + " Weky's Rip Off");
                      } else {
                       data.wekyripoff -= num
                       data.save();
                       const e = data.wekyripoff
                       Money.findOne({
                        id: member.id
                      }, (err,data) => {
                        if(err) console.log(err);
                        if(!data){
                          newD = new Money({
                            id: member.id
                          });
                          newD.save();
                        } else {
                        
                         data.wekyripoff += num
                         data.save()
                         const ee = data.wekyripoff
                       message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Weky's Rip Off**, you have now ${e} weky's rip off and they have ${ee}`)
                        }
                      });
                      }
                    });
                    }else if(args[1] === 'silvermoon' || args[1] === 'silver' || args[1] === 'smoon') {
                      Money.findOne({
                        id: message.author.id
                      }, (err,data) => {
                        if(err) console.log(err);
                        if(!data){
                          newD = new Money({
                            id: message.author.id
                          });
                          newD.save();
                          let user1 = message.guild.members.cache.get(message.author.id);
                          user1.user.send(`Hello , **thanks for starting using Weky Bot**!\nYou got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
                        } else if(num > data.silvermoon) {
                          return message.channel.send("You dont have " + num + " Silver Moons");
                        } else {
                         data.silvermoon -= num
                         data.save();
                         const e = data.silvermoon
                         Money.findOne({
                          id: member.id
                        }, (err,data) => {
                          if(err) console.log(err);
                          if(!data){
                            newD = new Money({
                              id: member.id
                            });
                            newD.save();
                          } else {
                          
                           data.silvermoon += num
                           data.save()
                           const ee = data.silvermoon
                         message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Silver Moons**, you have now ${e} silver moons and they have ${ee}`)
                          }
                        });
                        }
                      });
                      }else if(args[1] === 'fi' || args[1] === 'fish') {
                        Money.findOne({
                          id: message.author.id
                        }, (err,data) => {
                          if(err) console.log(err);
                          if(!data){
                            newD = new Money({
                              id: message.author.id
                            });
                            newD.save();
                            let user1 = message.guild.members.cache.get(message.author.id);
                            user1.user.send(`Hello , **thanks for starting using Weky Bot**!\nYou got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
                          } else if(num > data.fish) {
                            return message.channel.send("You dont have " + num + " Fishes");
                          } else {
                           data.fish -= num
                           data.save();
                           const e = data.fish
                           Money.findOne({
                            id: member.id
                          }, (err,data) => {
                            if(err) console.log(err);
                            if(!data){
                              newD = new Money({
                                id: member.id
                              });
                              newD.save();
                            } else {
                            
                             data.fish += num
                             data.save()
                             const ee = data.fish
                           message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Fishes**, you have now ${e} fishes and they have ${ee}`)
                            }
                          });
                          }
                        });
                        }else if(args[1] === 'fishrare' || args[1] === 'ratefish' || args[1] === 'rare') {
                          Money.findOne({
                            id: message.author.id
                          }, (err,data) => {
                            if(err) console.log(err);
                            if(!data){
                              newD = new Money({
                                id: message.author.id
                              });
                              newD.save();
                              let user1 = message.guild.members.cache.get(message.author.id);
                              user1.user.send(`Hello , **thanks for starting using Weky Bot**!\nYou got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
                            } else if(num > data.fishrare) {
                              return message.channel.send("You dont have " + num + " Rare Fishes");
                            } else {
                             data.fishrare -= num
                             data.save();
                             const e = data.fishrare
                             Money.findOne({
                              id: member.id
                            }, (err,data) => {
                              if(err) console.log(err);
                              if(!data){
                                newD = new Money({
                                  id: member.id
                                });
                                newD.save();
                              } else {
                              
                               data.silvermoon += num
                               data.save()
                               const ee = data.fishrare
                             message.channel.send(`<@` +message.author.id + `> gifted ${member} **${num} Rare Fishes**, you have now ${e} rare fishes and they have ${ee}`)
                              }
                            });
                            }
                          });
                          } else {
                              return message.channel.send(`There is no item called ${args[1]}...`)
                          }
  }
}