import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import { userModel } from "../models/user.js";
import appConfig from "../config/app.js";
import { apiResponseFormatter } from "../helpers/utils.js";



const authController = {};

// create token
authController.login = async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json(apiResponseFormatter("All input is required"));
    }
    // Validate if user exist in our database
    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
      res.status(400).json(apiResponseFormatter("user not found"));
    }
    user.comparePassword(password, function (err, isMatch) {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(
          { user_id: user._id, email },
          appConfig.jwt_key,
          {
            expiresIn: appConfig.jwt_expiration,
          }
        );
        res.status(200).json({ token: token });
      } else {
        res.status(400).json(apiResponseFormatter("Invalid Credentials"))
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

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).json(apiResponseFormatter("All input is required"));
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(409).json(apiResponseFormatter("User Already Exist. Please Login"));
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
    // user.token = token;
    // user.save();

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};



export default authController;
