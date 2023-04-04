import * as ActionRegion from '../constant/regionConstant'

export const GetRegionRequest = () => ({
    type: ActionRegion.GET_DATA_REQUEST
})

export const GetRegionSuccess = (payload: any) => ({
    type: ActionRegion.GET_DATA_SUCCESS,
    payload
})

export const GetRegionFailed = (payload: any) => ({
    type: ActionRegion.GET_DATA_FAILED,
    payload
})

export const AddRegionRequest = (payload: any) => ({
    type: ActionRegion.ADD_DATA_REQUEST,
    payload
})

export const AddRegionSuccess = (payload: any) => ({
    type: ActionRegion.ADD_DATA_SUCCESS,
    payload
})

export const AddRegionFailed = (payload: any) => ({
    type: ActionRegion.ADD_DATA_FAILED,
    payload
})