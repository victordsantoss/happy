import express from 'express';

const app = express();

app.use(express.json());


app.get('/users', (req, res)=>{
    return res.json({message: "ola mundo"})
})

app.listen(8080); 