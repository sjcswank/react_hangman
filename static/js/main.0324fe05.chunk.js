(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(8),i=s.n(r),u=(s(15),s(6)),o=s(1),c=s(2),l=s(4),m=s(3),g=s(5),d=(s(16),function(e){function t(){var e,s;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(s=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={value:""},s.handleChange=function(e){s.setState({value:e.target.value})},s.handleSubmit=function(e){e.preventDefault(),s.props.handleGuess(s.state.value),s.setState({value:""})},s}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"input",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,autoFocus:!0}),n.a.createElement("button",{type:"submit"},"Guess!"))}}]),t}(a.Component)),h=function(e){function t(e){var s;Object(o.a)(this,t),(s=Object(l.a)(this,Object(m.a)(t).call(this,e))).isLetterInWord=function(e){var t=s.state.word.toUpperCase();if(t.includes(e)){for(var a=[],r=0;r<t.length;r++)t[r]===e&&a.push(r);var i=s.state.lettersFound.map(function(t,s){return a.includes(s)?e:t});s.setState({lettersFound:i}),i.includes("_")?s.setState({message:n.a.createElement("div",{className:"message"},"You found ",e,"!")}):s.setState({message:n.a.createElement("div",{className:"message"},"You've Won!")})}else{if(s.setState({numGuessesRemaining:s.state.numGuessesRemaining-1}),s.state.numGuessesRemaining<=0)var o=n.a.createElement("div",{className:"message"},"No Guesses Left. You Lose!");else o=n.a.createElement("div",{className:"message"},e," is not in the word!");var c=[].concat(Object(u.a)(s.state.wrongLettersGuessed),[e]);s.setState({wrongLettersGuessed:c,message:o})}},s.handleGuess=function(e){console.log(s.state.word),e=e.toUpperCase();var t=s.state.lettersFound.concat(s.state.wrongLettersGuessed);s.state.numGuessesRemaining<=0?s.setState({message:n.a.createElement("div",{className:"message"},"No guesses left. You Lose!")}):1===e.length||e.match(/[A-Z|a-z]/i)?t.includes(e)?s.setState({message:n.a.createElement("div",{className:"message"},"You have already guessed ",e,"!")}):(e=e.toUpperCase(),s.isLetterInWord(e)):s.setState({message:n.a.createElement("div",{className:"message"},"Please enter a letter!")})},s.displayImage=function(e){switch(e){case 6:return n.a.createElement("img",{src:"/images/sixGuesses.png",alt:"Six Guesses Remaining"});case 5:return n.a.createElement("img",{src:"/images/fiveGuesses.png",alt:"Five Guesses Remaining"});case 4:return n.a.createElement("img",{src:"/images/fourGuesses.png",alt:"Four Guesses Remaining"});case 3:return n.a.createElement("img",{src:"/images/threeGuesses.png",alt:"Three Guesses Remaining"});case 2:return n.a.createElement("img",{src:"/images/twoGuesses.png",alt:"Two Guesses Remaining"});case 1:return n.a.createElement("img",{src:"/images/oneGuesses.png",alt:"One Guess Remaining"});case 0:default:return n.a.createElement("img",{src:"/images/noGuesses.png",alt:"No Guesses Remaining"})}};for(var a=["words","pipe","dearest","deer","fished","car"],r=a[Math.floor(Math.random()*a.length)],i=[],c=0;c<r.length;c++)i=[].concat(Object(u.a)(i),["_"]);return s.state={word:r,numGuessesRemaining:6,wrongLettersGuessed:[],lettersFound:i,message:"Guess a Letter:"},s}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},this.state.message,n.a.createElement(d,{handleGuess:this.handleGuess,word:this.state.word}),n.a.createElement("div",{className:"word"},n.a.createElement("p",null,this.state.lettersFound.join(" "))),n.a.createElement("div",{className:"image"},this.displayImage(this.state.numGuessesRemaining)),n.a.createElement("div",{className:"guessedLetters"},n.a.createElement("p",null,"Wrong Guessed Letters:"),n.a.createElement("p",null,this.state.wrongLettersGuessed)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,s){e.exports=s(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0324fe05.chunk.js.map