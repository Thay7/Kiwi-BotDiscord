const Loaders = require('../loaders')

module.exports = class LoadersManager {
  constructor(client) {
    this.client = client
  }
  load() {
    for (const Loader of Object.values(Loaders)) {
      try {
        const loader = new Loader(this.client)
        loader.load()
      } catch (e) {
        throw e
      }
    }
  }
}