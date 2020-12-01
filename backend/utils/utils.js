const jwt = require("jsonwebtoken");
const config = require("../config");

const getToken = (user) => {
    return jwt.sign({
        id: user._id,
        name: user.name,
        sex: user.sex,
        username: user.username,
        mail: user.mail,
        isAdmin: user.isAdmin
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
}

module.exports = {getToken}