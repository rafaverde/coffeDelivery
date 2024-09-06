import styled from "styled-components"
import bgIntro from "../../assets/intro-background.jpg"

export const IntroContainer = styled.div`
  width: 100%;
  padding: 5rem 1rem;

  background: url(${bgIntro}) center center;
  background-size: cover;

  .content {
    max-width: 75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  h2 {
    font-size: 3rem;
    line-height: 1.3;
    margin-bottom: 1rem;

    color: ${({ theme }) => theme.colors["base-title"]};

    @media (max-width: 768px) {
      line-height: 1;
      font-size: 2.4rem;
    }
  }

  .subtitle {
    font-size: 1.25rem;

    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  .iconsContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 1.25rem;
    margin-top: 4rem;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .contentWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 1rem;
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

  .introImage img {
    max-width: 35rem;

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`
