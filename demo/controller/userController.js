const users = require('../modules/userModules')

exports.getUsers = (req, res) => {
    res.json(users)
}

exports.addUser = (req, res) => {
    console.log("res:", req.body)
    res.json(req.body)
}

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    
    const user = users.find(u => u.id == userId);

    res.json(user);
}
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const name = req.query.name;
    const header = req.headers;
    console.log("header: ", header);
    console.log("name: ", name);
    console.log("userId: ", userId);

    let user={};
    user.map((objectFromList)=>{
        console.log("objectFromList: ", objectFromList);
        const id=objectFromListq.id;
        if(id==userId){
            user=objectFromList;
        }
    })

    res.json(user);
}