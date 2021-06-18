import styled, { css } from 'styled-components'

interface Container {
  login?: string
}

export const ContainerLogin = styled.div<Container>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const BoxLogin = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: #fff;
    box-shadow: 0px 10px 34px -15px rgb(0 0 0 / 24%);
    border-radius: 5px;
    display: flex;
  `}
`
export const BoxLoginLeft = styled.div`
  ${({ theme }) => css`
    width: 50%;

    padding: 4rem 4rem 10rem;
  `}
`

export const BoxLoginRight = styled.div`
  ${({ theme }) => css`
    width: 50%;
    background: ${theme.colors.sidebar};
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}

  h1 {
    font-size: 3rem;
  }
`

export const LoginTitle = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 50px;
  `}
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1.6rem;
  margin-top: 20px;
`

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.54);
  outline: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 16px;
  max-width: 100%;
  padding: 12px 16px;
  height: 45px;
  width: 100%;
  margin-top: 5px;
`
export const Button = styled.button`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    width: 100%;
    vertical-align: middle;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    background: ${theme.colors.sidebar};
    border: 0;
    color: #fff;
    border: 1px solid #fff;
    margin-top: 20px;
    :disabled {
      background: #f1f1f1;
      color: #555;
    }
  `}
`
