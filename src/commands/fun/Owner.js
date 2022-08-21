const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client){
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }
   
  async run({msg, client}){

    const ownerBot = (`a minha criadora é a ${user => user.id == '712134111292293210'}`)

    return msg.reply(ownerBot)
    
  }
}
  