const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Avatar extends Command {
  constructor(client) {
    super(client)
    this.name = 'avatar'
    this.aliases = ['av']
    this.category = 'utils'
  }

  async run({ channel, mentions, args, author, member }) {
    const { MessageEmbed } = require('discord.js')
    const user = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]).catch(_ => author) : author
    const avatar = user.displayAvatarURL({ dynamic: true, size: 2048 })
  

    const embed = new MessageEmbed()

      .setTitle('<:avatar_kiwi:747947038158618765>Avatar')
      .setDescription(`<:user_kiwi:747947037760421900> ${user} \n<:baixar_kiwi:747947038255087657> [Baixar](${avatar})`)
      .setImage(avatar)
      .setColor('A21ED9')
      .setFooter(`Autor: ${author.tag}`)
    channel.send(embed)
  }
}