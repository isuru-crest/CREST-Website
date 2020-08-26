import React from 'react'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import SectionTwo from '../containers/elements/team/section-two'

const TabsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Our Team" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Our Team"
            />
            <main className="site-wrapper-reveal">
                <SectionTwo />
            </main>
            <Footer />
        </Layout>
    )
}

export default TabsPage
