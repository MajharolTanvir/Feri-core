"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDiscountController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const localDiscount_services_1 = require("./localDiscount.services");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createLocalDiscount = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const result = yield localDiscount_services_1.LocalDiscountServices.createLocalDiscount(req.body, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Local discount created successfully!',
        data: result,
    });
}));
const allLocalDiscount = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield localDiscount_services_1.LocalDiscountServices.allLocalDiscount();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Local discounts retrieved successfully!',
        data: result,
    });
}));
const singleLocalDiscount = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield localDiscount_services_1.LocalDiscountServices.singleLocalDiscount(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Local discount retrieved successfully!',
        data: result,
    });
}));
const deleteLocalDiscount = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const result = yield localDiscount_services_1.LocalDiscountServices.deleteLocalDiscount(req.params.id, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Local discount deleted successfully!',
        data: result,
    });
}));
exports.LocalDiscountController = {
    createLocalDiscount,
    allLocalDiscount,
    singleLocalDiscount,
    deleteLocalDiscount,
};
