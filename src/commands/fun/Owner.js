const Command = require('../../lib/strucutures/Command')
const { Message } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client){
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }
   
  async run({ user, msg, client}){

    const ownerBot = `A minha criadora é a ${712134111292293210}`

    return msg.reply(ownerBot)
    
  }
}
  