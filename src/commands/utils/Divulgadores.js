const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Divulgadores extends Command {
  constructor(client) {
    super(client)
    this.name = 'divulgadores'
    this.aliases = ['divulgadores']
    this.category = 'utils'
  }

  run({ channel, msg, args, client, member }) {
    msg.channel.guild.fetchInvites().then(invites => {
      if (!invites) return msg.reply('<a:dc:723878284517048332> **|** esse servidor não possui convites!')


      var rank    = invites.array().sort((a, b) => b.uses - a.uses).slice(0, 5)
      var primeiro  = rank[0]
      var segundo   = rank[1]
      var terceiro  = rank[2]
      var quarto    = rank[3]
      var quinto    = rank[4]
      if (!primeiro) return msg.reply(`<a:branco_dccarregando:723881833682567168> **|** ${msg.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`)
      if (!segundo) return msg.reply(`<a:branco_dccarregando:723881833682567168> **|** ${msg.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`)
      if (!terceiro) return msg.reply(`<a:branco_dccarregando:723881833682567168> **|** ${msg.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`)
      if (!quarto) return msg.reply(`<a:branco_dccarregando:723881833682567168> **|** ${msg.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`)
      if (!quinto) return msg.reply(`<a:branco_dccarregando:723881833682567168> **|** ${msg.author}, esse servidor precisa possuir 5 convites para ter um "ranking"!`)

      let total = primeiro.uses + segundo.uses + terceiro.uses + quarto.uses + quinto.uses



      const embed = new MessageEmbed()
        .setAuthor(`Divulgadores | ${msg.guild.name}`,client.user.avatarURL)
        .setDescription('Esse é meu "ranking" e apenas os melhores na divulgação se encontram nele!')
        .setThumbnail(msg.guild.iconURL)
        .addField('⠀⠀⠀⠀',`🏆 **1º** ${primeiro.inviter.username} \`\`\`Convidados: ${primeiro.uses}\`\`\``,false)
        .addField('⠀⠀⠀⠀',`🥈 **2º** ${segundo.inviter.username} \`\`\`Convidados: ${segundo.uses}\`\`\``,false)
        .addField('⠀⠀⠀⠀',`🥉 **3º** ${terceiro.inviter.username} \`\`\`Convidados: ${terceiro.uses}\`\`\``,false)
        .addField('⠀⠀⠀⠀',`🏅 **4º** ${quarto.inviter.username} \`\`\`Convidados: ${quarto.uses}\`\`\``,false)
        .addField('⠀⠀⠀⠀',`🏅 **5º** ${quinto.inviter.username} \`\`\`Convidados: ${quinto.uses}\`\`\`\n⠀⠀`,false)
        .addField('Total/Recrutados',`<a:dc:723878284517048332> ~ ${total}`,true)
        .addField('Total/Convites',`<a:1598:723878723853746258> ~ ${invites.size}`,true)
        .setFooter(`• Autor: ${member.user.tag}`, member.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
        .setColor('RANDOM')
      msg.channel.send({embed})


    })
  }}