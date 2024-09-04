import styled, { css } from "styled-components"

export type ButtonVariants = "yellow" | "purple"

interface CartButtonContainerProps {
  variant: ButtonVariants
}

const bgButtonVariants = {
  yellow: {
    background: "#F1E9C9",
    color: "#c47f17",
    hoverBg: "#dbac2c",
    hoverColor: "#ffffff",
  },
  purple: {
    background: "#4B2995",
    color: "#ffffff",
    hoverBg: "#8047F8",
    hoverColor: "#ffffff",
  },
}

export const CartButtonContainer = styled.button<CartButtonContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  position: relative;

  border: none;
  border-radius: 8px;

  transition: all 300ms;
  cursor: pointer;

  ${(props) => {
    return css`
      background-color: ${bgButtonVariants[props.variant].background};
      color: ${bgButtonVariants[props.variant].color};
    `
  }}

  &:hover {
    ${(props) => {
      return css`
        background-color: ${bgButtonVariants[props.variant].hoverBg};
        color: ${bgButtonVariants[props.variant].hoverColor};
      `
    }}
  }

  span {
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -10px;
    right: -10px;

    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: -1px;

    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    color: ${({ theme }) => theme.colors.white};

    border-radius: 99px;
  }
`
