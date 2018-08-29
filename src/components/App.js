import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (arg) => {
    this.setState(
      {filters:
        {type: arg}
      })
  }

  onFindPetsClick = () => {
    this.setState({
      pets: []
    })
    const query = this.state.filters.type
    if(query === "all"){
      fetch("/api/pets")
      .then(r => r.json())
      .then(r => this.setState(
        {pets:[...r]}
      ))
    } else {fetch(`/api/pets?type=${query}`)
      .then(r => r.json())
      .then(r => this.setState(
        {pets:[...r]}
      ))
    }
  }

  onAdoptPet = (petID) => {

    const pets = this.state.pets.map((pet) => (pet.id === petID) ? {...pet, isAdopted: true} : pet)

    this.setState({
      pets
    })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
