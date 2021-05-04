import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import SubHeader from '../containers/layout/header/header-three/subheader'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-processing/hero-area'
import Workshop from '../containers/global/funfact-area/section-three/icdm-workshop'
import Scope from '../containers/global/funfact-area/section-three/icdm-scope'
import Topics from '../containers/global/funfact-area/section-three/icdm-topics'
import Speaker from '../containers/global/funfact-area/section-three/icdm-speaker'
import Submission from '../containers/global/funfact-area/section-three/icdm-submission'
import Important from '../containers/global/funfact-area/section-three/icdm-important'
import Organisation from '../containers/global/funfact-area/section-three/icdm-organization'
import Contact from '../containers/global/funfact-area/section-three/icdm-contact'
// import ContactArea from '../containers/global/contact-area/contact-three/icdm-contact'
// import ContactArea from '../containers/global/contact-area/contact-three'

const IcdmPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="ICDM2021 Workshop, Data Mining and Machine Learning for Cybersecurity (DMC) workshop" />
        <Header />
        {/* <PageHeader
            pageContext={pageContext}
            location={location}
            title="ICDM2021 Workshop"
        /> */}
        <main className="site-wrapper-reveal">
            <HeroArea />
            <br />
            <SubHeader />
            {/* <AboutArea />
            <FeaturesArea /> */}
            <div id="workshop"><Workshop /></div>

            <div id="scope"><Scope /></div>

            <div id="topics"><Topics /></div>

            <div id="guest"><Speaker /></div>

            <div id="submission"><Submission /></div>
            <div id="important"><Important /></div>

            <div id="organisation"><Organisation /></div>

            <div id="contact"><Contact /></div>

        </main>
        <Footer />
    </Layout>
)

export default IcdmPage