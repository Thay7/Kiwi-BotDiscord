const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const neko = new (require('nekos.life'))

module.exports = class Hug extends Command {
  constructor(client) {
    super(client)
    this.name = 'hug'
    this.aliases = ['abraçar', 'abracar', 'abraco', 'abraço']
    this.category = 'fun'
  }

  async run({ channel, mentions, client, author, args }) {
    const img = await neko.sfw.hug()
    const user = mentions.users.first() || client.users.cache.get(args[0])

    if (!user) return msg.reply('você precisa mencionar um usuário!')

    const embed = new MessageEmbed()
      .setColor('DB7093')
      .setDescription(`${author} abraçou ${user}`)
      .setImage(img.url)
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
    channel.send(embed)
  }
}
