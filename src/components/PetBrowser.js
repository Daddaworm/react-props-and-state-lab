import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  generatePet(){
    return this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    })
    // for each pet inside this.props.pets create a Pet component <Pet />
  

  }
  render() {
    return <div className="ui cards" > {this.generatePet()} </div>
  }
}

export default PetBrowser


