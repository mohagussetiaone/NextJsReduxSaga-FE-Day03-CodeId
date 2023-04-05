import { takeEvery, all } from 'redux-saga/effects'
import * as ActionTypeRegion from '../constant/regionConstant'
import { handleAddRegion, handleGetRegion } from './RegionSaga'
import * as ActionTypeUser from '../constant/userCOnstant'
import { handleSignin, handleSignout, handleSignup } from './UserSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypeRegion.GET_DATA_REQUEST,handleGetRegion),
        takeEvery(ActionTypeRegion.ADD_DATA_REQUEST,handleAddRegion),
        takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST,handleSignin),
        takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST,handleSignout),
        takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST,handleSignup)
    ])
}

export default watchAll