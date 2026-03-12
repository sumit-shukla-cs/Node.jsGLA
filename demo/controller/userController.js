const users = require('../modules/userModules')

const getUsers = (req, res) => {
    res.json(users)
}
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { getUsers, getUserById }