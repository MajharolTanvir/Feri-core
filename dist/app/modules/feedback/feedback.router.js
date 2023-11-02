"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const users_1 = require("../../../enums/users");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const feedback_validation_1 = require("./feedback.validation");
const feedback_controller_1 = require("./feedback.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.SELLER, users_1.ENUM_USER_ROLE.BUYER), (0, validateRequest_1.default)(feedback_validation_1.FeedbackValidation.createFeedback), feedback_controller_1.FeedbackController.createFeedback);
router.get('/', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), feedback_controller_1.FeedbackController.allFeedback);
router.get('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), feedback_controller_1.FeedbackController.singleFeedback);
router.delete('/:id', (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN, users_1.ENUM_USER_ROLE.MODERATOR), feedback_controller_1.FeedbackController.deleteFeedback);
exports.FeedbackRouter = router;
