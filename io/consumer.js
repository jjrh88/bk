
exports.start = (io)=>{
    io.on("connection", (socket) => {
        console.log("user connected " + socket.id)
        
        socket.on("disconnect", () =>{
          console.log("user desconect " + socket.id);
        })
    
       // io.sockets.emit('newcontact', data)
    
        ///socket.on('pedidobebidas', function(msg){
        //io.sockets.emit('pedidobebidas', msg)
        /*io.sockets.on('newcontact', (data)=>{
            console.log(data)
        })*/
        socket.on('newcontact',(data)=>{
            console.log("llego ",data)
           // io.sockets.emit('pedido', msg )
           //socket.emit("emitiendo", data);
            io.sockets.emit('emitiendo', data)
        })
    })  
}

