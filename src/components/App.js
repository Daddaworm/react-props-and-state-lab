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

  fetchPets = () => {
    let url = (this.state.filters.type === 'all') ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })     
}

onChangeType = (e) => {
  e.persist()
  this.setState(prevState => ({
    ...prevState,
    filters: {
      ...prevState.filters,
      type: e.target.value
    }
  }))
  // this.setState({
  //   filters: {
  //     ...this.state.filters,
  //     type: e.target.value
  //   }
  // }) 
}

//onAdoptPet = (petId) => {
  // if id equals inside the pet object matches the petId, Change isAdopted to true
  // this.state.pets.map(function(pet){
  //   return (pet.id === petId) ? pet.isAdopted = 'true' : pet
  // })
//}

onAdoptPet = (id) => {
  let pets = this.state.pets.map(pet => {
    return pet.id === id ? { ...pet, isAdopted: true } : pet
  })
  this.setState({ pets: pets })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

