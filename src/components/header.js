import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import styled from "styled-components"
import { Nav } from "../theme/index"

const Wrapper = styled.div`
  background: #fff;
  height: 200px;
  margin: 0 auto;
  max-width: 75%;
  padding: 1.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 920px) {
    width: 95%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    padding: 3em 0;
  }
`

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 920px) {
    margin-top: 2em;
  }
`

export const StyledA = styled.a`
  color: #47566e;
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  text-decoration: none;
  padding: 0.25em 0;
  border-bottom: 3px solid transparent;
  @media (max-width: 720px) {
    font-size: 14px;
  }
`

const Navigation = () => (
  <Wrapper>
    <div>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <div style={{ width: `75px` }}>
          <Logo />
        </div>
      </Link>
    </div>
    <Div>
      <Nav
        to="/"
        activeStyle={{
          color: "#754D63",
          borderBottom: "3px solid #754D63",
          borderRadius: 2,
        }}
      >
        Home
      </Nav>
      <Nav
        to="/work"
        activeStyle={{
          color: "#754D63",
          borderBottom: "3px solid #754D63",
          borderRadius: 2,
        }}
      >
        Work
      </Nav>
      <Nav
        to="/about"
        activeStyle={{
          color: "#754D63",
          borderBottom: "3px solid #754D63",
          borderRadius: 2,
        }}
      >
        About
      </Nav>
      <StyledA href="https://calendly.com/wwwhatley/15min-1">
        Schedule meeting
      </StyledA>
    </Div>
  </Wrapper>
)

const Header = ({ type }) => (
  <React.Fragment>
    {type === "home" && (
      <div className="fadeDown">
        <Navigation />
      </div>
    )}
    {type !== "home" && <Navigation />}
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
