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
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))

    const emojis = ['<:trofeu:730857908673445958>', '<:medalha:730857908316798977>', '<:medalha:730857908316798977>', '<:medalha:730857908316798977>', '<:medalha:730857908316798977>']

    let total = 0
    for (const inv of rank) {
      total += inv.uses
      const index = rank.indexOf(inv, 0)
      embed.addField(`${emojis[index]} **${index + 1}** - ${inv.inviter.username}`, `\`\`\`\nConvidados: ${inv.uses}\`\`\` `)
    }

    embed
      .addField('Total Convites:', `<:convites:730852750086111312> ${invites.size}`, true)
      .addField('Total Recrutados:', `<:total:730851292523659295> ${total}`, true)
      .setFooter(msg.guild.name, msg.guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
      .setColor('DB7093')

    channel.send(embed)
  }
}