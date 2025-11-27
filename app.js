import { useState } from 'react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: 'Какой ваш любимый сезон?',
      options: ['Зима', 'Весна', 'Лето', 'Осень']
    },
    {
      question: 'Вы предпочитаете кошек или собак?',
      options: ['Кошек', 'Собак', 'Обоих', 'Никого']
    },
    {
      question: 'Какой тип фильмов вам нравится?',
      options: ['Комедии', 'Боевики', 'Драмы', 'Ужасы']
    },
    {
      question: 'Вы жаворонок или сова?',
      options: ['Жаворонок', 'Сова', 'Не знаю']
    },
    {
      question: 'Любимый напиток?',
      options: ['Кофе', 'Чай', 'Сок', 'Вода']
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Результаты опроса</h1>
          <div style={styles.results}>
            {questions.map((q, index) => (
              <div key={index} style={styles.resultItem}>
                <p style={styles.resultQuestion}>{q.question}</p>
                <p style={styles.resultAnswer}>Ваш ответ: {answers[index]}</p>
              </div>
            ))}
          </div>
          <button onClick={restart} style={styles.button}>
            Пройти заново
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.progress}>
          Вопрос {currentQuestion + 1} из {questions.length}
        </div>
        <h2 style={styles.question}>{questions[currentQuestion].question}</h2>
        <div style={styles.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={styles.optionButton}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '28px'
  },
  progress: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '20px',
    fontSize: '14px'
  },
  question: {
    color: '#333',
    marginBottom: '30px',
    fontSize: '22px',
    textAlign: 'center'
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  optionButton: {
    padding: '15px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  button: {
    padding: '15px 30px',
    fontSize: '16px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
    display: 'block',
    margin: '20px auto 0'
  },
  results: {
    marginBottom: '20px'
  },
  resultItem: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px'
  },
  resultQuestion: {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333'
  },
  resultAnswer: {
    color: '#4CAF50',
    margin: 0
  }
};

export default App;