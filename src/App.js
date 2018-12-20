import React, { Component } from 'react';
import PotterContainer from './Container/PotterContainer'
import PotterDisplay from './Components/PotterDisplay'
import HogwartsContainer from './Container/HogwartsContainer'
import PotterCreate from './Components/PotterCreate'

import './App.css';

class App extends Component {
  state={
    potterPeople: [],
    sortedPotters: [],
    gryffindorList: [],
    slytherinList: [],
    ravenclawList: [],
    hufflepuffList: [],
    targetPotter: ""
  }

  setFilteredPots = (search) =>{
    console.log("hello hello")
    let searchPots = this.state.potterPeople.filter(potter => {
      return potter.name.toLowerCase().includes(search) || potter.house.toLowerCase().includes(search)
    })
    this.setState({
      sortedPotters: searchPots
    })
  }

  changePotterHouse = (fetch) => {
    this.setState({
      potterPeople: fetch
    })
  }

  setHouse = (list, house) => {
    let gryffs = list.filter(person => {
      return person.house === house
    })
    console.log("HOUSE", gryffs)
    return gryffs
  }

  choosePotter = (e, potter) => {
    this.setState({
      targetPotter: potter
    })
    console.log(potter)
  }

  createPotter = (shazam) => {
    console.log(shazam)
    fetch("http://localhost:3001/potterstuff", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(shazam),
    })
    .then(res => res.json())
    .then(newPot => {
      this.choosePotter(newPot, newPot)
      this.getData()
    })

  }

  youDead = (e, potter) => {
    console.log(potter)
    fetch(`http://localhost:3001/potterstuff/${potter.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(deletePot => {
      this.getData()
      this.setState({
        targetPotter: ""
      })
    })
  }

  fetchHouse = (e, potter) => {
    console.log(e, potter)
    fetch(`http://localhost:3001/potterstuff/${potter.id}`, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({house: e})
    })
    .then(res => res.json())
    .then(updatedPotter => {
      console.log(updatedPotter)
      this.setState({targetPotter: updatedPotter})
      this.getData()
    })
  }

  getData = () => {
    fetch('http://localhost:3001/potterstuff')
    .then(res => res.json())
    .then(potters => {
      this.setState({
        potterPeople: potters,
        gryffindorList: this.setHouse(potters, "Gryffindor"),
        slytherinList: this.setHouse(potters, "Slytherin"),
        ravenclawList: this.setHouse(potters, "Ravenclaw"),
        hufflepuffList: this.setHouse(potters, "Hufflepuff")
      })
      console.log(this.state.gryffindorList, this.state.slytherinList)
      this.setState({
        sortedPotters: this.state.potterPeople
      })
    })
  }
  componentDidMount(){
    this.getData()
  }

  currentState = () => {
    this.setState({
      targetPotter: ""
    })
  }

  render() {
    let display = this.state.targetPotter == "" ? (
      <PotterCreate gryffindorList={this.state.gryffindorList} slytherinList={this.state.slytherinList} ravenclawList={this.state.ravenclawList} hufflepuffList={this.state.hufflepuffList} createPotter={this.createPotter}/>)
      :
      (<div className="PotterDisplay">
        <PotterDisplay showPotter={this.state.targetPotter} changePotterHouse={this.changePotterHouse} fetchHouse={this.fetchHouse}/>
        <HogwartsContainer gryffindorList={this.state.gryffindorList} slytherinList={this.state.slytherinList} ravenclawList={this.state.ravenclawList} hufflepuffList={this.state.hufflepuffList}/>
      </div>
      )
    return (
      <div className="App" style={{display:"flex"}}>
        <PotterContainer sortedPotters={this.state.sortedPotters} choosePotter={this.choosePotter} setFilteredPots={this.setFilteredPots} youDead={this.youDead} currentState={this.currentState}/>
        <div>
          {display}
        </div>
      </div>
    );
  }
}

export default App;
