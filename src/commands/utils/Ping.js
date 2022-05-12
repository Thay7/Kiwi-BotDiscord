const Command = require('../../lib/strucutures/Command')

module.exports = class Ping extends Command {
  constructor(client) {
    super(client)
    this.name = 'ping'
    this.aliases = ['latencia']
    this.category = 'utils'
  }

  async run({ channel, author }) {
    const { MessageEmbed } = require('discord.js')

    const embed = new MessageEmbed()
      .setTitle('Pong! <:ping:857297306713718835>')
      .setDescription(`Meu ping atual é: \`${this.client.ws.ping}ms\``)
      .setColor('DB7093')
    channel.send(embed)
  }
}
