const Event = require('../lib/strucutures/Event')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Event {
  constructor() {
    super({
      name: 'messageUpdate'
    })
  }

  run(oldM, newM) {
    this.emit('message', newM)
  }
}