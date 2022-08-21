const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Unban extends Command {
  constructor(client) {
    super(client)
    this.name = 'unban'
    this.aliases = ['desbanir']
    this.category = 'moderation'
  }


  run({ channel, msg, args, member, me, mentions, guild }) {
    msg.delete()


    if (!msg.member.hasPermission('BAN_MEMBERS')) {
      return msg.channel.send(`**${msg.author.username}**, você não tem permissão`)
    }

    if (!msg.guild.me.hasPermission('BAN_MEMBERS')) {
      return msg.channel.send(`**${msg.author.username}**, eu não tenho permissão`)
    }

    let userID = args[0]
    msg.guild.fetchBans().then(bans => {
      if (bans.size === 0) return
      let bUser = bans.find(b => b.user.id === userID)
      if (!bUser) return
      msg.guild.members.unban(bUser.user)

      const reason = args.slice(1).join(' ') || 'Não informado'
      
      const embed = new MessageEmbed()
        .setTitle('Desban')
        .addField('<:staff:984978078914715689> Staff:', member, true)
        .addField('<:id2:984978063752298546> ID desbanido:', userID, true)
        .addField('<:lapis:984978066306658355> Motivo:', `\`\`\`${reason}\`\`\``)
        .setColor('DB7093')
      channel.send(embed)
    })
  }
}
