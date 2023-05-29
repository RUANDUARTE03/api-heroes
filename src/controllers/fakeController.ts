import { Request, Response } from "express";
import { faker } from "@faker-js/faker";
import HeroeModel from "../schemas/heroe";

const fakeController = {
  generateFake: async (req: Request, res: Response) => {
    try {
      function mapToRange(
        value: number,
        inMin: number,
        inMax: number,
        outMin: number,
        outMax: number
      ): number {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
      }

      function generateCoordinates() {
        const latitude = mapToRange(Math.random(), 0, 1, -90, 90);
        const longitude = mapToRange(Math.random(), 0, 1, -180, 180);
        return { lat: latitude, lng: longitude };
      }

      const fakeData = [];

      const typeHeroeArray = ["Ice", "Fire"];

      const classHeroeArray = ["S", "A", "B", "C"];

      for (let i = 0; i < 50; i++) {
        const randomIndexHeroe = Math.floor(
          Math.random() * typeHeroeArray.length
        );
        const randomIndexClass = Math.floor(
          Math.random() * classHeroeArray.length
        );
        const randomType = typeHeroeArray[randomIndexHeroe];
        const randomTypeHeroe = classHeroeArray[randomIndexClass];

        const name = faker.person.firstName();
        const typeHeroe = randomType;
        const classHeroe = randomTypeHeroe;

        const getLocation = generateCoordinates();

        const fakeItem = {
          name: name,
          typeHeroe: typeHeroe,
          classHeroe: classHeroe,
          latitude: getLocation.lat,
          longitude: getLocation.lng,
        };

        fakeData.push(fakeItem);
      }

      fakeData?.map(async (heroe) => {
        await HeroeModel.create({
          name: heroe.name,
          typeHeroe: heroe.typeHeroe,
          classHeroe: heroe.classHeroe,
          latitude: heroe.latitude,
          longitude: heroe.longitude,
          user: "646cd30c8d787460e20cb09a",
        });
      });

      res.json(fakeData);
    } catch (error) {
      res.status(400).json({ error, isError: true });
    }
  },
};

export default fakeController;
