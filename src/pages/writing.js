import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import CTA from "../components/cta"
import Posts from "../components/posts"

const Writing = () => (
  <Layout type="about">
    <SEO title="Work" />

    <div className="fadeIn">
      <TitleHeader
        title="Writing"
        text="Collectively, I've received over 100,000 unique views through various channels for my writings. Although I try to set goals to publish my thoughts more often, I'm not always consistent with the follow-through. This is a small sample of the work that I've published."
        type="writing"
      />
      <Posts />
      <CTA />
    </div>
  </Layout>
)

export default Writing
