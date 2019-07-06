import React from "react"
import styled from "styled-components"
import { Title, Text } from "../theme/index"
import { FaAngleRight } from "react-icons/fa"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: 2em;
`

const Div = styled.div`
  display: flex;
  align-content: center;
  height: 25px;
  margin-top: 1.5em;
`

export default function TitleHeader({ title, text }) {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <Wrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Div>
          <Text purple>View my work</Text>
          <FaAngleRight
            style={{
              color: "#754d63",
              height: "28px",
              width: "16px",
              marginLeft: ".5em",
            }}
          />
        </Div>
      </Wrapper>
    </div>
  )
}
