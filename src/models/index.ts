import { Sequelize } from "sequelize";
import { User, UserSchema } from "./user_model";

// Funcion para inicializar los modelos
function models(sequelize: Sequelize) {
  // Inicializar los modelos
  User.init(UserSchema, User.config(sequelize));
  // Asociaciones
  User.associate(sequelize.models);
}

export default models;
