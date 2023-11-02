"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const createBooking = zod_1.z.object({
    body: zod_1.z.object({
        division: zod_1.z.string({
            required_error: 'Division is required',
        }),
        district: zod_1.z.string({
            required_error: 'District is required',
        }),
        upozila: zod_1.z.string({
            required_error: 'Upozila is required',
        }),
        area: zod_1.z.string({
            required_error: 'Area is required',
        }),
        contactNo: zod_1.z.string({
            required_error: 'Contact no is required',
        }),
        emergencyContactNo: zod_1.z.string({
            required_error: 'Emergency contact no is required',
        }),
        subTotal: zod_1.z.number({
            required_error: 'SubTotal is required',
        }),
        totalPrice: zod_1.z.number({
            required_error: 'Total price is required',
        }),
    }),
});
const updateBooking = zod_1.z.object({
    body: zod_1.z.object({
        division: zod_1.z.string().optional(),
        district: zod_1.z.string().optional(),
        upozila: zod_1.z.string().optional(),
        area: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        emergencyContactNo: zod_1.z.string().optional(),
        subTotal: zod_1.z.number().optional(),
        totalPrice: zod_1.z.number().optional(),
    }),
});
exports.BookingValidation = {
    createBooking,
    updateBooking,
};
