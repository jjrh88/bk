const bcrypt = require('bcrypt-nodejs')
      User = require('../model/user')
      RolUser = require('../model/rolUser')
      AssinedModuleToRol = require('../model/assinedModuleToRol')
      jwt = require('jsonwebtoken')
      config = require("../config/config")


async function signIn(req, res)
{   
    const { user, password } = req.body
    let msg = 'Has iniciado sesión'
    let status = true
    const userFound = await User.findOne({ user : user })
    if(userFound){
        bcrypt.genSalt(10, (err , salt) => 
        {
            if(err) return next(err)
            bcrypt.hash("admin", salt, null, (err, hash) => 
            {
                if(err) return next(err)
                //comparamos las contraseñas
                bcrypt.compare(password, userFound.password ,(err, isMatch)=>{
                    if( isMatch == true ){
                        userFound.password = ''
                        jwt.sign({ userFound }, config.SECRET_TOKEN , { expiresIn: '1h' }, (err, token) =>{
                            if(err){
                                res.sendStatus(403);
                            }
                            else
                            {
                                RolUser.findOne({ userId: userFound._id }, (err, info)=>{
                                    if(info != null && info === "Object"){
                                        AssinedModuleToRol.find({ rol: info.rol}, (err, modulos)=>{
                                            if(modules != null && modulos === "Object"){
                                                let modules = modulos[0]
                                                res.json({ message: msg,
                                                    userFound,
                                                    rol: info.rol,
                                                    token,
                                                    modules,
                                                    status:status
                                                })
                                            }
                                            else{
                                                res.json({ message: msg,
                                                    userFound,
                                                    rol: info.rol,
                                                    token,
                                                    status:status
                                                })
                                            }
                                        })
                                    }else{
                                        res.json({ message: msg,
                                            userFound,
                                            rol: info.rol,
                                            token,
                                            status:status
                                        })
                                    }
                                })
                            }
                        });
                    }
                    else
                      res.status(200).send({ message: 'El usuario con el que intentas ingresar no existe en el sistema.' , status : false })
                })
            })
            
        })
    }
    else
      res.status(200).send({ message: 'El usuario con el que intentas ingresar no existe en el sistema.', status : false })
    
}


async function isLogged(req, res)
{
  jwt.verify(req.params.token, config.SECRET_TOKEN, (err, data) =>{
    if(err)
      res.json({ status : false })
    else
      res.json({ status : true })
  });
}

module.exports = {
    signIn,
    isLogged
}