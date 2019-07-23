import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Title = styled.h1`
  color: #47566e;
  font-size: 48px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  line-height: 57px;
  @media (max-width: 920px) {
    font-size: 32px;
    line-height: 48px;
  }
`

export const Subtitle = styled.h2`
  color: ${props => (props.white ? "#fff" : "#47566e")};
  font-size: 26px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  margin-bottom: 6px;
  @media (max-width: 920px) {
    font-size: 22px;
  }
`

export const Text = styled.p`
  color: ${props => (props.white ? "#fff" : "#6c788c")};
  font-size: ${props => (props.small ? "14px" : "18px")};
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  line-height: 31px;
  @media (max-width: 720px) {
    font-size: ${props => (props.small ? "12px" : "16px")};
    line-height: 28px;
  }
  ${props =>
    props.purple &&
    css`
      color: #754d63;
      font-weight: 600;
    `}
`

export const Nav = styled(Link)`
  color: #47566e;
  font-size: 16px;
  margin-right: ${props => (props.right ? "0" : "2.25em")};
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  text-decoration: none;
  padding: 0.25em 0;
  border-bottom: 3px solid transparent;
  @media (max-width: 720px) {
    font-size: 10px;
    padding: ${props => (props.right ? "0" : ".25em")};
  }
`

export const Button = styled.button`
  background: #754d63;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  width: 220px;
  height: 43px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  border: 0px;
  border-radius: 4px;
  margin-top: 1em;
  outline: none;
  transition: 750ms;
  box-shadow: 0 5px 30px rgba(148, 151, 155, 0.6);
  &:hover {
    background: #9d6986;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  ${props =>
    props.item &&
    css`
      width: 75%;
      text-align: left;
      box-shadow: none;
      font-size: 14px;
      font-weight: 400;
      margin-top: 2em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${props => props.background};
      @media (max-width: 920px) {
        width: 100%;
      }
      &:hover {
        background: ${props => props.background};
        box-shadow: none;
      }
    `}
`
