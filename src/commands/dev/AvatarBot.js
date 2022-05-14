const Command = require('../../lib/strucutures/Command')

module.exports = class Say extends Command {
  constructor(client) {
    super(client)
    this.name = 'avatarbot'
    this.aliases = ['avatarbot']
    this.category = 'dev'
    this.hidden = true
  }

  run({ client, args, author, channel }) {
    if (!args[0])
      return channel.send(`${author} insira um link!`)
    client.user.setAvatar(args[0])
    channel.send(`${author} minha nova foto estilosa ficou demais!`)
  }
}
