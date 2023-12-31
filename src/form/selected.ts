import { createSlice } from "@reduxjs/toolkit";
import { plans } from "../content";

const selected = createSlice({
name: 'selected',
initialState:plans[0],
reducers: {
    select:(_state , action): any => {
        return action.payload;
    }
}
})

export const { select } = selected.actions;
export default selected.reducer