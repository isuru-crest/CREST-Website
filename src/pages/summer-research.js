import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import SubHeader from '../containers/layout/header/header-three/subheader'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-processing/hero-area'
import SummerTitle from '../containers/global/funfact-area/section-three/summer-title'
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
        <SEO title="Summer Research Scholarships/Internship Program " />
        <Header />
        {/* <PageHeader
            pageContext={pageContext}
            location={location}
            title="ICDM2021 Workshop"
        /> */}
        <main className="site-wrapper-reveal">
            {/* <HeroArea /> */}
            <br />
            {/* <SubHeader /> */}
            {/* <AboutArea />
            <FeaturesArea /> */}
            <div id="workshop"><SummerTitle /></div>


        </main>
        <Footer />
    </Layout>
)

export default IcdmPage