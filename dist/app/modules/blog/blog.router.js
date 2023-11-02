"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const users_1 = require("../../../enums/users");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.SELLER, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(blog_validation_1.BlogValidation.createBlog), blog_controller_1.BlogController.createBlog);
router.get('/', blog_controller_1.BlogController.allBlog);
router.get('/:id', blog_controller_1.BlogController.singleBlog);
router.patch('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.SELLER, users_1.ENUM_USER_ROLE.MODERATOR, users_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(blog_validation_1.BlogValidation.updateBlog), blog_controller_1.BlogController.updateBlog);
router.post('/:id', blog_controller_1.BlogController.deleteBlog);
exports.BlogRouter = router;
