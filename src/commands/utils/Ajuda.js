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
      .setTitle('<:info_kiwi:748230688481869905> Ajuda')
      .setDescription('**Olá, eu sou a Kiwi!** <:kiwi_kiwi:748567313309106196> \n\n<:lupa_kiwi:748567313074225282> \`Fui desenvolvida com o intuito de te auxiliar na moderação do seu servidor. Aqui estão algumas informações importantes sobre mim:\` \n\n<:prefix_kiwi:748567313057579138> **Prefixo:**\`k!\` \n\n<:comandos_kiwi:748568323721003010> **Comandos:** \`k!comandos\` \n\n<:convites_kiwi:748547923620659350> **Convite:** \`k!convite\`')
      .setColor('DB7093')
    channel.send(embed)
  }
}