const loadState = () => {
    try {
        const loadedState = sessionStorage.getItem('state');
        if (loadedState === null) {
            return undefined;
        }
        return JSON.parse(loadedState);
    } catch (err) {
        return undefined;
    }
};

export default loadState;
