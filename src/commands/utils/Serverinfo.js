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
      .setTitle('<:info_kiwi:748230688481869905> Informações do Servidor')
      .setColor('DB7093')
      .setThumbnail(guild.iconURL)
      .addFields([
        {
          name: '<:server_kiwi:748230688238600243> Nome',
          value: `\`${guild.name}\``,
          inline: true
        },
        {
          name: '<:info__kiwi:748131836496052266> ID',
          value: `\`${guild.id}\``,
          inline: true
        },
        {
          name: '<:members_kiwi:748230688200982614> Membros:',
          value: `\`${guild.memberCount}\``,
          inline: true
        },
        {
          name: '<:conta__kiwi:748131836609429525> Criado em:',
          value: moment(guild.createdAt).format('LLL'),
          inline: true
        },
        {
          name: '<:entrou_kiwi:748131836785328211> Entrei em:',
          value: moment(member.joinedAt).format('LLL'),
          inline: true
        },
        {
          name: '<:chave_kiwi:748232441440763904> Dono:',
          value: `${guild.owner}`,
          inline: true
        },
      ])
      .setFooter(`Autor: ${author.tag}`)
    channel.send(embed)
  }                                                         
}