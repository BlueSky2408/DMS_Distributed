import {
    fork,
} from 'redux-saga/effects';
import { watchLogin } from './login';


function* rootSaga() {
    yield fork(watchLogin);
}

export default rootSaga;
