// IIFE Immediate Invoke Function Expression
(async () => {
  /**
   *
   * DECLARACION DE CONSTANTES Y/O VARIABLES GLOBLAES
   * COMO PASSWORDS
   */
  const { MONGO_URL, PORT, HOST } = require("./config/config.passwords.js");

  const http = require("http");
  const path = require("path");

  const express = require("express");
  const handlebars = require("express-handlebars");
  const { Server } = require("socket.io");
  const mongoose = require("mongoose");
  const cookieParser = require("cookie-parser");
  const session = require("express-session");
  // const fileStore = require('session-file-store')
  const MongoStore = require("connect-mongo");
  const passport = require("passport");

  const Routes = require("./routes/index.js");
  const socketManager = require("./websocket");
  const initPassportLocal = require("./config/passport.init.js");

  try {
    await mongoose.connect(MONGO_URL);

    const app = express(); // app express
    const server = http.createServer(app); // server http montado con express
    const io = new Server(server); // web socket montado en el http
    // const FileStore = fileStore(session)

    app.engine("handlebars", handlebars.engine()); // registramos handlebars como motor de plantillas
    app.set("views", path.join(__dirname, "/views")); // el setting 'views' = directorio de vistas
    app.set("view engine", "handlebars"); // setear handlebars como motor de plantillas

    app.use(express.urlencoded({ extended: true })); // para poder parsear el body y los query params
    app.use(express.json());
    app.use("/static", express.static(path.join(__dirname + "/public")));
    app.use(cookieParser("esunsecreto"));

    app.use(
      session({
        secret: "esunsecreto",
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({
          mongoUrl: MONGO_URL,
          ttl: 60 * 60,
        }),
      })
    );

    // registro de los middlewares de passport
    initPassportLocal();

    app.use(passport.initialize());
    app.use(passport.session());

    /// middleware global
    app.use((req, res, next) => {
      console.log(req.session, req.user);
      next();
    });

    // router
    app.use("/", Routes.home);
    app.use(
      "/api",
      (req, res, next) => {
        req.io = io;
        next();
      },
      Routes.api
    );

    // middlewares
    // static files
    // subir archivos estaticos

    // web socket
    io.on("connection", socketManager);

    server.listen(PORT, () => {
      console.log(`Express Server listening at http://${HOST}:${PORT}`);
    });

    console.log("se ha conectado a la base de datos");
  } catch (e) {
    console.log("no se ha podido conectar a la base de datos");
    console.log(e);
  }
})();
