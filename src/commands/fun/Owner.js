const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client){
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }
   
  async run({ username, msg, owner}){


    const ownerBot = (`a minha criadora é a ${owner.username}`)

    return msg.reply(ownerBot)
    
  }
}
  