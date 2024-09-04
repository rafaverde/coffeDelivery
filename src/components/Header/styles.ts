import styled from "styled-components"

export const HeaderContainer = styled.header`
  max-width: 75rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-input"]};

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  nav > span {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.5rem 0.875rem 0.5rem 0.5rem;

    color: ${({ theme }) => theme.colors["purple-dark"]};
    background-color: ${({ theme }) => theme.colors["purple-light"]};

    border-radius: 8px;

    font-size: 0.875rem;

    cursor: pointer;
    transition: background-color 300ms;
    user-select: none;
    -webkit-user-select: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
