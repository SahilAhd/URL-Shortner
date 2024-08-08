//here lets create schema

const mongoose = require('mongoose')
const urlschema = new mongoose.Schema({
shortid:{
    type: 'string',
    required: true,
    unique: true
},
redirecturl :{
type: 'string',
required: true,
},
visithistory :[{timestamp:{type: 'Number'}}],
},{timestamps:true})

const URL = mongoose.model('url',urlschema);
module.exports = URL;