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
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createUserEvent = (e) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.user.create({
        data: {
            syncId: e._id,
            firstName: e.firstName,
            middleName: e.middleName,
            lastName: e.lastName,
            email: e.email,
            password: e.password,
            role: e.role,
            token: e.token,
            validation: e.validation,
            confirmedCode: e.confirmedCode,
        },
    });
});
const updateProfile = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield prisma_1.default.user.findFirst({
        where: {
            syncId: e._id,
        },
    });
    const isProfileExistOnProfile = yield prisma_1.default.profile.findFirst({
        where: {
            userId: isUserExist.id,
        },
    });
    const isProfileExistOnShop = yield prisma_1.default.shop.findFirst({
        where: {
            userId: isUserExist.id,
        },
    });
    if (!isProfileExistOnProfile) {
        yield prisma_1.default.profile.create({
            data: {
                userId: isUserExist.id,
                contactNo: e.contactNo,
                profileImage: e.profileImage,
                country: e.country,
                division: e.division,
                district: e.district,
                area: e.area,
            },
        });
    }
    else {
        yield prisma_1.default.profile.update({
            where: {
                userId: isUserExist.id,
            },
            data: {
                contactNo: e.contactNo,
                profileImage: e.profileImage,
                country: e.country,
                division: e.division,
                district: e.district,
                area: e.area,
            },
        });
    }
    if (!isProfileExistOnShop) {
        yield prisma_1.default.shop.create({
            data: {
                userId: isUserExist.id,
                shopName: e.shopName,
                shopContactNo: e.shopContactNo,
                shopCountry: e.shopCountry,
                shopDivision: e.shopDivision,
                shopDistrict: e.shopDistrict,
                shopArea: e.shopArea,
                nidNumber: e.nidNumber,
                treadLicenseNo: e.treadLicenseNo,
            },
        });
    }
    else {
        yield prisma_1.default.shop.update({
            where: {
                userId: isProfileExistOnShop.userId,
            },
            data: {
                shopName: e.shopName,
                shopContactNo: e.shopContactNo,
                shopCountry: e.shopCountry,
                shopDivision: e.shopDivision,
                shopDistrict: e.shopDistrict,
                shopArea: e.shopArea,
                nidNumber: e.nidNumber,
                treadLicenseNo: e.treadLicenseNo,
            },
        });
    }
});
exports.UserService = {
    createUserEvent,
    updateProfile,
};
