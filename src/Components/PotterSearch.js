import React from 'react'

class PotterSearch extends React.Component{

  render(){
    return(
      <div style={{backgroundColor:"rgb(125, 58, 37)"}}>
        <form onSubmit={this.omg}>
          <input onChange={(e) => this.props.setFilteredPots(e.target.value)} type="text" placeholder="Find a Hamburger"/>
          <button disabled={true} type="submit">DONT PRESS</button>
        </form>
      </div>
    )
  }
}

export default PotterSearch
