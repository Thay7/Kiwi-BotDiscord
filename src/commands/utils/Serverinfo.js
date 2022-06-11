const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('pt-BR')

module.exports = class Serverinfo extends Command {
  constructor(client) {
    super(client)
    this.name = 'serverinfo'
    this.aliases = ['svinfo']
    this.category = 'utils'
  }

  async run({ guild, member, author, channel, msg}) {
    const embed = new MessageEmbed()
      .setTitle('<:id2:984978063752298546> Informações do Servidor')
      .setColor('DB7093')
      .setThumbnail(guild.iconURL)
      .addFields([
        {
          name: 'Nome',
          value: `\`${guild.name}\``,
          inline: true
        },
        {
          name: 'ID',
          value: `\`${guild.id}\``,
          inline: true
        },
        {
          name: 'Membros:',
          value: `\`${guild.memberCount}\``,
          inline: true
        },
        {
          name: 'Criado em:',
          value: moment(guild.createdAt).format('LLL'),
          inline: true
        },
        {
          name: 'Entrei em:',
          value: moment(member.joinedAt).format('LLL'),
          inline: true
        },
        {
          name: 'Dono:',
          value: `${guild.owner}`,
          inline: true
        },
      ])
    channel.send(embed)
  }                                                         
}
