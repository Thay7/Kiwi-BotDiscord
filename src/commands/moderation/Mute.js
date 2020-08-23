const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Mute extends Command {
  constructor(client) {
    super(client)
    this.name = 'Mute'
    this.aliases = ['mutar']
    this.category = 'Mod'
  }

  async run({ guild, author, mentions, args, msg }) {
    let mutado = mentions.members.first() || guild.members.cache.get(args[1])
    if(!mutado) return msg.channel.send('Por favor diga quem você quer mutar!')
    if(!msg.member.hasPermission('MANAGE_MESSAGES', 'ADMINISTRATOR')) return msg.channel.send('Você não tem permissão para mutar as pessoas!')
    if (mutado.id === author.id) return msg.channel.send('Você não pode se mutar :v')
    let cargomute = message.guild.roles.cache.find(cargo => cargo.name === 'Mutado')
    
    if(!cargomute){
  
      try{
        message.guild.roles.create({
          data: {
            name: 'Mutado',
            color: 'RED',
            permissions: [] 
          },
          reason: 'Para Pessoas Deselegantes',
        }) 
        
  
  
      }catch(e){
        console.log(e.stack)
      }
    }
   
    let mutetime = args[1]
    if(!mutetime) return message.channel.send('Diga um tempo por favor')
    
    
    await(mutado.roles.add(cargomute.id))

    msg.reply(`<@${mutado.user.id}> foi mutado por ${ms(ms(mutetime))}`)
    setTimeout(function(){
      mutado.roles.remove(cargomute.id)
      msg.channel.send(`<@${mutado.id}> foi desmutado!`)
    }, ms(mutetime))

    msg.delete()
  }
}