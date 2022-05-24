import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import data from "data.json";

import { List } from "components/molecules";
import { Clock, Form } from "containers";

class App extends Component {
  state = { value: "" };

  render() {
    const handleChange = ({ target: { value } }) => this.setState({ value });

    return (
      <div className="App">
        <header className="App-header">
          <Clock />

          <Form handleChange={handleChange} value={this.state.value} />
          <List name="firstList" data={data} />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
