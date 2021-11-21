import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateWebtoken from "../utilities/generateToken.js";
import asyncHandler from "express-async-handler";

// @desc login a user
// @route post api/login
// @access public
const authenticateUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const hashedPassorwd = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (hashedPassorwd) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateWebtoken(user._id),
      });
      res.status(200);
    } else {
      throw new Error("wrong email or password");
    }
  } else {
    throw new Error("wrong email or password ");
  }
});

// @desc get logged user information
// @route get api/users/profile
// @access private
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.send(user);
};

// @desc registre new user
// @route post api/users/registre
// @access public
const createUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    throw new Error("email already taken");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassorwd = await bcrypt.hash(password, salt);
  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassorwd,
  });
  res.json({
    name: user.name,
    email: user.email,
    password: user.password,
    token: generateWebtoken(user._id),
    isAdmin: user.isAdmin,
  });
});

// @desc update user profile 
// @route put api/users/updateUser
// @access private (by normal users )
const updateUser = async (req, res) => {
  const user = await User.findById(  req.params.id  );
    user.name = req.body.name;
  const updatedUser =  await user.save()
  res.send(updatedUser);
};

// @desc get all users 
// @route put api/users/getUsers
// @access private (admin)
const getAllUsers = asyncHandler(async (req,res)=>{
  const users = await User.find({}).select('-password'); 
  res.send(users) 
})

const removeUser  = asyncHandler(async (req,res) =>{
  const user = await User.deleteOne({_id : req.params.id})
  res.send(  user        )
})



export { authenticateUser, getUserProfile, createUser, updateUser , getAllUsers , removeUser };
