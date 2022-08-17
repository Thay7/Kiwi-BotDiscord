const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const neko = new (require('nekos.life'))

module.exports = class Owner extends Command {
    constructor(client){
      super(client)
      this.name = 'owner'
      this.aliases = ['dono']
      this.category = 'fun'
    }

    run({ args, channel, author, msg}){
        const user = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]).catch(_ => author) : author
        const avatar = user.displayAvatarURL({ dynamic: true, size: 2048 })
        
        const embed = new MessageEmbed()
        .setDescription(`<:insta:857243048799109120> **Avatar de** ${user} \n<:download:984978058064846879> Clique [aqui](${avatar}) para baixar`)
        .setImage(avatar)
        .setColor('DB7093')
        .setFooter(`Autor: ${author.tag}`)
      channel.send(embed)
    }
  }