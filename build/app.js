"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _helmetCsp = _interopRequireDefault(require("helmet-csp"));

var _cors = _interopRequireDefault(require("cors"));

var _middlewares = require("./middlewares");

var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use( //csp policy set up
(0, _helmetCsp["default"])({
  directives: {
    defaultSrc: ["*", "https://fakecarstock.herokuapp.com/", "http://localhost:4000/", "https://file2.bobaedream.co.kr/"],
    scriptSrc: ["*", "'self'", "'unsafe-inline'", "'unsafe-eval'"],
    styleSrc: ["*"],
    imgSrc: ["*", "'self'", "data: http:"],
    connectSrc: ["*", "'self'"],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"]
  },
  reportOnly: false
})); // var whitelist = [
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

app.options("*", (0, _cors["default"])()); // app.use(cors()); //CORS request configure

app.set("view engine", "pug");
app.set("views", _path["default"].join(__dirname, "views"));
app.use("/static", _express["default"]["static"](_path["default"].join(__dirname, "static")));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json({
  limit: "50mb",
  extended: true
}));
app.use((0, _morgan["default"])("dev"));
app.use(_middlewares.localsMiddleware);
app.use(_routes["default"].home, (0, _cors["default"])(), _userRouter["default"]);
app.use(_routes["default"].api, (0, _cors["default"])(), _apiRouter["default"]);
var _default = app;
exports["default"] = _default;