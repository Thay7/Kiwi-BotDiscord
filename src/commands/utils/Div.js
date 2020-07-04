const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Div extends Command {
  constructor(client) {
    super(client)
    this.name = 'div'
    this.category = 'utils'
  }

  async run({ guild, channel, author, mentions, args, msg }) {
    const invites = await guild.fetchInvites().catch(_ => null)
    if (!invites || invites.size === 0) return channel.send(`<a:atencao:723878171216314448> **|** Poing-oing... ${author}, eu não tenho acesso aos convites desse servidor.`)

    const guildMember = args[0] ? mentions.users.first() || guild.member(args[0]) : author

    const userInvites = invites.filter(i => i.inviter === guildMember)

    const embed = new MessageEmbed()
      .setThumbnail(guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
      .setAuthor('Kyatsu | Divulgador')
      .addField(`Divulgador: ${guildMember.user ? guildMember.user.tag : guildMember.tag }`, `Convidou um total de **${userInvites.reduce((p, v) => v.uses + p, 0)}** `, true)
      .addField('Convites:', `${userInvites.length === 0 ?  userInvites.reduce((a, { code, uses }) => a + `https://discord.gg/${code} -  **${uses} membros**\n`) : `**${guildMember}** não possui convites no servidor.`}`, false)
      .setFooter(msg.guild.name, msg.guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
      .setColor('RANDOM')

    channel.send(embed)
  }
}
