import React, {Component} from 'react';
import './App.css';
import Form from './components/form';

export default class App extends Component {

  constructor(props) {
    super(props);

    const allWords = ["word", "pipe", "dear", "deer", "fish", "coat"];
    const word= allWords[Math.floor(Math.random()*allWords.length)];
    var lettersFound = [];
    for (var i=0; i<word.length;i++) {
      lettersFound = [...lettersFound, "_"];
    }
    // this.fillWord = this.fillWord.bind(this);

    this.state = {
      word: word,
      numGuessesRemaining: 6,
      lettersGuessed: [],
      lettersFound: lettersFound,
      message: ""
    }
  }

  isLetterInWord = (letter) => {
    console.log("test");
    if (this.state.word.includes(letter)) {
      var word = this.state.word;

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

      console.log(list);

      this.setState({
        lettersFound: list
      })
    }

    else {
      this.setState({
        message: <div className="message">{letter} is not in the word!</div>,
        numGuessesRemaining: this.state.numGuessesRemaining--
      });
    }
  }


  handleGuess = (letter) => {
    let letters = this.state.lettersGuessed;

    if (letters.includes(letter)) {
      this.setState({
        message: <div className="message">You have already guessed {letter}!</div>
      });
    }
      
    else if (letter === "") {
      this.setState({
        message: <div className="message">Please enter a letter!</div>
      });

    }

    else {
      letters = [letter, ...letters];
      this.setState({
        lettersGuessed: letters,
        numGuessesRemaining: this.state.numGuessesRemaining--
      });
      this.isLetterInWord(letter);
    }
  }

  // displayImage = (i) => {
  //   switch(i) {
  //     case 6: 
  //       return <img src="displayImageEmpty.png" />
  //     case 5: 
  //       return <img src="displayImageHead.png" />
  //     case 4: 
  //       return <img src="displayImageBody.png" />
  //     case 3: 
  //       return <img src="displayImageLeftArm.png" />
  //     case 2: 
  //       return <img src="displayImageRightArm.png" />
  //     case 1: 
  //       return <img src="displayImageLeftLeg.png" />
  //     case 0: 
  //       this.setState({
  //         message: "You Lose!"
  //       })
  //       return <img src="displayImageRightLeg.png" />
  //   }
  // }

  render () {
    return (
      <div className="App">
        {this.state.message}
        <Form handleGuess={this.handleGuess} word={this.state.word} />
        <div className="word">
        {console.log(this.state)}
        <p>{this.state.lettersFound.join(" ")}</p>
        <p>Guesses Remaining: {this.state.numGuessesRemaining}</p>
        </div>
      </div>
    );
  }

}