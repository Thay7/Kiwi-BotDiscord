const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client) {
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }

  async run({ msg, client, server}) {

    const server = client.guilds.cache.get()
    const ownerBot = client.users.cache.find(user => user.id == '712134111292293210')

    if (server.members.cache.find(ownerBot)) {
      return msg.reply(`a minha criadora é a ${ownerBot}!`)
    } else {
      return msg.reply(`a minha criadora é a Thay#8579!`)
    }


  }
}
