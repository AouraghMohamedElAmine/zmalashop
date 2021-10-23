import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateWebtoken from "../utilities/generateToken.js";

// @desc login a user
// @route post api/login
// @access public
const authenticateUser = async (req, res) => {
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
      res.status(401).json();
    }
  } else {
    res.status(401).json();
  }
};

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.send(user);
};

const createUser = async (err , req, res, next) => {
  const { email, password, name } = req.body;
  const userExists = await User.findOne({ email: email });

  try {
    if (userExists) {
      throw new Error("email already taken");
    }
    const user = await User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
    });
    res.json({
      name: user.name,
      email: user.email,
      token: generateWebtoken(user._id),
      isAdmin: user.isAdmin,
    });
     
  } catch (error) {
   err = "email already taken"
    next(err);
  }
};

const errorHandler =  async (res , req  ) =>{ 
   
     res.send(err)
     
  }
 
export { authenticateUser, getUserProfile, createUser, errorHandler };
