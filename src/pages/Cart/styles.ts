import styled from "styled-components"

export const CheckoutContainer = styled.main`
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  overflow: scroll;
  flex-direction: column;
`

export const CheckoutForm = styled.form`
  width: 75rem;
  margin: 0 auto;
  padding: 5rem 1rem;

  display: flex;
  align-items: stretch;
  gap: 2rem;

  .userInfos {
    width: 60%;
    h2 {
      margin-bottom: 1rem;
    }
  }

  .orderInfos {
    flex: 1;
    h2 {
      margin-bottom: 1rem;
    }
  }

  .selectPayment {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    .userInfos {
      width: 100%;
    }

    .selectPayment {
      flex-direction: column;
    }
  }
`

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .addressInfo,
  .paymentInfo {
    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 8px;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .header {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;

      p {
        color: ${({ theme }) => theme.colors["base-subtitle"]};
      }

      span {
        font-size: 0.875rem;
      }
    }
  }

  .inputContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    div {
      display: flex;
      gap: 1rem;
      width: 100%;
    }

    div:first-child input {
      width: auto;
    }

    input,
    select {
      width: 100%;
      padding: 1rem;

      background-color: ${({ theme }) => theme.colors["base-input"]};
      border: 1px solid ${({ theme }) => theme.colors["base-button"]};
      border-radius: 8px;

      &[id="addressNumber"],
      &[id="addressState"] {
        max-width: 20%;
      }
    }
  }

  .paymentInfo .selectPayment {
    margin-top: 2rem;
  }
`

export const OrderInfoBox = styled.div`
  padding: 2.5rem;

  border-radius: 8px 36px;
  background-color: ${({ theme }) => theme.colors["base-card"]};

  .subtotals,
  .totals {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  .subtotals {
    :first-child {
      font-size: 0.875rem;
    }
  }

  .totals {
    font-size: 1.25rem;
    font-weight: bolder;

    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};

  text-transform: uppercase;
  font-weight: bolder;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
