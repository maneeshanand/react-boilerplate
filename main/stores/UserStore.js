import UserActions from '../actions/UserActions'
import StorePrototype from '../../node_modules/fluxxed_up/src/lib/StorePrototype'
import { Dispatcher } from 'fluxxed_up'

var UserStore = StorePrototype()

module.exports = UserStore

Dispatcher.register(action => {
  switch (action.actionType) {
    case UserActions.Types.GOT_USER_DATA:
      UserStore.receiveData(action.data)
      break
    default:
      console.log('You should probably pass an action type...')
      break
  }
})
