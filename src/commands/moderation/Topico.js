const Command = require('../../lib/strucutures/Command')

module.exports = class Topico extends Command {
  constructor(client) {
    super(client)
    this.name = 'tópico'
    this.aliases = ['msg do tópico']
    this.category = 'mod'
  }
  run({ client, message, args }) {
    message.delete()
    if (!message.member.hasPermission('MANAGE_CHANNELS', false, true, true)) {
      message.reply('você não possui permissões para utilizar esse comando!')
      return 0
    }
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS', false, true, true)) {
      message.reply('não tenho permissão para alterar o tópico do canal!')
      return 0
    }
    let text = args.join(' ')
    if (!text.length) {
      message.reply('você esqueceu de colocar a mensagem do tópico!')
      return 0
    } else if (text.length > 1024) {
      message.reply('O tópico só pode conter 1024 caracteres')
      return 0
    }
    message.channel.setTopic(text).then(() => {
      message.reply(`Você definiu a mensagem: **${text}** | no tópico do servidor!`)
    }).catch(()=>{})
  }
}
