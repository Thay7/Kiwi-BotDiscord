const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Ban extends Command {
  constructor(client) {
    super(client)
    this.name = 'ban'
    this.aliases = ['banir']
    this.category = 'mod'
  }

  run({ channel, msg, args }) {

    if (msg.deletable) msg.delete()

    
    if (!args[0]) {
      return msg.reply('Mencione um usuário!')
        .then(m => m.delete(5000))
    }

    
    if (!args[1]) {
      return msg.reply('Por favor de um motivo.')
        .then(m => m.delete(5000))
    }

    
    if (!msg.member.hasPermission('BAN_MEMBERS')) {
      return msg.reply('<a:atencao:723878171216314448> Você não tem permissão para isso! <a:atencao:723878171216314448>')
        .then(m => m.delete(5000))
    
    }
    
    if (!msg.guild.me.hasPermission('BAN_MEMBERS')) {
      return msg.reply('<a:1475:723879475078627328> Eu não tenho permissão para isso!')
        .then(m => m.delete(5000))
    }

    const toBan = msg.mentions.members.first() || msg.guild.members.get(args[0])

    
    if (!toBan) {
      return msg.reply('Não foi possível encontrar esse usuário, tente novamente.')
        .then(m => m.delete(5000))
    }

    
    if (toBan.id === msg.author.id) {
      return msg.reply('Você não pode banir você mesmo bobinho...')
        .then(m => m.delete(5000))
    }

    
    if (!toBan.bannable) {
      return msg.reply('Não posso banir essa pessoa!!')
        .then(m => m.delete(5000))
    }
    
    let embed = new MessageEmbed()
      .setThumbnail(toBan.user.displayAvatarURL({ format: 'png', size: 2048, dynamic : true }))
      .setAuthor(`${msg.member.displayName}`, msg.author.displayAvatarURL({dynamic : true}))
      .setTitle('**Ação | Ban**')
      .addField('<a:dc:723878284517048332> Staff:', `<@${msg.member.id}>`)
      .addField('ID Staff:', `${msg.member.id}`)
      .addField('Usuário Banido:', `${toBan}`)
      .addField('ID banido:', `${toBan.id}`)
      .addField('📝 Motivo:', `${args.slice(1).join(' ')}`)
      .setImage('https://cdn.discordapp.com/attachments/592009484520390680/677227742760140800/H98LML4.gif')
      .setFooter(`• Autor: ${msg.author.tag}`, msg.author.displayAvatarURL({dynamic : true}))
      .setColor('RANDOM')
    channel.send(embed)
     
    toBan.ban(args.slice(1).join(' '))
      .catch(err => {
        if (err) return channel.send(`Bom não consegui executar esse comando por: ${err}`)})
  }
}
