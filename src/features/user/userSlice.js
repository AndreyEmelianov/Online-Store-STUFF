import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/constants';

export const createUser = createAsyncThunk('@@/user/createUser', async (payload, thunkAPI) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, payload);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState = {
  currentUser: null,
  cart: [],
  formType: 'signup',
  showForm: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: '@@/user',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.cart = newCart;
    },
    toggleForm: (state, action) => {
      state.showForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addItemToCart, toggleForm } = userSlice.actions;

export default userSlice.reducer;
