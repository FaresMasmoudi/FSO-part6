import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    message(state, action) {
      return action.payload
    }
  }
})

  export const { message } = notificationSlice.actions
  export default notificationSlice.reducer