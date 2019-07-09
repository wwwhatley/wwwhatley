import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import styled from "styled-components"
import { Nav, Text } from "../theme/index"
import { FaGithub, FaInstagram, FaMediumM, FaLinkedinIn } from "react-icons/fa"

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
    flex-direction: column;
    justify-content: center;
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

const Footer = () => (
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
      <Text small style={{ marginRight: "2em" }}>
        William Whatley © {new Date().getFullYear()}
      </Text>
      <a
        href="https://github.com/wwwhatley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          style={{
            color: "#47566e",
            marginRight: ".5em",
          }}
        />
      </a>
      <a
        href="https://www.instagram.com/wwwhatley/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          style={{
            color: "#47566e",
            marginRight: ".5em",
          }}
        />
      </a>
      <a
        href="https://medium.com/@wwwhatley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMediumM
          style={{
            color: "#47566e",
            marginRight: ".5em",
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/william-whatley-9b141b148/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn
          style={{
            color: "#47566e",
            marginRight: "2em",
          }}
        />
      </a>
      <Nav to="/">Schedule meeting</Nav>
    </Div>
  </Wrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
