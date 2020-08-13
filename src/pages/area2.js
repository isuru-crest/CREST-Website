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
import AreaArea from '../containers/blog/area-area/area2'
import CTA from '../containers/global/cta-area/section-one'

const AreaListLargeImage = ({ pageContext, location, ...restProps }) => {
    const { sectionStyle, headingStyle } = restProps;
    return (
        <Layout location={location}>
            <SEO title="Cyber Security Analytics and Automation" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Cyber Security Analytics and Automation"
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col>
                            <h1>Overview</h1>
                            <p>
                            By the year 2021, cybercrime losses will cost upwards of $6 trillion annually. According to the Capgemini report, 42% of the companies had seen a rise in security incidents. Two out of three organizations are ready to pay top dollars for strengthening cybersecurity with Artificial Intelligence. Cognitive security combines the strengths of artificial intelligence and human intelligence. AI technologies like machine learning and natural language processing enable analysts to respond to threats with greater confidence and speed. Systems that run on AI unlock potential for natural language processing which collects information automatically by combing through articles, news, and studies on cyber threats. This information can give insight into anomalies, cyber-attacks, and prevention strategies.
                            </p>
                            <p>
                            Within the area of AI for cybersecurity, CREST researchers leverage the application of AI such as machine learning, deep learning and natural language processing for automated security data such as logfile, threat intelligence reports, security tool documentation analysis, phishing detection, data theft detection and so on. The aim is to design, develop and deploy AI-based automation in security to minimize and assist the human efforts. As the potential of AI is being explored to boost cyber security, it is also being used by hackers. Hence, the vision is to come up with AI-powered solutions with a mix of traditional methods and AI to stay on top of cyber security strategy with automated security data and documentation analysis.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: "50px"}}>
                        <Col>
                            <h2>Topic Areas</h2>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                            <Sidebar />
                        </Col> */}
                        <Col >
                            {/* <Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading> */}
                            <AreaArea />
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