const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('pt-BR')

module.exports = class Userinfo extends Command {
  constructor(client) {
    super(client)
    this.name = 'userinfo'
    this.category = 'utils'
  }

  async run({ channel, args, mentions, member, msg }) {
    const guildMember = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]).catch(_ => member) : member
    const user = guildMember.user ? guildMember.user : guildMember

    if (!user && !guildMember) return channel.send('Membro não encontrado')

    const customStatus = guildMember.presence.activities.filter(a => a.type === 'CUSTOM_STATUS')
    const games = guildMember.presence.activities.filter(a => a.type === 'PLAYING').map(a => a.name)

    const embed = new MessageEmbed()
      .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('#8A0829')
      .addFields([
        {
          name: '<:kyatsu_user:728800397585678389> Tag',
          value: `\`${user.tag}\``,
          inline: true
        },
        {
          name: '<:kyatsu_tag:728800399515189289> ID',
          value: `\`${user.id}\``,
          inline: true
        },
        {
          name: '<:kyatsu_useredit:729083767917903903> Apelido',
          value: `${guildMember.nickname ? guildMember.nickname : 'Sem apelido...👀'}`,
          inline: true
        },
        {
          name: 'Status',
          value: `\`${user.presence.status}\``
        },
        {
          name: 'Status personalizado',
          value: `\`${customStatus.length === 0 ? 'Não definido' : customStatus[0].state === null ? 'Não definido' : customStatus[0].state }\``
        },
        {
          name: '<:kyatsu_controle:729087404308299841> Jogando',
          value: `\`${games.length === 0 ? 'Não definido' : games.join('\n')}\``
        },
        {
          name: '<:kyatsu_calendario:728800397220642886>  Criou a conta em',
          value: moment(user.createdAt).format('LLL'),
          inline: true
        },
        {
          name: '<:kyatsu_entrar:729086247233912853> Entrou no servidor:',
          value: moment(member.joinedTimestamp).format('LLL'),
          inline: true
        }
      ])
      .setFooter(msg.guild.name, msg.guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
      .setTimestamp()



    channel.send(embed)
  }

}