"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (err) => {
    const errors = Object.values(err === null || err === void 0 ? void 0 : err.errors).map((ele) => {
        return {
            path: ele === null || ele === void 0 ? void 0 : ele.path,
            message: ele === null || ele === void 0 ? void 0 : ele.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation failed',
        errorMessages: errors,
    };
};
exports.default = handleValidationError;
