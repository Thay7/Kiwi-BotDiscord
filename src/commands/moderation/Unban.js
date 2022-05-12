const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Unban extends Command {
  constructor(client) {
    super(client)
    this.name = 'unban'
    this.aliases = ['desbanir']
    this.category = 'moderation'
  }
}
run({ channel, msg, args, member, me, mentions, guild }) 
msg.delete()


if(!msg.member.hasPermission('BAN_MEMBERS')) {
  return msg.channel.send(`**${msg.author.username}**, você não tem permissão`)
}
        
if(!msg.guild.me.hasPermission('BAN_MEMBERS')) {
  return msg.channel.send(`**${msg.author.username}**, eu não tenho permissão`)
}
        
let userID = args[0]
msg.guild.fetchBans().then(bans=> {
  if(bans.size === 0) return 
  let bUser = bans.find(b => b.user.id === userID)
  if(!bUser) return
  msg.guild.members.unban(bUser.user)

  const unban = new MessageEmbed()
    .setTitle('aateste')
  channel.send(unban)
})
        

    