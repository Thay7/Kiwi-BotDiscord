const Command = require('../../lib/strucutures/Command')
const { Message, ClientApplication } = require('discord.js')

module.exports = class Owner extends Command {
  constructor(client) {
    super(client)
    this.name = 'owner'
    this.aliases = ['dono']
    this.category = 'fun'
  }

  async run({ msg, client, user}) {

    let guild = client.guilds.get('857242928366878731'),
    USER_ID = '712134111292293210'

    if (guild.member.fetch(USER_ID)) {
      console.log(`a minha criadora é a ${USER_ID}!`)
    }  else {
      console.log(`a minha criadora é a Thay#8579!`)
    }

  }
}
