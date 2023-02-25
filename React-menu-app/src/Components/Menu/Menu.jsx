import React from "react";
import "../Menu/Menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <body className="body-menu">
          <div>
            <h1>Hot Drinks</h1>
          </div>
          <div>
            <h2>Signature Coffees</h2>
          </div>
          <div>
            <h3>Americano</h3>
            <h3>Brewed Coffee</h3>
            <h3>Espresso</h3>
            <h3>Cappuccino</h3>
            <h3>CafeLatte</h3>
            <h3>Caffe Macchiato</h3>
            <h3>French Press</h3>
            <h3>Turkish Coffee</h3>
          </div>
          <div>
            <h2>Tea</h2>
          </div>
          <div>
            <h3>Earl Grey Tea</h3>
            <h3>Chocolate Milk Tea</h3>
            <h3>Chai Milk Tea</h3>
            <h3>Chamomile Tea</h3>
            <h3>Ginger Tea</h3>
            <h3>Vanilla Tea</h3>
            <h3>Morrocan Mint Tea</h3>
            <h3>Lemon Grean Tea</h3>
            <h3>Jasmin Green Tea</h3>
            <h3>Peach Tea</h3>
            <h3>Apple Tea</h3>
          </div>
          <div>
            <h1>Cold Drinks</h1>
          </div>
          <div>
            <h2>Iced Coffee</h2>
          </div>
          <div>
            <h3>Iced Americano</h3>
            <h3>Brewed Coffee</h3>
            <h3>Espresso</h3>
            <h3>Iced Cappuccino</h3>
            <h3>Latte</h3>
            <h3>Caffe Macchiato</h3>
            <h3>French Press</h3>
            <h3>Turkish Coffee</h3>
          </div>
          <div>
            <h2>Iced Tea</h2>
          </div>
        </body>
      </div>
    );
  }
}

export default Menu;
