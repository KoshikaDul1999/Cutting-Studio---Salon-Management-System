import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { username: req.body.username },
    });

    if (existingUser) {
      return res.status(409).json('User already exists!');
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    });

    res.status(200).json('User has been created.');
  } catch (error) {
    console.error(error.message);
    res.status(500).json('Internal Server Error');
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
    });

    if (!user) {
      return res.status(404).json('User not found!');
    }

    const checkPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!checkPassword) {
      return res.status(400).json('Wrong password or username!');
    }

    const token = jwt.sign({ id: user.id }, 'secretkey');

    res.cookie('accessToken', token, {
      httpOnly: true,
    }).status(200).json({ id: user.id, username: user.username, email: user.email, name: user.name });
  } catch (error) {
    console.error(error.message);
    res.status(500).json('Internal Server Error');
  }
};

export const logout = (req, res) => {
    res.clearCookie('accessToken', {
      secure: true,
      sameSite: 'none',
    }).status(200).json('User has been logged out.');
  };




// import { db } from "../connect.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const register = (req,res)=>{
    
//     //Check user if exists
//     const q = "SELECT * FROM users WHERE username = ?"

//     db.query(q,[req.body.username], (err,data)=>{
//         if(err) return res.status(500).json(err)
//         if(data.length) return res.status(409).json("User already exists!")
//         //Create a new user
//         //Hash the password
//         const salt = bcrypt.genSaltSync(10);
//         const hashedPassword = bcrypt.hashSync(req.body.password, salt)

//         const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES (?)"

//         const values = [req.body.username,req.body.email,hashedPassword,req.body.name]
//         db.query(q,[values], (err,data)=>{
//             if(err) return res.status(500).json(err);
//             return res.status(200).json("User has been created.");
//         })
//     })
// };

// export const login = (req,res)=>{

//     const q = "SELECT * FROM users WHERE username = ?";

//     db.query(q, [req.body.username], (err, data) => {
//         if(err) return res.status(500).json(err);
//         if(data.length === 0) return res.status(404).json("User not found!");

//         const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

//         if(!checkPassword) return res.status(400).json("Wrong password or username!")

//         const token = jwt.sign({id:data[0].id}, "secretkey");

//         const {password, ...others} = data[0]

//         res.cookie("accessToken", token, {
//             httpOnly: true,
//         }).status(200)
//         .json(others);
//     });
// };

// export const logout = (req,res)=>{
//     res.clearCookie("accessToken",{
//         secure:true,
//         sameSite:"none"
//     }).status(200).json("User has been logged out.")
// }; 