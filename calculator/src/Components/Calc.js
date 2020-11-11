import React, { Component } from 'react';
import './Calc.css';


// Baseado em https://codepen.io/Emperor359/pen/JKgzax

class Calc extends Component {
    

    render(){
      return (
        <div className="calc-container">
            <div className="form-group" style={{paddingTop: '1.75%'}}>
                <input type="text" value={this.props.value} className="form-control"  style={{textAlign: 'right'}} readOnly/>
            </div>
            <div className="buttons-container">
            {this.props.btns.map((item, key) => {
                if(item === "C"){
                return(
                    <button onClick={ this.props.clear.bind(this) } key={key} className="btn btn-info">{item}</button>
                )
                } else if(item === "="){
                return(
                    <button onClick={ this.props.equal.bind(this, this.props.value) } key={key} className="btn btn-info">{item}</button>
                )
                }else if(item === "del"){
                    return(
                        <button onClick={ this.props.remElem.bind(this) } key={key} className="btn btn-info">{item}</button>
                    )
                } else {
                return(
                    <button onClick={ this.props.addElem.bind(this, item) } key={key} className="btn btn-info">{item}</button>
                )
                }
            })}
            </div> 
        </div>
      );
    }
    
  }
  
  export default Calc;