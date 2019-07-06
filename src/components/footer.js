import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import styled from "styled-components"
import { Nav, Text } from "../theme/index"

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

const Footer = ({ siteTitle }) => (
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
          <Image />
        </div>
      </Link>
    </div>
    <Div>
      <Text small style={{ marginRight: "3em" }}>
        William Whatley © {new Date().getFullYear()}, Built with Gatsby.JS
      </Text>
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
