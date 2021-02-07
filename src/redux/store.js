import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './reducers/styleReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    styles: styleReducer,
    users: userReducer,
  },
});
