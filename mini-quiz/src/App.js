import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const questions = [
    { q: 'Какое Ваше любимое время года?', opts: ['Зима', 'Весна', 'Лето', 'Осень'] },
    { q: 'Кто Вам нравится больше: кошки или собаки?', opts: ['Кошки', 'Собаки', 'И кошки, и собаки', 'Никто'] },
    { q: 'Какой жанр фильмов Вам нравится больше?', opts: ['Комедии', 'Боевики', 'Драмы', 'Ужасы'] },
    { q: 'Вы жаворонок или сова?', opts: ['Жаворонок', 'Сова', 'Не знаю'] },
    { q: 'Ваш любимый напиток?', opts: ['Кофе', 'Чай', 'Сок', 'Вода'] }
  ];

  const handleClick = (ans) => {
    setAnswers([...answers, ans]);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setDone(false);
  };

  if (done) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#e8f4f8', padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
        <h1 style={{ color: '#333' }}>Результаты опроса</h1>
        {questions.map((q, i) => (
          <div key={i} style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <p style={{ fontWeight: 'bold' }}>{q.q}</p>
            <p style={{ color: '#0066cc' }}>Ваш ответ: {answers[i]}</p>
          </div>
        ))}
        <button onClick={restart} style={{ padding: '12px 24px', fontSize: '16px', backgroundColor: '#0066cc', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
          Пройти заново
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#e8f4f8', padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <p style={{ color: '#666', fontSize: '14px' }}>Вопрос {current + 1} из {questions.length}</p>
      <h2 style={{ color: '#333', margin: '20px 0' }}>{questions[current].q}</h2>
      {questions[current].opts.map((opt, i) => (
        <button 
          key={i} 
          onClick={() => handleClick(opt)}
          style={{ display: 'block', margin: '10px auto', padding: '12px 30px', fontSize: '16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', minWidth: '200px' }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default App;