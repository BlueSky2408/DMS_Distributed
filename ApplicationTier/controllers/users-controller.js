const Users = require('../model/users');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users found" });
        }
        res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const signup = async (req, res) => {
    const { username, password } = req.body;

    let existUser;
    try {
        existUser = await Users.findOne({ username }); // Use findOne to search for a user by name
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }

    if (existUser) {
        return res.status(400).json({ message: "User already exists! Login instead" });
    }

    // Hash the user's password for security
    const hashedPassword = bcrypt.hashSync(password, 10); // Use bcrypt for password hashing

    const user = new Users({
        username,
        password: hashedPassword, // Save the hashed password
    });

    try {
        await user.save();
        return res.status(201).json({ user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "User registration failed" });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existUser = await Users.findOne({ username });

        if (!existUser) {
            return res.status(404).json({ message: "Couldn't find user! Register instead" });
        }

        const isPassTrue = bcrypt.compareSync(password, existUser.password);

        if (!isPassTrue) {
            return res.status(400).json({ message: "Incorrect password!" });
        }

        return res.status(200).json({ message: "Login Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}

module.exports = { getAllUsers, signup, login };