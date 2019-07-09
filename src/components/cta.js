import React, { Component } from "react"
import styled from "styled-components"
import { Button, Subtitle, Text } from "../theme/index"

const Wrapper = styled.div`
  margin: 4em auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 920px) {
    max-width: 75%;
  }
  @media (max-width: 720px) {
    max-width: 100%;
  }
`

export default class Header extends Component {
  componentWillMount() {
    const script = document.createElement("script")

    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true

    document.body.appendChild(script)
  }

  handleClick = () => {
    "Calendly.initPopupWidget({url: 'https://calendly.com/wwwhatley/15min-1'});"
    return false
  }
  render() {
    return (
      <Wrapper>
        <Subtitle>Want to discuss your project?</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>

        <Button onClick={this.handleClick} type="button">
          Schedule
        </Button>
      </Wrapper>
    )
  }
}
