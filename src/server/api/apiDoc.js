import appConfig from "../config/app.js";

const apiDoc = {
  failOnErrors: true,
  explorer: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TODO API",
      version: "1.0.0",
      description: "A simple Express TODO API",
      contact: {
        name: "Mudassar Ali", // your name
        email: "mudassar.ali@gmail.com", // your email
        url: "https://mudiman.github.io", // your website
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    responses: [{
      403: {
        description: "Unauthorized"
      }
    }],
    servers: [
      {
        url: `http://localhost:${appConfig.port}`,
        description: `${appConfig.env} server`,
      }
    ]
  },
  apis: ["./routes/api/*.js"],
  swaggerOptions: {
    urls: [{
      url: `http://localhost:${appConfig.port}/api-docs/swagger.json`,
      name: 'v1'
    }]
  }
};


export default apiDoc;