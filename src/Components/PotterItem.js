import React,{ Component } from 'react';

class PotterItem extends Component{
  render(){
    return(
      <div>
        <div className="PotterItem">
          <h6>{this.props.singlePotter.name}</h6>
        </div>
        <div className="PotterBottom">
          <img height="200px" width="300px" src={this.props.singlePotter.image1}/>
        </div>
        <div>
          <button onClick={(e) => this.props.choosePotter(e, this.props.singlePotter)}>SHOW ME!</button>
          <button onClick={(e) => this.props.youDead(e, this.props.singlePotter)}>YOU'RE DEAD!</button>
        </div>
      </div>
    )
  }
}

export default PotterItem;
