const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = class Userinfo extends Command {
  constructor(client) {
    super(client)
    this.name = 'userinfo'
    this.category = 'utils'
  }

  async run({ channel, args, mentions, member }) {
    const guildMember = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]).catch(_ => member) : member
    const user = guildMember.user ? guildMember.user : guildMember

    if (!user && !guildMember) return channel.send('Membro não encontrado')

    const customStatus = guildMember.presence.activities.filter(a => a.type === 'CUSTOM_STATUS')
    const games = guildMember.presence.activities.filter(a => a.type === 'PLAYING').map(a => a.name)

    const embed = new MessageEmbed()
      .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('RANDOM')
      .addFields([
        {
          name: 'Tag',
          value: `\`${user.tag}\``,
          inline: true
        },
        {
          name: 'ID',
          value: `\`${user.id}\``,
          inline: true
        },
        {
          name: 'Apelido do User no Servidor',
          value: `\`${guildMember.nickname ? guildMember.nickname : 'Não definido'}\``,
          inline: false
        },
        {
          name: 'Status',
          value: `\`${user.presence.status}\``
        },
        {
          name: 'Status personalizado',
          value: `\`${customStatus.length === 0 ? 'Não definido' : customStatus[0].state === null ? 'Não definido' : customStatus[0].state }\``,
        },
        {
          name: 'Jogando',
          value: `\`${games.length === 0 ? 'Não definido' : games.join('\n')}\``
        },
        {
          name: 'Criou a conta em',
          value: moment(user.createdAt).format('LLL')
        }
      ])
      .setFooter(`Userinfo de ${user.username}`)
      .setTimestamp()

    channel.send(embed)
  }

}