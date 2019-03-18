"use strict";

var _app = require("./app");

var _server = _interopRequireDefault(require("./server"));

var _functions = _interopRequireDefault(require("../functions"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app.App();

_server.default.launch(app);

var address = "".concat(app.get("ip") || "http://localhost", ":").concat(app.get("port"));
console.log("\n  App is running at ".concat(_chalk.default.yellow.bold(address), " in ").concat(_chalk.default.yellow.bold(app.get("env")), " mode\n  Press ").concat(_chalk.default.yellow.bold("CTRL-C"), " to stop\n"));
(0, _functions.default)();