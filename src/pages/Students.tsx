
import Navbar from '../components/Navbar';

function Students() {
  const ученики = [
    { имя: 'Алексей Иванов', роль: 'Староста' },
    { имя: 'Мария Петрова', роль: 'Зам. старосты' },
    { имя: 'Дмитрий Сидоров', роль: 'Спортсмен' },
    { имя: 'Екатерина Смирнова', роль: 'Активистка' },
    { имя: 'Павел Кузнецов', роль: 'Умный' },
    { имя: 'Анна Соколова', роль: 'Отличница' },
  ];

  return (
    <div>
      <Navbar />
      
      <div style={{ 
        padding: "20px",
        textAlign: "center" 
      }}>
        <h1 style={{ color: "blue" }}>Ученики 9Б класса</h1>
        
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "15px", 
          marginTop: "20px" 
        }}>
          {ученики.map((ученик, индекс) => (
            <div key={индекс} style={{ 
              border: "1px solid #ccc", 
              borderRadius: "5px", 
              padding: "15px", 
              width: "200px",
              backgroundColor: "#f9f9f9"
            }}>
              <div style={{ 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                backgroundColor: "blue", 
                color: "white", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                margin: "0 auto 10px auto"
              }}>
                {ученик.имя[0]}
              </div>
              <h3>{ученик.имя}</h3>
              <p>{ученик.роль}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students;
