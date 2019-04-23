const spinner = {
    loading: false
};

const spinnerReducer = (state = spinner, action) => {
    const newState = { ...state };
    if (action.type === "DA") {
        newState.loading = true;
    } else if (action.type === "NU") {
        newState.loading = false;
    }


    return newState;
}

export default spinnerReducer;