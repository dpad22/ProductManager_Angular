const product = require('../controllers/productsCont.js')
var path = require("path");



module.exports = function(app){

    app.get("/showAll", product.index);

    app.get("/showOne:_id", product.findProduct)

    app.post("/add", product.postNew)

    app.put("/edit/:_id", (req,res) => {
        product.editProduct (req, res)
    });

    app.delete("/destroy/:_id",(req,res) =>{
        product.deleteProduct(req,res)
    });

    app.all("*",(req,res,next)=> {
        res.sendFile(path.resolve("./products/dist/products/index.html"))
    });
}