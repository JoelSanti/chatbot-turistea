const express = require('express')
const cors = require('cors')


const app = express();

//puerto de la app
app.use(cors());

app.use(express.json({extended:true}));

const port = process.env.PORT || 8080;

app.use('/api/agent',require('./routes/index'))

app.listen(port,'0.0.0.0',()=>{
    console.log(`el servidor está en el puerto ${port}`)
})
