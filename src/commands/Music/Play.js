const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Play extends Command {
  constructor(client) {
    super(client)
    this.name = 'play'
    this.aliases = ['p']
    this.category = 'Música'
   }
}
run ({queue, channel, message, args}); {
 
}
