const express = require('express');
 const app = express(); 
const products = require('./products');
 
app.get('/',(req,res)=>{
    res.send('api is running')
})

app.get('/products',(req,res)=>{
    res.send(products)
})

app.get('/products/:id',(req,res)=>{

    products.map((p)=>{
        if(req.params.id === p._id){ 
            return res.json(p)
        }
     })

})


app.listen(5000 , console.log('server running on port 5000'))