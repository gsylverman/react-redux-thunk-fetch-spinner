const initialNumber = {
    number: 0,
    date: null,

};

const numberReducer = (state = initialNumber, action) => {
    const newState = { ...state };
    newState.date = action.payload;
    return newState;
}

export default numberReducer;