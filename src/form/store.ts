import { configureStore } from '@reduxjs/toolkit';
import chosenstate from "./state"
import selected from './selected';
import option from "./option"

const store = configureStore({
    reducer: {
        changestate:chosenstate,
        selected:selected,
        selectedoption:option
    }
})
export default store