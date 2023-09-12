import { all,} from 'redux-saga/effects'
import reserve from './Reserve/sagas'

export default function* rootSaga(){
    return yield all([
        reserve,
    ])
}