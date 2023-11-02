"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionValidation = void 0;
const zod_1 = require("zod");
const createPromotion = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        productId: zod_1.z.string({
            required_error: 'Product id is required',
        }),
    }),
});
const updatePromotion = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        productId: zod_1.z.string().optional(),
    }),
});
exports.PromotionValidation = {
    createPromotion,
    updatePromotion,
};
