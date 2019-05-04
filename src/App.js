import React, {Component} from 'react';
import './App.css';
import Form from './components/form';

export default class App extends Component {
  constructor(props) {
    super(props);
    const allWords = ["word", "pipe", "dear", "deer", "fish", "coat"];
    const word= allWords[Math.floor(Math.random()*allWords.length)];
    var lettersFound = []
    for (var i=0; i<word.length;i++) {
      lettersFound = [...lettersFound, [i, "_"]];
    }
    this.fillWord = this.fillWord.bind(this);

    this.state = {
      word: word,
      numWrongGuesses: 0,
      lettersGuessed: [],
      lettersFound: lettersFound,
      error: ""
    }
  }

//check num guesses
//present correct letters in word

  // isLetterInWord = (letter) => {
  //    this.setState({
  //     lettersGuessed: [letter, ...this.state.lettersGuessed]
  //   });

  //   if (this.state.word.indexOf(letter)) {
  //     var indices = [];
  //     for(var i=0; i<this.state.word.length;i++) {
  //       if (this.state.word[i] === letter) 
  //         this.setState({
  //           lettersFound: [[i, letter], ...this.state.lettersFound]
  //       });
  //     }
  //   return true;
  //   }

  //   this.setState({
  //     numWrongGuesses: this.state.numGuesses++
  //   });
  //   return false;
  // }

  fillWord = () => {
    let guessedWordLetters = [];
    let lettersFoundSorted = this.state.lettersFound.sort(function (x, y) {
      let a = x[0];
      let b = y[0];

      return a - b;
    });
   
    for (var i = 0; i < this.state.word.length; i++){
      guessedWordLetters[i] = lettersFoundSorted[i][1];
    }

    guessedWordLetters = guessedWordLetters.join(" ");

    return <div>{guessedWordLetters}</div>;
  }



  handleGuess = (letter) => {
    let letters = this.state.lettersGuessed;

    if (letters.includes(letter)) {
      this.setState({
        error: <div className="error">You have already guessed that letter!</div>
      });
    }
      
    else if (letter === "") {
      this.setState({
        error: <div className="error">Please enter a letter!</div>
      });

    }

    else {
      letters = [letter, ...letters];
      this.setState({
        lettersGuessed: letters
      });
    }
  }

  render () {
    return (
      <div className="App">
        {this.state.error}
        <Form handleGuess={this.handleGuess} />
        <div className="word">
        {console.log(this.state)}
        {this.fillWord()}
        </div>
      </div>
    );
  }

}

