import styled from "styled-components"

interface SelectPaymentButtonContainerProps {
  $isactive: boolean
}

export const SelectPaymentButtonContainer = styled.button<SelectPaymentButtonContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  cursor: pointer;

  background-color: ${(props) =>
    props.$isactive
      ? props.theme.colors["purple-light"]
      : props.theme.colors["base-button"]};

  border-radius: 8px;
  border: ${(props) =>
    props.$isactive ? `1px solid ${props.theme.colors.purple}` : "none"};

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
