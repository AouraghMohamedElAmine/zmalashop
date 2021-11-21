import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      req.user = token.id;

console.log('pass protect');
      next();
    } catch (error) {
      res.status(401);
    }
  } else {
    res.status(401);
  }
};

export const admin = async (req, res, next) => {

  const user = await User.findById(req.headers.id)
  if (user && user.isAdmin) {
    console.log('pass protect');
    next();
  } else {
     res.status(403).send("forbidden");
  }
};
