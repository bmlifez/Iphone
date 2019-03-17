import React, { Component } from 'react';
import {IphoneView}         from './Iphone.view';

export default class IphoneMain extends Component {
  constructor(props){
    super(props);
    this.state = {
        usertext: '',
        shiftLeftIndex : 0,
        shiftRightIndex: 0,
        globalIndex:     0
    }
  }

  setInput=(value)=>{
   
    let usertext = this.state.usertext;
    usertext = usertext + `${value}`;

    if(this.state.shiftLeftIndex === 0 && this.state.shiftRightIndex===0){
      this.setState({
        usertext: usertext,
        shiftLeftIndex : 0,
        shiftRightIndex: 0,
        initialFlag:   false
      })
    } else {
      let currentArr = Array.from(this.state.usertext);
      currentArr.splice(this.state.globalIndex,0,value);
      let currentString = currentArr.toString();
      let updateVal = currentString.replace(/,/g,"");
      this.setState({
        usertext: updateVal,
        initialFlag: false,
        shiftRightIndex: 0,
      })
    }

  }

  setShifter=(value)=>{
    if(value === 37){
      this.setState({
        shiftLeftIndex: this.state.shiftLeftIndex + 1
      },()=>{
         if(this.state.initialFlag === false){
           let globalIndexVal = this.state.usertext.length - this.state.shiftLeftIndex;
           this.setState({
             globalIndex: globalIndexVal
           })
          } else {
           this.setState({
             globalIndex: this.state.usertext.length
           })
         }
      })
    }

    if(value === 39){
      this.setState({
        shiftRightIndex: this.state.shiftRightIndex + 1
      },()=>{
        if(this.state.initialFlag === false){
          let globalIndexVal = this.state.globalIndex + this.state.shiftRightIndex;
          this.setState({
            globalIndex: globalIndexVal
          })
         } else {
          this.setState({
            globalIndex: this.state.usertext.length
          })
        }
      })
    }
  
  }

  render() {
    return (
      <React-Fragment>
         <IphoneView userInput={this.setInput} usertext={this.state && this.state.usertext} shifter={this.setShifter}/>
      </React-Fragment>
    )
  }
}
 