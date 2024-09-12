import styled from "styled-components"

interface SelectPaymentButtonContainerProps {
  $isactive: boolean
}

export const SelectPaymentButtonContainer = styled.label<SelectPaymentButtonContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  position: relative;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors["base-button"]};

  background-color: ${(props) =>
    props.$isactive
      ? props.theme.colors["purple-light"]
      : props.theme.colors["base-button"]};

  border-radius: 8px;
  border: ${(props) =>
    props.$isactive
      ? `1px solid ${props.theme.colors.purple}`
      : `1px solid ${props.theme.colors["base-button"]}`};

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  input[type="radio"] {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
`
