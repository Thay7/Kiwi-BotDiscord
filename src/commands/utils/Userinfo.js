const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Userinfo extends Command {
  constructor(client) {
    super(client)
    this.name = 'userinfo'
    this.aliases = ['us']
    this.category = 'utils'
  }

  run({ channel, msg, args, client, member }) {
       let inline = true
    let resence = true
    const status = {
        streaming: "<:streaming:723567165646700565>Transmitindo",  
        online: "<:online:723542242429501560>Online",
        idle: "<:idle:723561325829029898>Ausente",
        dnd: "<:dnd:723561233982160957>Não Perturbe",
        offline: "<:offline:723561421761282118>Offline/Invisível"
      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let pessoa = message.mentions.users.first() || message.author

              const embed = new MessageEmbed()
                .setThumbnail(pessoa.displayAvatarURL())
                .setColor("RANDOM")
                .addField("Nome e Tag", `${member.user.tag}`, true)
                .addField("ID", member.user.id, inline)
                .addField("Apelido do User no Servidor:", `${member.nickname !== null ? `${member.nickname}` : "Não possui"}`, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("🎮Jogando", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Não está jogando"}`,inline, true)
                .addField("Criou a conta em:", moment(member.user.createdAt).format("LLL"))
                .setFooter(`Userinfo de ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);
  }

}