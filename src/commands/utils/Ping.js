const Command = require('../../lib/strucutures/Command')

module.exports = class Ping extends Command {
  constructor(client) {
    super(client)
    this.name = 'ping'
    this.aliases = ['latencia']
    this.category = 'utils'
  }

  run({ channel }) {
    channel.send(`Pong! 🏓 \`${this.client.ws.ping}ms\``)
  }
}
