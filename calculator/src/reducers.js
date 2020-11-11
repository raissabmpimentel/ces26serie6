const calcState = {
    value: 0,
    btns: [ "1", "2", "3", "C", "4", "5", "6", "del", "7", "8", "9", "+", "0", ".", "=", "-", "(" ,")", "*", "/"]
  } 

  function calcReducer(state = calcState, action) {
    switch(action.type){
        case 'ADD_ELEM':
            return{
                ...state,
                value: state.value === 0 ? action.text : state.value + action.text
            }
        case 'CLEAR':
            return{
                ...state,
                value: 0
            }
        case 'EQUAL':
            var val = action.value
            try {
                val = eval(action.value)
            } catch (error) {
            }

            return{
                ...state,
                value: val
            }
            
        case 'REM_ELEM':
            return{
                ...state,
                value: (state.value === 0 || state.value.slice(0, -1) === '') ? 0 : state.value.slice(0, -1)
            }
        default:
            return state;
    }
  }

  export default calcReducer;