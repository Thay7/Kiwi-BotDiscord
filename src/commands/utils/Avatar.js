const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Avatar extends Command {
  constructor(client) {
    super(client)
    this.name = 'avatar'
    this.aliases = ['av']
    this.category = 'utils'
  }

  async run({ channel, mentions, args, author }) {
    const user = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]) : author
    const avatarUrl = user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`Avatar de ${user}`)
      .setImage(avatarUrl)
      .setFooter(`• Autor: ${author.tag}`)
      .setTimestamp()
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
    channel.send(embed)
  }
}