"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var RestneerXRequestId = /** @class */ (function () {
    function RestneerXRequestId() {
    }
    RestneerXRequestId.middleware = function (req, res, next) {
        // Request
        var xRequestId = req.header("X-Request-Id") || uuid_1.v4();
        // Response
        res.header("X-Request-Id", xRequestId);
        return next();
    };
    return RestneerXRequestId;
}());
exports.default = RestneerXRequestId;
//# sourceMappingURL=restneer-x-request-id.js.map