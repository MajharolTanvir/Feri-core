"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryValidation = void 0;
const zod_1 = require("zod");
const createSubCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        categoryId: zod_1.z.string({
            required_error: 'Category id is required',
        }),
        name: zod_1.z.string({
            required_error: 'Sub category name is required',
        }),
    }),
});
const updateSubCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        categoryId: zod_1.z.string().optional(),
        name: zod_1.z.string().optional(),
    }),
});
exports.SubCategoryValidation = {
    createSubCategoryZodSchema,
    updateSubCategoryZodSchema,
};
