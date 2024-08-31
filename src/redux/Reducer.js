const initialState = {
  count: 5,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + payload,
      }; //here the payload is nothing but the value that is given in the onclick function i.e., "5" onClick={()=>dispatch(IncAction(5))} and if the value is not given in the onclick function then no need to payload and we can incremnet the state by 1 by using "returm state+1"
    case "DECREMENT":
      return {
        ...state,
        count: state.count - payload,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
