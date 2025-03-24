import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      const newStudent = {
        id: Date.now(),
        name: action.payload.name,
        age: action.payload.age,
        course: action.payload.course,
        batch: action.payload.batch,
      };
      state.push(newStudent);
    },
    updateStudent: (state, action) => {
      const student = state.find(student => student.id === action.payload.id);
      if (student) {
        student.name = action.payload.name;
        student.age = action.payload.age;
        student.course = action.payload.course;
        student.batch = action.payload.batch;
      }
    },
    removeStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload.id);
    },
  },
});

export const { addStudent, updateStudent, removeStudent } = studentsSlice.actions;
export default studentsSlice.reducer;