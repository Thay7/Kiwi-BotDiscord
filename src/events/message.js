const Event = require('../lib/strucutures/Event')
const { Client } = require('discord.js')
const queue = new Map()

module.exports = class extends Event {
  constructor(client) {
    super({
      name: 'message'
    })
  }

  run(msg) {

    if (msg.channel.type === 'dm' || msg.author.bot) return

    const prefix = this.config.prefixes.find(prefix => msg.content.toLowerCase().startsWith(prefix))

    const hasPrefix = msg.content.toLowerCase().startsWith(prefix)

    const args = msg.content
      .trim().slice(hasPrefix ? prefix.length : 0)
      .split(/ /g).filter(Boolean)

    if (!args[0]) return

    const cmdQuery = args.shift().toLowerCase(),
      cmd = this.commands.find(c => (c.name === cmdQuery || c.aliases.includes(cmdQuery)) && c.hasPrefix === hasPrefix)

    if (cmd) return cmd.init(ctx(this, msg, args))

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