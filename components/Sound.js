import React from "react";

export default class Phone extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleButton, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleButton, false);
  }

  handleButton = e => {
    if (e.key === "s") {
      const audio = new Audio("phone.mp3");
      audio.play();
      setTimeout(() => audio.pause(), 3000);
    }
  };

  render() {
    return null;
  }
}
