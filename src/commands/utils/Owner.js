const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client) {
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'utils'
  }

  async run({ msg, client, user, guild }) {

    const ownerBot = client.users.cache.find(user => user.id == '712134111292293210')

    const server = client.guilds.cache.get(client.id)

    if (server.users.cache.find('712134111292293210')) {
      return msg.reply(`a minha criadora é a ${ownerBot}!`)

    } else {
      return msg.reply(`a minha criadora é a Thay#8579!`)

    }
  }
}
