import styled, { css } from 'styled-components'
export const Container = styled.div`
  ${({ theme }) => css`
    width: calc(100% - 80px);
    height: 100%;
    margin-left: 80px;
    margin-right: auto;
    padding: 0px 0px;
    position: relative;
    z-index: 50;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 20px 0px;
  `}
`
