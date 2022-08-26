import app from "./app.js";
import appConfig from "./config/app.js";
import connectMongo from "./config/mongoconnect.js";


app.listen(appConfig.port, () => {
  console.log(`Server is running`);
});

