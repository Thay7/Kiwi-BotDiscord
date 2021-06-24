const Event = require('../lib/strucutures/Event')

module.exports = class extends Event {
  constructor() {
    super({
      name: 'ready',
      once: true
    })
  }

  run() {
    console.log('Online on client:', this.user.username)
  }
}