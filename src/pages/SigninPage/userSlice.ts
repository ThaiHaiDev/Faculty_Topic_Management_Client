import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:  JSON.parse(localStorage.getItem('user_topic') || '{}'),
    },
    reducers: {
        signin(state, action) {
            localStorage.setItem('access_token_topic', action.payload.accessToken)
            localStorage.setItem('user_topic', JSON.stringify(action.payload.user))
        },
        logout(state) {
            localStorage.removeItem('user_topic')
            localStorage.removeItem('access_token_topic')
            state.current = {}
        }

    },
    // extraReducers: (builder) => {


    //     builder.addCase(signup.fulfilled, 
    //         (state, action) => {
    //         // We add all the new todos into the state
    //         // and change `status` back to `idle`:
    //         state.current = action.payload
    //       });

        // [login.fulfilled]: (state, action) => {
        //     state.current = action.payload
        // }
    // }
})

export default userSlice