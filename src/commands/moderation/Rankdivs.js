const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Divulgadores extends Command {
  constructor(client) {
    super(client)
    this.name = 'rankdivs'
    this.aliases = ['divs']
    this.category = 'utils'
  }

  async run({ channel, msg, client, member, guild, author, args }) {
    const invites = await channel.guild.fetchInvites()
    const user = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]) : author

    const embed = new MessageEmbed()
      .setDescription(`${user} esse servidor não possui convites!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
      
    if (!invites) return channel.send(embed).then(m => m.delete({ timeout: 12000 })).catch(() => {})
    const rank = invites.sort((a, b) => b.uses - a.uses).array().slice(0, 5)

    const embed2 = new MessageEmbed()
      .setDescription(`${user} esse servidor precisa possuir pelo menos 5 convites para ter um \`ranking\`!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')

    if (rank.length < 5) return channel.send(embed2).then(m => m.delete({ timeout: 12000 })).catch(() => {})

    const embed3 = new MessageEmbed()
      .setAuthor(`Divulgadores | ${guild.name}`, client.user.avatarURL)
      .setDescription('Esse é meu "ranking" e apenas os melhores na divulgação se encontram nele!')
      .setThumbnail(guild.iconURL)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))

    const emojis = ['<:trofeu:857241614854389760>', '<:medalha_kiwi:748547923901546586>', '<:medalha_kiwi:748547923901546586>', '<:medalha_kiwi:748547923901546586>', '<:medalha_kiwi:748547923901546586>']

    let total = 0
    for (const inv of rank) {
      total += inv.uses
      const index = rank.indexOf(inv, 0)
      embed3.addField(`${emojis[index]} **${index + 1}** - ${inv.inviter.username}`, `\`\`\`\nConvidados: ${inv.uses}\`\`\` `)
    }

    embed3
      .addField('Total Convites:', `<:convites_kiwi:748547923620659350> ${invites.size}`, true)
      .addField('Total Recrutados:', `<:mundo_kiwi:748547923922518036> ${total}`, true)
      .setFooter(msg.guild.name, msg.guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
      .setColor('DB7093')

    channel.send(embed3)
  }
}
