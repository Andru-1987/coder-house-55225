const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config.jwt.js");

const jwtVerifyAuthToken = (req, res, next) => {
    /**
     * Se toma de los headers
     */
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).send({ status: "error", error: "not authenticated" });
        return;
    }

    const token = authHeader.replace("Bearer ", "");

    try {
        /**
         * Verificamos si el token es valido
         */
        const credentials = jwt.verify(token, JWT_SECRET);
        req.user = credentials;
        next();
    } catch (error) {
        res.status(400).send({ status: "error", error: "not valid token" });
        res.end();
    }
};

module.exports = {
    jwtVerifyAuthToken,
};
