import HeroeModel from "../schemas/heroe";
import { Request, Response } from "express";

const heroeController = {
  create: async (req: Request, res: Response) => {
    try {
      const response = await HeroeModel.create({
        ...req.body,
        inBatle: false,
        user: req.body.userId,
      });

      return res.status(200).json({
        response,
        isError: false,
        message: "Heroe created with success",
      });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  getHeroeById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const heroe = await HeroeModel.findById(id).exec();

      return res.status(200).json(heroe);
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  getAllByUser: async (req: Request, res: Response) => {
    try {
      const userQuery = await HeroeModel.find(
        { user: req.params.userId },
        { user: 0 }
      );

      if (!userQuery || userQuery.length == 0)
        return res.status(400).json({
          status: 400,
          isError: true,
          message: "Not found",
        });

      return res.status(200).json(userQuery);
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  removeHeroe: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await HeroeModel.findByIdAndRemove(id);

      return res.status(200).json({ isError: false, message: "Removed" });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  updateHeroe: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, typeHeroe, classHeroe, latitude, longitude } = req.body;

    try {
      await HeroeModel.findOneAndUpdate(
        { _id: id },
        { name, typeHeroe, classHeroe, latitude, longitude },
        {
          new: true,
        }
      );

      return res.status(200).json({ isError: false, message: "Updated" });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  updateAllToNotBatle: async (req: Request, res: Response) => {
    try {
      HeroeModel.updateMany({}, { $set: { inBatle: false } });

      return res.status(200).json({ isError: false, message: "Updated All" });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },

  removeToBatle: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const heroe = await HeroeModel.findOneAndUpdate(
        { _id: id },
        { inBatle: false },
        {
          new: true,
        }
      );

      return res.status(200).json({ isError: false, message: "Updated", heroe });
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },
};

export default heroeController;
