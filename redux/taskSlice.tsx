import { createSlice } from "@reduxjs/toolkit";

export interface Task {
    tasks: string[]
}

const initialState: Task = {
    tasks: []
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = action.payload
            return {
                ...state,
                tasks: [ ...state.tasks, task ]
            };
        }
    }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
