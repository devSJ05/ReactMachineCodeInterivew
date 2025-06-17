/*
The requirement is to create a simple component which is a game called "Guess The Number".
User will guess a number between 1 and 100 in the input field.
we will generate a random number between 1 and 100.
If the user guesses the number correctly, we will show a message "You guessed it right!".
If guessed number is less than the generated number, we will show a message "Too low!".
If guessed number is greater than the generated number, we will show a message "Too high!".
If guessed right, we will show Congratulations message and the number of attempts taken to guess the number.
There should be two buttons, one to reset the game and another to submit the guess.
*/

import { useState, useEffect } from 'react';

const GuessTheNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const submitGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
      return;
    }
    if (userGuess === randomNumber) {
      setMessage(
        `Congratulations! You guessed it right in ${attempts + 1} attempts.`
      );
    } else if (userGuess < randomNumber) {
      setMessage('Too low!');
    } else {
      setMessage('Too high!');
    }
    setAttempts(attempts + 1);
  };
  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, []);

  return (
    <div className='guess-the-number'>
      <h1>Guess The Number Component</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type='text'
        placeholder='Enter your guess'
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <div>
        <button style={{ marginRight: '10px' }} onClick={submitGuess}>
          Submit Guess
        </button>
        <button style={{ marginRight: '10px' }} onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default GuessTheNumber;
