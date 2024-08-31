// export const IncAction =()=> async dispatch=>{
//     dispatch({
//         type: "INCREMENT"
//     })
// }

// export const DecAction =()=>async dispatch=>{
//     dispatch({
//         type: "DECREMENT"
//     })
// }

// export const ResetAction = ()=>async dispatch=>{
//    dispatch({
//     type:"RESET"
//    })
// }

export const IncAction = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};
export const DecAction = (value) => {
  return {
    type: "DECREMENT",
    payload: value,
  };
};
export const ResetAction = () => {
  return {
    type: "RESET",
  };
};
