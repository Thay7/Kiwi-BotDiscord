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
      .setTitle('<:comandos_kiwi:748568323721003010> Comandos')
      .setDescription('\`Aqui está a lista dos meus comandos.\` \n\`Reaja no emoji de acordo com o desejado!\` \n\n<:config_kiwi:748131837003431936> **Moderação** \n\n<:game_kiwi:748134067878232074> **Diversão** \n\n<:lupa_kiwi:748567313074225282> **Ultilidades**')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
        
    const MOD = new MessageEmbed()
      .setTitle('<:config_kiwi:748131837003431936> Moderação')
      .setDescription('\`Ban/Unban\` - Bane/Desbane um membro  \n\n\`Clear\` - Apaga uma quantidade específica de mensagens de um chat \n\n\`Div\` - Mostra quantos membros foram recrutados e os convites do recrutador \n\n\`Rankdivs\` - Mostra o ranking de divulgações do servidor \n\n\`Mute/Unmute\` - Muta/Desmuta um membro \n\n\`Tópico\` - Define a mensagem do topico de um canal')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
        
    const DIV = new MessageEmbed()
      .setTitle('<:game_kiwi:748134067878232074> Diversão')
      .setDescription('\`Avatar\` - Mostra o avatar do usuário \n\n\`Say\` - O bot replica sua mensagem \n\n\`Hug\` - Dá um abraço no usuário mencionado \n\n\`Kiss\` - Dá um beijo no usuário mencionado \n\n\`Slap\` - Dá um tapa no usuário mencionado')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))

    const ULTILS = new MessageEmbed()
      .setTitle('<:mundo_kiwi:748547923922518036> Ultilidades')
      .setDescription('\n\n\`Userinfo\` - Mostra as informações do usuário \n\n\`Serverinfo\` - Mostra as informações do servidor \n\n\`Ajuda\` - Mostra informações do bot - \n\n\`Comandos\` - Mostra os comandos do bot \n\n\`Convite\` - Mostra o convite do bot \n\n\`Ping\` - Mostra o ping do bot ')
      .setColor('DB7093')  
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
    msg.channel.send(COMANDS).then(msg2 => {
      msg2.react('748131837414473778').then(r => {
        msg2.react('748131837003431936')
        msg2.react('748134067878232074')
        msg2.react('748567313074225282')

        const comandsFilter = (reaction, user) => reaction.emoji.name === 'next_kiwi' && user.id === msg.author.id
        const modFilter = (reaction, user) => reaction.emoji.name === 'config_kiwi' && user.id === msg.author.id
        const divFilter = (reaction, user) => reaction.emoji.name === 'game_kiwi' && user.id === msg.author.id
        const ultilsFilter = (reaction, user) => reaction.emoji.name === 'lupa_kiwi' && user.id === msg.author.id

        const comands = msg2.createReactionCollector(comandsFilter, { time: 100000 })
        const mod = msg2.createReactionCollector(modFilter, { time: 100000 })
        const div = msg2.createReactionCollector(divFilter, { time: 100000 })
        const ultils = msg2.createReactionCollector(ultilsFilter, { time: 100000 })

      
        comands.on('collect', r => {
          if (page === 1) return
          page--
          msg2.edit(COMANDS)
        })
        mod.on('collect', r => {
          if (page === 2) return
          page++
          msg2.edit(ADM)
        })
        div.on('collect', r => {
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