import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import csp from "helmet-csp";
import cors from "cors";
import { localsMiddleware } from "./middlewares";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.use(helmet());

app.use(
  //csp policy set up
  csp({
    directives: {
      defaultSrc: [
        "*",
        "https://fakecarstock.herokuapp.com/",
        "http://localhost:4000/",
        "https://file2.bobaedream.co.kr/",
        "http://fakecarstock.com",
        "http://www.fakecarstock.com"
      ],
      scriptSrc: ["*", "'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["*", "'self'", "'unsafe-inline'", "'unsafe-eval'"],
      imgSrc: ["*", "'self'", "data: http:"],
      connectSrc: ["*", "'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["*"],
    },
    reportOnly: false,
  })
);

// var whitelist = [
//   "https://file2.bobaedream.co.kr/",
//   "https://fakecarstock.herokuapp.com/",
//   "http://localhost:4000/",
// ];

// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

app.options("*", cors());
// app.use(cors()); //CORS request configure

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.home, cors(), userRouter);
app.use(routes.api, cors(), apiRouter);

export default app;
