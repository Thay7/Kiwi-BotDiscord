const Nezuko = require('./src/Kyatsu')
const express = require('express')
const app = express()

const bot = new Nezuko({
  token: process.env.TOKEN,
  prefixes: process.env.PREFIXES.split(','),
  owners: process.env.OWNERS.split(',')
})

bot.launch()

app
  .get('/', (request, response) => response.send('Online'))
  .listen(process.env.PORT)

setInterval(_ => { return require('https').get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`) }, 26000)
