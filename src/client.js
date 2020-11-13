var net = require("net")
client = net.connect({port:8080},() => {
    console.log("Connection established.")
})
client.on('data',function(data){
    console.log("<br>"+data.toString())
    client.end()
})
client.on('end',()=>{
    console.log("Disconnected.")
})