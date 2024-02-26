(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (function (fn) {
        return function (req, res, next) {
            return fn(req, res, next).catch(function (err) {
                var errors = err.message ? err.message.split("-") : [];
                var status = 500;
                var message = "Unhandled error occurred";
                if (errors.length > 1) {
                    status = parseInt(errors[0]);
                    message = errors.slice(1, errors.length).join(" ");
                }
                else if (err.name === "ValidationError") {
                    message = err.message;
                }
                else if (err.name === "MongoServerError") {
                    if (err.message.includes("duplicate key error")) {
                        status = 400;
                        message = "Word is already available";
                    }
                    else {
                        message = err.message;
                    }
                }
                return res
                    .status(status)
                    .json({
                    message: message
                });
            });
        };
    });
});
