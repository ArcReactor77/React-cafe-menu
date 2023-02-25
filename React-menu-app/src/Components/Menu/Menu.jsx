import React from "react";
import Items from "../Items/Items";
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
          <Items/>
        </body>
      </div>
    );
  }
}

export default Menu;
