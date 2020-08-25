const Event = require('../lib/strucutures/Event')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Event {
  constructor() {
    super({
      name: 'guildDelete'
    })
  }

  run(guild) {
    const embed = new MessageEmbed()
      .setTitle('Saída \❌')
      .addField('Nome do servidor:', `\n${guild.name}`)
      .addField('Membos:', `\n${guild.memberCount}`)
      .addField('Dono', `\n${guild.owner}`)
      .setColor('DB7093')
    this.channels.cache.get('747915482488766515').send(embed)
  }
}