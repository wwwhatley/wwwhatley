import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Title = styled.h1`
  color: #47566e;
  font-size: 48px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  line-height: 57px;
`

export const Text = styled.p`
  color: #6c788c;
  font-size: 18px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  line-height: 31px;
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
  margin-right: 2.25em;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  text-decoration: none;
  padding: 0.25em 0;
`
