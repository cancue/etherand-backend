"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _debug = _interopRequireDefault(require("debug"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Normalize a port into a string, number, or false.
 */
var normalizePort = function normalizePort(val) {
  var port = parseInt(val, 10);
  return isNaN(port) ? val : port >= 0 ? port : false;
};

var _default = {
  launch: function launch(app) {
    var port = normalizePort(process.env.PORT || "3000");
    app.set("port", port);

    var server = _http.default.createServer(app);

    server.listen(port);
    server.on("error", function (error) {
      if (error.syscall !== "listen") {
        throw error;
      }

      var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

      switch (error.code) {
        case "EACCES":
          console.error(bind + " requires elevated privileges");
          process.exit(1);
          break;

        case "EADDRINUSE":
          console.error(bind + " is already in use");
          process.exit(1);
          break;

        default:
          throw error;
      }
    });
    server.on("listening", function () {
      var addr = server.address();
      var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
      (0, _debug.default)("express:server")("Listening on " + bind);
    });
    return server;
  }
};
exports.default = _default;