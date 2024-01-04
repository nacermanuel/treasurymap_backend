require('dotenv').config(); 
const app = require('./app');
const port  = process.env.PORT || 8000;

app.listen(port, "0.0.0.0", ()=>{
  console.log(`Servidor o servidora corriendo en el puerto ${port}`);
})