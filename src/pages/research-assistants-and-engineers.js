import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import TeamArea from '../containers/leadership/team-area'

const TeamPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Our Team" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Our Team"
        />
        <main className="site-wrapper-reveal">
            <TeamArea
                position="assistants"
            />
            {/* <TeamListArea/> */}
            {/* <ContactArea/> */}
        </main>
        <Footer />
    </Layout>
)

export default TeamPage