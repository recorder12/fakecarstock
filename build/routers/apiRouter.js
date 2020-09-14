"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _controller = require("../controllers/controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = _express["default"].Router(); //DB API


apiRouter.post(_routes["default"].search, _controller.postSearchDB); //admin API

apiRouter.post(_routes["default"].update, _controller.postUpdateCommmand);
var _default = apiRouter;
exports["default"] = _default;