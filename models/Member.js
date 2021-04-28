const mongoose = require('mongoose');
const Schema = mongoose.Schema

let memberSchema = new Schema({
        fname:{
            type:String
        },
        lname:{
            type:String
        },
        username:{
            type:String
        },
        password:{
            type:String
        },
        pic:{
            type:String
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        createon:{
            type:Date,
            default:Date.now
        }
},{
    collection: 'members'
})

module.exports = mongoose.model('Member',memberSchema)