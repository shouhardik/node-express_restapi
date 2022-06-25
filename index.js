import express from 'express'
import bodyParser from 'body-parser';

import userRoutes from './routes/user.js'
const app=express();
const PORT=5000;

app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    console.log('test');

    res.send('Hello SHom')
})

app.listen(PORT,()=> console.log(`Server Running:http://localhost:${PORT}`)); 
