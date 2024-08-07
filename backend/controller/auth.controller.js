import { json } from "body-parser";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";

export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const profileImage = req.file;

    if (!profileImage) {
      return res.status(400).send("no file Uploaded");
    }

    const profileImagePath = profileImage.profileImagePath;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409), json({ message: "user already exist" });
      const hashedPassword = bcryptjs.hashSync(password, 10);

      const newUSer = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        profileImagePath,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
