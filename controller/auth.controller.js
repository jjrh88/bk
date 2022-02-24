const bcrypt = require('bcrypt-nodejs')
      User = require('../model/user')
      jwt = require('jsonwebtoken')
      config = require("../config/config")


async function signIn(req, res)
{   
    const { user, password } = req.body
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
                        console.log( userFound )
                        jwt.sign({ userFound }, config.SECRET_TOKEN , { expiresIn: '1h' }, (err, token) =>{
                            if(err){
                                res.sendStatus(403);
                            }
                            else
                            {
                                res.json({ message: 'Has iniciado sesión',
                                    userFound,
                                    //expiredIn:authData.exp,
                                    token,
                                    status:true
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