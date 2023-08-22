const PORT = 3000;
const HOST = "localhost";

const MONGO_USER = "anderson";
const MONGO_PWD = "1234";
const MONGO_DB = "ecommerce";
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@andersoncluster.b7ib6.mongodb.net/${MONGO_DB}`;

const GITHUB_CLIENT_ID = "Iv1.3327439d6575ffb1";
const GITHUB_CLIENT_SECRET = "8345a27187167d57b67a9467a20de67d1bb492bd";
const GITHUB_STRATEGY_NAME = "github";

module.exports = {
    MONGO_URL,
    PORT,
    HOST,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    GITHUB_STRATEGY_NAME,
};
