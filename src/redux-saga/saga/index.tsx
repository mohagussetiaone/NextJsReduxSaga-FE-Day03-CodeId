import { takeEvery, all } from 'redux-saga/effects'
import * as ActionTypeRegion from '../constant/regionConstant'
import { handleAddRegion, handleGetRegion } from './RegionSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypeRegion.GET_DATA_REQUEST,handleGetRegion),
        takeEvery(ActionTypeRegion.ADD_DATA_REQUEST,handleAddRegion)
    ])
}

export default watchAll