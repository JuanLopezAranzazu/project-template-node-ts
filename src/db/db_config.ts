import { Sequelize } from "sequelize";
import globalConfig from "../config/global_config";
import models from "../models";
import logger from "../utils/logger";

// Configuracion de la base de datos
const sequelize = new Sequelize(
  globalConfig.db.name,
  globalConfig.db.user,
  globalConfig.db.password,
  {
    host: globalConfig.db.host,
    dialect: globalConfig.db.dialect,
    port: globalConfig.db.port,
    logging: false,
  }
);

// Inicializacion de los modelos
models(sequelize);

// Sincronizacion de la base de datos
// Comentar la siguiente linea si no se desea que la base de datos se sincronice

// sequelize.sync({ force: false }).then(() => {
//   logger.info("Database & tables created!");
// });

export default sequelize;
