import jwt from "jsonwebtoken";

import { userModel } from "../models/user.js";
import appConfig from "../config/app.js";



const authController = {};

// create token
authController.login = async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await userModel.findOne({ email });
    console.info('user', user)
    
    user.comparePassword(password, function(err, isMatch) {
      if (err) throw err;
        if (isMatch) {
          const token = jwt.sign(
            { user_id: user._id, email },
            appConfig.jwt_key,
            {
              expiresIn: appConfig.jwt_expiration,
            }
          );
    
          // save user token
          user.token = token;
          user.save();
          res.status(200).json(user);
        } else {
          res.status(400).send("Invalid Credentials");
        }
    });
  } catch (err) {
    console.log(err);
  }
};

// Handling post request
authController.signup = async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    
    // Create user in our database
    const user = await userModel.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: password    
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      appConfig.jwt_key,
      {
        expiresIn: appConfig.jwt_expiration,
      }
    );
    // save user token
    user.token = token;
    user.save();

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; 
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, appConfig.jwt_key);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default authController;
