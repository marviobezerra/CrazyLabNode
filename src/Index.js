"use strict";
exports.__esModule = true;
var http = require("http");
var App_1 = require("./App");
var App_Utils_1 = require("./App.Utils");
var App = new App_1.Application().Express;
var port = App_Utils_1.AppUtils.NormalizePort(process.env.PORT || 3000);
App.set("port", port);
var server = http.createServer(App);
server.listen(port);
server.on("error", function (error) { return App_Utils_1.AppUtils.OnError(error, port); });
server.on("listening", function () { return App_Utils_1.AppUtils.OnListening(server); });
