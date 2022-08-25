//development.js
import dotenv from "dotenv";

dotenv.config();

const appConfig = {
  env: process.env.NODE_ENV,
  jwt_key: process.env.JWT_KEY,
  jwt_expiration: "2h",

  dbConnectionString: process.env.DB_HOST,
  mongoDebug: true,
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,

  port: process.env.PORT,

};

export default appConfig;