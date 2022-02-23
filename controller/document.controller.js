const documentCtrl = {}
  fs = require('fs')
  path = require('path')
  crypto = require('crypto')
  multer = require('multer')
  upload = multer({ dest: 'uploads/' })
  

documentCtrl.upload = upload.single('file'), async (req, res, next) => {
  console.log(req.file)
  res.json({ status: true })
}


documentCtrl.download = async (req, res) => {
    await gfs.files.findOne({ _id: mongoose.Types.ObjectId(req.body.id) }, (err, file) => {
      const readstream = gfs.createReadStream(file.filename)
      readstream.pipe(res)
    })
}

module.exports = documentCtrl


