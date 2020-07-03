const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Divulgadores extends Command {
  constructor(client) {
    super(client)
    this.name = 'rankdivs'
    this.aliases = ['divs']
    this.category = 'utils'
  }

  async run({ channel, msg, client, member, guild, author }) {
    const invites = await channel.guild.fetchInvites()

    if (!invites) return msg.reply('<a:dc:723878284517048332> **|** esse servidor não possui convites!')
    const rank = invites.sort((a, b) => b.uses - a.uses).array().slice(0, 5)

    if (rank.length < 5) return msg.reply(`<a:branco_dccarregando:723881833682567168> **|** ${author}, esse servidor precisa possuir 5 convites para ter um \`ranking\`!`)

    const embed = new MessageEmbed()
      .setAuthor(`Divulgadores | ${guild.name}`, client.user.avatarURL)
      .setDescription('Esse é meu "ranking" e apenas os melhores na divulgação se encontram nele!')
      .setThumbnail(guild.iconURL)

    const emojis = ['🏆', '🥈', '🥉', '🏅', '🏅']

    let total = 0
    for (const inv of rank) {
      total += inv.uses
      const index = rank.indexOf(inv, 0)
      embed.addField(`${emojis[index]} **${index + 1}** - ${inv.inviter.username}`, `\`\`\`css\nConvidados: ${inv.uses}\`\`\` `)
    }

    embed
      .addField('Total/Recrutados', `<a:dc:723878284517048332> ~ ${total}`, true)
      .addField('Total/Convites', `<a:1598:723878723853746258> ~ ${invites.size}`, true)
      .setFooter(`• Autor: ${member.user.tag}`, member.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
      .setColor('RANDOM')

    channel.send(embed)
  }
}