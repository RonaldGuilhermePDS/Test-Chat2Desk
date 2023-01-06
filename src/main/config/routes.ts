import { Express, Router } from "express";

import fastGlob from "fast-glob";

export default (app: Express): void => {
  const router = Router();

  app.use(router);

  fastGlob.sync("**/src/main/routes/**.ts").map(async (file) => {
    (await require(`../../../${file}`)).default(router);
  });
};
