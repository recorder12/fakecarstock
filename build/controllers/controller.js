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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, carModel, img1, searchedDB;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, carModel = _req$body.carModel, img1 = _req$body.img1; // let errorCount = 0;
            // let cm = 0;
            // let img2;
            // let Lists = [];
            // let matchNm = 0;
            // const options = {
            //   scaleToSameSize: false,
            //   ignore: ["antialiasing", "colors"],
            // };

            _context.prev = 1;
            _context.next = 4;
            return _Bobae["default"].find({
              title: {
                $regex: carModel,
                $options: "i"
              }
            });

          case 4:
            searchedDB = _context.sent;
            res.json({
              db: searchedDB
            });
            res.end(); // const length = searchedDB.length;
            // searchedDB.forEach(async (element) => {
            //   try {
            //     img2 = await imageDataURI
            //       .encodeFromURL(element.imageURL)
            //       .then((res) => {
            //         return res;
            //       });
            //   } catch (error) {
            //     errorCount++;
            //     console.log(error);
            //     if (cm >= length - errorCount - 1) {
            //       console.log("ended!");
            //       res.json({ db: Lists });
            //       res.end();
            //     }
            //     return false;
            //   }
            //   try {
            //     await compare(img1, img2, options, function (err, data) {
            //       if (err) {
            //         console.log("An error!");
            //       }
            //       if (data.misMatchPercentage < 10) {
            //         Lists.push(element);
            //         matchNm++;
            //       }
            //       cm++;
            //       if (cm === length - errorCount - 1) {
            //         console.log("ended!");
            //         res.json({ db: Lists });
            //         res.end();
            //       }
            //       console.log(
            //         `Counting Nm / totla Count : ${cm} / ${
            //           length - errorCount - 1
            //         } (matching Number : ${matchNm})`
            //       );
            //     });
            //   } catch (error) {
            //     if (cm === length - errorCount - 1) {
            //       console.log("ended!");
            //       res.json({ db: Lists });
            //       res.end();
            //     }
            //     console.log(error);
            //   }
            // });

            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.redirect(_routes["default"].home);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function postSearchDB(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //update DB API


exports.postSearchDB = postSearchDB;

var postUpdateCommmand = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var updateResult;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return postUpdateDB();

          case 2:
            updateResult = _context2.sent;
            console.log("done!");

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postUpdateCommmand(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //Update DB function


exports.postUpdateCommmand = postUpdateCommmand;

var postUpdateDB = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var a, db, _a, _db, _a2, _db2;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log("Updating...");
            a = 1126;

          case 2:
            if (!(a <= 1165)) {
              _context6.next = 11;
              break;
            }

            _context6.next = 5;
            return (0, _scrapping.updateCyber)(a);

          case 5:
            db = _context6.sent;
            console.log("until ".concat(a + 4, ", done!"));
            db.forEach( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(element) {
                var findSameData, newDB;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _Bobae["default"].findOne({
                          pageURL: element.pageURL
                        });

                      case 2:
                        findSameData = _context3.sent;

                        if (!findSameData) {
                          _context3.next = 7;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 7:
                        _context3.prev = 7;
                        _context3.next = 10;
                        return _Bobae["default"].create({
                          siteName: element.siteName,
                          title: element.title,
                          pageURL: element.pageURL,
                          imageURL: element.imageURL,
                          price: element.price
                        });

                      case 10:
                        newDB = _context3.sent;
                        _context3.next = 16;
                        break;

                      case 13:
                        _context3.prev = 13;
                        _context3.t0 = _context3["catch"](7);
                        console.log(_context3.t0);

                      case 16:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[7, 13]]);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }());

          case 8:
            a += 5;
            _context6.next = 2;
            break;

          case 11:
            _a = 1;

          case 12:
            if (!(_a <= 60)) {
              _context6.next = 21;
              break;
            }

            _context6.next = 15;
            return (0, _scrapping.updateKorea)(_a);

          case 15:
            _db = _context6.sent;
            console.log("until ".concat(_a + 4, ", done!"));

            _db.forEach( /*#__PURE__*/function () {
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

          case 18:
            _a += 5;
            _context6.next = 12;
            break;

          case 21:
            _a2 = 1;

          case 22:
            if (!(_a2 <= 60)) {
              _context6.next = 31;
              break;
            }

            _context6.next = 25;
            return (0, _scrapping.updateIncome)(_a2);

          case 25:
            _db2 = _context6.sent;
            console.log("until ".concat(_a2 + 4, ", done!"));

            _db2.forEach( /*#__PURE__*/function () {
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

          case 28:
            _a2 += 5;
            _context6.next = 22;
            break;

          case 31:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function postUpdateDB(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postUpdateDB = postUpdateDB;