import styled, { css } from 'styled-components'

export const ContainerMap = styled.div`
  ${({ theme }) => css`
    width: calc(100% - 80px);
    height: 100%;
    margin-left: 80px;
    margin-right: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  `}
`
