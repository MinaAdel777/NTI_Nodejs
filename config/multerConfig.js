const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'imgs')
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + "_" + file.originalname)
    }
});
const upload = multer({storage})

module.exports = upload;