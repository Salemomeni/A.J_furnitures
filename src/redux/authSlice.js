import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:2222/api/auth';

// Load user/token from localStorage (at app start)
const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const tokenFromStorage = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null;

// REGISTER USER
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/register`, userData);
      return res.data; // expects { user, token } or { user }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// LOGIN USER
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/login`, credentials);
      console.log("Login Response in Redux", res.data);
      return res.data; // expects { user, token }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userFromStorage,
    token: tokenFromStorage,
    isAuthenticated: !!userFromStorage,
    loading: false,
    error: null
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token || null;
        state.isAuthenticated = true;

        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Registration failed';
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Login failed';
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
