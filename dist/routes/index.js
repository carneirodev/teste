"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homework_routes_1 = __importDefault(require("./homework.routes"));
var user_routes_1 = __importDefault(require("./user.routes"));
var sessions_routes_1 = __importDefault(require("./sessions.routes"));
var rooms_routes_1 = __importDefault(require("./rooms.routes"));
var studentHomework_routes_1 = __importDefault(require("./studentHomework.routes"));
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var routes = express_1.Router();
routes.use('/users', user_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
// Somente tera se autenticado
routes.use(ensureAuthenticated_1.default);
routes.use('/homework', homework_routes_1.default);
routes.use('/rooms', rooms_routes_1.default);
routes.use('/student', studentHomework_routes_1.default);
exports.default = routes;
