"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _web = _interopRequireDefault(require("web3"));

var _config = _interopRequireDefault(require("config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rpc = _config.default.get("RPC_SERVER");

var web3 = new _web.default(new _web.default.providers.WebsocketProvider(rpc));
var _default = web3;
exports.default = _default;