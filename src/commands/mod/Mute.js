const Command = require('../../lib/strucutures/Command')


module.exports = class Mute extends Command {
    constructor(client) {
        super(client)
        this.name = 'mute'
        this.aliases = ['mutar']
        this.category = 'mod'
    }
}