import { apiResponseFormatter } from "../helpers/utils.js";

const requireJsonContent = (req, res, next) => {
  if (req.method == "POST" &&  req.headers["content-type"] !== "application/json") {
    res.status(400).json(apiResponseFormatter("Server requires application/json"));
  } else {
    next();
  }
};

export default requireJsonContent;
