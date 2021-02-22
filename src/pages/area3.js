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
import AreaArea from '../containers/blog/area-area/area3'
import CTA from '../containers/global/cta-area/section-one'

const AreaListLargeImage = ({ pageContext, location, ...restProps }) => {
    const { sectionStyle, headingStyle } = restProps;
    return (
        <Layout location={location}>
            <SEO title="Infrastructure Security and Automation" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Infrastructure Security and Automation"
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col>
                            <h1>Overview</h1>
                            <p>TBA</p>
                        </Col>
                    </Row>
                    {/* <Row style={{paddingTop: "50px"}}>
                        <Col>
                            <h2>Topic Areas</h2>
                        </Col>
                    </Row> */}

                </Section>
            </main>
            <Row>
                        {/* <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                            <Sidebar />
                        </Col> */}
                        <Col >
                            {/* <Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading> */}
                            <AreaArea />
                        </Col>
                    </Row>
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