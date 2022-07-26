const mongoose = require('mongoose');
// criação dos campos, metodos  e exportação
// Person é a tabela e ao lado os campos que serão criados
const Person = mongoose.model('Person',{
  name: String,
  salary : Number,
  approved: Boolean,
})

module.exports = Person