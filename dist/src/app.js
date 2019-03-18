"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _errorhandler = _interopRequireDefault(require("errorhandler"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _routes = _interopRequireDefault(require("./routes"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  var app = (0, _express.default)();
  configureMiddleware(app);
  addRoutes(app);
  return app;
};

exports.App = App;

var configureMiddleware = function configureMiddleware(app) {
  app.set("views", _path.default.join(__dirname, "views"));
  app.set("view engine", "ejs");
  app.use((0, _morgan.default)("dev"));
  app.use(_express.default.json());
  app.use(_express.default.urlencoded({
    extended: true
  }));
  app.use((0, _cookieParser.default)());
  app.use(_express.default.static(_path.default.join(__dirname, "public")));
  app.use((0, _expressValidator.default)());
  if (process.env.NODE_ENV === "development") _this.app.use((0, _errorhandler.default)());
};

var addRoutes = function addRoutes(app) {
  app.use("/", _routes.default);
  app.use(function (req, res, next) {
    return next((0, _httpErrors.default)(404));
  });
};