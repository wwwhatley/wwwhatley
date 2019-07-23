import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
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
    padding: 2em 0 1em 0;
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

const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 385px) {
    display: block;
  }
`
const DesktopWrapper = styled.div`
  display: none;
  @media (min-width: 385px) {
    display: block;
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
      <DesktopWrapper>
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
      </DesktopWrapper>
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
        to="/writing"
        activeStyle={{
          color: "#754D63",
          borderBottom: "3px solid #754D63",
          borderRadius: 2,
        }}
      >
        Writing
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
      <Nav
        right
        to="/schedule"
        activeStyle={{
          color: "#754D63",
          borderBottom: "3px solid #754D63",
          borderRadius: 2,
        }}
      >
        Schedule time
      </Nav>
    </Div>
  </Wrapper>
)

class Header extends Component {
  render() {
    const { type } = this.props
    return (
      <React.Fragment>
        {type === "home" && (
          <div className="fadeDown ">
            <Navigation />
          </div>
        )}
        {type !== "home" && <Navigation />}
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
