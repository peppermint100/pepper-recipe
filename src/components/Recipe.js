import React, { useRef } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/recipe.scss";
import { TimelineMax } from "gsap";

// solve css plugin problem in gsap library
// gsap doesn't support es6 so we need to use react-gsap library or add plugin
// like this
import CSSPlugin from "gsap/CSSPlugin";

const C = CSSPlugin;

function Recipe({ label, image, calories, ingredientLines }) {
  let buttonRef = useRef(null);
  const tl = new TimelineMax();
  const onClick = () => {
    const detail = buttonRef;
    if (detail.style.display === "none") {
      showDetail(detail);
    } else {
      hideDetail(detail);
    }
  };
  const showDetail = ref => {
    tl.fromTo(
      ref,
      0.5,
      { display: "none", y: "-150%" },
      { display: "block", y: 0 }
    );
  };
  const hideDetail = ref => {
    tl.fromTo(
      ref,
      0.5,
      { display: "block", y: 0 },
      { display: "none", y: "-150%" }
    );
  };

  return (
    <div className="recipe">
      <div className="dropdown-menu">
        <label className="dropdown-label">{label}</label>
        <button onClick={onClick} className="arrow-button" value={label}>
          <FontAwesomeIcon
            className="arrow-icon"
            icon={faArrowDown}
            size="2x"
          />
        </button>
      </div>
      <section
        className="dropdown-detail"
        style={{ display: "none" }}
        ref={el => (buttonRef = el)}
      >
        <img alt={label} src={image} className="recipe-image" />
        {ingredientLines.map(ingredient => {
          return (
            <p key={ingredient} className="recipe-ingredient">
              {ingredient}
            </p>
          );
        })}
        <span className="recipe-calories">
          {Math.floor(calories)} calories contain
        </span>
      </section>
    </div>
  );
}

export default Recipe;
