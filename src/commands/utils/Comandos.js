const Command = require('../../lib/strucutures/Command')


module.exports = class Comandos extends Command {
  constructor(client) {
    super(client)
    this.name = 'comandos'
    this.aliases = ['commands']
    this.category = 'utils'
  }

  async run({ msg }) {
    msg.delete()
    return msg.reply('Comando em construção, aguarde só mais um pouco').then(m => m.delete({ timeout: 9000 }))
 
  }
}