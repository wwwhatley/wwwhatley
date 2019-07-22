import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Schedule extends Component {
  componentDidMount() {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    )
    head.appendChild(script)
  }
  render() {
    return (
      <Layout type="home">
        <SEO title="Schedule a meeting now | William Whatley" />
        <div
          class="fadeIn calendly-inline-widget"
          data-url="https://calendly.com/wwwhatley/15min"
          style={{ minWidth: 320, height: 630, minHeight: "100%" }}
        ></div>
      </Layout>
    )
  }
}

export default Schedule
