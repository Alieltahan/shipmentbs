import { createSlice } from '@reduxjs/toolkit';

const trackSlice = createSlice({
  name: 'tracking',
  initialState: { trackNum: null },
  reducers: {
    // Actions => action handler
    getShipmentTrack: (state, action) => {
      const { trackNum } = action.payload;
      state.trackNum = trackNum;
    },
  },
});

export const { getShipmentTrack } = trackSlice.actions;
export default trackSlice.reducer;
