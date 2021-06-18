import styled, { css } from 'styled-components'
export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1300px;
    background: #fff;
    box-shadow: ${theme.boxShadow.container};
    border-radius: 5px;
    flex-wrap: wrap;
  `}
`

export const Title = styled.h1`
  display: flex;
  font-size: 2rem;
  margin: 0 auto;
  max-width: 1300px;
  font-weight: normal;
  margin-bottom: 20px;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin-top: 5px;
    margin-right: 10px;
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
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
  margin-right: 10px;
`

export const Select = styled.select`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.54);
  outline: none;
  width: 100%;
  height: 45px;
  padding: 12px 16px;
  font-size: 16px;
  max-width: 200px;
  margin-right: 10px;
  option {
    padding: 10px 0px;
  }
`

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 600;
    height: 45px;
    padding: 0 16px;
    vertical-align: middle;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    background: ${theme.colors.sidebar};
    border: 0;
    color: #fff;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
    }
  `}
`

export const WrapperFiltros = styled.div`
  width: 100%;
`

export const Filtros = styled.div`
  padding: 0px 20px 20px;
  display: flex;
  justify-content: flex-end;
  h1 {
    font-weight: normal;
    font-size: 1.8rem;
  }
  cursor: pointer;
`

export const IconCollapse = styled.span`
  ${({ theme }) => css`
    margin-top: 5px;
    margin-left: 10px;
    color: ${theme.colors.sidebar};
    svg {
      width: 15px;
    }
  `}
`

export const WrapperContentFilter = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 1rem;
`
