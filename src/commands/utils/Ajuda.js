const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Ajuda extends Command {
  constructor(client) {
    super(client)
    this.name = 'ajuda'
    this.aliases = ['help']
    this.category = 'utils'
  }

  async run({ channel, mentions, args, author, member }) {
    const { MessageEmbed } = require('discord.js')

    const embed = new MessageEmbed()

      .setTitle('<:ajuda:734901641408675853> Ajuda')
      .setDescription('Aqui estão algumas de minhas funções: \n *reaja de acordo com o desejado\n\n Moderação <:ADM:734903913899229215>\n\nDiversão <:diverso:734904814911225906>\n\nUltilidades <:ULTILS:734905522721128449>')
      .setColor('DB7093')
      .setAuthor(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
    channel.send(embed).then((c) => {
      c.react('734903913899229215').then(() => {
        c.react('734904814911225906').then(() => {
          c.react('734905522721128449').then(() => {
          })
        })
      })

      let outsetFilter = (reaction, user) => reaction.emoji.id === '732837629900488795' && user.id === message.author.id
      let informationFilter = (reaction, user) => reaction.emoji.id === '732837629615407118' && user.id === message.author.id
      let interactionFilter = (reaction, user) => reaction.emoji.id === '732836340277706782' && user.id === message.author.id

      let outset = c.createReactionCollector(outsetFilter)
      let information = c.createReactionCollector(informationFilter)
      let interaction = c.createReactionCollector(interactionFilter)
    }
    )}
}