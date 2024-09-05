import styled from "styled-components"

export type ButtonVariants = keyof typeof bgButtonVariants

interface CartButtonContainerProps {
  $variant: ButtonVariants
}

const bgButtonVariants = {
  yellow: {
    background: "yellow-light",
    color: "yellow-dark",
    hoverBg: "yellow-dark",
    hoverColor: "white",
  },
  purple: {
    background: "purple-dark",
    color: "white",
    hoverBg: "purple",
    hoverColor: "white",
  },
} as const

export const CartButtonContainer = styled.button<CartButtonContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  position: relative;

  border: none;
  border-radius: 8px;

  transition: all 300ms;
  cursor: pointer;

  background-color: ${(props) =>
    props.theme.colors[bgButtonVariants[props.$variant].background]};
  color: ${(props) =>
    props.theme.colors[bgButtonVariants[props.$variant].color]};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors[bgButtonVariants[props.$variant].hoverBg]};
    color: ${(props) =>
      props.theme.colors[bgButtonVariants[props.$variant].hoverColor]};
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
