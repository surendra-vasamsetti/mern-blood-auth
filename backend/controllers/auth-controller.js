// import User from "../models/user-model.js";
// import bcryptjs from "bcrypt";

// export const authTest = async (req, res, next) => {
//   const { name, email, password } = req.body;

//   const hashPassword = bcryptjs.hashSync(password, 10);

//   const newUser = new User({ name, email, password: hashPassword });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: "data saved successfully" });
//   } catch (error) {
//     next(error);
//   }
// };

import User from "../models/user-model.js";
import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";

export const authTest = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists with this email.please Login" });
    }

    // Hash the password
    const hashPassword = bcryptjs.hashSync(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashPassword });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};

// export const authLogin = async (req, res, next) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user exists in the database
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Compare passwords
//     const isPasswordValid = await bcryptjs.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     // Handle successful login
//     // Here, you can set up a session, generate a token, or return any user-related data
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: hashPassword, ...rest } = validUser._doc;
//     const expiryDate = new Date(Date.now() + 3600000); // 1 hour
//     res
//       .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
//       .status(200)
//       .json(rest);
//     res.json({ message: "Login successful", user });
//   } catch (error) {
//     next(error);
//   }
// };

export const authLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
