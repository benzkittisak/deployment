const express = require('express');
const Member = require('../models/Member');
const memberRoute = express.Router();
// Member Model
let MemberModel = require('../models/Member');


// Get All Data
memberRoute.route('/').get((req,res,next)=>{
    MemberModel.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data);
        }
    })
})


// Create member data
memberRoute.route('/create-member').post((req,res,next)=>{
    MemberModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})
// Edit member data
memberRoute.route('/edit-member/:id').get((req,res,next)=>{
    MemberModel.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})

// Check Before register
memberRoute.route('/chk_mem/:username').post((req,res,next)=>{
    MemberModel.find({username:req.params.username},(error,data)=>{
        if(error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update member data
memberRoute.route('/update-member/:id').put((req,res,next)=>{
    MemberModel.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
            console.log('Member Updated')
        }
    })
})

// Delete member data
memberRoute.route('/del-member/:id').delete((req,res,next)=>{
    MemberModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.status(200).json({
                msg:data
            })
        }
    })
})

// Login member data

memberRoute.route('/login/:username/:password').post((req,res,next)=>{
   MemberModel.findOne({username:req.params.username, password:req.params.password} ,(error,data)=>{
       if(error){
           return next(error)
       } else{
           res.json(data)
       }
   })
})

// Load last member
memberRoute.route('/load_data').get((req,res,next)=>{
    MemberModel.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    }).sort({createon:-1}).limit(5)
})


  

module.exports = memberRoute