const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const superagent = require('superagent')

module.exports = class Pat extends Command {
    constructor(client) {
        super(client)
        this.name = 'headpat'
        this.aliases = ['cafune', 'pat']
        this.category = 'fun'
    }
    run({ author, msg }) {
    const uuser = message.mentions.users.first() || bot.users.cache.get(args[0])

   if(!uuser) return message.reply("Mencione alguém por favor")

    superagent.get('https://nekos.life/api/v2/img/pat')
    .end((err, response) => {
        const embed = new MessageEmbed()
        .setDescription(`${msg.author} fez um Cafuné em ${uuser}`)
        .setImage(response.body.url)
        .setFooter(`Solicitado por ${author.username}`, msg.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        msg.channel.send(embed)
    })
    }
}