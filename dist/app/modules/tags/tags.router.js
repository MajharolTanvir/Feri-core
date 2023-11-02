"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsRouter = void 0;
const express_1 = __importDefault(require("express"));
const tags_controller_1 = require("./tags.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const tags_validation_1 = require("./tags.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const users_1 = require("../../../enums/users");
const router = express_1.default.Router();
router.get('/', tags_controller_1.TagsController.getAllTags);
router.post('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.SELLER), (0, validateRequest_1.default)(tags_validation_1.TagsValidation.create), tags_controller_1.TagsController.createTags);
router.patch('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), tags_controller_1.TagsController.updateTags);
router.delete('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), tags_controller_1.TagsController.deleteTags);
exports.TagsRouter = router;
