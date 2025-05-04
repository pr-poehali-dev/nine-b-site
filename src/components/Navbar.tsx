
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      backgroundColor: "blue",
      padding: "10px",
      color: "white"
    }}>
      <h1>Сайт 9Б класса</h1>
      <div style={{
        display: "flex",
        gap: "15px"
      }}>
        <Link to="/" style={{ color: "white" }}>Главная</Link>
        <Link to="/students" style={{ color: "white" }}>Ученики</Link>
        <Link to="/achievements" style={{ color: "white" }}>Достижения</Link>
        <Link to="/events" style={{ color: "white" }}>Мероприятия</Link>
      </div>
    </div>
  );
}

export default Navbar;
