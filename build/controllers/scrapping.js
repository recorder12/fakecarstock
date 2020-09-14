"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateIncome = exports.updateKorea = exports.updateCyber = void 0;

var _request = _interopRequireDefault(require("request"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// To do : 10 page 완료 후 db에 siteURL 서치, 확인 결과 없으면 계속 진행, 있으면 거기까지 업데이트 후 종료
var updateCyber = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(startPage) {
    var db, page, URL, updatedDB;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db = [];
            console.log("break 5 seconds", startPage, "pages start!");
            page = startPage;

          case 3:
            if (!(page <= startPage + 4)) {
              _context.next = 13;
              break;
            }

            URL = "https://www.bobaedream.co.kr/cyber/CyberCar.php?sel_m_gubun=ALL&page=".concat(page, "&order=S11&view_size=70");
            _context.next = 7;
            return getDB(URL);

          case 7:
            updatedDB = _context.sent;
            db = db.concat(updatedDB);
            console.log("Bobae DB Update : ".concat(page, "/").concat(startPage + 4, " updating..."));

          case 10:
            page++;
            _context.next = 3;
            break;

          case 13:
            return _context.abrupt("return", db);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateCyber(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateCyber = updateCyber;

var updateKorea = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(startPage) {
    var db, page, URL, updatedDB;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            db = [];
            console.log("break 5 seconds", startPage, "pages start!");
            page = startPage;

          case 3:
            if (!(page <= startPage + 4)) {
              _context2.next = 13;
              break;
            }

            URL = "https://www.bobaedream.co.kr/mycar/mycar_list.php?gubun=K&page=".concat(page, "&order=S11&view_size=70");
            _context2.next = 7;
            return getDB(URL);

          case 7:
            updatedDB = _context2.sent;
            db = db.concat(updatedDB);
            console.log("Bobae DB Update : ".concat(page, "/").concat(startPage + 4, " updating..."));

          case 10:
            page++;
            _context2.next = 3;
            break;

          case 13:
            return _context2.abrupt("return", db);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateKorea(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateKorea = updateKorea;

var updateIncome = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(startPage) {
    var db, page, URL, updatedDB;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            db = [];
            console.log("break 5 seconds", startPage, "pages start!");
            page = startPage;

          case 3:
            if (!(page <= startPage + 4)) {
              _context3.next = 13;
              break;
            }

            URL = "https://www.bobaedream.co.kr/mycar/mycar_list.php?gubun=I&page=".concat(page, "&order=S11&view_size=70");
            _context3.next = 7;
            return getDB(URL);

          case 7:
            updatedDB = _context3.sent;
            db = db.concat(updatedDB);
            console.log("Bobae DB Update : ".concat(page, "/").concat(startPage + 4, " updating..."));

          case 10:
            page++;
            _context3.next = 3;
            break;

          case 13:
            return _context3.abrupt("return", db);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateIncome(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateIncome = updateIncome;

var getDB = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(URL) {
    var body, $, partialDB, data;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _nodeFetch["default"])(URL).then(function (res) {
              return res.text();
            });

          case 3:
            body = _context4.sent;
            _context4.next = 13;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            delay(3000);
            console.log("disconnet! again try");
            _context4.next = 12;
            return (0, _nodeFetch["default"])(URL).then(function (res) {
              return res.text();
            });

          case 12:
            body = _context4.sent;

          case 13:
            $ = _cheerio["default"].load(body);
            partialDB = [];
            data = {};
            $(".list-inner").each(function (i, e) {
              var pageURL = "https://www.bobaedream.co.kr/".concat($(this).attr("class", "mode-cell thumb").find("a").attr("href"));
              var imageURL = "https:".concat($(this).attr("class", "mode-cell thumb").find("img").attr("src"));
              var title = $(this).attr("class", "mode-cell title").find("p").find("a").attr("title");
              var price = $(this).attr("class", "mode-cell price").find("em" || "strong").first().text();
              data = {
                siteName: "보배드림",
                pageURL: pageURL,
                imageURL: imageURL,
                title: title,
                price: price
              };
              partialDB.push(data);
            });
            return _context4.abrupt("return", new Promise(function (res) {
              return res(partialDB);
            }));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function getDB(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};