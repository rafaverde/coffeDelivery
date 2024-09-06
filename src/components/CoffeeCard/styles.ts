import styled from "styled-components"

export const CoffeeCardContainer = styled.div`
  width: 18rem;
  padding: 4rem 1.6rem 2rem;
  position: relative;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors["base-card"]};

  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    position: absolute;
    top: -3.75rem;
  }

  .tagWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin: 16px 0;
  }

  .tagWrapper span {
    padding: 4px 8px;

    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};

    border-radius: 20px;

    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  p {
    color: ${({ theme }) => theme.colors["base-label"]};

    text-align: center;
    font-size: 0.875rem;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .price span {
    font-family: ${({ theme }) => theme.fonts["primary-font"]};
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 1;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
