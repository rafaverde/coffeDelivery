import styled from "styled-components"

export const ProductOrderCardContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 2rem 0;
  gap: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  img {
    max-width: 4rem;
  }

  > span {
    font-weight: bolder;
    flex: 1;
    text-align: right;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors["base-button"]};

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
