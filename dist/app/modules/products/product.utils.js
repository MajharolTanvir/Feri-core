"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
exports.ProductUtils = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createProductWithDetails = (productId, payload, transactionProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const { colorConnection, sizeConnection, weightConnection, tagsConnection, freeDelivery, paidDelivery, imageUrl, } = payload;
    if (colorConnection) {
        colorConnection.colorId.map((c) => __awaiter(void 0, void 0, void 0, function* () {
            return yield transactionProduct.colorConnection.create({
                data: {
                    productId: productId,
                    colorId: c,
                },
            });
        }));
    }
    if (sizeConnection) {
        sizeConnection.sizeId.map((s) => __awaiter(void 0, void 0, void 0, function* () {
            return yield transactionProduct.sizeConnection.create({
                data: {
                    productId: productId,
                    sizeId: s,
                },
            });
        }));
    }
    if (weightConnection) {
        yield transactionProduct.weightConnection.create({
            data: {
                weightId: weightConnection.weightId,
                value: weightConnection.value,
                productId: productId,
            },
        });
    }
    if (tagsConnection) {
        tagsConnection.tagsId.map((t) => __awaiter(void 0, void 0, void 0, function* () {
            return yield transactionProduct.tagsConnection.create({
                data: {
                    productId: productId,
                    tagsId: t,
                },
            });
        }));
    }
    if (freeDelivery) {
        yield transactionProduct.freeDelivery.create({
            data: {
                productId: productId,
                location: freeDelivery.location,
                deliveryTime: freeDelivery.deliveryTime,
            },
        });
    }
    if (paidDelivery) {
        yield transactionProduct.paidDelivery.create({
            data: {
                productId: productId,
                charge: paidDelivery.charge,
                deliveryTime: paidDelivery.deliveryTime,
            },
        });
    }
    if (imageUrl) {
        yield transactionProduct.image.create({
            data: {
                imageUrl: imageUrl,
                productId: productId,
            },
        });
    }
});
const updateProductWithDetails = (product, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { colorConnection, sizeConnection, weightConnection, tagsConnection, freeDelivery, paidDelivery, imageUrl, } = payload;
    if (colorConnection) {
        colorConnection.colorId.map((c) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma_1.default.colorConnection.create({
                data: {
                    productId: product.productId,
                    colorId: c,
                },
            });
        }));
    }
    if (sizeConnection) {
        sizeConnection.sizeId.map((s) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma_1.default.sizeConnection.create({
                data: {
                    productId: product.productId,
                    sizeId: s,
                },
            });
        }));
    }
    if (weightConnection) {
        yield prisma_1.default.weightConnection.create({
            data: {
                weightId: weightConnection.weightId,
                value: weightConnection.value,
                productId: product.productId,
            },
        });
    }
    if (tagsConnection) {
        tagsConnection.tagsId.map((t) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma_1.default.tagsConnection.create({
                data: {
                    productId: product.productId,
                    tagsId: t,
                },
            });
        }));
    }
    if (freeDelivery) {
        yield prisma_1.default.freeDelivery.create({
            data: {
                productId: product.productId,
                location: freeDelivery.location,
                deliveryTime: freeDelivery.deliveryTime,
            },
        });
    }
    if (paidDelivery) {
        yield prisma_1.default.paidDelivery.create({
            data: {
                productId: product.productId,
                charge: paidDelivery.charge,
                deliveryTime: paidDelivery.deliveryTime,
            },
        });
    }
    if (imageUrl) {
        yield prisma_1.default.image.create({
            data: {
                imageUrl: imageUrl,
                productId: product.productId,
            },
        });
    }
});
exports.ProductUtils = {
    createProductWithDetails,
    updateProductWithDetails,
};
