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
    
    if (ownerBot) {
      return msg.reply(`a minha criadora é a ${user}!`)
    } else {
      return msg.reply(`a minha criadora é a Thay#8579!`)
    }


  }
}
