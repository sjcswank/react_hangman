import React, {Component} from 'react';
import './App.css';
import Form from './components/form';
// import noGuesses from '/images/noGuesses.png';
// import oneGuess from '/images/oneGuesses.png';
// import twoGuesses from '/images/twoGuesses.png';
// import threeGuesses from '/images/threeGuesses.png';
// import fourGuesses from '/images/fourGuesses.png';
// import fiveGuesses from '/images/fiveGuesses.png';
// import sixGuesses from '/images/sixGuesses.png';

export default class App extends Component {

  constructor(props) {
    super(props);

    const allWords = ["words", "pipe", "dearest", "deer", "fished", "car"];
    const word= allWords[Math.floor(Math.random()*allWords.length)];
    var lettersFound = [];
    for (var i=0; i<word.length;i++) {
      lettersFound = [...lettersFound, "_"];
    }

    this.state = {
      word: word,
      numGuessesRemaining: 6,
      wrongLettersGuessed: [],
      lettersFound: lettersFound,
      message: ""
    }
  }

  isLetterInWord = (letter) => {
    var word =this.state.word.toUpperCase();
    if (word.includes(letter)) {

      var indices = [];
      for(let i=0; i<word.length;i++) {
          if (word[i] === letter) indices.push(i);
      }

      word = word.split("");
      const list = this.state.lettersFound.map((item, i) => {
        if (indices.includes(i)) {
          return letter;
        } else {
          return item;
        }
      });

      this.setState({
        lettersFound: list
      })
    }

    else {
      if (this.state.numGuessesRemaining <= 0) {
        var message = <div className="message">No Guesses Left. You Lose!</div>
      }
      else {
        var message = <div className="message">{letter} is not in the word!</div>
      }
      let letters = [...this.state.wrongLettersGuessed, letter];
      this.setState({
        wrongLettersGuessed: letters,
        message: message,
        numGuessesRemaining: this.state.numGuessesRemaining - 1
      });
    }
  }


  handleGuess = (letter) => {
    console.log(this.state.word);
    letter = letter.toUpperCase();
    var letters = this.state.lettersFound.concat(this.state.wrongLettersGuessed);
    if (this.state.numGuessesRemaining <= 0) {
      this.setState({
        message: <div className="message">No guesses left. You Lose!</div>
      });
    }
    else if (letter.length !== 1 && !letter.match(/[A-Z|a-z]/i)) {
      this.setState({
        message: <div className="message">Please enter a letter!</div>
      });
    }
      
    else if (letters.includes(letter)) {

      this.setState({
        message: <div className="message">You have already guessed {letter}!</div>
      });

    }

    else {
      letter = letter.toUpperCase();
      this.isLetterInWord(letter);

    }
  }

  displayImage = (i) => {
    switch(i) {
      case 6: 
        return <img src="/images/sixGuesses.png" alt="Six Guesses Remaining" />
      case 5: 
        return <img src="/images/fiveGuesses.png" alt="Five Guesses Remaining" />
      case 4: 
        return <img src="/images/fourGuesses.png" alt="Four Guesses Remaining" />
      case 3: 
        return <img src="/images/threeGuesses.png" alt="Three Guesses Remaining" />
      case 2: 
        return <img src="/images/twoGuesses.png" alt="Two Guesses Remaining"/>
      case 1: 
        return <img src="/images/oneGuesses.png" alt="One Guess Remaining"/>
      case 0: 
        return <img src="/images/noGuesses.png" alt="No Guesses Remaining"/>
      default: 
        return <img src="/images/noGuesses.png" alt="No Guesses Remaining" />

    }
  }

  render () {
    return (
      <div className="App">
        {this.state.message}
        <Form handleGuess={this.handleGuess} word={this.state.word} />
        <div className="word">
          <p>{this.state.lettersFound.join(" ")}</p>
        </div>
        <div className ="image">{this.displayImage(this.state.numGuessesRemaining)}</div>
        <div className="guessedLetters">
          <p>Wrong Guessed Letters:</p> 
          <p>{this.state.wrongLettersGuessed}</p>
        </div>
      </div>
    );
  }

}