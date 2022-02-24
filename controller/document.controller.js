const documentCtrl = {}
    fs = require('fs')
    path = require('path')
    crypto = require('crypto')
    multer = require('multer')
    GridFsStorage = require('multer-gridfs-storage')
    Grid = require('gridfs-stream')
    mongoose = require('mongoose')
    //db = require('../database/database')
    //config = require('../config/config')

//const url = 'mongodb://localhost:27017/web';
//const storage = new GridFsStorage({ url });
//const upload = multer({ storage });

const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/web',
    options: {useUnifiedTopology: true},
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage })

documentCtrl.upload = upload.single('file'), async (req, res) => {
    res.json({ status: true })
}

documentCtrl.download = async (req, res) => {
    await gfs.files.findOne({ _id: mongoose.Types.ObjectId(req.body.id) }, (err, file) => {
      const readstream = gfs.createReadStream(file.filename)
      readstream.pipe(res)
    })
}

module.exports = documentCtrl




