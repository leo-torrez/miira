import styled, { css } from 'styled-components'

interface BackgroundImage {
  image: string
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 300px;
    background: #fff;
    border-radius: 5px;
    flex-wrap: wrap;

    border-radius: 10px;
    cursor: pointer;
    transition: all linear 0.5s;
    box-shadow: ${theme.boxShadow.container};
    &:hover {
      box-shadow: ${theme.boxShadow.container};
    }
  `}
`
export const Image = styled.div<BackgroundImage>`
  width: 100%;
  height: 190px;
  background-image: url(${(props) => props.image});
  background-size: cover;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const Description = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  position: relative;
`

export const Rua = styled.h1`
  width: 100%;
  font-size: 1.6rem;
`
export const Bairro = styled.h2`
  width: 100%;
  font-weight: normal;
  font-size: 1.4rem;
`

export const InfoAdicionais = styled.div`
  width: 100%;
  margin-top: 20px;
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
export const Favoritar = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 10px;
    top: 30px;
    width: 35px;
    height: 35px;
    border: 2px solid #d5d8e0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all linear 0.5s;
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
  ${({ theme }) => css`
    width: 100%;
    text-transform: uppercase;
    text-align: left;
    cursor: pointer;
    margin-top: 15px;

    padding: 10px 10px;

    background: ${theme.colors.sidebar};

    border-radius: 10px;

    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    transition: all linear 0.5s;
    a {
      background: transparent;
      border: none;
      font-family: 'Open Sans';
      font-size: 1.4rem;
      display: flex;
      justify-content: space-between;
      display: flex;
      color: #fff;
      svg {
        width: 20px;
        height: 20px;
        color: #fff;
      }
    }

    &:hover {
      background: #7888e0;
    }
  `}
`
