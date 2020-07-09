const Command = require('../../lib/strucutures/Command')


module.exports = class Clear extends Command {
  constructor(client) {
    super(client)
    this.name = 'clear'
    this.aliases = ['limpar']
    this.category = 'moderation'
  }

  async run({ msg, args, member, author, channel }) {
    const { MessageEmbed } = require('discord.js')
    
    const embed = new MessageEmbed()
      .setDescription('você não tem permissão para limpar o chat!')
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('DB7093')

    if(!member.hasPermission('MANAGE_MESSAGES')) return channel.send(embed).then(m => m.delete(7000)).catch(() => {})
    if (!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.reply('eu não tenho permissão para apagar mensagens nesse servidor!')
    if(!args[0]) return msg.reply('você precisa informar quantas mensangens serão deletadas!')

    let quantity = args[0]

    if (isNaN(quantity)) return msg.reply('a quantidade precisa ser um número!')

    if (quantity < 1) return msg.reply('o número precisa ser maior que 0!')
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

    msg.channel.send(`${total} mensagens deletadas! `).then(m => m.delete(7000)).catch(() => {})
  }
}
