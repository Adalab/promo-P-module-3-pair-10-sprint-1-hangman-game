// Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [message, setMessage] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    console.log(wordLetters);

    return wordLetters.map((letter, index) => {
      if (wordLetters !== userLetters) {
        console.log(wordLetters);
        return <li className="letter" key={index}></li>;
      } else {
        return <li className="letter">{lastLetter}</li>;
      }
    });
  };

  const handleInput = (ev) => {
    const newValue = ev.target.value;
    setLastLetter(newValue);
    console.log(newValue);
    const lettersUsed = [...userLetters, lastLetter];
    setUserLetters(lettersUsed);
    if (newValue.match('[A-Za-zÑñÁÉÍÓÚáéíóú]') !== null) {
      console.log('Es valida');
      setMessage('');
    } else {
      console.log('Introduce otro valor');
      setMessage('Introduce otro valor');
    }
  };
  const handlePaint = () => {
    const changeNumber = numberOfErrors + 1;
    setNumberOfErrors(changeNumber);
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <button type="button" onClick={handlePaint}>
            Incrementar
          </button>
          <div className="solution">
            <h2 className="title">Solución:</h2>

            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInput}
            />
            <p className="text">{message}</p>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
