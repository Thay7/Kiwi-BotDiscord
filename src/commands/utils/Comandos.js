const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')


module.exports = class Comandos extends Command {
  constructor(client) {
    super(client)
    this.name = 'comandos'
    this.aliases = ['commands']
    this.category = 'utils'
  } 

  async run({ channel, author, client, message, msg}) {

    let page = 1
    const COMANDS = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
      .setTitle('<:comandos:735306352296984586> Comandos')
      .setDescription('\`Aqui está a lista dos meus comandos.\` \n\`Reaja no emoji de acordo com o desejado!\` \n\n<:ADM:734903913899229215> **Moderação** \n\n<:diverso:734904814911225906> **Diversão** \n\n<:ULTILS:734905522721128449> **Ultilidades**')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
        
    const ADM = new MessageEmbed()
      .setTitle('<:ADM:734903913899229215> Moderação')
      .setDescription('\`Ban/Unban\` - Bane/Desbane um usuário  \n\n\`Clear\` - Apaga uma quantidade específica de mensagens de um chat \n\n\`Div\` - Mostra quantos membros foram recrutados \n\n\`Rankdivs\` - Mostra o ranking de divulgções do servidor \n\n\`Mute/Unmute\` - Muta/Desmuta um usuário \n\n\`Topico\` - Define a mensagem do topico de um canal')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
        
    const FUN = new MessageEmbed()
      .setTitle('<:diverso:734904814911225906> Diversão')
      .setDescription('\`Avatar\` - Mostra o avatar do usuário \n\n\`Say\` - O bot replica sua mensagem \n\n\`Hug\` - Dá um abraço no usuário mencionado \n\n\`Kiss\` - Dá um beijo no usuário mencionado \n\n\`Slap\` - Dá um tapa no usuário mencionado')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))

    const ULTILS = new MessageEmbed()
      .setTitle('<:ULTILS:734905522721128449> Ultilidades')
      .setDescription('\n\n\`Userinfo\` - Mostra as informações do usuário \n\n\`Serverinfo\` - Mostra as informações do servidor \n\n\`Ajuda\` - Mostra informações do bot - \n\n\`Comandos\` - Mostra os comandos do bot \n\n\`Convite\` - Mostra o convite do bot \n\n\`Ping\` - Mostra o ping do bot ')
      .setColor('DB7093')  
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
    msg.channel.send(COMANDS).then(msg2 => {
      msg2.react('746405909689008158').then(r => {
        msg2.react('734903913899229215')
        msg2.react('734904814911225906')
        msg2.react('734905522721128449')

        const comandsFilter = (reaction, user) => reaction.emoji.name === 'seta_esquerda' && user.id === msg.author.id
        const admFilter = (reaction, user) => reaction.emoji.name === 'ADM' && user.id === msg.author.id
        const funFilter = (reaction, user) => reaction.emoji.name === 'diverso' && user.id === msg.author.id
        const ultilsFilter = (reaction, user) => reaction.emoji.name === 'ULTILS' && user.id === msg.author.id

        const comands = msg2.createReactionCollector(comandsFilter, { time: 100000 })
        const adm = msg2.createReactionCollector(admFilter, { time: 100000 })
        const fun = msg2.createReactionCollector(funFilter, { time: 100000 })
        const ultils = msg2.createReactionCollector(ultilsFilter, { time: 100000 })

      
        comands.on('collect', r => {
          if (page === 1) return
          page--
          msg2.edit(COMANDS)
        })
        adm.on('collect', r => {
          if (page === 2) return
          page++
          msg2.edit(ADM)
        })
        fun.on('collect', r => {
          if (page === 3) return
          page++
          msg2.edit(FUN)
        })
        ultils.on('collect', r => {
          if (page === 4) return
          page++
          msg2.edit(ULTILS)
        })
      })
    })
  }           
}