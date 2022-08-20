const Command = require('../../lib/strucutures/Command')
const { Message } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client){
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }
   
  run({ args, channel, author, msg}){
    if(!args[0]) return channel.send(`${author}, você precisa me dizer o que falar`).then(m => m.delete({ timeout: 5000 }))

    const ownerBot = client.application.owner.map (g => `${`Minha criadora é a \`${g.name}`}`)
    
    msg = ownerBot

    channel.send(msg)
    
  }
}
  