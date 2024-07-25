import express from "express";
import userRouter from "./user_route";

// Funcion que se encarga de definir las rutas de la API
function routes(app: express.Application) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", userRouter);
}

export default routes;
