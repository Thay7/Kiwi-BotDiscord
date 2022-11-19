const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client) {
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'utils'
  }

  async run({ msg, client, user }) {

    const ownerBot = client.users.cache.find(user => user.id == '712134111292293210')

    if (ownerBot == 'undefined') {

      return msg.reply(`a minha criadora é a Thay#8579!`)

    } else {

      return msg.reply(`a minha criadora é a ${ownerBot}!`)

    }
  }
}
