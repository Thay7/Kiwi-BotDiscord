const Command = require('../../lib/strucutures/Command')

module.exports = class Say extends Command {
  constructor(client){
    super(client)
    this.name = 'say'
    this.aliases = ['falar']
    this.category = 'fun'
  }

  run({ args, channel }){
    if(!args[0]) return channel.send(':x: | Você precisa escrever algo antes!')

    const mensagem = args.join(' ')

    channel.send(mensagem)
  }
}