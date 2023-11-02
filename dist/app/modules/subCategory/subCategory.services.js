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
exports.SubCategoryService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addSubCategory = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const subCategory = yield prisma_1.default.subCategory.create({ data: categoryData });
    return subCategory;
});
const getAllSubCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield prisma_1.default.subCategory.findMany({});
    return categories;
});
const editSubCategory = (categoryData, id) => __awaiter(void 0, void 0, void 0, function* () {
    const subCategory = yield prisma_1.default.subCategory.update({
        where: { id },
        data: categoryData,
        include: {
            category: true,
        },
    });
    return subCategory;
});
const deleteSubCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const subCategory = yield prisma_1.default.subCategory.delete({ where: { id } });
    return subCategory;
});
exports.SubCategoryService = {
    addSubCategory,
    getAllSubCategory,
    editSubCategory,
    deleteSubCategory,
};
