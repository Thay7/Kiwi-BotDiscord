const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client) {
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }

  async run({ msg, client, user }) {

    const ownerBot = client.users.cache.find(user => user.id == '712134111292293210')
    const server = client.guilds.cache.get(' ')

    if (server.members.cache.find('712134111292293210')) {
      return msg.reply(`a minha criadora é a ${ownerBot}!`)
    } else {
      return msg.reply(`a minha criadora é a Thay#8579!`)
    }

  }
}
