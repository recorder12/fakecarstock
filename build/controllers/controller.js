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

// const base64Img = require("base64-img");
var base64Img = require("base64-img-promise");

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
    var carModel, searchedDB;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // let errorCount = 0;
            // let cm = 0;
            // let matchNm = 0;
            // let lm = 0;
            // let Lists = [];
            // const options = {
            //   scaleToSameSize: false,
            //   ignore: ["antialiasing", "colors"],
            // };
            carModel = req.body.carModel;
            _context.next = 3;
            return _Bobae["default"].find({
              title: {
                $regex: carModel,
                $options: "i"
              }
            });

          case 3:
            searchedDB = _context.sent;
            res.json({
              db: searchedDB
            });
            res.end();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postSearchDB(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //   const length = searchedDB.length;
//   searchedDB.forEach(async (element) => {
//     try {
//       const img2 = element.imageURL;
//       await compare(img1, img2, options, function (err, data) {
//         if (data.misMatchPercentage < 10) {
//           Lists.push(element);
//           matchNm++;
//         }
//         cm++;
//         console.log(
//           `Counting Nm / total Count : ${cm} / ${
//             length - errorCount - 1
//           } (matching Number : ${matchNm})`
//         );
//       });
//       if (cm === length - errorCount - 1) {
//         res.json({ db: Lists });
//         res.end();
//       }
//     } catch (error) {
//       console.log(error);
//       errorCount++;
//       if (cm === length - errorCount - 1) {
//         res.json({ db: Lists });
//         res.end();
//       }
//     }
//   });
// };
// try {
//   // res.json({ db: searchedDB });
//   // res.end();
//   // const length = searchedDB.length;
//   // searchedDB.forEach(async (element) => {
//   //   try {
//   //     img2 = await imageDataURI
//   //       .encodeFromURL(element.imageURL)
//   //       .then((res) => {
//   //         return res;
//   //       });
//   //   } catch (error) {
//   //     errorCount++;
//   //     console.log(error);
//   //     if (cm >= length - errorCount - 1) {
//   //       console.log("ended!");
//   //       res.json({ db: Lists });
//   //       res.end();
//   //     }
//   //     return false;
//   //   }
//   //   try {
//   //     await compare(img1, img2, options, function (err, data) {
//   //       if (err) {
//   //         console.log("An error!");
//   //       }
//   //       if (data.misMatchPercentage < 10) {
//   //         Lists.push(element);
//   //         matchNm++;
//   //       }
//   //       cm++;
//   //       if (cm === length - errorCount - 1) {
//   //         console.log("ended!");
//   //         res.json({ db: Lists });
//   //         res.end();
//   //       }
//   //       console.log(
//   //         `Counting Nm / totla Count : ${cm} / ${
//   //           length - errorCount - 1
//   //         } (matching Number : ${matchNm})`
//   //       );
//   //     });
//   //   } catch (error) {
//   //     if (cm === length - errorCount - 1) {
//   //       console.log("ended!");
//   //       res.json({ db: Lists });
//   //       res.end();
//   //     }
//   //     console.log(error);
//   //   }
//   // });
// } catch (error) {
//   console.log(error);
//   res.redirect(routes.home);
// }
//update DB API


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
            a = 1;

          case 2:
            if (!(a <= 400)) {
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
                var findSameData, imgUri, errorCm, newDB;
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
                        errorCm = 0;

                      case 9:
                        if (!7) {
                          _context3.next = 27;
                          break;
                        }

                        _context3.prev = 10;
                        _context3.next = 13;
                        return _imageDataUri["default"].encodeFromURL(element.imageURL).then(function (res) {
                          return res;
                        });

                      case 13:
                        imgUri = _context3.sent;
                        return _context3.abrupt("break", 27);

                      case 17:
                        _context3.prev = 17;
                        _context3.t0 = _context3["catch"](10);
                        console.log(_context3.t0);
                        console.log("retry!");
                        errorCm++;

                        if (!(errorCm >= 3)) {
                          _context3.next = 24;
                          break;
                        }

                        return _context3.abrupt("break", 27);

                      case 24:
                        return _context3.abrupt("return");

                      case 25:
                        _context3.next = 9;
                        break;

                      case 27:
                        _context3.next = 29;
                        return _Bobae["default"].create({
                          siteName: element.siteName,
                          title: element.title,
                          pageURL: element.pageURL,
                          imageURL: imgUri,
                          price: element.price
                        });

                      case 29:
                        newDB = _context3.sent;
                        _context3.next = 35;
                        break;

                      case 32:
                        _context3.prev = 32;
                        _context3.t1 = _context3["catch"](7);
                        console.log(_context3.t1);

                      case 35:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[7, 32], [10, 17]]);
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
            if (!(_a <= 20)) {
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
                var findSameData, imgUri, errorCm, newDB;
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
                        errorCm = 0;

                      case 9:
                        if (!7) {
                          _context4.next = 27;
                          break;
                        }

                        _context4.prev = 10;
                        _context4.next = 13;
                        return _imageDataUri["default"].encodeFromURL(element.imageURL).then(function (res) {
                          return res;
                        });

                      case 13:
                        imgUri = _context4.sent;
                        return _context4.abrupt("break", 27);

                      case 17:
                        _context4.prev = 17;
                        _context4.t0 = _context4["catch"](10);
                        console.log(_context4.t0);
                        console.log("retry!");
                        errorCm++;

                        if (!(errorCm >= 3)) {
                          _context4.next = 24;
                          break;
                        }

                        return _context4.abrupt("break", 27);

                      case 24:
                        return _context4.abrupt("return");

                      case 25:
                        _context4.next = 9;
                        break;

                      case 27:
                        _context4.next = 29;
                        return _Bobae["default"].create({
                          siteName: element.siteName,
                          title: element.title,
                          pageURL: element.pageURL,
                          imageURL: element.imageURL,
                          price: element.price
                        });

                      case 29:
                        newDB = _context4.sent;
                        _context4.next = 35;
                        break;

                      case 32:
                        _context4.prev = 32;
                        _context4.t1 = _context4["catch"](7);
                        console.log(_context4.t1);

                      case 35:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[7, 32], [10, 17]]);
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
            if (!(_a2 <= 20)) {
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
                var findSameData, imgUri, errorCm, newDB;
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
                        errorCm = 0;

                      case 9:
                        if (!7) {
                          _context5.next = 27;
                          break;
                        }

                        _context5.prev = 10;
                        _context5.next = 13;
                        return _imageDataUri["default"].encodeFromURL(element.imageURL).then(function (res) {
                          return res;
                        });

                      case 13:
                        imgUri = _context5.sent;
                        return _context5.abrupt("break", 27);

                      case 17:
                        _context5.prev = 17;
                        _context5.t0 = _context5["catch"](10);
                        console.log(_context5.t0);
                        console.log("retry!");
                        errorCm++;

                        if (!(errorCm >= 3)) {
                          _context5.next = 24;
                          break;
                        }

                        return _context5.abrupt("break", 27);

                      case 24:
                        return _context5.abrupt("return");

                      case 25:
                        _context5.next = 9;
                        break;

                      case 27:
                        _context5.next = 29;
                        return _Bobae["default"].create({
                          siteName: element.siteName,
                          title: element.title,
                          pageURL: element.pageURL,
                          imageURL: element.imageURL,
                          price: element.price
                        });

                      case 29:
                        newDB = _context5.sent;
                        _context5.next = 35;
                        break;

                      case 32:
                        _context5.prev = 32;
                        _context5.t1 = _context5["catch"](7);
                        console.log(_context5.t1);

                      case 35:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[7, 32], [10, 17]]);
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

