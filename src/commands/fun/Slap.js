const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Say extends Command {
  constructor(client){
    super(client)
    this.name = 'slap'
    this.aliases = ['tapa']
    this.category = 'fun'
  }

  run({ args, channel, msg, client }){

    var list = [
      'https://media.tenor.com/images/adac1010ab5c586bc11386caafe47dc4/tenor.gif',
      'https://media.tenor.com/images/4e548e93b7e5f0842578a755472796ee/tenor.gif',
      'https://media.tenor.com/images/6dbd997e3e79f21b7841b244833325c0/tenor.gif'
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
      .setDescription(`${msg.author} meteu a porrada em ${user}!`)
      .setImage(rand)
      .setFooter(`• Autor: ${msg.author.tag}`)
      .setTimestamp()
      .setAuthor(msg.author.tag, avatar)

    channel.send(embed)
  }
}
