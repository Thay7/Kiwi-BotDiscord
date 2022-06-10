const Command = require('../../lib/strucutures/Command')
const { Message } = require('discord.js')

module.exports = class Say extends Command {
  constructor(client){
    super(client)
    this.name = 'farda'
    this.aliases = ['farda']
    this.category = 'fun'
  }
   
  run({ args, channel, author, msg}){
    if(message.content === "Farda") return channel.send(`Kalebe`)
  }
}