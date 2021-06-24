const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Clear extends Command {
  constructor(client) {
    super(client)
    this.name = 'clear'
    this.aliases = ['limpar']
    this.category = 'moderation'
  }

  async run({ msg, args, member, author, channel }) {

    if (!msg.guild.me.hasPermission('MANAGE_MESSAGES'))  channel.send(`${member} eu não tenho permissão para apagar mensagens nesse servidor`).then(m => m.delete({ timeout: 9000 }))
    msg.delete()

    if(!member.hasPermission('MANAGE_MESSAGES')) return channel.send(`${member} você não tem permissão para limpar o chat`).then(m => m.delete({ timeout: 9000 }))
    msg.delete()


    if(!args[0]) return channel.send(`${member} você precisa informar quantas mensangens serão deletadas`).then(m => m.delete({ timeout: 9000 }))
    msg.delete()

    let quantity = args[0]


    if (isNaN(quantity)) return channel.send(`${member} a quantidade precisa ser um número`).then(m => m.delete({ timeout: 9000 }))
    msg.delete()

    if (quantity < 1) return channel.send(`${member} o número precisa ser maior que 0`).then(m => m.delete({ timeout: 9000 }))
    else if (quantity > 1000) quantity = 1000
    msg.delete()
    let total = 0

    while (quantity > 1) {
      let toBeDeleted = quantity
      if  (toBeDeleted > 100) toBeDeleted = 100

      let deletedMessages = await msg.channel.bulkDelete(toBeDeleted, true)

      if (deletedMessages.size < 1) quantity = 0
      else total += deletedMessages.size

      quantity -= deletedMessages.size
    }

    msg.channel.send(`${member} ${total} mensagens deletadas`).then(m => m.delete({ timeout: 12000 })).catch(() => {})
    msg.delete()
  }
}
