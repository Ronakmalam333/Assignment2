import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to the Student Management System</h1>
        <p>Efficiently manage student information with ease and precision.</p>
        <Link to="/students" className="cta-button">Explore Students</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Use Our System?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <span className="feature-icon">➕</span>
            <h3>Add Students</h3>
            <p>Quickly add new students with all essential details.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✏️</span>
            <h3>Edit Records</h3>
            <p>Update student information seamlessly.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🗑️</span>
            <h3>Delete Entries</h3>
            <p>Remove students from the list effortlessly.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📋</span>
            <h3>View List</h3>
            <p>See all students in a comprehensive overview.</p>
          </div>
        </div>
      </section>

      {/* Quick Action */}
      <section className="quick-action">
        <h2>Get Started</h2>
        <p>Ready to manage your students? Start here!</p>
        <Link to="/students/add" className="cta-button">Add Your First Student</Link>
      </section>
    </div>
  );
};

export default Home;