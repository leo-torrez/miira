import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    margin: 0 auto;
    max-width: 1300px;
    border-radius: 5px;
    flex-wrap: wrap;
    margin-top: 50px;
  `}
`

export const WrapperTitle = styled.div`
  width: 100%;
  font-weight: normal;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const Select = styled.select`
  background: transparent;
  border: none;
  font-family: 'Open Sans';
  font-size: 1.7rem;
  margin-left: 5px;
`
export const Title = styled.h1`
  font-weight: normal;
  font-size: 1.7rem;
`

export const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-right: 1.8%;
  }
`
