import React from 'react'
import PropTypes from 'prop-types'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import Section, { Row, Col } from '../components/ui/wrapper'
import Heading from '../components/ui/heading'
import Sidebar from '../containers/blog/sidebar'
import AreaArea from '../containers/blog/area-area/area1'
import CTA from '../containers/global/cta-area/section-one'

const AreaListLargeImage = ({ pageContext, location, ...restProps }) => {
    const { sectionStyle, headingStyle } = restProps;
    return (
        <Layout location={location}>
            <SEO title="Engineering Secure Software-intensive Systems: Principles and Practices" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Engineering Secure Software-intensive Systems: Principles and Practices"
            />

            {/* <Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading> */}
            <AreaArea />

            <Footer />
        </Layout>
    )
}


AreaListLargeImage.propTypes = {
    sectionStyle: PropTypes.object
}

AreaListLargeImage.defaultProps = {
    sectionStyle: {
        pt: '89px',
        pb: '100px',
        responsive: {
            medium: {
                pt: '72px',
                pb: '80px'
            },
            small: {
                pt: '53px',
                pb: '60px'
            }
        }
    },
    headingStyle: {
        as: 'h3',
        mb: '70px',
        textalign: 'center',
        child: {
            color: 'primary'
        },
        responsive: {
            medium: {
                mb: '50px'
            }
        }
    }
}

export default AreaListLargeImage;