/* eslint-disable quotes */
const Discord = require('discord.js')
const Command = require('../../lib/strucutures/Command')

module.exports = class guilds extends Command {
  constructor(client) {
    super(client)
    this.name = 'guilds'
    this.aliases = ['servers']
    this.category = 'utils'
  }

  async run ({members, client, size, channel}) {
      
    const guildArray = client.guilds.cache.map (g => `${`Nome: \`${g.name}\``}⠀${`Membros: \`${g.members.cache.size}\``}`) 
    
    channel.send(`${guildArray.join("\n")}`)
    
    
  }
}