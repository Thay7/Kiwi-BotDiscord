const Command = require('../../lib/strucutures/Command')
const fetch = require('node-fetch')

module.exports = class Eval extends Command {
  constructor(client) {
    super(client)
    this.name = 'eval'
    this.aliases = ['ev']
    this.category = 'dev'
    this.hidden = true
  }

  async run({ client, member, guild, me, author, channel, mentions, message, args, cmd, prefix }){
    try {
      let code = args.join(' ')
      let evaled = await eval(code)

      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled, { depth: 0 })

      if(evaled.length >= 1700){
        const paste = await fetch('https://www.speedbin.xyz/documents', { method: 'post', body: evaled })
          .then(res => res.json())

        channel.send('Mandei na DM...')
        return author.send(`https://www.speedbin.xyz/${paste.key}`)
      }

      channel.send(evaled, { code: 'js' })
    }catch(err){
      channel.send(err, { code: 'js' })
    }
  }
}