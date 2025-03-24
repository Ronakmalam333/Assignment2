import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeStudent } from '../Features/studentSlice';

const StudentList = () => {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  return (
    <div className="student-list">
      <h2>Students</h2>
      <Link to="/students/add">Add New Student</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td>{student.batch}</td>
              <td>
                <Link to={`/students/edit/${student.id}`} className="edit-link">Edit</Link>
                <button onClick={() => dispatch(removeStudent({ id: student.id }))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;