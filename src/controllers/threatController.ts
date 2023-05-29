import ThreatModel from "../schemas/threat";
import { Request, Response } from "express";

const threatController = {
  create: async (req: Request, res: Response) => {
    try {
      const response = await ThreatModel.create({
        ...req.body,
      });

      return res.status(200).json({
        response,
        isError: false,
        message: "Threat created with success",
      });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const getAllThreat = await ThreatModel.find().sort({ createdAt: -1 }).exec();

      return res.status(200).json(getAllThreat);
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  sendHeroe: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { heroeId, timeDuration } = req.body;

      await ThreatModel.findOneAndUpdate(
        { _id: id },
        { heroeId, timeDuration, isCombat: true },
        {
          new: true,
        }
      );

      return res.status(200).json({ isError: false, message: "Send Heroe" });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },
};

export default threatController;
