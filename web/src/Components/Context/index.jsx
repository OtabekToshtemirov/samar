import {createContext, useReducer} from "react";


const initialValue = {
    data:[],
    term:'',
    filter:'',

}

export const Context = createContext()


const reducer = (state=initialValue,action)=>{
    const {type, payload} = action
    switch (type) {
        case 'ON_DELETE':
            const deleteArr = state.data.filter(c=>c.id!==payload)
            return {...state,data:deleteArr}
            break;
        case 'GET_DATA':
            return {...state,data:payload}
        default:
            break;

    }
}
const Provider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,initialValue)
    return <Context.Provider>{children}</Context.Provider>
}

export default Provider;