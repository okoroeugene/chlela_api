"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var routes_1 = require("./src/routes");
var app = express_1.default();
app.use(body_parser_1.json());
app.use(express_1.default.static("public"));
//app routes
app.use('/api/file', routes_1.fileRouter);
app.get('/', function (req, res) { return res.send('Welcome to chlela!'); });
process.on('uncaughtException', function (err, origin) {
    console.error(err);
    console.log("Node NOT Exiting...");
});
app.listen(5000, function () { return console.log('Server is connected at 5000'); });