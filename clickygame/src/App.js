import React, { Component } from 'react';
import Character from "./compononents/Character";
import Header from "./compononents/Header";
import Title from "./compononents/Title";
import Wrapper from "./compononents/Wrapper";
import characters from "./characters.json";
import "./App.css"


function instructions() {
    alert("We're going to play the clicky game! Click a character, but no duplicates. Have fun!");
}

document.addEventListener("DOMContentLoaded", function(event){
    instructions();
});

// function to shuffle characters
function characterShuffle(char) {
    for (let i = char.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [char[i], char[j]] = [char[j], char[i]];
    }
    return char;
};

class App extends Component {

    state = {
        characters,
        yourScore: 0,
        highScore: 0,
        clickChar: []
    };

    clickDiv = id => {
        // everytime user clicks image and it's not present in the clickChar array, run countScore
        if (this.state.clickChar.indexOf(id) === -1) {
            this.countScore();
            this.setState({ clickChar: this.state.clickChar.concat(id) });
        } else {

            alert("Woops you clicked the same character")
            this.resetGame();
        }
    };

    // user clicks an image, run countscore
    countScore = () => {
        const newScore = this.state.yourScore + 1;
        this.setState({
            yourScore: newScore
        });

        if (newScore >= this.state.highScore) {
            this.setState({ highScore: newScore });
        }
        if (newScore === 12) {
            alert("Yay you win")
            this.resetGame();
        }
        this.initialShuffle();
    };

    resetGame = () => {
        this.setState({
            yourScore: 0,
            highScore: this.state.highScore,
            clickChar: []
        });
        this.initialShuffle();
    };

    initialShuffle = () => {
        // pass the characters.json as a parameter
        let charShuffle = characterShuffle(characters);
        this.setState({ characters: charShuffle })
    };

    render() {

        return (
            <Wrapper>
                <Title>
                    <img className="logo" alt="logo1" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Family_Guy_Logo.svg/1200px-Family_Guy_Logo.svg.png"></img>
                    <img className="logo" alt="logo2" src="https://i2.wp.com/i.cdn.turner.com/adultswim/big/img/2014/08/05/ClevelandShow.png"></img>
                    <img className="logo" alt="logo3" src="https://vignette.wikia.nocookie.net/fictionalcrossover/images/a/aa/American_Dad_Logo.png/revision/latest?cb=20150216222447"></img>
                    <br></br>
                    Clicky Game!
                    <br></br>
                    <Header

                        yourScore={this.state.yourScore}
                        highScore={this.state.highScore}
                        rightWrong={this.state.rightWrong}
                    />
                </Title>
                
                {this.state.characters.map(friend => (
                    <Character

                        image={friend.image}
                        name={friend.name}
                        id={friend.id}
                        clickDiv={this.clickDiv}
                        countScore={this.countScore}
                        initialShuffle={this.initialShuffle}
                        resetGame={this.resetGame}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;



