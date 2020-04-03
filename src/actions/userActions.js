const userLogIn = name => {
  return {
    type: "LOG_IN",
    name
  };
};

const userLogOut = () => {
  return {
    type: "LOG_OUT"
  };
};

export default { userLogOut, userLogIn };
