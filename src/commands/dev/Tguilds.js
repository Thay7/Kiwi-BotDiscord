const Discord = require('discord.js')
const Command = require('../../lib/strucutures/Command')
const client = new Discord.Client({

})

module.exports = class Tguilds extends Command {
  constructor(client) {
    super(client)
    this.name = 'tguilds'
    this.aliases = ['totalguilds']
    this.category = 'utils'
    this.hidden = true
  }

  async run ({channel, client, size, cache}) {
  
    const servidores = client.guilds.cache.map (g => `${`Estou em um total de \`${g.client.guilds.size.cache}\` servidores!`}`) 
    channel.send(`${servidores.join('\n')}`)
    
  } 
}