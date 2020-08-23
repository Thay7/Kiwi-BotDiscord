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

  async run({ guild, members, author, channel, msg}) {
    const embed = new MessageEmbed()
      .setTitle('<:ajuda:734901641408675853> Informações do Servidor')
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
          value: moment(guild.joinedTimestamp).format('LLL'),
          inline: true
        },
        {
          name: 'Dono:',
          value: `${guild.owner}`,
          inline: true
        },
      ])
      .setFooter(`Autor: ${author.tag}`)
    channel.send(embed)
  }                                                         
}