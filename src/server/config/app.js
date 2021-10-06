//development.js

const appConfig = {
  env: process.env.NODE_ENV,
  jwt_key: process.env.JWT_KEY,
  jwt_expiration: 360000,
  dbConnectionString: process.env.DB_HOST,
  mongoDebug: true,
};
  
  
  export default appConfig;