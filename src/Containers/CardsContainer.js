import React from "react"
import { no, yes } from "../objects"

class CardsContainer extends React.Component {
  newNo = { statement: no["no-statement"], image: no["no-image"] }

  newYes = { statement: yes["yes-statement"], image: yes["yes-image"] }

  state = {
    statement: this.newNo.statement,
    image: this.newNo.image,
  }

  clickHander = () => {
    console.log()
    if (
      this.state.statement === this.newNo.statement &&
      this.state.image === this.newNo.image
    ) {
      this.setState({
        statement: this.newYes.statement,
        image: this.newYes.image,
      })
    } else
      this.setState({
        statement: this.newNo.statement,
        image: this.newNo.image,
      })
  }

  render() {
    console.log(this.state)
    return (
      <div onClick={this.clickHander}>
        <h1>{this.state.statement}</h1>
        <img src={this.state.image} />
      </div>
    )
  }
}

export default CardsContainer

//   updateStateObject() {
//     const newViewedObj = this.state.viewedObj;
//     newViewedObj["no-image"] = yes["yes-image"];
//     newViewedObj["no-statement"] = yes["yes-statement"]
//     this.setState({
//       viewedObj: newViewedObj,
//     });
//   }
