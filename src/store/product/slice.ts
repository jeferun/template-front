import { createSlice, PayloadAction } from "@reduxjs/toolkit";


/* interface */// organizar
interface IProduct {
  name: string;
  type: 'd' | 's';
}

interface IState {
  products: IProduct[];
}

/* fin */

const initialState: IState = {
  products: [
    {name: 'product', type: 's'},
  ]
};

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    }
  },
});

export const { addProduct } = slice.actions;

export default slice.reducer;