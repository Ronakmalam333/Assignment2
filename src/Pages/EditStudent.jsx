import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent } from '../Features/studentSlice';

const EditStudent = () => {
  const { id } = useParams();
  const student = useSelector(state => state.students.find(student => student.id === parseInt(id)));
  const [name, setName] = useState(student ? student.name : '');
  const [age, setAge] = useState(student ? student.age : '');
  const [course, setCourse] = useState(student ? student.course : '');
  const [batch, setBatch] = useState(student ? student.batch : '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!student) {
    return <div>Student not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent({ id: parseInt(id), name, age, course, batch }));
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;