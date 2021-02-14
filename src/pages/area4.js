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
import AreaArea from '../containers/blog/area-area/area4'
import Button from '../components/ui/button'
import CTA from '../containers/global/cta-area/section-one'

const AreaListLargeImage = ({ pageContext, location, ...restProps }) => {
    const { sectionStyle, headingStyle } = restProps;
    return (
        <Layout location={location}>
            <SEO title="Distributed Ledger and Its Engineering" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Distributed Ledger and Its Engineering"
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col>
                            <h1>Overview</h1>
                            <p>The last decade has witnessed the proliferation of data collection and artificial intelligence in our daily lives. Technological advances under the Internet of Things moniker have extended the scope of data collection beyond our interactions with the digital world to cover real-world phenomena. The next evolution would emerge when intelligent machines can coordinate to carry out complex processes with minimal human involvement. Correctly done, such a machine economy can bring about tremendous productivity and profound impacts on our lives. The machine economy hinges on integration and security. Traditionally, the integration happens via intermediaries such as If This Then That (IFTTT), which resolve discrepancies between services' interfaces and coordinate them according to predefined scenarios. This approach is unsustainable in the machine economy. A better approach would be to let intelligent machines coordinate themselves and make the process transparent, traceable, and verifiable.</p>
                            <p>In recent years, the Distributed Ledger technology (DLT), also known as Blockchain, has emerged as a blueprint for a new way of orchestrating intelligent machines and services in a decentralized, transparent, and verifiable way. Whether DL can make an effective solution depends a great deal on how it is integrated with other systems. Moreover, as DL is a software system itself, the successful utilization of DL also depends on how it is designed and engineered. As any emerging technologies, DLT has its terminologies, characteristics, and constraints that software engineers must carefully consider in order to utilize it effectively.</p>
                            <p>The goal of this research area is to support industries, governments, and societies in leveraging DLT to address current challenges and prepare for the emerging machine economy. </p>
                            
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "50px"}}>
                        <Col>
                            <Button to={`http://dlt.crest-centre.net`} hover="2">Find Out More</Button>
                        </Col>
                    </Row>
                </Section>
            </main>
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