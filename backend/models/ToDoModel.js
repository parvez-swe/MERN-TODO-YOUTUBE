 const mongoose = require('mongoose');

 const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        require: true,
    },
    completed:{
        type:Boolean,
        default: false
    } 
 });

 module.exports = mongoose.model('ToDo',todoSchema);
 