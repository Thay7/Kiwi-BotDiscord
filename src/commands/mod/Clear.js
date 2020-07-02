const Command = require('../../lib/strucutures/Command')


module.exports = class Clear extends Command {
  constructor(client) {
    super(client)
    this.name = 'clear'
    this.aliases = ['Limpar']
    this.category = 'mod'
  }

  async run({ channel, msg, args, client, }) {

    if(!msg.member.hasPermission('MANAGE_MESSAGES', false, true, true)) {
      msg.reply('você não tem permissão para limpar o chat!')
      return 0
    }
    if (!msg.guild.me.hasPermission('MANAGE_MESSAGES', false, true, true)) {
      msg.reply('eu não tenho permissão para apagar mensagens nesse servidor!')
    }
    if(!args[0]) {
      msg.reply('informe a quantidade de mensagens a serem deletadas!')
      return 0
    }
    let quantity = Number(args[0])
    if (isNaN(quantity)) {
      msg.reply('a quantidade precisa ser um número!')
      return 0
    }
    if (quantity < 1) {
      msg.reply('o número precisa ser maior que 0!')
      return 0
    } else if (quantity > 1000) quantity = 1000
    var total = 0
    do {
      var toBeDeleted = quantity
      if  (toBeDeleted > 100) toBeDeleted = 100
      let deletedMessages = await msg.channel.bulkDelete(toBeDeleted, true)
      if (deletedMessages.size < 1) {
        quantity = 0
      } else {
        total += deletedMessages.size
      }
      quantity -= deletedMessages.size
    } while (quantity > 1)
    msg.channel.send(`${msg.author} ${total} mensagens deletadas!`).then(msg => msg.delete(7000)).catch(() => {})
  }
}
