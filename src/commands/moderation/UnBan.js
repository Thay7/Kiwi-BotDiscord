const Command = require('../../lib/strucutures/Command')

module.exports = class unban extends Command {
  constructor(client) {
    super(client)
    this.name = 'unban'
    this.aliases = ['desbanir']
    this.category = 'Mod'
  }
  run({ msg, author, guild }) {
    if(!author.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send(":x:**Você não tem permissão para desbanir**")

    if(!args[0]) return msg.channel.send("Coloque um id valido"); 

    let bannedMember;

    try{                                                            
        bannedMember = await bot.users.fetch(args[0])
    }catch(e){
        if(!bannedMember) return msg.channel.send("**Esse id não é valido**")
    }

    try {
            await guild.fetchBan(args[0])
        } catch(e){
            msg.channel.send('**Esse usuario não esta Banido**');
            return;
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Motivo Indefinido"

    if(!guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send(" **Não posso fazer isso**")
    msg.delete()
    try {
        guild.members.unban(bannedMember, {reason: reason})
        msg.channel.send(`${bannedMember.tag} foi desbanido. Mas estou esperta em Huumm`)
    } catch(e) {
        console.log(e.message)
    }
  }
}