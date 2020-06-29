const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Say extends Command {
  constructor(client){
    super(client)
    this.name = 'hug'
    this.aliases = ['abraçar']
    this.category = 'fun'
  }

  run({ args, channel, msg, client }){
    {

      var list = [
        'https://acegif.com/wp-content/gif/anime-hug-38.gif',
        'https://uploads.spiritfanfiction.com/fanfics/historias/201805/abracos-por-tras-12925969-050520182214.gif',
        'https://pa1.narvii.com/6471/68702f51590c932bf0dbebaef9804c31c664ebd9_hq.gif'
      ]

      var rand = list[Math.floor(Math.random() * list.length)]
      let user = msg.mentions.users.first() || client.users.cache.get(args[0])
      if (!user) {
        return msg.reply('você precisa mencionar um usuário!')
      }
      /*
      message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
      */
      let avatar = msg.author.displayAvatarURL({format: 'png'})
      let embed = new MessageEmbed()
        .setColor('#000000')
        .setDescription(`${msg.author} abraçou ${user}!`)
        .setImage(rand)
        .setFooter(`• Autor: ${msg.author.tag}`)
        .setTimestamp()
        .setAuthor(msg.author.tag, avatar)
      channel.send(embed)
    }
  }
}