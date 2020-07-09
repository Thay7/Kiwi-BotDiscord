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
<<<<<<< HEAD

      .setTitle('<:insta:730321815213310023> Avatar')
      .setDescription(`<:baixar:730322557755981824> [Baixar](${avatar})`)
      .setImage(avatar)
      .setColor('DB7093')
=======
      .setColor('RANDOM')
      .setTitle(`Avatar de ${user}`)
      .setDescription(`Clique aqui para baixar o Avatar`)
      .seURL(avatarUrl)
      .setImage(avatarUrl)
>>>>>>> d91d4845e70d425d290ce551e84abea156192346
      .setFooter(`• Autor: ${author.tag}`)
    channel.send(embed)
  }
}