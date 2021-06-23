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
      .setTitle('Ajuda')
      .setDescription('**Olá, eu sou a Kiwi!** \n\n\`Fui desenvolvida com o intuito de te auxiliar na moderação do seu servidor. Aqui estão algumas informações importantes sobre mim:\` \n\n**Prefixo:**\`k!\` \n\n**Comandos:** \`k!comandos\` \n\n**Convite:** \`k!convite\`')
      .setColor('DB7093')
    channel.send(embed)
  }
}
