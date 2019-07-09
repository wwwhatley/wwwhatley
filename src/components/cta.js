import React, { Component } from "react"
import styled from "styled-components"
import { Button, Subtitle, Text } from "../theme/index"

const Wrapper = styled.div`
  margin: 6em auto 4em auto;
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
          I'm currently open and accepting opportunities to discuss new project
          work. If you're seeking professional services, I would love to meet
          and see if I'm able to provide the value you need, while making sure
          that our values and goals are aligned.
        </Text>

        <Button onClick={this.handleClick} type="button">
          Schedule
        </Button>
      </Wrapper>
    )
  }
}
