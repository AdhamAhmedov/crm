
const { read } = require("../lib/fs")
const { sign } = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const { userName, password } = req.body

    const foundUser = read("users.json").find(e => e.userName == userName && e.password == password)

    if (!foundUser) {
        return res.status(401).send("Bunday user topilmadi")
    }
    const { id, role } = foundUser

    res.cookie("token", sign({ id, role }, "SECRET-KEY"))

    req.body.role = foundUser.role

    next()
}

