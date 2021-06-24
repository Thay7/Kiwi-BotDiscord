const { readdirSync, statSync, existsSync } = require('fs')
const { resolve } = require('path')

module.exports = class FileUtils {
  static async requireDir({ dir, filesOnly = ['js'], recursive = true }, callback) {
    if (!existsSync(dir)) return false
    const files = readdirSync(dir)
    for (const file of files) {
      const fullPath = resolve(dir, file)

      if (recursive && statSync(fullPath).isDirectory()) {
        this.requireDir({ dir: fullPath, filesOnly, recursive }, callback)
      }

      if (filesOnly.some(ext => new RegExp(`.${ext}$`).test(file))) {
        try {
          const required = require(fullPath)
          callback(null, required)
        } catch (err) {
          callback(err, file)
        }
      }
    }
  }
}