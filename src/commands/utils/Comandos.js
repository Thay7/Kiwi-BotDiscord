const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')


module.exports = class Comandos extends Command {
  constructor(client) {
    super(client)
    this.name = 'comandos'
    this.aliases = ['commands']
    this.category = 'utils'
  } 

  async run({ channel, author, client, message}) {

    const embed1 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
      .setTitle('<:comandos:735306352296984586> Comandos')
      .setDescription('\`Aqui está a lista dos meus comandos.\` \n\`Reaja no emoji de acordo com o desejado!\` \n\n**Moderação** <:ADM:734903913899229215> \n\n**Diversão** <:diverso:734904814911225906> \n\n**Ultilidades** <:ULTILS:734905522721128449>')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
    channel.send(embed1).then((c) => {
      c.react('734903913899229215').then(() => {
        c.react('734904814911225906').then(() => {
          c.react('734905522721128449').then(() => {
            c.react('735600901087297596').then(() => {
            })
          })
        })
      })

      let modFilter = (reaction, user) => reaction.emoji.id === '734903913899229215' && user.id === message.id
      let funFilter = (reaction, user) => reaction.emoji.id === '734904814911225906' && user.id === message.id
      let utilsFilter = (reaction, user) => reaction.emoji.id === '734905522721128449' && user.id === message.id
      let outsetFilter = (reaction, user) => reaction.emoji.id === '735600901087297596' && user.id === message.id

      let mod = c.createReactionCollector(modFilter)
      let fun = c.createReactionCollector(funFilter)
      let utils = c.createReactionCollector(utilsFilter)
      let outset = c.createReactionCollector(outsetFilter)

      mod.on('collect', (reaction, user) => {
        let ADM = new MessageEmbed()
          .setTitle('<:ADM:734903913899229215> Moderação')
          .setDescription('aaaa')
          .setColor('DB7093')
        c.edit(ADM)
        reaction.users.remove(user)
      })

      fun.client('collect', (reaction, user) => {
        let FUN = new MessageEmbed()
          .setTitle('<:diverso:734904814911225906> Diversão')
          .setDescription('aaaa')
          .setColor('DB7093')
        c.edit(FUN)
        reaction.users.remove(user)
      })

      utils.client('collect', (reaction, user) => {
        let UTILS = new MessageEmbed()
          .setTitle('<:ULTILS:734905522721128449> Ultilidades')
          .setDescription('aaaa')
          .setColor('DB7093')
        c.edit(UTILS)
        reaction.users.remove(user)
      })   
      
      outset.client('collect', (reaction, user) => {
        let Embed2 = new MessageEmbed()
          .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
          .setTitle('<:comandos:735306352296984586> Comandos')
          .setDescription('\`Aqui está a lista dos meus comandos.\` \n\`Reaja no emoji de acordo com o desejado!\` \n\n**Moderação** <:ADM:734903913899229215> \n\n**Diversão** <:diverso:734904814911225906> \n\n**Ultilidades** <:ULTILS:734905522721128449>')
          .setColor('DB7093')
          .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
        c.edit(Embed2)
        reaction.users.remove(user)
    
      }      
      )}     
    )}
}                                                                                                                           