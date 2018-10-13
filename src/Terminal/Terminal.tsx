import * as React from "react";
import Typed from "typed.js";

import "./Terminal.css";

interface Props {
  title: string;
  promptName: string;
  profileDetails: { key: string; value: string }[];
}

interface State {}

class Terminal extends React.Component<Props, State> {
  typed: Typed;

  componentDidMount() {
    const options = {
      strings: [
        `whoami^1000 <br>
        \`${this.props.profileDetails.map(({ key, value }) => {
          return `${key}: ${value}<br>`;
        }).join("")}
         \` 
         \`<span class='prompt'>${this.props.promptName} </span>\`^10000
         `
      ],
      typeSpeed: 70,
      startDelay: 1000,
      showCursor: false,
      cursorChar: "▋",
      onComplete: () => this.typed.reset()
    };
    const typing = require("typed.js");
    this.typed = new typing(".terminal1", options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const { title, promptName } = this.props;
    return (
      <div className="terminal left-align">
        <div className="terminal-title-bar">{title}</div>
        <div className="terminal-body">
          <span className="prompt">{promptName}</span>
          <span className="terminal1" />
        </div>
      </div>
    );
  }
}

export { Terminal };
