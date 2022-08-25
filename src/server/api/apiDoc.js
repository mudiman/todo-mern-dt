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
    servers: [
      {
        url: `https://localhost:${appConfig.port}`
      }
    ]
  },
  apis: ["./routes/api/*.js"],
  swaggerOptions: {
    url: 'http://petstore.swagger.io/v2/swagger.json'
  }
};


export default apiDoc;