"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postUpdateDB = exports.postUpdateCommmand = exports.postSearchDB = exports.admin = exports.home = void 0;

var _resemblejs = _interopRequireDefault(require("resemblejs"));

var _imageDataUri = _interopRequireDefault(require("image-data-uri"));

var _scrapping = require("./scrapping");

var _Bobae = _interopRequireDefault(require("../models/Bobae"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var compare = require("resemblejs").compare;

var fs = require("mz/fs");

_dotenv["default"].config(); //Home


var home = function home(req, res) {
  res.render("home", {
    PageTitle: "Home"
  });
}; //Admin


exports.home = home;

var admin = function admin(req, res) {
  res.render("admin");
}; //APIs
//search API


exports.admin = admin;

var postSearchDB = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, carModel, img1, errorCount, cm, img2, Lists, matchNm, options, searchedDB, length;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, carModel = _req$body.carModel, img1 = _req$body.img1;
            errorCount = 0;
            cm = 0;
            Lists = [];
            matchNm = 0;
            options = {
              output: {
                errorColor: {
                  red: 255,
                  green: 0,
                  blue: 255
                },
                errorType: "movement",
                transparency: 0.3,
                largeImageThreshold: 1200,
                useCrossOrigin: false,
                outputDiff: true
              },
              scaleToSameSize: true,
              ignore: "antialiasing"
            };
            _context2.prev = 6;
            _context2.next = 9;
            return _Bobae["default"].find({
              title: {
                $regex: carModel,
                $options: "i"
              }
            });

          case 9:
            searchedDB = _context2.sent;
            length = searchedDB.length;
            searchedDB.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(element) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _imageDataUri["default"].encodeFromURL(element.imageURL) //Image URL이 잘못된 경우 그냥 지나감. db에서 그 부분을 지울 수도 있지만, 일시적은 네트워크 장애일 가능성도 있으므로 보류
                        .then(function (res) {
                          //URL --> data URI로 변경
                          return res;
                        });

                      case 3:
                        img2 = _context.sent;
                        _context.next = 12;
                        break;

                      case 6:
                        _context.prev = 6;
                        _context.t0 = _context["catch"](0);
                        errorCount++;
                        console.log(_context.t0);

                        if (cm >= length - errorCount - 1) {
                          console.log("ended!");
                          res.json({
                            db: Lists
                          });
                          res.end();
                        }

                        return _context.abrupt("return", false);

                      case 12:
                        _context.prev = 12;
                        _context.next = 15;
                        return compare(img1, img2, options, function (err, data) {
                          if (err) {
                            console.log("An error!");
                          }

                          if (data.misMatchPercentage < 10) {
                            Lists.push(element);
                            matchNm++;
                          }

                          cm++;

                          if (cm === length - errorCount - 1) {
                            console.log("ended!");
                            res.json({
                              db: Lists
                            });
                            res.end();
                          }

                          console.log("Counting Nm / totla Count : ".concat(cm, " / ").concat(length - errorCount - 1, " (matching Number : ").concat(matchNm, ")"));
                        });

                      case 15:
                        _context.next = 21;
                        break;

                      case 17:
                        _context.prev = 17;
                        _context.t1 = _context["catch"](12);

                        if (cm === length - errorCount - 1) {
                          console.log("ended!");
                          res.json({
                            db: Lists
                          });
                          res.end();
                        }

                        console.log(_context.t1);

                      case 21:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[0, 6], [12, 17]]);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](6);
            console.log(_context2.t0);
            res.redirect(_routes["default"].home);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 14]]);
  }));

  return function postSearchDB(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //update DB API


exports.postSearchDB = postSearchDB;

var postUpdateCommmand = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var updateResult;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return postUpdateDB();

          case 2:
            updateResult = _context3.sent;
            console.log("done!");

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function postUpdateCommmand(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}(); //Update DB function


exports.postUpdateCommmand = postUpdateCommmand;

var postUpdateDB = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var a, db, _a, _db, _a2, _db2;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log("Updating...");
            a = 1126;

          case 2:
            if (!(a <= 1165)) {
              _context7.next = 11;
              break;
            }

            _context7.next = 5;
            return (0, _scrapping.updateCyber)(a);

          case 5:
            db = _context7.sent;
            console.log("until ".concat(a + 4, ", done!"));
            db.forEach( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(element) {
                var findSameData, newDB;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _Bobae["default"].findOne({
                          pageURL: element.pageURL
                        });

                      case 2:
                        findSameData = _context4.sent;

                        if (!findSameData) {
                          _context4.next = 7;
                          break;
                        }

                        return _context4.abrupt("return");

                      case 7:
                        _context4.prev = 7;
                        _context4.next = 10;
                        return _Bobae["default"].create({
                          siteName: element.siteName,
                          title: element.title,
                          pageURL: element.pageURL,
                          imageURL: element.imageURL,
                          price: element.price
                        });

                      case 10:
                        newDB = _context4.sent;
                        _context4.next = 16;
                        break;

                      case 13:
                        _context4.prev = 13;
                        _context4.t0 = _context4["catch"](7);
                        console.log(_context4.t0);

                      case 16:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[7, 13]]);
              }));

              return function (_x8) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 8:
            a += 5;
            _context7.next = 2;
            break;

          case 11:
            _a = 1;

          case 12:
            if (!(_a <= 60)) {
              _context7.next = 21;
              break;
            }

            _context7.next = 15;
            return (0, _scrapping.updateKorea)(_a);

          case 15:
            _db = _context7.sent;
            console.log("until ".concat(_a + 4, ", done!"));

            _db.forEach( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(element) {
                var findSameData, newDB;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _Bobae["default"].findOne({
                          pageURL: element.pageURL
                        });

                      case 2:
                        findSameData = _context5.sent;

                        if (!findSameData) {
                          _context5.next = 7;
                          break;
                        }

                        return _context5.abrupt("return");

                      case 7:
                        _context5.prev = 7;
                        _context5.next = 10;
                        return _Bobae["default"].create({
                          siteName: element.siteName,
                          title: element.title,
                          pageURL: element.pageURL,
                          imageURL: element.imageURL,
                          price: element.price
                        });

                      case 10:
                        newDB = _context5.sent;
                        _context5.next = 16;
                        break;

                      case 13:
                        _context5.prev = 13;
                        _context5.t0 = _context5["catch"](7);
                        console.log(_context5.t0);

                      case 16:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[7, 13]]);
              }));

              return function (_x9) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 18:
            _a += 5;
            _context7.next = 12;
            break;

          case 21:
            _a2 = 1;

          case 22:
            if (!(_a2 <= 60)) {
              _context7.next = 31;
              break;
            }

            _context7.next = 25;
            return (0, _scrapping.updateIncome)(_a2);

          case 25:
            _db2 = _context7.sent;
            console.log("until ".concat(_a2 + 4, ", done!"));

            _db2.forEach( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(element) {
                var findSameData, newDB;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return _Bobae["default"].findOne({
                          pageURL: element.pageURL
                        });

                      case 2:
                        findSameData = _context6.sent;

                        if (!findSameData) {
                          _context6.next = 7;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 7:
                        _context6.prev = 7;
                        _context6.next = 10;
                        return _Bobae["default"].create({
                          siteName: element.siteName,
                          title: element.title,
                          pageURL: element.pageURL,
                          imageURL: element.imageURL,
                          price: element.price
                        });

                      case 10:
                        newDB = _context6.sent;
                        _context6.next = 16;
                        break;

                      case 13:
                        _context6.prev = 13;
                        _context6.t0 = _context6["catch"](7);
                        console.log(_context6.t0);

                      case 16:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[7, 13]]);
              }));

              return function (_x10) {
                return _ref7.apply(this, arguments);
              };
            }());

          case 28:
            _a2 += 5;
            _context7.next = 22;
            break;

          case 31:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function postUpdateDB(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.postUpdateDB = postUpdateDB;