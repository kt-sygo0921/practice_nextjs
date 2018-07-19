import { actionTypes } from '../constants/actionTypes'

export const serverRenderClock = (isServer) => {
    return {
        type: actionTypes.TICK,
        light: !isServer,
        ts: Date.now()
    }
}

export const startClock = () => {
    return {
        type: actionTypes.TICK,
        light: true,
        ts: Date.now()
    }
}

export function incrementCount() {
    return {
        type: actionTypes.INCREMENT
    }
}

export function decrementCount() {
    return {
        type: actionTypes.DECREMENT
    }
}

export function resetCount() {
    return {
        type: actionTypes.RESET
    }
}