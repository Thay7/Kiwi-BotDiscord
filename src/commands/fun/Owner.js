const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client){
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }
   
  async run({ user, msg, client}){

    const ownerBot = `a minha criadora é a ${ClientApplication.name}`

    return msg.reply(ownerBot)
    
  }
}
  