const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Say extends Command {
  constructor(client){
    super(client)
    this.name = 'kiss'
    this.aliases = ['beijar']
    this.category = 'fun'
  }

  run({ args, channel, msg, client }){

    var list = [
      'https://imgur.com/iclUiUN.gif',
      'https://imgur.com/lYQt9rx.gif',
      'https://imgur.com/w1TU5mR.gif'
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
      .setDescription(`${msg.author} beijou ${user}!`)
      .setImage(rand)
      .setTimestamp()
      .setFooter(`• Autor: ${msg.author.tag}`)
      .setAuthor(msg.author.tag, avatar)
    channel.send(embed)
  }
}