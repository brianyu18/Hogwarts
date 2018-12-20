import React from 'react';

class PotterDisplay extends React.Component{

  changeHandler=(e, potter)=>{
    console.log(e)
    this.props.fetchHouse(e, potter)
  }


  render(){
    console.log('JINGLEJANG', this.props.showPotter)
    return(
      <div>
        <div className="PotterImageBorder">
          <img id="img2" src={this.props.showPotter.image2}/>
        </div>
        <br/>
        <h1>{this.props.showPotter.name}</h1>
        <h4>Age: {this.props.showPotter.age} </h4>
        <h4>House: {this.props.showPotter.house}</h4>
        <select onChange={(e) => this.changeHandler(e.target.value, this.props.showPotter)} value={`${this.props.showPotter.house}`}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
        <br/>
      </div>
    )
  }
}


export default PotterDisplay;
