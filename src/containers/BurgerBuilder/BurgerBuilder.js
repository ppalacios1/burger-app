import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 1,
      Bacon: 2,
      Cheese: 1,
      Meat: 1,
    },
  };
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
