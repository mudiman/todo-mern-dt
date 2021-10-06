const requireJsonContent = (req, res, next) => {
  if (req.method == "POST" &&  req.headers["content-type"] !== "application/json") {
    res.status(400).send("Server requires application/json");
  } else {
    next();
  }
};

export default requireJsonContent;
