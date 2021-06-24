const Loader = require('../lib/strucutures/Loader')
const { FileUtils } = require('../lib/Utils')

module.exports = class Commands extends Loader {
  constructor(client) {
    super(client, 'commands')
    this.critical = true
  }

  load() {
    try {
      this.init()
      this.log(this.failed ? `${this.success} successful loaded and ${this.failed} failed` : 'All commands sucessful loaded.\n')
    } catch (e) {
      this.logError(e)
    }
  }

  init() {
    this.log('Loading...')

    return FileUtils.requireDir({ dir: 'src/commands' }, (err, Command) => {
      if(err){
        this.logError('    Error: ' + err.stack)
        return this.failed++
      }

      const cmd = new Command(this.client)
      this.client.commands.set(cmd.name, cmd)
      console.info(`    L [${cmd.category}] - ${cmd.name} command loaded.`)
    })
  }
}