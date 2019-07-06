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
`

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Header = ({ siteTitle }) => (
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
      <Nav to="/">Schedule meeting</Nav>
    </Div>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
