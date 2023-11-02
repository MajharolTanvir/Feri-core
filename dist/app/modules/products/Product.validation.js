"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProduct = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        brand: zod_1.z.string({
            required_error: 'Brand is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'Category id is required',
        }),
        subCategoryId: zod_1.z.string({
            required_error: 'Sub category id is required',
        }),
        quantity: zod_1.z.number({
            required_error: 'Quantity is required',
        }),
        mainPrice: zod_1.z.number({
            required_error: 'Price is required',
        }),
        discountPercentage: zod_1.z.number({
            required_error: 'Price discount percentage is required',
        }),
    }),
});
const updateProduct = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        categoryId: zod_1.z.string().optional(),
        subCategoryId: zod_1.z.string().optional(),
        quantity: zod_1.z.number().optional(),
        mainPrice: zod_1.z.number().optional(),
        discountPercentage: zod_1.z.number().optional(),
    }),
});
exports.ProductValidation = {
    createProduct,
    updateProduct,
};
