import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdEmail } from "react-icons/md";
import { Container, Row, Col, Box } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import { SectionWrap, ContactInfoBox, HeaderWrap } from './contact.style'

const ContactArea = ({
    headingStyle,
    descStyle,
    conactInfoStyles: {
        titleStyle,
        phoneAnchorStyle,
        btnStyle
    }
}) => {
    const contactQueryData = useStaticQuery(graphql `
    query {
        sectionBg: file(relativePath: {eq: "images/bg/contact-section-bg-2.png"}) {
            childImageSharp {
              fluid(maxWidth: 1192, maxHeight: 630, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        contactData: site {
            siteMetadata {
              contact {
                phone
              }
            }
        }
    } 
`);
const imageData = contactQueryData.sectionBg.childImageSharp.fluid;
    return (
        <SectionWrap fluid={imageData}>
            <Container>
                {/* <Row>
                    <HeaderWrap>
                        <Heading {...headingStyle}>Contact</Heading>
                    </HeaderWrap>

                </Row> */}
                <Row alignitems="center">
                    <Col lg={6}>
                        <ContactInfoBox>
                            <MdEmail className="icon" />
                            <Heading {...phoneAnchorStyle}>{"Muhammad Ali Babar"}</Heading>
                            <Heading {...titleStyle}>School of Computer Science, Faculty of Engineering, Computer and Mathematical Sciences, The University of Adelaide</Heading>
                            <Heading {...titleStyle}>Floor/Room 4 54, Ingkarni Wardli, North Terrace, Adelaide 5000, Australia</Heading>
                            <Heading {...titleStyle}>Email: <a href="mailto:ali.babar@adelaide.edu.au">ali.babar@adelaide.edu.au</a></Heading>
                            {/* <Button {...btnStyle}>Contact Us</Button> */}
                        </ContactInfoBox>
                    </Col>
                    <Col lg={6}>
                        <ContactInfoBox>
                            <MdEmail className="icon" />
                            <Heading {...phoneAnchorStyle}>{"Ranran Bian"}</Heading>
                            <Heading {...titleStyle}>School of Computer Science, Faculty of Engineering, Computer and Mathematical Sciences, The University of Adelaide</Heading>
                            <Heading {...titleStyle}>Floor/Room 5 48D, Ingkarni Wardli, North Terrace, Adelaide 5000, Australia</Heading>
                            <Heading {...titleStyle}>Email: <a href="mailto:monica.bian@adelaide.edu.au">monica.bian@adelaide.edu.au</a></Heading>
                            {/* <Button {...btnStyle}>Contact Us</Button> */}
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ContactArea.propTypes = {
    headingStyle: PropTypes.object
}

ContactArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        position: 'relative',
        pl: '34px',
        fontweight: 600,
        lineHeight: 1.4,
        color: '#fff',
        before: {
            top: '50%',
            width: '4px',
            height: '94%',
            bgColor: 'secondary',
            transform: 'translateY(-50%)'
        }
    },
    headingStyle2: {
        as: 'h3',
        position: 'relative',
        pl: '34px',
        fontweight: 600,
        lineHeight: 1.4,
        color: '#000',
        before: {
            top: '50%',
            width: '4px',
            height: '94%',
            bgColor: 'secondary',
            transform: 'translateY(-50%)'
        }
    },
    descStyle: {
        mt: '15px',
        fontSize: '18px',
        color: '#fff',
        ml: '34px'
    },
    conactInfoStyles: {
        titleStyle: {
            as: 'h6',
            fontSize: '15px',
            color: '#fff',
            letterspacing: '2px',
            mb: '10px',
            mt: '10px',
        },
        phoneAnchorStyle: {
            color: 'secondary',
            hover: {
                layout: 2,
                color: 'secondary'
            }
        },
        btnStyle: {
            mt: '20px',
            skin: 'light',
            minwidth: '230px',
            color: 'primary',
            hover: {
                bgColor: 'secondary'
            }
        }
    }
}

export default ContactArea;