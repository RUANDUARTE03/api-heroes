import ThreatModel from "../schemas/threat";
import HeroeModel from "../schemas/heroe";
import { Request, Response } from "express";

const threatController = {
  create: async (req: Request, res: Response) => {
    try {
      const { heroeId } = req.body;
      const response = await ThreatModel.create({
        ...req.body,
        heroe: heroeId
      });

      const heroe = await HeroeModel.findOneAndUpdate(
        { _id: heroeId },
        { inBatle: true },
        {
          new: true,
        }
      );

      return res.status(200).json({
        response,
        heroe,
        isError: false,
        message: "Threat created with success",
      });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const getAllThreat = await ThreatModel.find()
        .sort({ createdAt: -1 })
        .exec();

      return res.status(200).json(getAllThreat);
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  deleteAll: async (req: Request, res: Response) => {
    try {
      await ThreatModel.deleteMany();

      return res.status(200).json({ isError: false, message: "Removed all" });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },
};

export default threatController;
