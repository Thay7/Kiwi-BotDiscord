const Command = require('../../lib/strucutures/Command')


module.exports = class Comandos extends Command {
  constructor(client) {
    super(client)
    this.name = 'comandos'
    this.aliases = ['commands']
    this.category = 'utils'
  }

  async run({ msg }) {

    return msg.reply('Comando em construção, aguarde só mais um pouco')
 
  }
}