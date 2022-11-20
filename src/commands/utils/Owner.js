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

    msg.reply(`a minha criadora é a ${ownerBot}!`)

    if (ownerBot == null) {
      msg.reply("a minha criadora é a Thay#8579!")
    }
  }
}
