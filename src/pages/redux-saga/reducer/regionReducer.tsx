import * as ActionType from '../constant/regionConstant'

const init_state = {
    regions: []
}

const RegionReduce = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_DATA_REQUEST:
            return { ...state }
        case ActionType.GET_DATA_SUCCESS:
            return GetRegion(state, action)
        case ActionType.ADD_DATA_REQUEST:
            return {...state}
        case ActionType.ADD_DATA_SUCCESS:
            return AddRegion(state,action)
        default:
            return { ...state };
    }
}

const GetRegion = (state: any, action: any) => {
    return {
        ...state,
        regions: action.payload
    }
}

const AddRegion = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        regions:[...state.regions,payload]
    }
}

export default RegionReduce