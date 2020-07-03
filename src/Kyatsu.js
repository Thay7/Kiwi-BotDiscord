const { Client, Collection } = require('discord.js')
const LoadersManager = require('./lib/LoadersManager')

module.exports = class Kyatsu extends Client {
  constructor(options = {}) {
    super(options)
    this.token = options.token
    this.config = {
      owners: options.owners instanceof Array ? options.owners : [options.owners],
      prefixes: options.prefixes instanceof Array ? options.prefixes : [options.prefixes],
      presence: options.presence
    }

    this.loader = new LoadersManager(this)
    this.commands = new Collection()
  }

  launch() {
    this.loader.load()
    this.login(this.token)
    return this
  }
}