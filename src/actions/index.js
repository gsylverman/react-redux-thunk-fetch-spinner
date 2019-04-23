
const act = (date, p) => {

    return {
        type: p,
        payload: date,
    }
};

export const numberAction = (p) => {
    const inceput = new Date().getTime();

    return dispatch => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(data => data.json())
                .then(data => {
                    const final = new Date().getTime();

                    console.log("Datele au venit in: " + (final - inceput) / 1000 + " secunde");
                    dispatch(act(data, "NU"))
                })
        }, 3000)
    }
};

export const spinner = (p) => {
    return { type: p }
};