const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let downloadSchema = new Schema({
        app_id : {
            type:String
        },
        app_name:{
            type:String
        },
        mem_id : {
            type:String
        },
        download_on : {
            type:Date,
            default:Date.now
        }
},{
    collection:'download'
})
module.exports = mongoose.model('Download',downloadSchema)