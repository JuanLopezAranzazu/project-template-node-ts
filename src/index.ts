import express, { Request, Response } from "express";
import globalConfig from "./config/global_config";
import routes from "./routes";
import sequelize from "./db/db_config";
import errorHandler from "./middlewares/error_handler";
import logger from "./utils/logger";

const app = express();
const port = globalConfig.port;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

routes(app);

// Manejo de errores
app.use(errorHandler);

// Verificar conexión a la base de datos
app.post("/db-check", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send(true);
  } catch (error) {
    res.send(false);
  }
});

// Iniciar servidor
app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
