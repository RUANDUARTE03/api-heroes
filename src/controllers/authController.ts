import ClientModel from "../schemas/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import generateTokenUser from "../helpers/generateToken";

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await ClientModel.findOne({ email: email }).select(
        "+password"
      );

      if (!user) {
        return res.status(400).json({
          error: "User not exists",
          isError: true,
        });
      }

      if (!password) {
        return res.status(400).json({
          error: "Password is required",
          isError: true,
        });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({
          error: "User or Password invalid",
          isError: true,
        });
      }

      const { id, firstName, lastName } = user;

      return res
        .status(200)
        .json(generateTokenUser({ id, firstName, lastName, email }));
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },
};

export default authController;
