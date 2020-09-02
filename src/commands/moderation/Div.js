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
    const user = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]) : author
    const embed = new MessageEmbed()
      .setDescription(`${user}, eu não tenho acesso aos convites desse servidor!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')

    if (!invites || invites.size === 0) return channel.send(embed).then(m => m.delete({ timeout: 12000 })).catch(() => {})
   
    const guildMember = args[0] ? mentions.users.first() || guild.member(args[0]) : author

    const userInvites = invites.filter(i => i.inviter === guildMember)

    const embed2 = new MessageEmbed()
      .addField(`Divulgador: ${guildMember.user ? guildMember.user.tag : guildMember.tag }`, `Convidou um total de: **${userInvites.reduce((p, v) => v.uses + p, 0)}** membros `, true)
      .addField('Convites:', `${ userInvites.size > 0 ?  userInvites.reduce((a, { code, uses }) => a + `https://discord.gg/${code}\n`, '') : `**${guildMember}** não possui convites no servidor.`}`, false)
      .setColor('DB7093')
    channel.send(embed2)
  }
}
