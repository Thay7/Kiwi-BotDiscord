const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Div extends Command {
  constructor(client) {
    super(client)
    this.name = 'div'
    this.aliases = ['div']
    this.category = 'utils'
  }

  run({ channel, msg, args, client, member }) {
    let invites =  msg.guild.fetchInvites().catch(error => {
      return msg.channel.send(`<a:atencao:723878171216314448> **|** Poing-oing... ${msg.author}, eu não tenho acesso aos convites desse servidor.`)
    })


    let oi = msg.mentions.users.first()
        ? msg.mentions.users.first().id
        : msg.author.id ,

      img = msg.mentions.users.first()
        ? msg.mentions.users.first().tag
        : msg.author.tag,

      imagemm = msg.mentions.users.first()
        ? msg.mentions.users.first().avatarURL
        : msg.author.avatarURL

    msg.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === oi)
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
      let convitesAtivos = personalInvites.reduce((a, { code, uses }) => a + `https://discord.gg/${code} -  **${uses} novato(s)**\n`, '')


      let possibleInvites = [['Total','Convites']]
      possibleInvites.push([inviteCount, convitesAtivos])

      const embed = new MessageEmbed()
        .setThumbnail(msg.guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
        .setAuthor('Kyatsu | Divulgador')
        .addField(`Divulgador: ${img}`,  `Convidou um total de **${Number(inviteCount)}** `,true)
        .addField('Convites:',`${convitesAtivos  ? convitesAtivos : `**${img}** não possui convites no servidor.`}`,false)
        .setFooter(`• Autor: ${member.user.tag}`, member.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
        .setColor('RANDOM')
      msg.channel.send({ embed })

    })
  }}
