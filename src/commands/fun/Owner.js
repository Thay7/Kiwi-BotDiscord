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

    if (client.users.cache.find(user => user.id == '712134111292293210')) {

    } else {
      msg.reply(`a minha criadora é a Thay#8579!`)
    }

    const ownerBot = (`a minha criadora é a ${user}!`)
    return msg.reply(ownerBot)

  }
}
