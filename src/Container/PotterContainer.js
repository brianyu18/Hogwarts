import React,{ Component } from 'react';
import PotterList from '../Components/PotterList'
import PotterSearch from '../Components/PotterSearch'

class PotterContainer extends Component{
  render(){
    return(
      <div style={{backgroundColor:"rgb(125, 58, 37)"}} className="PotterContainer">
        <button onClick={() => this.props.currentState()}>Create a Potter!</button>
        <PotterSearch setFilteredPots={this.props.setFilteredPots}/>
        <PotterList sortedPotters={this.props.sortedPotters} choosePotter={this.props.choosePotter} youDead={this.props.youDead}/>
      </div>
    )
  }
}

export default PotterContainer;
