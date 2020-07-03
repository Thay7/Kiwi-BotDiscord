const Command = require('../../lib/strucutures/Command')


module.exports = class Clear extends Command {
  constructor(client) {
    super(client)
    this.name = 'clear'
    this.aliases = ['limpar']
    this.category = 'moderation'
  }

  async run({ msg, args, member }) {
    if(!member.hasPermission('MANAGE_MESSAGES')) return msg.reply('**Você não tem permissão para limpar o chat!** <a:atencao:723878171216314448>')
    if (!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.reply('**Eu não tenho permissão para apagar mensagens nesse servidor.** <a:AtencaoBDI:723884702271930368>')
    if(!args[0]) return msg.reply('você precisa informar quantas mensagens serão deletadas!')

    let quantity = args[0]

    if (isNaN(quantity)) return msg.reply('A quantidade precisa ser um número')

    if (quantity < 1) return msg.reply('O número precisa ser maior que 0')
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

    msg.channel.send(`<a:BDI_pink_setadireita:723882065346560091> **Removido ${total} mensagens.**`).then(m => m.delete(7000)).catch(() => {})
  }
}
