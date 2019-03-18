"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  getHomePage: function getHomePage(req, res) {
    res.render("home", {
      title: "etherand"
    });
  }
};
exports.default = _default;