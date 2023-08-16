const mongoose = require('mongoose') // inicia mongoose

const Person = mongoose.model('Person',{ //Cria um modelo 
    name: String,
    salary: Number,
    approved: Boolean
})

module.exports = Person // exporta um modelo