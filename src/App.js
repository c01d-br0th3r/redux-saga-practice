import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions";
import "./App.css";

const App = () => {
  const images = useSelector(state => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.imageActions.loadImages());
  }, []);
  console.log(images.length);

  return (
    <div className="content">
      <section className="grid">
        {images.map(i => (
          <div
            key={i.id}
            className={`item item-${Math.ceil(i.height / i.width)}`}
          >
            <img src={i.urls.small} />
          </div>
        ))}
        <button
          className="btn"
          onClick={() => {
            dispatch(allActions.imageActions.loadImages());
          }}
        >
          Load More
        </button>
      </section>
    </div>
  );
};

export default App;
