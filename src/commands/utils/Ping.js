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
      .setTitle('Pong! <:ping:730845575959937025>')
      .setDescription(`Meu ping atual é: \`${this.client.ws.ping}ms\``)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
    channel.send(embed)
  }
}
