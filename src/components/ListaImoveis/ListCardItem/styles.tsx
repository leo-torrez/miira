import styled, { css } from 'styled-components'

interface BackgroundImage {
  image: string
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    height: 200px;
    display: flex;
    max-width: 100%;

    border-top: 1px solid #d1d1d1;
    padding: 20px;
    cursor: pointer;
    transition: all linear 0.5s;
    &:hover {
      background: #f3f3f3;
    }
  `}
`

export const Image = styled.div`
  width: 150px;
  height: 100%;
  background-color: #d1d1d1;
  background-size: cover;
  border-radius: 10px;
`

export const Description = styled.div`
  width: calc(100% - 150px);
  padding: 2px 10px;
  position: relative;
`

export const Rua = styled.h1`
  width: 90%;
  font-size: 1.6rem;
  &::first-letter {
    text-transform: uppercase;
  }
`
export const Bairro = styled.h2`
  width: 100%;
  font-weight: normal;
  font-size: 1.4rem;
  &::first-letter {
    text-transform: uppercase;
  }
`

export const InfoAdicionais = styled.div`
  width: 100%;
  margin-top: 20px;
  &::first-letter {
    text-transform: uppercase;
  }
`

export const Tamanho = styled.div`
  display: flex;
  align-items: center;
  p {
    order: 2;
    font-size: 1.3rem;
  }
  svg {
    order: 1;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`
export const Transito = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  p {
    order: 2;
    font-size: 1.3rem;
    span {
      text-transform: capitalize;
    }
  }
  svg {
    order: 1;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`

export const Favoritar = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 35px;
    height: 35px;
    border: 2px solid #d5d8e0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all linear 0.5s;
    cursor: pointer;
    svg {
      width: 18px;
      height: 18px;
      color: #d5d8e0;
    }

    &:hover {
      border: 2px solid ${theme.colors.sidebar};
      background: ${theme.colors.sidebar};
      svg {
        color: white;
      }
    }
  `}
`

export const Detalhes = styled.div`
  width: 100%;
  text-transform: uppercase;
  text-align: right;
  cursor: pointer;
  margin-top: 15px;

  padding: 15px 10px;
  transition: all linear 0.5s;
  a {
    background: transparent;
    border: none;
    font-family: 'Open Sans';
    font-size: 1.4rem;
    display: flex;
    justify-content: flex-end;
    svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }
  }

  &:hover {
    background: #373c56;
  }
`
