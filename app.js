
import express from 'express';
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import SessionController
  from "./controllers/session/session-controller.js";
import cors from 'cors'
import mongoose from "mongoose";
import session from "express-session";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
// console.log("DB_CONNECTION_STRING:", CONNECTION_STRING);
const app = express()
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
);
app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false }, //locally false, render.js need true
    })
);
TuitsController(app);
HelloController(app);
UserController(app);
SessionController(app);
app.listen(process.env.PORT || 4000);



