import React from 'react'

class Pet extends React.Component {

  // handleAdopt = () => {
  //   this.props.onAdoptPet(this.props.pet)
  //   // this.props.isAdopted = true
  // }

  // state = {
  //   ...this.props.pet
  // }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ? 
          <button className="ui disabled button">Already adopted</button> :
          <button id={this.props.pet.id} className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet

// type: "micropig", gender: "male", age: 4, weight: 5, …}
// age
// :
// 4
// gender
// :
// "male"
// id
// :
// "9750e959-f8ef-465f-9e13-16323454dc1f"
// isAdopted
// :
// false
// name
// :
// "Hemingway"
// type
// :
// "micropig"
// weight
// :
// 5
