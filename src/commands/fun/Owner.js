const Command = require('../../lib/strucutures/Command')
const { Message } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client){
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }
   
  async run({ args, channel, author, msg}){

    const ownerBot = client.application.owner.map (g => `${`Minha criadora é a \`${g.name}`}`)
    
    msg = ownerBot

    channel.send(msg)
    
  }
}
  