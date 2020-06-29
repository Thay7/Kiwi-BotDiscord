const Event = require('../lib/strucutures/Event')

module.exports = class extends Event {
  constructor() {
    super({
      name: 'message'
    })
  }

  run(msg) {
    if (msg.channel.type === 'dm' || msg.author.bot) return

    const prefix = this.config.prefixes.find(prefix => msg.content.toLowerCase().startsWith(prefix))

    if (!msg.content.toLowerCase().startsWith(prefix)) return

    const args = msg.content
      .trim().slice(prefix.length)
      .split(/ /g).filter(Boolean)

    if (!args[0]) return

    const cmdQuery = args.shift().toLowerCase(),
      cmd = this.commands.find(c => c.name === cmdQuery || c.aliases.includes(cmdQuery))

    if (cmd) return cmd.run(ctx(this, msg, args))
  }
}

function ctx(client, msg, args) {
  return {
    guild: msg.guild,
    me: msg.guild.me,
    member: msg.member,
    author: msg.author,
    channel: msg.channel,
    mentions: msg.mentions,
    msg,
    client,
    args
  }
}