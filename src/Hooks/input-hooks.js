import { useReducer } from "react";

const initialReducer = {
    value:'',
    isTouched:false,
}

const Reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        value: action.value,
      };
    case "BLUR":
      return {
        ...state,
        isTouched: true,
      };
    case "RESET":
      return {
        ...state,
        value: "",
        isTouched: false,
      };
    default:
      return state;
  }
};


const InputHook = (validateValue) => {
    // const [value,setValue] = useState('');
    // const [touched,setTouched] =useState(false);

    const [inputState,dispatch] = useReducer(Reducer,initialReducer)

    const isValid = validateValue(inputState.value);
    const hasError = !isValid && inputState.isTouched;

    const changeHandler = (e) =>{
        dispatch({type:"INPUT",value:e.target.value})
    };
    const blurHandler = () =>{
        dispatch({type:"BLUR"})
    }

    const reset = () =>{
      dispatch({type:"RESET"})
    };

    return{
        value:inputState.value,
        isValid,
        hasError,
        changeHandler,
        blurHandler,
        reset,
    }


};

export default InputHook;