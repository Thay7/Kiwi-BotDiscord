const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client){
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }
   
  async run({msg, client, user}){

    const thay = client.users.cache.find(user => user.id == '712134111292293210')

    const ownerBot = (`a minha criadora é a ${thay}`)

    return msg.reply(ownerBot)
    
  }
}
  