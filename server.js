const express = require("express")
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb://localhost/productManager", {userNewUrlParser:true})

// settings


app.use(express.static(__dirname + '/products/dist/products'))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


app.listen(8000, () => console.log("listening on port 8000. ProductApp!"));