const Command = require('../../lib/strucutures/Command')

module.exports = class Say extends Command {
  constructor(client){
    super(client) // inicia a classes contrutora
    this.name = 'say' // nome do comando
    this.aliases = ['falar'] // apelido | sinonimo do comando
    this.category = 'fun' // categoria do comando
  }

  run({ args, channel }){
    if(!args[0]) return channel.send(':x: | Você precisa escrever algo antes!')

    const mensagem = args.join(' ')

    channel.send(mensagem)
  }
}