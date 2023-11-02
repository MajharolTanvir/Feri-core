"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorRouter = void 0;
const express_1 = __importDefault(require("express"));
const color_controller_1 = require("./color.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const color_validation_1 = require("./color.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const users_1 = require("../../../enums/users");
const router = express_1.default.Router();
//* Color routes
router.patch('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), (0, validateRequest_1.default)(color_validation_1.ColorValidation.updateColorZodSchema), color_controller_1.ColorController.editColor);
router.get('/', color_controller_1.ColorController.getColors);
router.delete('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN), color_controller_1.ColorController.deleteColor);
router.post('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.SELLER), (0, validateRequest_1.default)(color_validation_1.ColorValidation.createColorZodSchema), color_controller_1.ColorController.addColor);
exports.ColorRouter = router;
