

const initialState = {
    user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_AUTH_STATE':
      return { ...state, ...payload };

    default:
      return state;
  }
};
