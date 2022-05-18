module.exports = class Command {
  constructor(client) {
    this.client = client
    this.name = null
    this.category = null
    this.description = null
    this.aliases = []
    this.hidden = false
    this.needPrefix = true
  }

  init(ctx) {
    if (this.hidden && !this.client.config.owners.includes(ctx.author.id)) return

    try {
      this.run(ctx)
    } catch (err) {
      channel.send(`Algo deu extremamente errado ao executar esse comando por favor entrem em contato com a equipe de desenvolvimento usando o commando \`suport\`\`\`\`js${err}\`\`\``).catch(_ => null)
    }
  }

  run() { }
}