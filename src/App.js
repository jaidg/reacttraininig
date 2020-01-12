import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Custom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new: "newß",
      otherproperty: ""
    };
  }
  componentDidMount() {
    this.setState({ otherproperty: "revised" });
  }
  render() {
    console.log(this.state);
    return <div className="App">comming from custom component</div>;
  }
}

// JSX - Javascript XML
// immutable

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Custom abc="abc prop"></Custom>
      </header>
    </div>
  );
}

export default App;
