import React from "react";
import styled, { injectGlobal } from "styled-components";

export const SimpleButton = styled.button`
  font-size: 14px;
`;

class Button extends React.Component {
  static Button = styled.button`
    height: 40px;
    padding: 0 25px;
    border: none;
    border-radius: 8px;
    outline: none;

    font-size: 14px;
    font-family: arial, sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }

    & + & {
      margin-left: 5px;
    }
  `;

  state = {
    disabled: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleButton, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleButton, false);
  }

  handleButton = e => {
    if (e.key === "d")
      this.setState(({ disabled }) => ({ disabled: !disabled }));
  };

  render() {
    return <ElpButton.Button {...this.props} {...this.state} />;
  }
}

export const ElpButton = styled(Button)`
  background-color: #28c23e;

  &:hover:enabled {
    background-color: #2fd447;
  }

  &:active:enabled {
    background-color: #28c23e;
  }
`;

export const elpButtonSnippet = `
.button {
  height: 40px;
  padding: 0 25px;
  border: none;
  border-radius: 8px;
  outline: none;

  background-color: #28c23e;

  font-size: 14px;
  font-family: arial, sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: #2fd447;
  }

  &:active {
    background-color: #28c23e;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
}
`;

export const InvertedElpButton = styled(ElpButton)`
  background-color: red;

  &:hover:enabled {
    background-color: crimson;
  }

  &:active:enabled {
    background-color: red;
  }
`;

export const invertedElpButtonSnippet = `
.red-button {
  height: 40px;
  padding: 0 25px;
  border: none;
  border-radius: 8px;
  outline: none;

  background-color: red;

  font-size: 14px;
  font-family: arial, sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: crimson;
  }

  &:active {
    background-color: red;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
}
`;

export const BlueElpButton = styled(ElpButton)`
  background-color: skyblue;

  &:hover:enabled {
    background-color: lightskyblue;
  }

  &:active:enabled {
    background-color: skyblue;
  }
`;

export const blueElpButtonSnippet = `
.blue-button {
  height: 40px;
  padding: 0 25px;
  border: none;
  border-radius: 8px;
  outline: none;

  background-color: skyblue;

  font-size: 14px;
  font-family: arial, sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: lightskyblue;
  }

  &:active {
    background-color: skyblue;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
}
`;
