import styled, { css } from 'styled-components'
import AVATAR from 'assets/images/avatar.png'
export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 80px;
    background-color: ${theme.colors.sidebar};
    box-shadow: none;
    z-index: 35;
    transition: border-radius 0.3s;
    box-shadow: ${theme.boxShadow.container};
  `}
`

export const Logo = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    color: #fff;
    font-size: 3rem;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }
`

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 60px;
`

export const Li = styled.li`
  display: flex;
  color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 25px;
  cursor: pointer;
  transition: all linear 0.5s;
  svg {
    width: 25px;
    height: 25px;
  }
  &:hover {
    background: #7888e0;
    color: white;
  }
`

export const User = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -25px;
  background: #fff;
  width: 50px;
  height: 50px;
  background-image: url(${AVATAR});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`
