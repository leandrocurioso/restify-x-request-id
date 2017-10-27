"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var RestifyXRequestId = /** @class */ (function () {
    function RestifyXRequestId() {
    }
    RestifyXRequestId.middleware = function (req, res, next) {
        // Request
        var xRequestId = req.header("X-Request-Id") || uuid_1.v4();
        // Response
        res.header("X-Request-Id", xRequestId);
        return next();
    };
    return RestifyXRequestId;
}());
exports.default = RestifyXRequestId;
//# sourceMappingURL=restify-x-request-id.js.map