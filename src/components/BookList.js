import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  //can only be used in class component
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{background: theme.ui}}>From good to great</li>
          <li style={{background: theme.ui}}>The Davinchi code</li>
          <li style={{background: theme.ui}}>The stars live among us</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
