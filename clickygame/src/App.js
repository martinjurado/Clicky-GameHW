import React, { Component } from 'react';
import Character from "./compononents/Character";
import Title from "./compononents/Title";
import Wrapper from "./compononents/Wrapper";
import characters from "./characters.json";

class App extends Component {

    state = {
        characters
    };

    render() {

        return (
            <Wrapper>
                <Title>SETH MACFARLANE
                    Clicky Game
                </Title>
                {this.state.characters.map(friend => (
                    <Character
                        
                        image={friend.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;



