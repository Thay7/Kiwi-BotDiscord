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
      .setTitle('Convite teste <:ideia:730297791871582299>')
      .setDescription(`Clique [aqui](https://discord.com/oauth2/authorize?client_id=726509292659671070&permissions=1644971949559&scope=bot) para me adicionar em seu servidor!`)
      .setColor('DB7093')

    msg.channel.send(embed)
  }}
