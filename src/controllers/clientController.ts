import ClientModel from "../schemas/client";
import { Request, Response } from "express";

const clientController = {
  create: async (req: Request, res: Response) => {
    try {
      const client = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
      };

      const response = await ClientModel.create(client);

      res
        .status(201)
        .json({ response, message: "Created Success", isError: false });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },
};

export default clientController;
