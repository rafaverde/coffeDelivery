import styled from "styled-components"

export const FooterContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.yellow};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`
