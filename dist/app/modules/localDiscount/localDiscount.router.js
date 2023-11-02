"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDiscountRouter = void 0;
const express_1 = __importDefault(require("express"));
const localDiscount_controller_1 = require("./localDiscount.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const users_1 = require("../../../enums/users");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const localDiscount_validation_1 = require("./localDiscount.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.SELLER), (0, validateRequest_1.default)(localDiscount_validation_1.LocalDiscountValidation.createLocalDiscount), localDiscount_controller_1.LocalDiscountController.createLocalDiscount);
router.get('/', localDiscount_controller_1.LocalDiscountController.allLocalDiscount);
router.get('/:id', localDiscount_controller_1.LocalDiscountController.singleLocalDiscount);
router.delete('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.SELLER), localDiscount_controller_1.LocalDiscountController.deleteLocalDiscount);
exports.localDiscountRouter = router;
