import React, { Component } from 'react';
import HouseContainer from './HouseContainer'

class HogwartsContainer extends Component {
  render(){
    return(
      <div className="bottomBox">
        <HouseContainer
          gryffindorList={this.props.gryffindorList}
          slytherinList={this.props.slytherinList}
          ravenclawList={this.props.ravenclawList}
          hufflepuffList={this.props.hufflepuffList}
        />
      </div>
    )
  }
}

export default HogwartsContainer;
