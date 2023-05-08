import { useState, useEffect } from 'react';

type Color = string;

function RandomColor() {
  const [color, setColor] = useState<Color>(''); // useState to store the color
  const [guess, setGuess] = useState<Color[] | undefined>(undefined); // useState to store the guess
  const [difficulty, setDifficulty] = useState<'normal' | 'hard'>('normal'); // useState to store the difficulty
  const [point, setPoint] = useState<number>(0); // useState to store the point
  const [life, setLife] = useState<number>(3); // useState to store the life

  // useEffect to generate a random color (https://css-tricks.com/snippets/javascript/random-hex-color/)
  useEffect(() => {
    // Function to get random hex color
    const getRandomColor = (): Color => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    // Set random color
    const randomColor = getRandomColor();

    // Set random guesses
    const choices = difficulty === 'normal' ? 3 : 6;
    const randomIndex = Math.floor(Math.random() * (choices));
    const randomGuess = Array.from({ length: choices }, () => getRandomColor());
    randomGuess[randomIndex] = randomColor;

    setColor(randomColor);
    setGuess(randomGuess);
  }, [difficulty, point, life]);

  // Function to check if the guess is correct
  const handleCheck = (option: Color): void => {
    if (option === color) {
      setPoint(point + 1);
      alert('Correct! You get 1 point!');
    } else {
      setLife(life - 1);
      if (life > 1) {
        alert(`Wrong! Answer was ${color} \n You have ${life - 1} lives left!`);
      } else {
        alert(`Wrong! Answer was ${color} \n GAME OVER! \n Press OK to start a new game!`);
        window.location.reload();
      }
    }
  }
  console.log('This is guess', guess, 'this is color', color);

  return (
    <div className="app">
      <h1>Color Guesser</h1>
      <div className="random-color" style={{ background: color }}></div>
      <div>
        {guess && guess.map(option => (
          <button 
            onClick={() => handleCheck(option) } key={ option }>
            { option }
          </button>
        ))}
      </div>
        <h2>Total Points: { point }</h2>
        <h2>Lives left: { life }</h2>
      <button onClick={() => difficulty === 'normal' ? setDifficulty('hard') : setDifficulty('normal')}>Difficulty: {difficulty}</button>
    </div>
  )
}

export default RandomColor
