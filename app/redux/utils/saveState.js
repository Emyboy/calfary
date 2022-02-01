const saveState = (state) => {
    try {
        const storedState = JSON.stringify(state);
        sessionStorage.setItem('state', storedState);
    } catch (err) {
        return undefined;
    }
};

export default saveState;
