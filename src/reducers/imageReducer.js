const images = (state = [], action) => {
  switch (action.type) {
    case "LOAD_IMAGES":
      return [...state];
    case "LOAD_IMAGES_SUCCESS":
      return [...state, action.images];
    case "LOAD_IMAGES_FAIL":
      return [...state, action.error];
    default:
      return state;
  }
};

export default images;
