const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client) {
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }

  async run({ msg, client, user, guild }) {

    let guild = client.guilds.get('857242928366878731'),
      USER_ID = '712134111292293210'

      const ownerBot = USER_ID

    if (guild.member(USER_ID)) {
      return msg.reply(`a minha criadora é a ${ownerBot}!`)
    } else {
      return msg.reply(`a minha criadora é a Thay#8579!`)

    }
  }
}
