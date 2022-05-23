import { configureStore } from '@reduxjs/toolkit';
import sourceFlag from './../reducer/reducer';

export default configureStore({
  reducer: {
    getSource: sourceFlag,
  },
});
