import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Calc from "./Components/Calc";

// Baseado em https://codepen.io/Emperor359/pen/JKgzax

// Funcao para mapear estado em props
function mapStateToProps(state) {
  return{
    value: state.value,
    btns: state.btns
  }
}

// Funcao para mapear chamadas da funcao reducer em props
function mapDispatchToProps(dispatch) {
  return{
    addElem: (text) => { // Para adicionar elemento na expressao
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    remElem: () => { // Para remover ultimo elemento da expressao
      dispatch({
        type: 'REM_ELEM'
      })
    },
    clear: () => { // Para limpar expressao
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => { // Para calcular expressao
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}

// Conectar com o componente Calc
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
