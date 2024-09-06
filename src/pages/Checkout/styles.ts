import styled from "styled-components"

export const CheckoutContainer = styled.main`
  width: 100%;
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
`

export const CheckoutContent = styled.div`
  width: 75rem;
  margin: 0 auto;
  padding: 5rem 1rem;

  display: flex;
  gap: 2rem;

  .userInfos {
    width: 60%;
  }

  .orderInfos {
    flex: 1;
  }

  .selectPayment {
    display: flex;
    gap: 1rem;
  }
`

export const FormUserInformation = styled.form`
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

    input {
      width: 100%;
      padding: 1rem;

      background-color: ${({ theme }) => theme.colors["base-input"]};
      border: 1px solid ${({ theme }) => theme.colors["base-button"]};
      border-radius: 8px;

      &[id="addressNumber"] {
        max-width: 30%;
      }
    }
  }

  .paymentInfo .selectPayment {
    margin-top: 2rem;
  }
`
