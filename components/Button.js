import React from "react";
import styled, { css } from "styled-components";

export const SimpleButton = styled.button`
  font-size: 14px;
`;

class Button extends React.Component {
  static Button = styled.button`
    height: 40px;
    padding: 0 25px;
    border: none;
    border-radius: ${({ radius }) => (radius ? "20px" : "4px")};
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

    &:not(:first-of-type) {
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
    return <Button.Button {...this.props} {...this.state} />;
  }
}

export const GreenElpButton = styled(Button)`
  background-color: #28c23e;

  ${({ broken }) =>
    broken
      ? css`
          &:hover {
            background-color: #2fd447;
          }

          &:active {
            background-color: #28c23e;
          }
        `
      : css`
          &:hover:enabled {
            background-color: #2fd447;
          }

          &:active:enabled {
            background-color: #28c23e;
          }
        `};
`;

export const elpButtonSnippet = `
.green-button {
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

export const RedElpButton = styled(Button)`
  background-color: red;

  ${({ broken }) =>
    broken
      ? css`
          &:hover {
            background-color: crimson;
          }

          &:active {
            background-color: red;
          }
        `
      : css`
          &:hover:enabled {
            background-color: crimson;
          }

          &:active:enabled {
            background-color: red;
          }
        `};
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

export const BlueElpButton = styled(Button)`
  background-color: skyblue;

  ${({ broken }) =>
    broken
      ? css`
          &:hover {
            background-color: lightskyblue;
          }

          &:active {
            background-color: skyblue;
          }
        `
      : css`
          &:hover:enabled {
            background-color: lightskyblue;
          }

          &:active:enabled {
            background-color: skyblue;
          }
        `};
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

export const roundedElpButtonSnippet = `
.green-rounded-button {
  height: 40px;
  padding: 0 25px;
  border: none;
  border-radius: 20px;
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

export const abstractButton = `
.button {
  height: 40px;
  padding: 0 25px;
  border: none;
  // border-radius: 8px;
  outline: none;

  // background-color: #28c23e;

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

  // &:hover {
  //   background-color: #2fd447;
  // }

  // &:active {
  //   background-color: #28c23e;
  // }
}

.radius-big {
  border-radius: 20px;
}

.radius-small {
  border-radius: 8px;
}

.green {
  background-color: #28c23e;

  &:hover {
    background-color: #2fd447;
  }

  &:active {
    background-color: #28c23e;
  }
}

.red {
  background-color: #28c23e;

  &:hover {
    background-color: #2fd447;
  }

  &:active {
    background-color: #28c23e;
  }
}

.blue {
  background-color: #28c23e;

  &:hover {
    background-color: #2fd447;
  }

  &:active {
    background-color: #28c23e;
  }
}
`;

export const fixedButtonSnippet = `
.button {
  height: 40px;
  padding: 0 25px;
  border: none;
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
}

.radius-big {
  border-radius: 20px;
}

.radius-small {
  border-radius: 8px;
}

.green {
  background-color: #28c23e;

  &:hover:enabled {
    background-color: #2fd447;
  }

  &:active:enabled {
    background-color: #28c23e;
  }
}

.red {
  background-color: #28c23e;

  &:hover:enabled {
    background-color: #2fd447;
  }

  &:active:enabled {
    background-color: #28c23e;
  }
}

.blue {
  background-color: #28c23e;

  &:hover:enabled {
    background-color: #2fd447;
  }

  &:active:enabled {
    background-color: #28c23e;
  }
}
`;
