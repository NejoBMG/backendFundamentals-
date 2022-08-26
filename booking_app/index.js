const express = require('express');
const { port } = require('./config');
const flights = require('./routes/flights')

const app = express();

// Middleware

// Middleware para x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}))
// Middleware para json (raw=>json)
app.use(express.json())

// Routes
app.use(flights)

//  "/" index, home, root
app.get("/",(peticion,respuesta)=>{
    console.log(peticion)
    
    return respuesta.end('Hola Mundo')
});
app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`);
});


// 