const Nezuko = require('./src/Kyatsu')

const bot = new Nezuko({
  token: process.env.TOKEN,
  prefixes: process.env.PREFIXES.split(','),
  owners: process.env.OWNERS.split(',')
})

bot.launch()
