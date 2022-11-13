import React, { Component } from "react";
import "./App.css";
import Palindrome from "./Palindrome";

class App extends Component {
  state = {
    isPalindrome: undefined,
    searchedWord: "",
  };

  isPalindromehandler = (str) => {
    let strLen = str.length;
    if (strLen === 0 || strLen === 1) {
      return true;
    }
    if (str[0] === str[strLen - 1]) {
      console.log("yes it is palindrom");
      console.log(str.slice(1, strLen - 1));
      return this.isPalindromehandler(str.slice(1, strLen - 1));
    }
    return false;
  };

  onChangehandler = (text) => {
    const result = this.isPalindromehandler(text);
    this.setState({
      isPalindrome: result,
      searchedWord: text,
    });
  };

  getText = (text, isPalindrom) => {
    if (isPalindrom === undefined) {
      return "";
    } else if (isPalindrom) {
      return `${text} is palindrom`;
    } else {
      return `${text} is not palindrom`;
    }
  };
  render() {
    const text = this.getText(this.state.searchedWord, this.state.isPalindrome);

    return (
      <div className="container">
        <div className="content">
          <h1>Palindrome Checker</h1>
          <Palindrome change={this.onChangehandler} />
          {text && <h4>{text}</h4>}
        </div>
      </div>
    );
  }
}

export default App;
