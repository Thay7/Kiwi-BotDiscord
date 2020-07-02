const Command = require('../../lib/strucutures/Command')

module.exports = class Tópico extends Command {
  constructor(client) {
    super(client)
    this.name = 'tópico'
    this.aliases = ['msg do tópico']
    this.category = 'mod'
  }
  run({ client, message, args }) {
    message.delete()
    if (!message.member.hasPermission('MANAGE_CHANNELS', false, true, true)) {
      message.reply('**Você não possui permissões para utilizar esse comando!** <a:atencao:723878171216314448>')
      return 0
    }
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS', false, true, true)) {
      message.reply('**Não tenho permissão para alterar o tópico do canal!** <a:atencao:723878171216314448>')
      return 0
    }
    let text = args.join(' ')
    if (!text.length) {
      message.reply('Você esqueceu de colocar a mensagem do tópico! <a:yoeEstrelaBDI:723881976674910262>')
      return 0
    } else if (text.length > 1024) {
      message.reply('O tópico só pode conter 1024 caracteres')
      return 0
    }
    channel.send(`Você definiu a mensagem: **${text}** | no tópico do servidor!`)
    
  }
}
