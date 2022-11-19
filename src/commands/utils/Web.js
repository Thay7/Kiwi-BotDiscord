const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Ajuda extends Command {
  constructor(client) {
    super(client)
    this.name = 'web'
    this.aliases = ['web']
    this.category = 'utils'
  }

  async run({ channel, client}) {

    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
      .setTitle('<:ajuda:984978051043590205> Web')
      .setDescription(`Clique [aqui](https://kiwibot.netlify.app/) para ir até a minha Landing Page!`)
      .setColor('DB7093')
    channel.send(embed)
  }
}
