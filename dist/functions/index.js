"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _web = _interopRequireDefault(require("../src/common/web3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  _web.default.eth.subscribe("newBlockHeaders").on("data", function (_ref) {
    var number = _ref.number;
    return console.log(number);
  }).on("error", console.log);
};

exports.default = _default;