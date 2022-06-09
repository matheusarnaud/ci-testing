// Models
import IStore, { IAction } from 'lib/redux/models'

// Libraries
import { combineReducers, Reducer } from 'redux'

// Misc
import exampleReducer from 'storage/example/duck'

const appReducer: Reducer<IStore, IAction<unknown>> = combineReducers({
  example: exampleReducer,
})

export default appReducer
