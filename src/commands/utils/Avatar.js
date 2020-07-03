const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Avatar extends Command {
  constructor(client) {
    super(client)
    this.name = 'avatar'
    this.aliases = ['av']
    this.category = 'utils'
  }

  run({ channel, msg, args, client }) {

    let user = msg.mentions.users.first() || client.users.cache.get(args[0]) || msg.author
    
    let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 })
  
    let embed = new MessageEmbed() 
      .setTitle(`\:icons8fotografia100: ${user.username}`) 
      .setDescription(`**[Clique aqui para baixar!](${user.displayAvatarURL({dynamic : true})})**`)
      .setImage(avatar) 
      .setFooter(`• Autor: ${msg.author.tag}`, msg.author.displayAvatarURL({dynamic : true}))
      .setColor('RANDOM') 
    channel.send(embed) 
  
  };
   
  
}
