import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../Features/studentSlice';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent({ name, age, course, batch }));
    navigate('/students');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          Course: <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
        </label>
        <label>
          Batch: <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} required />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;