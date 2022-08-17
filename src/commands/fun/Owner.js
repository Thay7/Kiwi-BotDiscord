const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const neko = new (require('nekos.life'))

module.exports = class Owner extends Command {
    constructor(client) {
        super(client)
        this.name = 'owner'
        this.aliases = ['dono']
        this.category = 'fun'
    }

    async run({ msg }) {

        if (msg.content === "owner") {
            msg.reply("thay");

        }
    }
}