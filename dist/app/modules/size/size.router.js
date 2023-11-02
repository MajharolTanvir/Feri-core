"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizesRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const size_controller_1 = require("./size.controller");
const size_validation_1 = require("./size.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const users_1 = require("../../../enums/users");
const router = express_1.default.Router();
router.patch('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.SELLER), (0, validateRequest_1.default)(size_validation_1.SizeValidation.updateSizeZodSchema), size_controller_1.SizeController.editSize);
router.get('/', size_controller_1.SizeController.getSizes);
router.delete('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), size_controller_1.SizeController.deleteSize);
router.post('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.SELLER), (0, validateRequest_1.default)(size_validation_1.SizeValidation.createSizeZodSchema), size_controller_1.SizeController.addSize);
exports.SizesRouter = router;
