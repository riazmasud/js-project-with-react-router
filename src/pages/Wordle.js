import { useState } from "react";
const targetWord = "REACT";
const MAX_TRIES = 5;
const WINNING_TEXT = "Congratulation! You have won!!!";
const GAME_OVER_TEXT = "Game Over! The word was REACT.";

const Wordle = () => {
  const [current, setCurrent] = useState("");
  const [submittedGuess, setSubmittedGuess] = useState([]);
  //const [disableSubmit, setDisableSubmit] = useState(false);
  //const [showWarning, setShowWarning] = useState(false);
  const [showWinText, setShowWinText] = useState(false);

  const attemptsRemaining = MAX_TRIES - submittedGuess.length;
  const disableSubmit = submittedGuess.length >= MAX_TRIES || showWinText;

  const handleInput = (e) => {
    setCurrent(e.target.value);
  };

  const handleSubmit = () => {
    if (!current.trim()) {
      return;
    }

    if (submittedGuess.length >= MAX_TRIES || showWinText) {
      return;
    }

    const normalizedGuess = current.trim();

    if (normalizedGuess.toLowerCase() === targetWord.toLowerCase()) {
      setShowWinText(true);
    }

    setSubmittedGuess([...submittedGuess, normalizedGuess]);

    setCurrent("");
  };

  const gameOver = submittedGuess.length >= MAX_TRIES && !showWinText;

  const divStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px",
  };

  const matchStyle = {
    color: "green",
    backgroundColor: "lightgray",
    padding: "5px",
    borderRadius: "4px",
  };

  const notMatchStyle = {
    color: "red",
    backgroundColor: "lightgray",
    padding: "5px",
    borderRadius: "4px",
  };

  const winTextStyle = {
    fontSize: "18px",
    color: "blue",
    fontWeight: "bold",
    margin: "16px",
  };

  //const guessedLetters = submittedGuess.split("");

  return (
    <div>
      <h1>Wordle</h1>
      <div>
        <input
          value={current}
          onChange={handleInput}
          disabled={showWinText || submittedGuess.length >= MAX_TRIES}
        />
        <br />
        <span>User Input: {current}</span>
        <br />
        <button onClick={handleSubmit} disabled={disableSubmit}>
          Submit
        </button>
        <br />
        <div style={winTextStyle}>{showWinText ? WINNING_TEXT : ""}</div>
        <br />
        <div style={winTextStyle}>{gameOver ? GAME_OVER_TEXT : ""}</div>
        <br />
        {/* <span>Submitted guess: {submittedGuess}</span> */}
        <br />
        <span>Guessed Letters:</span>
        <br />
        <span>Attempts remaining: {attemptsRemaining}</span>
        <br />
        <div>
          {/* {guessedLetters.map((letter, index) => {
            const isMatch =
              targetWord[index].toLocaleLowerCase() ===
              letter.toLocaleLowerCase()
                ? true
                : false;
            return (
              <div key={index} style={divStyle}>
                <span style={isMatch ? matchStyle : notMatchStyle}>
                  {letter} -{" "}
                </span>
                <span>{isMatch ? "Matched!" : "Not Matched"}</span>
              </div>
            );
          })} */}

          {submittedGuess.map((guess, guessIndex) => {
            return (
              <div key={guessIndex} style={divStyle}>
                {guess.split("").map((letter, letterIndex) => {
                  const isMatch =
                    targetWord[letterIndex].toLocaleLowerCase() ===
                    letter.toLocaleLowerCase()
                      ? true
                      : false;
                  return (
                    <span
                      key={letterIndex}
                      style={isMatch ? matchStyle : notMatchStyle}
                    >
                      {letter}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wordle;
