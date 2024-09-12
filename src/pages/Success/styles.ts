import styled from "styled-components"

export const SuccessContainer = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  overflow: scroll;
  flex-direction: column;
`

export const SuccessContent = styled.div`
  width: 75rem;
  margin: 0 auto;
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;

  header {
    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors["yellow-dark"]};
    }

    p {
      font-size: 1.25rem;
    }
  }

  main {
    display: flex;
    justify-content: space-between;

    gap: 2rem;

    img {
      width: 50%;
    }

    .gradientBorder {
      display: flex;
      width: 50%;
      position: relative;
      padding: 2px;
      background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.yellow},
        ${(props) => props.theme.colors.purple}
      );
      border-radius: 9px 36px;
    }

    .gradientPadding {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 2rem;
      padding: 2.5rem;

      border-radius: 7px 34px;
      /* border: 1px solid ${({ theme }) => theme.colors.purple}; */
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  .contentWrapper {
    max-width: 80%;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: 1rem;

    ul {
      list-style: none;
    }

    li {
      margin-bottom: 0.5rem;
    }
  }

  .iconTitleWrapper {
    display: flex;
    align-items: center;

    padding: 0.5rem;

    border-radius: 99px;
    color: ${({ theme }) => theme.colors.white};

    &.yellow-dark {
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    }
    &.yellow {
      background-color: ${({ theme }) => theme.colors.yellow};
    }
    &.dark-gray {
      background-color: ${({ theme }) => theme.colors["base-title"]};
    }
    &.purple {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    header {
      h2 {
        line-height: 1;
      }
    }

    main {
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;

      img {
        max-width: 80%;
        height: auto;
      }

      .gradientBorder {
        max-width: 100%;
      }

      .gradientPadding {
        gap: 1.5rem;
      }

      .contentWrapper {
        max-width: 100%;
      }
    }
  }
`
