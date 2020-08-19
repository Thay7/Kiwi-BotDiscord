const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Ajuda extends Command {
  constructor(client) {
    super(client)
    this.name = 'ajuda'
    this.aliases = ['help']
    this.category = 'utils'
  }

  async run({ channel, client, mentions, args, author, member }) {

    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048, dynamic: true }))
      .setTitle('<:ajuda:734901641408675853> Ajuda')
      .setDescription('**Olá, eu sou a Kyatsu!** <:kyatsu:735553174341157025> \n\n<:lupa:735555823547187290> \`Fui desenvolvida com o intuito de te auxiliar na moderação de seu servidor. Aqui estão algumas informações importantes sobre mim:\` \n\n<:prefixo:735303901825204286> **Prefixo:**\`k!\` \n\n<:comandos:735306352296984586> **Comandos:** \`k!comandos\` \n\n<:convites:730852750086111312> **Convite:** \`k!convite\`')
      .setColor('DB7093')
      .setFooter(author.tag, author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      
    channel.send(embed)
  }
}