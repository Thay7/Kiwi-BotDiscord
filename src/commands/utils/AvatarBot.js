const Command = require('../../lib/strucutures/Command')

module.exports = class Say extends Command {
  constructor(client){
    super(client)
    this.name = 'avatarbot'
    this.aliases = ['avatarbot']
    this.category = 'utils'
  }

  run({ client, msg, args, member }){

    if(!['292718549628092447', '712134111292293210'].includes(msg.author.id))
      return msg.channel.send('**Você não tem permissão para isso!**')

    if(!args[0])
      return msg.channel.send(`<a:estrelinha:723878487496065034> **|** ${msg.author}, faltou o link lesado!`)

    client.user.setAvatar(args[0])
    msg.channel.send(`<a:hype:723878641955504201> **|** ${msg.author} minha nova foto estilosa ficou demais!`)
  }}
