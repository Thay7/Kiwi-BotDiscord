const Command = require('../../lib/strucutures/Command')

module.exports = class Ping extends Command {
  constructor(client) {
    super(client)
    this.name = 'ping'
    this.aliases = ['latencia']
    this.category = 'utils'
  }

  async run({ channel, author, guild, emoji }) {

    client.on('guildMemberAdd', async (member) => { 

      let guild = await client.guilds.cache.get('709265092239425536')
      let channel = await client.channels.cache.get('723583428762796093')
      let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === '1598')
      // eslint-disable-next-line eqeqeq
      if (guild != member.guild) {
        return console.log('Sai, sai daqui.')
      } else {
        let embed = await new Discord.MessageEmbed()
          .setColor('#7c2ae8')
          .setTitle(`${emoji} Boas-vindas ${emoji}`)
          .setImage('')
          .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**!`)
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
          .setFooter('')
          .setTimestamp()
        channel.send(embed)
      }
    })

    client.on('guildMemberAdd', (member) => { 

      let guild = client.guilds.cache.get('709265092239425536')
      let channel = client.channels.cache.get('723583428762796093')
      let emoji = member.guild.emojis.cache.find(emoji => emoji.name === '1598')
      
      
      // eslint-disable-next-line eqeqeq
      const BV = member.guild.channels.cache.find(channel => channel.id == config.boasVindasChannelId)
      BV.send(`${emoji} ${member.user} bem vindo ao servidor ${guild.name} ${emoji}`)
    })

  }}