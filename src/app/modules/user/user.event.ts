import { RedisClient } from '../../../shared/redis'
import { EVENT_USER_CREATED, EVENT_USER_UPDATED } from './user.constant'
import { UserService } from './user.services'

const initUserEvents = () => {
  RedisClient.subscribe(EVENT_USER_CREATED, async (e: string) => {
    const data = JSON.parse(e)
    await UserService.createUserEvent(data)
  })

  RedisClient.subscribe(EVENT_USER_UPDATED, async (e: string) => {
    const data = JSON.parse(e)

    await UserService.updateProfile(data)
  })
}

export default initUserEvents
