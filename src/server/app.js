import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

import todoRoutes from "./routes/api/todoRoutes.js";
import requireJsonContent from "./middlewares/requireJsonContent.js";
import apiTransformer from "./middlewares/apiTransformer.js";
import rateLimit from "express-rate-limit";



dotenv.config(); //load envs

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(helmet());
app.use(limiter);
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(requireJsonContent);
//app.use(apiTransformer);

app.use('/todos', todoRoutes);

export default app;