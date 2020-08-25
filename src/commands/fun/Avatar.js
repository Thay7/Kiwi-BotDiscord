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

      .setTitle('<:insta:730321815213310023> Avatar')
      .setDescription(`<:user2:747690594981380107> ${user} \n<:baixar:730322557755981824> [Baixar](${avatar})`)
      .setImage(avatar)
      .setColor('DB7093')
      .setFooter(`Autor: ${author.tag}`)
    channel.send(embed)
  }
}