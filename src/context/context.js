import {createContext} from 'react'

export const defaultObject = {
    isUserMovingForward:false,
    isUserCheckProject:false,
    handleMoveChange:()=>{},
    handleChangeIsProjectChecked: ()=>{},
    handleSetDefaultisProjectChecked: ()=>{}
}

export const AppContext = createContext(defaultObject)