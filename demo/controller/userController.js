const users = require('../modules/userModules')

exports.getUsers = (req, res) => {
    res.json(users)
}

exports.addUser = (req, res) => {
    console.log("res:", req.body)
    res.json(req.body)
}

exports.getUserById = (req, res) => {
    const {department,section}=req.params;
    console.log('section',section);
    console.log("department",department);

    res.status(200).json({
        user:user,
        name,
    });

}
exports.addUsers=(req,res)=>{
    const students = req.body;
    console.log('students',students);
    res.json({
        message:"Students added successfully",
        students,
    })
}

// GET /get/products
exports.getProducts = (req, res) => {
    res.json(products)
}

// GET /get/products/:id
exports.getProductById = (req, res) => {
    const productId = req.params.id;
    
    const product = users.find(p => p.id == productId);

    res.json(product);
}

// POST /add/products
exports.addProduct = (req, res) => {
    console.log("res:", req.body)
    res.json(req.body)
}

// DELETE /get/products/:id
exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    
    const productIndex = users.findIndex(p => p.id == productId);
    
    if(productIndex > -1) {
        const deletedProduct = users.splice(productIndex, 1);
        res.json({message: "Product deleted", product: deletedProduct[0]});
    } else {
        res.status(404).json({message: "Product not found"});
    }
}

