import React from "react";
import PropTypes from "prop-types";
import classes from "./Ingredient.css";
const ingredient = (props) => {
  let ing = null;
  if (props.type === "BreadTop") {
    ing = (
      <div className={classes[props.type]}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    );
  } else if (classes[props.type]) {
    ing = <div className={classes[props.type]}></div>;
  }
  return ing;
};

ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ingredient;
