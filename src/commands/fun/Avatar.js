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

      .setTitle('<:avatar_kiwi:748214550947561542> Avatar')
      .setDescription(`<:user_kiwi:748131837414735982> ${user} \<:salvar_kiwi:748214550578331690> [Baixar](${avatar})`)
      .setImage(avatar)
      .setColor('A21ED9')
      .setFooter(`Autor: ${author.tag}`)
    channel.send(embed)
  }
}