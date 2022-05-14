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
    

    client.user.setAvatar(args[0])
    channel.send(`${author} minha nova foto estilosa ficou demais!`)
  }
}
