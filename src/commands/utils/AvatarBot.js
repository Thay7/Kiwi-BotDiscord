const Command = require('../../lib/strucutures/Command')

module.exports = class Say extends Command {
  constructor(client) {
    super(client)
    this.name = 'avatarbot'
    this.aliases = ['avatarbot']
    this.category = 'utils'
    this.hidden = true
  }

  run({ client, args, author, channel }) {
    if (!args[0])
      return channel.send(`<a:estrelinha:723878487496065034> **|** ${author}, faltou o link lesado!`)

    client.user.setAvatar(args[0])
    channel.send(`<a:hype:723878641955504201> **|** ${author} minha nova foto estilosa ficou demais!`)
  }
}
