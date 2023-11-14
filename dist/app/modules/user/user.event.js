'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
const redis_1 = require('../../../shared/redis')
const user_constant_1 = require('./user.constant')
const user_services_1 = require('./user.services')
const initUserEvents = () => {
  redis_1.RedisClient.subscribe(user_constant_1.EVENT_USER_CREATED, e =>
    __awaiter(void 0, void 0, void 0, function* () {
      const data = JSON.parse(e)
      yield user_services_1.UserService.createUserEvent(data)
    }),
  )
  redis_1.RedisClient.subscribe(user_constant_1.EVENT_USER_UPDATED, e =>
    __awaiter(void 0, void 0, void 0, function* () {
      const data = JSON.parse(e)
      yield user_services_1.UserService.updateProfile(data)
    }),
  )
}
exports.default = initUserEvents
