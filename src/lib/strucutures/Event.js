module.exports = class Event {
  constructor(options = {}) {
    this.name = options.name
    this.once = options.once || false
  }

  listen(client) {
    try {
      const typeListen = this.once ? 'once' : 'on'
      client[typeListen](this.name, this.run)
    } catch (e) {
      throw e
    }
    
    return this
  }

  run() { }
}