var matchImage = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(img1, searchedDB) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", new Promise(function (resolve, reject) {
              var errorCount = 0;
              var cm = 0;
              var matchNm = 0;
              var lm = 0;
              var Lists = [];
              var options = {
                scaleToSameSize: false,
                ignore: ["antialiasing", "colors"]
              };
              var length = searchedDB.length;
              searchedDB.forEach( /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(element) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          lm++;
                          _context7.prev = 1;
                          _context7.t0 = compare;
                          _context7.t1 = img1;
                          _context7.next = 6;
                          return base64Img.requestBase64(element.imageURL, function (err, res, body) {
                            return body;
                          });

                        case 6:
                          _context7.t2 = _context7.sent;
                          _context7.t3 = options;

                          _context7.t4 = function (err, data) {
                            if (data.misMatchPercentage < 10) {
                              Lists.push(element);
                              matchNm++;
                            }

                            cm++;
                            console.log("Counting Nm / totla Count : ".concat(cm, " / ").concat(length - errorCount - 1, " (matching Number : ").concat(matchNm, ")"));
                          };

                          _context7.next = 11;
                          return (0, _context7.t0)(_context7.t1, _context7.t2, _context7.t3, _context7.t4);

                        case 11:
                          _context7.next = 17;
                          break;

                        case 13:
                          _context7.prev = 13;
                          _context7.t5 = _context7["catch"](1);
                          errorCount++;
                          console.log(_context7.t5);

                        case 17:
                          console.log("lm : ", lm);

                        case 18:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7, null, [[1, 13]]);
                }));

                return function (_x12) {
                  return _ref8.apply(this, arguments);
                };
              }());
              resolve(Lists);
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function matchImage(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}(); // (img2 = base64Img.requestBase64(element.imageURL, function (
//   err,
//   res,
//   body
// ) {
//   return body;
// }))