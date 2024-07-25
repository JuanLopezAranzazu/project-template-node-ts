import dotenv from "dotenv";

// Configuracion de variables de entorno
dotenv.config();

interface DBConfig {
  name: string;
  user: string;
  password: string;
  host: string;
  dialect: "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql";
  port: number;
}

interface GlobalConfig {
  port: number;
  secretKey?: string;
  jwtExpirationTime?: number;
  nodeEnv?: "development" | "production" | "test";
  db: DBConfig;
}

const globalConfig: GlobalConfig = {
  port: parseInt(process.env.PORT || "3000"),
  secretKey: process.env.SECRET_KEY || "secret",
  jwtExpirationTime: parseInt(process.env.JWT_EXPIRATION_TIME || "3600"),
  nodeEnv: process.env.NODE_ENV as "development" | "production" | "test",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    name: process.env.DB_NAME || "test",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    dialect:
      (process.env.DB_DIALECT as
        | "mysql"
        | "postgres"
        | "sqlite"
        | "mariadb"
        | "mssql") || "mysql",
  },
};

export default globalConfig;
