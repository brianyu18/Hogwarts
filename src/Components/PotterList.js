import React,{ Component } from 'react';
import PotterItem from './PotterItem'


class PotterList extends Component{
  render(){
    let potterShow = this.props.sortedPotters.map(potter => {
      return <PotterItem key={potter.name} singlePotter={potter} choosePotter={this.props.choosePotter} youDead={this.props.youDead}/>

    })
    return(
      <div className="PotterList">
        {potterShow}
      </div>
    )
  }
}

export default PotterList;
