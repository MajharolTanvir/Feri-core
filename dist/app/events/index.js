'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.subscribeToEvents = void 0
const user_event_1 = __importDefault(require('../modules/user/user.event'))
const subscribeToEvents = () => {
  ;(0, user_event_1.default)()
}
exports.subscribeToEvents = subscribeToEvents
exports.default = exports.subscribeToEvents
