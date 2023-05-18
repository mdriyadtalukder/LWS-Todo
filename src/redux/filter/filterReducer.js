import { COLORCHANGED, STATUSCHANGED } from "./actionType";

const initialState = {
    status: 'All',
    color: []
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:

            return {
                ...state,
                status: action.paylaod,
            }

        case COLORCHANGED:
            switch (action.payload.changeType) {
                case "added":
                    return {
                        ...state,
                        color: [...state.color,
                        action.payload.color
                        ]
                    }
                case "removed":
                    const colors = state.color.filter((c) => c !== action.payload.color);
                    return {
                        ...state,
                        color: colors
                    }



                default:
                    return state
            }

        default:
            return state;
    }

};

export default filterReducer;