import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import userSlice from './user/userSlice';
import itemSlice from './item/itemSlice';
import {itemApi} from '../services/itemApi';

export default {
  cart: cartSlice,
  user: userSlice,
  counter: counterSlice,
  item: itemSlice,
  itemApi: itemApi.reducer,
};
