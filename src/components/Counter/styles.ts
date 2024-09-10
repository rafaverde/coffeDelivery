import styled from "styled-components"

export const CounterContainer = styled.div`
  display: flex;
  padding: 0.65rem;

  background-color: ${({ theme }) => theme.colors["base-button"]};

  border-radius: 8px;

  button {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.purple};

    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }

  input {
    width: 1.5rem;
    border: none;
    background: transparent;
    text-align: center;
    appearance: textfield;
    user-select: none;

    font-size: 1rem;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`
