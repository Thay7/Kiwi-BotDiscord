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
      .setTitle('<:ajuda:984978051043590205> Ajuda')
      .setDescription('**Olá, eu sou a Kiwi!** \n\n\`Fui desenvolvida com o intuito de te auxiliar na moderação do seu servidor. Aqui estão algumas informações importantes sobre mim:\` \n\n <:prefixo:857252134196871238> **Prefixo:**\`k!\` \n\n <:comandos:857252199046316042> **Comandos:** \`k!comandos\` \n\n <:convites:857243714651684865> **Convite:** \`k!convite\`')
      .setColor('DB7093')
    channel.send(embed)
  }
}
