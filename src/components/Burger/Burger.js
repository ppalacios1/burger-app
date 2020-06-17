import React from "react";

import classes from "./Burger.css";
import Ingredient from "./Ingredient/Ingredient";

const burger = (props) => {
  const transIng = Object.keys(props.ingredients).map((ing) => {
    return [...Array(props.ingredients[ing])].map((_, i) => {
      return <Ingredient type={ing} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <Ingredient type="BreadTop"></Ingredient>
      {transIng}
      <Ingredient type="BreadBottom"></Ingredient>
    </div>
  );
};

export default burger;
