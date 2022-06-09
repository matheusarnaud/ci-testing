// Models
import { IExampleState } from 'storage/example/models'

export interface IAction<Payload> {
  type: string
  payload?: Payload
}

export interface IBaseState {
  error?: string
  loading?: boolean
  refreshing?: boolean
}

export default interface IStore {
  example: IExampleState
}
