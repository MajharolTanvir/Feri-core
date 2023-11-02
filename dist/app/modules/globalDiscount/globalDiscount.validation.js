"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDiscountValidation = void 0;
const zod_1 = require("zod");
const createGlobalDiscount = zod_1.z.object({
    body: zod_1.z.object({
        thumbnail: zod_1.z.string({
            required_error: 'Thumbnail is required',
        }),
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        promocode: zod_1.z.string({
            required_error: 'Promo code is required',
        }),
        percentage: zod_1.z.number({
            required_error: 'Percentage is required',
        }),
    }),
});
const updateGlobalDiscount = zod_1.z.object({
    body: zod_1.z.object({
        thumbnail: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        promocode: zod_1.z.string().optional(),
        percentage: zod_1.z.number().optional(),
    }),
});
exports.GlobalDiscountValidation = {
    createGlobalDiscount,
    updateGlobalDiscount,
};
