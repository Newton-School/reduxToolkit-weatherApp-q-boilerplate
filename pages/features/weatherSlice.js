import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk();

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: (builder) => {},
});

export default weatherSlice.reducer;
