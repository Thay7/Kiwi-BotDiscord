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

    if (!member.hasPermission('BAN_MEMBERS')) return msg.reply('você não tem permissão!').then(m => m.delete({ timeout: 10000 }))
    if (!me.hasPermission('BAN_MEMBERS')) return msg.reply('eu não tenho permissão!').then(m => m.delete({ timeout: 10000 }))

    if (!args[0]) return msg.reply('mencione um usuário!').then(m => m.delete({ timeout: 10000 }))
    const reason = args.slice(1).join(' ') || 'Não informado'


    const toBan = mentions.members.first() || guild.members.cache.get(args[0])

    if (!toBan) return msg.reply('usuário não encontrado').then(m => m.delete({ timeout: 10000 }))
    if (toBan.id === member.id) return msg.reply('você não pode banir você mesmo bobinho...').then(m => m.delete({ timeout: 10000 }))
    if (!toBan.bannable) return msg.reply('não posso banir essa pessoa!').then(m => m.delete({ timeout: 10000 }))

    const embed = new MessageEmbed()
      .setTitle('Ban')
      .addField('<:members_kiwi:748230688200982614> Staff:', member, true)
      .addField('<:user_kiwi:748131837414735982> Banido:', toBan, true)
      .addField('<:info__kiwi:748131836496052266> ID banido:', toBan.id, true)
      .addField('<:apelido_kiwi:748131837431513088> Motivo:', `\`\`\`${reason}\`\`\``)
      .setColor('DB7093')
    channel.send(embed).catch(() => {})
    
    toBan.ban(args.slice(1).join(' ')).catch(err => { if (err) return channel.send('não foi possivel banir esse usuario!') })
  }
}
