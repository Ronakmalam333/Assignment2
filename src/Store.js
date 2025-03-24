import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './Features/studentSlice';

const Store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});

export default Store;