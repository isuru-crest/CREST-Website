import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone, MdEmail } from "react-icons/md";
import { Container, Row, Col, Box } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Button from '../../../../components/ui/button'
import Text from '../../../../components/ui/text'
import Image from '../../../../components/image'
import Ratings from '../../../../components/ratings'
import BoxIcon from '../../../../components/box-icon/layout-four'
import Anchor from '../../../../components/ui/anchor'
import { SectionWrap, ImageBox, ContactInfoBox } from './contact.style'

const ContactArea = ({ content, sectionStyle, imgBoxStyle, rightBoxStyle, boxIconStyle, ratingStyle, textStyle }) => {
    const contactData = useStaticQuery(graphql`
        query AboutContactQuery {
            info: site {
                siteMetadata {
                    contact {
                        phone
                        email
                        rating
                        customers
                        clients
                    }
                }
            }
            bgImage: file(relativePath: {eq: "images/bg/contact-bg.jpg"}) {
                childImageSharp {
                    fluid(maxHeight: 520, maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            contactImg: file(relativePath: {eq: "images/contact-image.png"}) {
                childImageSharp {
                    fluid(maxHeight: 572, maxWidth: 587, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                    }
                }
            }
        }
    `)
    const { phone, email, rating, customers, clients } = contactData.info.siteMetadata.contact;
    const bg_image2 = contactData.bgImage.childImageSharp.fluid;
    const {
        frontmatter: { title, author, date, bg_image, format, featured_image, quote_text, quote_author, video_link, categories, research_area, main_content, type },
        excerpt,
        fields: { slug, authorId, dateSlug } } = content;
    return (
        <SectionWrap fluid={bg_image.childImageSharp.fluid}>
            <Container>
                <Row alignitems="center">
                    <Col lg={3}>

                    </Col>
                    <Col lg={9} ml="auto">
                        <ContactInfoBox>
                            <Box textalign="center">
                                <br />
                                <br />
                                {title && <Heading color='white' as="h4">{title}</Heading>}
                                <br />
                                {<Text color='white' as="h6">{main_content}</Text>}
                                {/* <Ratings {...ratingStyle} rating={+rating} /> */}
                                <br />
                                
                                <Button size="large" skin='primary' shape='bullet' to={`/${slug}`} hover="2">View More</Button>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </Box>
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ContactArea.propTypes = {
    sectionStyle: PropTypes.object
}

ContactArea.defaultProps = {
    boxIconStyle: {
        wrapperStyle: {
            alignitems: 'center',
            mt: '55px'
        },
        iconStyle: {
            fontSize: '40px',
            mr: "25px",
            fontweight: 300
        },
        titleStyle: {
            fontSize: '34px',
            color: 'white',
            mb: "0",
            fontweight: 700,
            lineHeight: 1.17,
            responsive: {
                large: {
                    fontSize: "34px"
                }
            }
        }
    },
    ratingStyle: {
        mt: '10px',
        mb: '10px'
    },
    textStyle: {
        fontSize: '18px'
        
    }
}

export default ContactArea;