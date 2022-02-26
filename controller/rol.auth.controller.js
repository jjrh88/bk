const ctrlRol = {}
assinedModuleToRol = require('../model/assinedModuleToRol')

ctrlRol.getByName = async(req, res) =>{
   const { rname } = req.params
   const roles = await assinedModuleToRol.find({ rol: rname }).select("-_id -rol -__v")
   res.json(roles)
}


module.exports = ctrlRol