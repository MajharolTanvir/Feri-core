"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const users_1 = require("../../../enums/users");
const products_controller_1 = require("./products.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Product_validation_1 = require("./Product.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.SELLER, users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), (0, validateRequest_1.default)(Product_validation_1.ProductValidation.createProduct), products_controller_1.ProductController.createProduct);
router.get('/', products_controller_1.ProductController.getAllProducts);
router.get('/:id', products_controller_1.ProductController.getSingleProduct);
router.patch('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.SELLER, users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), (0, validateRequest_1.default)(Product_validation_1.ProductValidation.updateProduct), products_controller_1.ProductController.updateProduct);
router.delete('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.SELLER, users_1.ENUM_USER_ROLE.ADMIN), products_controller_1.ProductController.deleteProduct);
exports.ProductRouter = router;
