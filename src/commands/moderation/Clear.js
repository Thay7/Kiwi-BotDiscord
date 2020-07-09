const Command = require('../../lib/strucutures/Command')


module.exports = class Clear extends Command {
  constructor(client) {
    super(client)
    this.name = 'clear'
    this.aliases = ['limpar']
    this.category = 'moderation'
  }

  async run({ msg, args, member, author, channel, mentions,}) {
    const { MessageEmbed } = require('discord.js')
    const user = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]) : author
    
    
    const embed = new MessageEmbed()
      .setDescription(`${user}, você não tem permissão para limpar o chat!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
    if(!member.hasPermission('MANAGE_MESSAGES')) return channel.send(embed).then(m => m.delete({ timeout: 5000 }))

    const embed2 = new MessageEmbed()
      .setDescription(`${user}, eu não tenho permissão para apagar mensagens nesse servidor!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
    if (!msg.guild.me.hasPermission('MANAGE_MESSAGES'))  channel.send(embed2).then(m => m.delete({ timeout: 5000 }))
    
    const embed3 = new MessageEmbed()
      .setDescription(`${user}, você precisa informar quantas mensangens serão deletadas!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
    if(!args[0]) return channel.send(embed3).then(m => m.delete({ timeout: 5000 }))


    let quantity = args[0]

    const embed4 = new MessageEmbed()
      .setDescription(`${user}, a quantidade precisa ser um número!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
    if (isNaN(quantity)) return channel.send(embed4).then(m => m.delete({ timeout: 5000 }))

    const embed5 = new MessageEmbed()
      .setDescription(`${user}, o número precisa ser maior que 0!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
    if (quantity < 1) return channel.send(embed5).then(m => m.delete({ timeout: 5000 }))
    else if (quantity > 1000) quantity = 1000

    let total = 0

    while (quantity > 1) {
      let toBeDeleted = quantity
      if  (toBeDeleted > 100) toBeDeleted = 100

      let deletedMessages = await msg.channel.bulkDelete(toBeDeleted, true)

      if (deletedMessages.size < 1) quantity = 0
      else total += deletedMessages.size

      quantity -= deletedMessages.size
    }
    const embed6 = new MessageEmbed()
      .setDescription(`${user}, ${total} mensagens deletadas!`)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')
    msg.channel.send(embed6).then(m => m.delete(7000)).catch(() => {})
  }
}
