const Nezuko = require('./src/Kyatsu')
const { GatewayIntentBits } = require('discord.js')

console.log('Config vars')
for(const env of Object.entries(process.env)){
  console.log(env[0] + '=' + env[1])
}

const bot = new Nezuko({
  token: process.env.TOKEN,
  prefixes: process.env.PREFIXES.split(','),
  owners: process.env.OWNERS.split(','),
  presence: JSON.parse(process.env.PRESENCE) || null,
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits]
})

bot.launch()
