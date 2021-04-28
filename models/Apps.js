const mongoose = require('mongoose');
const Schema = mongoose.Schema

let appsSchema = new Schema({
    app_name:{
        type:String
    },
    dev_name:{
        type:String
    },
    icon:{
        type:String
    },
    preview:{
        type:[String]
    },
    des:{
        type:String
    },
    category:{
        type:String
    },
    link:{
        type:String
    },
    view:{
        type:Number,
        default:0
    }
    ,
    download:{
        type:Number,
        default:0
    },

    create_on:{
        type:Date,
        default:Date.now
    }
},{
    collection : 'apps'
});
module.exports = mongoose.model('Apps',appsSchema)