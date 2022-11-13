import React from "react";
import "./Palindrom.css";
const Palindrome = (props) => {
  let a;
  return (
    <div className="palindrom">
      <input
        type="text"
        placeholder="Type the word"
        onChange={(e) => {
          a = e.target.value;
        }}
      ></input>
      <button type="submit" onClick={(e) => props.change(a)}>
        Check
      </button>
    </div>
  );
};

export default Palindrome;
