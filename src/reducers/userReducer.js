const currentUser = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, name: action.name, login: true };
    case "LOG_OUT":
      return { ...state, name: {}, login: false };
    default:
      return state;
  }
};

export default currentUser;
