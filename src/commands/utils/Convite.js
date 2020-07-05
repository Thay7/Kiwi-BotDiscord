const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Convite extends Command {
  constructor(client) {
    super(client)
    this.name = 'convite'
    this.aliases = ['ccbot']
    this.category = 'utils'
  }

  async run({ author, msg, args, client }) {
    const embed = new MessageEmbed()

      .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
      .setTitle('🤖 Convite do bot')
      .setColor('#ff47ec')
      .setDescription(`**Clique [aqui](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=2146958847&scope=bot) para adicionar o bot em seu servidor.**`)
      .setFooter(msg.guild.name, msg.guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
      .setTimestamp()
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))

    msg.channel.send(embed)
  }}