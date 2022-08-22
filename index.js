const express = require('express');

const app = express();
app.get("/",(peticion,respuesta)=>{
    console.log(peticion)
    
    return respuesta.end('Hola Mundo')
});
app.post("/saludar",(peticion,respuesta)=>{
    console.log(peticion.body)

    return respuesta.status(201).send("<h1>hola</h1>");
})
app.listen(4000,()=>{
    console.log('Listening on http://localhost:4000');
});

// investigar acerca de form-data, x-www-form-urlencoded,application/json
