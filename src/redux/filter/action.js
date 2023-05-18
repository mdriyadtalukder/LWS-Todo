import { COLORCHANGED, STATUSCHANGED } from "./actionType"

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        paylaod: status,
    }
}
export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,

        payload: {
            color,
            changeType
        }


    }
}