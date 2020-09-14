"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); //Home


var HOME = "/"; //Api

var API = "/api";
var SEARCH = "/search";
var UPDATE = "/update"; //Admin

var ADMIN = "/".concat(process.env.admin_URL); //const ADMIN = `/admin`;

var routes = {
  home: HOME,
  api: API,
  search: SEARCH,
  update: UPDATE,
  admin: ADMIN
};
var _default = routes;
exports["default"] = _default;