import React, { Component } from "react";

class Myconst extends Component {
  hello() {
    //console.log("hello");
    return "I live in " + this.props.city;
  }

  render() {
    const carol = this.hello();
    return <div className="h3">{carol}</div>;
  }
}

export default Myconst;
