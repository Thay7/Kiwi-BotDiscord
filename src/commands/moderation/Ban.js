const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Ban extends Command {
  constructor(client) {
    super(client)
    this.name = 'ban'
    this.aliases = ['banir']
    this.category = 'moderation'
  }

  run({ channel, msg, args, member, me, mentions, guild }) {

    msg.delete()

    if (!args[0]) return msg.reply('mencione um usuário!').then(m => m.delete(5000))
    const reason = args.slice(1).join(' ') || 'Não informado'

    if (!member.hasPermission('BAN_MEMBERS')) return msg.reply('você não tem permissão!').then(m => m.delete(5000))
    if (!me.hasPermission('BAN_MEMBERS')) return msg.reply('eu não tenho permissão!').then(m => m.delete(5000))

    const toBan = mentions.members.first() || guild.members.cache.get(args[0])

    if (!toBan) return msg.reply('não foi possível encontrar esse usuário, tente novamente!').then(m => m.delete(5000))
    if (toBan.id === member.id) return msg.reply('você não pode banir você mesmo bobinho...').then(m => m.delete(5000))
    if (!toBan.bannable) return msg.reply('não posso banir essa pessoa!').then(m => m.delete(5000))

    const embed = new MessageEmbed()
      .setThumbnail(toBan.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
      .setAuthor(`• ${member.displayName}`, member.user.displayAvatarURL({ dynamic: true }))
      .setTitle('Ação | Ban')
      .addField('<:staff:730868696372740166> Staff:', member, true)
      .addField('<:id:730868137360359514> ID Staff:', member.id, true)
      .addField('\u2800', '\u2800')
      .addField('<:usuario:730867252601290784> Banido:', toBan, true)
      .addField('<:id:730868137360359514> ID banido:', toBan.id, true)
      .addField('<:lapis:730324426457088040> Motivo:', `\`\`\`${reason}\`\`\``)
      .setColor('DB7093')

    channel.send(embed)

    toBan.ban(args.slice(1).join(' ')).catch(err => { if (err) return channel.send('não foi possivel banir esse usuario!') })
  }
}
