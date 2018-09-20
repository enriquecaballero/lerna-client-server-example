import React, { PureComponent } from "react";

export default class HelloWorld extends PureComponent {
  state = {
    fetching: false,
    string: ""
  };
  async componentDidMount() {
    this.setState({ fetching: true });
    const response = await fetch("/api");
    if (response.ok) {
      const { string } = await response.json();
      this.setState({ fetching: false, string });
    } else {
      this.setState({ fetching: false });
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.fetching ? "fetching..." : this.state.string}</h2>
      </div>
    );
  }
}
