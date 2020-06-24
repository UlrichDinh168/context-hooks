import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
class Navbar extends Component {
  // static contextType = ThemeContext;
  //look up the component tree and find the first match provider
  //and have access to the data provided by it
  render() {
    // console.log(this.context)
    // log out the context; the data inside value={}
    return (
      //Consumer takes a function
      //can be used
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Content</h1>
                  <div onClick={toggleAuth}>{isAuthenticated ? "Logged in" : "Logged out"}</div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
