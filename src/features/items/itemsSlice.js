import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: null,
        description: "",
        quantity: "",
        status: false,
    },
]

const itemsSlice = createSlice({
    name: "items",
    initialState: initialState,
    reducers: {
        createItem: (state, action) => {
            const newItem = {
                id: Date.now(),
                description: action.payload.description,
                quantity: action.payload.quantity,
                status: false,
            }
            state.push(newItem)
        },
        updateItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id)
            state[index] = action.payload
        },
        deleteItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1); // Mutably remove the item
            }
        },
        addLine: (state) => {
            const newItem = {
                id: null,
                description: "",
                quantity: "",
                status: false,
            }
            state.push(newItem)
        }
    },
})

export const { createItem, updateItem, deleteItem, addLine } = itemsSlice.actions

export default itemsSlice.reducer