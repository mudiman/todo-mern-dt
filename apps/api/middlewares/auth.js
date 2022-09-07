import jwt from "jsonwebtoken";

import appConfig from "../config/app.js";
import { apiResponseFormatter } from "../helpers/utils.js";

const auth = {};

auth.verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(403).json(apiResponseFormatter("A token is required for authentication"));
    }
    try {
        const decoded = jwt.verify(token, appConfig.jwt_key);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json(apiResponseFormatter(`Issue with token. ${err.message}`));
    }
    return next();
};

export default auth;