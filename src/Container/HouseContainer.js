import React, { Component } from 'react';
import CharacterCards from '../Components/CharacterCards'

class HouseContainer extends Component {
  state = {
    house: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  }
  render(){
    let gryffCards = this.props.gryffindorList.map(gryffy => {
      return <CharacterCards person={gryffy}/>
    })
    let slythCards = this.props.slytherinList.map(slyth => {
      return <CharacterCards person={slyth}/>
    })
    let ravenCards = this.props.ravenclawList.map(raven => {
      return <CharacterCards person={raven}/>
    })
    let huffleCards = this.props.hufflepuffList.map(huffle => {
      return <CharacterCards person={huffle}/>
    })
    return(
      <div>
        <div>
          <h1 className="houseBanner">Gryffindor</h1>
          {gryffCards}
        </div>
        <div>
          <h1 className="houseBanner">Slytherin</h1>
          {slythCards}
        </div>
        <div>
          <h1 className="houseBanner">Ravenclaw</h1>
          {ravenCards}
        </div>
        <div>
          <h1 className="houseBanner">Hufflepuff</h1>
          {huffleCards}
        </div>

      </div>
    )
  }
}

export default HouseContainer;
