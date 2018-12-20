import React, { Component } from 'react';

class CharacterCards extends Component {
  render(){
    return(
      <div className="characterStyle">
        <img className="imgCard" height="200px" width="150px" src={this.props.person.image2}/>
        <div>{this.props.person.name}</div><br />
      </div>
    )
  }
}

export default CharacterCards;
