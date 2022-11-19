const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client) {
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'utils'
  }

  async run({ msg, client, member }) {

    const ownerBot = client.users.cache.find(member => member.id == '712134111292293210')

    if (client.guild.member('71213411129229321').exists) {
      return msg.reply(`a minha criadora é a ${ownerBot}!`)

    } else {
      return msg.reply(`a minha criadora é a Thay!`)

    }
  }
}

