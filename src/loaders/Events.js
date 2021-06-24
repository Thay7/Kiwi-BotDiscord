const Loader = require('../lib/strucutures/Loader')
const { FileUtils } = require('../lib/Utils')

module.exports = class Commands extends Loader {
  constructor(client) {
    super(client, 'events')
    this.critical = true
  }

  load() {
    try {
      this.init()
      this.log(this.failed ? `${this.success} successful loaded and ${this.failed} failed` : 'All Events sucessful handle.\n')
    } catch (e) {
      this.logError(e)
    }
  }

  init() {
    this.log('Loading...')

    return FileUtils.requireDir({ dir: 'src/events' }, (err, Event) => {
      if(err){
        this.logError('    Error: ' + err.stack)
        return this.failed++
      }

      const event = new Event().listen(this.client)

      console.info(`    L ${event.name} listen.`)
    })
  }
}