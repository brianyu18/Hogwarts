import React from 'react'
import HogwartsContainer from '../Container/HogwartsContainer'


class PotterCreate extends React.Component{
  state = {
      name: "",
      age: 0,
      house: "Gryffindor",
      role: "",
      image1: "",
      image2: ""
    }

  createTarget = (e) => {
    e.preventDefault()
    console.log("DOH")
    console.log(this.state)
    this.props.createPotter(this.state)
  }

  changeHandler = (e) => {
    // console.log(this.state)
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    console.log(this.state);
    return(
      <div className="PotterDisplay">
        <img height="250" width="500" src="https://www.freeiconspng.com/uploads/harry-potter-logo-transparent-1.png"/>
        <h1 className="houseBanner">Create a Potter</h1>
        <form onSubmit={e => {this.createTarget(e)}}>
          <input onChange={(e) => this.changeHandler(e)} name="name" type="text" placeholder="Name"/><br/>
          <input onChange={(e) => this.changeHandler(e)} name="age" type="number" placeholder="Age"/><br/>
          <input onChange={(e) => this.changeHandler(e)} name="role" type="text" placeholder="Role"/><br/>
          <input onChange={(e) => this.changeHandler(e)} name="image1" type="text" placeholder="Image1"/><br/>
          <input onChange={(e) => this.changeHandler(e)} name="image2" type="text" placeholder="Image2"/><br/>
          <select onChange={(e) => this.changeHandler(e)} name="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>
          <button type="submit">SHAZAM!</button>
        </form>
        <HogwartsContainer gryffindorList={this.props.gryffindorList} slytherinList={this.props.slytherinList} ravenclawList={this.props.ravenclawList} hufflepuffList={this.props.hufflepuffList}/>
      </div>)
  }
}

export default PotterCreate
