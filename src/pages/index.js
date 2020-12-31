import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index/hero-area'
import BlogArea from '../containers/index/blog-area'
import Area1 from '../containers/landing/area1'
import Area4 from '../containers/landing/area4'
import Area2 from '../containers/landing/area2'
import Area3 from '../containers/landing/area3'
import ClientsArea from '../containers/global/clients-area'
import CTAArea from '../containers/global/cta-area/section-two'
import CaseStudyArea from '../containers/index-appointment/case-study-area'
// import CaseStudyArea from '../containers/index-appointment/case-study-area'
// console.log("hasdasdsa")
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Centre for Research on Engineering Software Technologies" />
    <Header transparent />
    <main className="site-wrapper-reveal">
    <HeroArea />
    <Area1/>
    <Area2/>
    <Area3/>
    <Area4/>
    <BlogArea />
    <CaseStudyArea />
    
    <BlogArea />
    <CTAArea/>
    <ClientsArea />
    </main>
    <Footer />
  </Layout>
)

export default IndexPage
