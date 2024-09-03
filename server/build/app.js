"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const error_1 = require("./middleware/error");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const ad_route_1 = __importDefault(require("./routes/ad.route"));
const cors_1 = __importDefault(require("cors"));
//body parser
exports.app.use(express_1.default.json({ limit: '50mb' }));
//cookie parser
exports.app.use((0, cookie_parser_1.default)());
exports.app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
//routes
exports.app.use('/api/v1', user_route_1.default, ad_route_1.default);
//testing api
exports.app.get('/test', (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Hello World!'
    });
});
//error handler
exports.app.all("*", (req, res, next) => {
    const error = new Error(`Rout ${req.originalUrl} not found `);
    res.status(404);
    next(error);
});
exports.app.use(error_1.ErrorMidleware);
