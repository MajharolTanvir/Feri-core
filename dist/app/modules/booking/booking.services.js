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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBooking = (bookingData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { productIds } = bookingData, data = __rest(bookingData, ["productIds"]);
    bookingData.buyerId = userId;
    const result = yield prisma_1.default.booking.create({
        data,
    });
    productIds.map((productId) => prisma_1.default.productBooking.create({
        data: {
            bookingId: result.id,
            productId: productId,
        },
    }));
    return result;
});
const getBooking = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.booking.findMany({
        where: {
            buyerId: userId,
        },
        include: {
            buyer: true,
            Product: true,
            ProductBooking: true,
        },
    });
});
const deleteBooking = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.booking.delete({
        where: {
            id,
            buyerId: userId,
        },
    });
});
exports.BookingServices = {
    createBooking,
    getBooking,
    deleteBooking,
};
