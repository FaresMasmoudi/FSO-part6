import { createSlice } from '@reduxjs/toolkit'

const initialState = 'hello there'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    message(state, action) {
      return state
    }
  }
})

  export const { message } = notificationSlice.actions
  export default notificationSlice.reducer