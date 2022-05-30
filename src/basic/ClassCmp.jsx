import React, {  Component } from 'react'

export default class ClassCmp extends Component {
   constructor()
   {
       super();
       this.state={
           name:"anil"
       }
   }
  render() {
    console.log('dd')
    return (
      <div>ClassCmp {this.state.name}</div>
    )
  }
}
