import {createContext} from 'react'

export const defaultObject = {
    isUserMovingForward:false,
    isUserCheckProject:false,
    handleMoveChange:()=>{},
    handleChangeIsProjectChecked: ()=>{},
}

export const AppContext = createContext(defaultObject)