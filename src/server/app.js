import express from "express";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import swaggerJsDoc from "swagger-jsdoc";
import rfs from "rotating-file-stream";
import path from "path";
import { fileURLToPath } from 'url';

import todoRoutes from "./routes/api/todoRoutes.js";
import requireJsonContent from "./middlewares/requireJsonContent.js";
import rateLimit from "express-rate-limit";
import apiDoc from "./api/apiDoc.js";
import authRoutes from "./routes/api/authRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

const specs = swaggerJsDoc(apiDoc);

app.get("/api-docs/swagger.json", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(specs);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

app.use(morgan('combined', { stream: accessLogStream }))

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

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);



export default app;