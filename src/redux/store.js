import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './reducers/styleReducer';

export default configureStore({
  reducer: {
    styles: styleReducer,
  },
});
