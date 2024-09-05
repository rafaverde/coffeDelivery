import styled from "styled-components"

export const CoffeeListContainer = styled.div`
  width: 100%;
  padding: 5rem 0;

  .content {
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
  }

  .coffeeWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: flex-start;
    gap: 1rem;
  }
`
