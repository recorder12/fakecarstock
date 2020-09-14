"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _controller = require("../controllers/controller");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router(); //Home


userRouter.get(_routes["default"].home, (0, _cors["default"])(), _controller.home); //Admin Page

userRouter.get(_routes["default"].admin, _controller.postUpdateCommmand);
var _default = userRouter;
exports["default"] = _default;