import styled, { css } from 'styled-components'

export const ContainerFull = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.full};
    margin-left: auto;
    margin-right: auto;
    padding-left: 0px;
    padding-right: 0px;
    height: 100%;
  `}
`
