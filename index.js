const express = require('express');
const multer = require('multer')

const app = express();

// Middleware

// Middleware para x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}))
// Middleware para json (raw=>json)
app.use(express.json())

// Middleware para form-data
app.use(multer().none())

//  "/" index, home, root
app.get("/",(peticion,respuesta)=>{
    console.log(peticion)
    
    return respuesta.end('Hola Mundo')
});
app.post("/saludar",(peticion,respuesta)=>{
    const name = peticion.body.name

    return respuesta.status(201).send(`<h1>hola ${name}</h1>`);
})
app.listen(4000,()=>{
    console.log('Listening on http://localhost:4000');
});

// investigar MVC(model view controller), arquitectura de software