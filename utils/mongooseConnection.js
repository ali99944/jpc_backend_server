const mongoose = require('mongoose')
const uri = 'mongodb+srv://danaaka8:p6TPp7ILrQUlDKfE@cluster0.uyhqfof.mongodb.net/jpc'; // Replace with your MongoDB connection URI


mongoose.connect(uri).then(() => console.log('connected mongoose'))