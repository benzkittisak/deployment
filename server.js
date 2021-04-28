let express = require('express');
let cors = require('cors')
let mongoose = require('mongoose')
let database = require('./database')
let bodyParser = require('body-parser')
const multer = require('multer');
const path = require('path')
const {PORT , mongoUri} = require('./config')
const morgan = require('morgan')
const upload = multer({
    
   storage:multer.diskStorage({
       destination:(req,file,cb)=>{
            cb(null,`client/public/uploads/`);
       },
       filename:(req,file,cb)=>{
           let newfile = file.originalname
           cb(null,newfile);
       }
   }),
   fileFilter:(req,file,cb)=>{
       if(!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)){
           return cb(new Error('เฉพาะไฟล์รูปภาพเท่านั้น!'),false)
       }
       cb(null,true)
   }
})
const upload_mem = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
             cb(null,`client/public/uploads/profiles/`);
        },
        filename:(req,file,cb)=>{
            let newfile = file.originalname
            cb(null,newfile);
        }
    }),
    fileFilter:(req,file,cb)=>{
        if(!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)){
            return cb(new Error('เฉพาะไฟล์รูปภาพเท่านั้น!'),false)
        }
        cb(null,true)
    }
 })


// Connect Db
mongoose.Promise = global.Promise;
mongoose.connect(database.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database Connected');
}), error=>{
    console.log('Cannot Connect to database' + error);
}

const memberAPI = require('./routes/member.route');
const appsAPI = require('./routes/apps.route');
const downloadAPI = require('./routes/download.route');
//const WebAPI = require('./routes/webloader.route');
const app = express();
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
,app.use(cors())
// API
app.use('/api',memberAPI);
app.use('/api/app',appsAPI)
app.use('/api/down',downloadAPI)

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/dist'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','dist','index.html'));
    })
}

// Create PORT
const server = app.listen(PORT,()=>{
    console.log('Connected to port ' + PORT);
})

// UPLOAD FILE API
app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({file:req.file})
})
app.post('/upload_mem',upload_mem.single('file'),(req,res)=>{
    res.json({file:req.file})
})
app.post('/upload/multi',upload.array('multi',10),(req,res)=>{
    res.json({file:req.file})
})
app.use((err,req,res,next)=>{
    if(err.code === "INCORRECT_FILETYPE"){
        res.status(422).json({error:'กรุณาอัพโหลไฟล์นามสกุล .jpeg , .jpg และ .png เท่านั้น'})
        return
    }
    if(err.code === "LIMIT_FILE_SIZE"){
        res.status(422).json({error:'กรุณาอัพโหลไฟล์ขนาดไม่เกิน 500 KB'})
        return
    }
})


// 404 Handler
app.use((req,res,next)=>{
    next(createError(404))
})

// error Handler
app.use((err,req,res,next)=>{
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})