const Command = require('../../lib/strucutures/Command')


module.exports = class Comandos extends Command {
  constructor(client) {
    super(client)
    this.name = 'comandos'
    this.aliases = ['commands']
    this.category = 'utils'
  }

  async run({ channel, client, mentions, args, author, member }) {

    return msg.reply('Comando em construção, aguarde só mais um pouco')
 
  }
}