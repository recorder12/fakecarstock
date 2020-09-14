"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BobaeSchema = new _mongoose["default"].Schema({
  siteName: {
    type: String
  },
  title: {
    type: String
  },
  pageURL: {
    type: String
  },
  imageURL: {
    type: String
  },
  price: {
    type: String
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});

var model = _mongoose["default"].model("Bobae", BobaeSchema); //site 별로 모델을 정해놓고 나중에 타이틀로 서치


var _default = model;
exports["default"] = _default;