const Command = require('../../lib/strucutures/Command')
const { Message } = require('discord.js')

module.exports = class Say extends Command {
  constructor(client){
    super(client)
    this.name = 'say'
    this.aliases = ['falar']
    this.category = 'fun'
  }
   
  run({ args, channel, author, msg}){
    if(!args[0]) return channel.send(`${author}, você precisa me dizer o que falar`).then(m => m.delete({ timeout: 5000 }))

    const mensagem = args.join(' ')

    channel.send(mensagem)
    msg.delete()
  }
}