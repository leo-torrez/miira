import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    height: calc(100vh - 215px);

    display: flex;
    margin: 0 auto;
    max-width: 1300px;

    margin-top: 30px;
  `}
`

export const Filtros = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.sidebar};
    border-radius: 5px;
    position: sticky;
    top: 0px;
    z-index: 999;
    ul {
      list-style: none;
      display: flex;

      position: relative;
      li {
        padding: 15px;
        font-size: 1.4rem;
        color: white;
        border-right: 1px solid rgb(139 156 247);
        div {
          position: absolute;
          top: 46px;
          left: 0px;
          bottom: 0px;
          width: 100%;
          background: ${theme.colors.sidebar};
          padding: 15px;
          min-height: 200px;
          z-index: 10;
        }
      }
    }
  `}
`

export const WrapperListItem = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: #fff;
    box-shadow: ${theme.boxShadow.container};
    border-radius: 5px;
    margin-top: 5px;
  `}
`
export const LeftColumn = styled.div`
  width: 50%;
  max-height: calc(100vh - 215px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }
`

export const RightColumn = styled.div`
  width: 50%;
`
