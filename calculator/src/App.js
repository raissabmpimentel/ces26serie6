import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Calc from "./Components/Calc";



function mapStateToProps(state) {
  return{
    value: state.value,
    btns: state.btns
  }
}

function mapDispatchToProps(dispatch) {
  return{
    addElem: (text) => {
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    remElem: () => {
      dispatch({
        type: 'REM_ELEM'
      })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => {
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}

const CalcConnected = connect(mapStateToProps, mapDispatchToProps)(Calc);

class App extends Component {

  render(){
    return (
      <div style={{marginLeft: "10px"}}>
          <h1>CES-26 - 6ª Série de Exercícios</h1>
          <h2>Aluna: Raíssa Batista de Miranda Pimentel - Turma: COMP-21</h2>
          
            <CalcConnected/>
         
      </div>
    );
  }
  
}

export default App;
