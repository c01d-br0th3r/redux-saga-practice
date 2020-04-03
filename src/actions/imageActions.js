const loadImages = () => {
  return {
    type: "LOAD_IMAGES"
  };
};

const loadImagesSuccess = imgs => {
  return {
    type: "LOAD_IMAGES_SUCCESS",
    images: img
  };
};

const loadImagesFail = error => {
  return {
    type: "LOAD_IMAGES_SUCCESS",
    error
  };
};

export default { loadImages, loadImagesSuccess, loadImagesFail };
