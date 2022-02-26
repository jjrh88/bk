const User = require('../model/user')
      Roles = require('../model/roles')
      Modules = require('../model/modulos')
      assignedModuleToRol = require('../model/assinedModuleToRol')
      rolUser = require('../model/rolUser')

exports.createUser = () =>{
    var user = new User
    ({
        user: "admin",
        password: "admin"
    })
    user.save()   

    var user = new User
    ({
        user: "jhon",
        password: "jhon"
    })
    user.save() 

    var user = new User
    ({
        user: "javi",
        password: "javi"
    })
    user.save() 
}


exports.createRoles = () =>{
    var rol = new Roles
    ({
        name: "admin"
    })
    rol.save()   

    var rol = new Roles
    ({
        name: "secreteria"
    })
    rol.save()  

    var rol = new Roles
    ({
        name: "gerente"
    })
    rol.save()  
}

exports.createModules = () =>{
   var modules = new Modules({
       modulo: "usuarios", url:"admin/usuarios",
        submodulos:[
            { name: "listar" ,
                opciones: [
                    { name: "edit" },
                    { name: "visualizar" },
                    { name: "delete" }
                ]
            },
            { name: "crear" ,
                opciones: [
                    { name: "save" }
                ]
            },
            { name: "reporte" ,
                opciones: [
                    { name: "generar" }
                ]
            }  
        ],
        modulo: "inventario", url:"admin/inventario",
        submodulos:[
            { name: "listar" ,
                opciones: [
                    { name: "edit" },
                    { name: "visualizar" },
                    { name: "delete" }
                ]
            },
            { name: "crear" ,
                opciones: [
                    { name: "save" }
                ]
            },
            { name: "reporte" ,
                opciones: [
                    { name: "generar" }
                ]
            }  
        ],
        modulo: "contabilidad", url:"admin/contabilidad",
        submodulos:[
            { name: "listar" ,
                opciones: [
                    { name: "edit" },
                    { name: "visualizar" },
                    { name: "delete" }
                ]
            },
            { name: "crear" ,
                opciones: [
                    { name: "save" }
                ]
            },
            { name: "reporte" ,
                opciones: [
                    { name: "generar" }
                ]
            }  
        ]
    })
    modules.save()
}

exports.createAsignedModuleToRolUser = () =>{
    var asigned = new assignedModuleToRol
    ({
        rol: "gerente" ,
        modulo: [
           { name: "inventario" },
           { name: "contabilidad" }
        ]
    })
    asigned.save()   

    var asigned = new assignedModuleToRol
    ({
        rol: "secretaria" ,
        modulo: [
           { name: "inventario" },
           { name: "usuarios" }
        ]
    })
    asigned.save()   

    var asigned = new assignedModuleToRol
    ({
        rol: "admin" ,
        modulo: [
           { name: "inventario" },
           { name: "contabilidad" },
           { name: "usuarios" }
        ]
    })
    asigned.save()   
}

exports.createRolUser = () =>{
    var roluser = new rolUser
    ({
        rol: "gerente",
        userId: "6216edd9a2d6f523210ee618"
    })
    roluser.save()   


    var roluser = new rolUser
    ({
        rol: "admin",
        userId: "6216edd9a2d6f523210ee617"
    })
    roluser.save() 

    var roluser = new rolUser
    ({
        rol: "secreteria",
        userId: "6216cde97176150c1704c227"
    })
    roluser.save() 

}