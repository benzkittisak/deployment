const express = require('express');
const appRoute = express.Router();
// Member Model
let AppsModel = require('../models/Apps');

//GET ALL APP 
appRoute.route('/').get((req,res,next)=>{
    AppsModel.find((error,data)=>{
        if(error){
           return next(error)
        } else {
            res.json(data);
        }
    })
})
// Create App
appRoute.route('/create').post((req,res,next)=>{
    AppsModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})


//Update View
appRoute.route('/update_view/:id').put((req,res,next)=>{
    AppsModel.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(err,data)=>{
        if(err){
            return next(err)
        } else {
            res.json(data)
        }
    })
})

// Update Download
appRoute.route('/update/download/:id').put((req,res,next)=>{
    AppsModel.findByIdAndUpdate(req.params.id,{
        $set: req.body
    }, (error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// EDIT APP
appRoute.route('/edit/:id').get((req,res,next)=>{
    AppsModel.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update App
appRoute.route('/update/:id').put((req,res,next)=>{
    AppsModel.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// ค้นหาแอป
appRoute.route('/find/:id').get((req,res,next)=>{
    AppsModel.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Delete App
appRoute.route('/del/:id').delete((req,res,next)=>{
    AppsModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// Get last application
appRoute.route('/get_5').get((req,res,next)=>{
    AppsModel.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    }).sort({create_on:-1}).limit(5);
})

//Get Popular app
appRoute.route('/get_pop').get((req,res,next)=>{
    AppsModel.find((error,data)=>{
        if(error) return next(error)
        else res.json(data)
    }).sort({view:-1}).limit(4)
})
//Check App
appRoute.route('/chk_app/:app_name').get((req,res,next)=>{
    AppsModel.findOne({app_name:req.params.app_name},(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Home Load
appRoute.route('/home_load/:category').get((req,res,next)=>{
    AppsModel.find({category:req.params.category},(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    }).limit(12)
})

appRoute.route('/download').get((req,res,next)=>{
    AppsModel.find((error,data)=>{
        if(error) return next(error)
        else res.json(data)
    }).sort({download:-1})
})
module.exports = appRoute