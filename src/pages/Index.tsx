
import Navbar from '../components/Navbar';

function Index() {
  return (
    <div>
      <Navbar />
      
      <div style={{ 
        textAlign: "center", 
        padding: "20px"
      }}>
        <h1 style={{ color: "blue" }}>Наш 9Б класс</h1>
        <p>Добро пожаловать на сайт нашего класса!</p>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          flexWrap: "wrap", 
          gap: "20px", 
          marginTop: "30px" 
        }}>
          <div style={{ 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            padding: "10px", 
            width: "250px" 
          }}>
            <h2>Наши ученики</h2>
            <p>В нашем классе 25 учеников</p>
            <a href="/students" style={{ 
              display: "block", 
              backgroundColor: "blue", 
              color: "white", 
              padding: "5px", 
              textDecoration: "none", 
              borderRadius: "5px", 
              marginTop: "10px" 
            }}>Смотреть учеников</a>
          </div>
          
          <div style={{ 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            padding: "10px", 
            width: "250px" 
          }}>
            <h2>Достижения</h2>
            <p>Наши победы и награды</p>
            <a href="/achievements" style={{ 
              display: "block", 
              backgroundColor: "blue", 
              color: "white", 
              padding: "5px", 
              textDecoration: "none", 
              borderRadius: "5px", 
              marginTop: "10px" 
            }}>Наши достижения</a>
          </div>
          
          <div style={{ 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            padding: "10px", 
            width: "250px" 
          }}>
            <h2>Мероприятия</h2>
            <p>Наши классные мероприятия</p>
            <a href="/events" style={{ 
              display: "block", 
              backgroundColor: "blue", 
              color: "white", 
              padding: "5px", 
              textDecoration: "none", 
              borderRadius: "5px", 
              marginTop: "10px" 
            }}>Календарь событий</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
