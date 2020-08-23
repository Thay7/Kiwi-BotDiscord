const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://KyatsuDB:koorinfofozap90919@kyatsu.7zcn2.mongodb.net/KyatsuDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{

  if(err) return console.log('Erro ao entrar na database!\n'+err)
  console.log('Conectado ao bando de dados!')
})

var Schema = mongoose.Schema

var guilda = new Schema({
  guild_id: {
    type: String,
    default: '-/-',
    required: true
  },
  prefixo: {
    type: String,
    default: 'k!'
  },

})

var Guilda = mongoose.model('Guildas', guilda)
module.exports = {
  Guilda: Guilda
}