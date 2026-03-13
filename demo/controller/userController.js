const users = require('../modules/userModules')

const getUsers = (req, res) => {
    res.json(users)
}

exports.addUser = (req,res)=>{
    console.log("res:",req.body)
    res.json(req.body)
};

exports.getUserById=(req,res)=>{
    const userId = req.params.id;
    let user = {};
    users.map((userDetails)=>{
        id=userDetails['id'];
        if(id==userId){
            user=userDetails;
        }
    });

}


module.exports = { getUsers}