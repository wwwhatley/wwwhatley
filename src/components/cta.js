import React, { Component } from "react"
import styled from "styled-components"
import { Button, Subtitle, Text } from "../theme/index"
import { Link } from "gatsby"

const Wrapper = styled.div`
  margin: 6em auto 4em auto;
  width: 50%;
  max-width: 730px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 920px) {
    width: 75%;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`

export default class Header extends Component {
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
        <Link to="schedule">
          <Button type="button">Schedule</Button>
        </Link>
      </Wrapper>
    )
  }
}
