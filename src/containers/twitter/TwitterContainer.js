import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { FaCalendarAlt, FaCommentDots, FaQuoteRight } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-three'
import Footer from '../../containers/layout/footer/footer-one'
import Section, { Box, Row, Col } from '../../components/ui/wrapper'
import SEO from "../../components/seo"
import PageHeader from '../../components/pageheader'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import Image from '../../components/image'
import Social, { SocialLink } from '../../components/ui/social'
import PostNav from '../../components/post-nav/layout-two'
import Categories from '../../components/blog/categories'
import Tags from '../../components/blog/tags'
import AuthorMeta from '../../components/blog/author-meta'
import BlogMeta from '../../components/blog/blog-meta'
import SocialShare from '../../components/blog/social-share'
import VideoThumb from '../../components/blog/video-thumb'
import ModalVideo from '../../components/ui/modal-video'
import Comment from '../../components/blog/comment'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterOnAirButton } from "react-twitter-embed";


const TwitterContainer = ({ data, pageContext, location, ...restProps }) => {
    return (
            <main className="twitter-container">
                <Section>
                <Row>
                        <Col md={4} sm={12}>
                          <TwitterTweetEmbed 
                            tweetId={'1361465101505548294'}/>

                        </Col>
                        <Col md={4} sm={12}>
                          <TwitterTweetEmbed 
                            tweetId={'1360113151014883328'}/>
                        </Col>
                        <Col md={4} sm={12}>
                          <TwitterTweetEmbed 
                            tweetId={'1359849718889672704'}/>
                        </Col>
                    </Row>
                </Section>
            </main>
    )
}

TwitterContainer.propTypes = {
    sectionStyle: PropTypes.object
}

TwitterContainer.defaultProps = {
    sectionStyle: {
        pt: '120px',
        pb: '120px',
        responsive: {
            large: {
                pt: '100px',
                pb: '100px'
            },
            medium: {
                pt: '80px',
                pb: '80px'
            },
            small: {
                pt: '60px',
                pb: '60px',
                fullwidth: true
            }
        }
    },
    titleStyle: {
        as: 'h1',
        fontSize: '40px',
        textalign: 'center',
        mb: '15px',
        wordwrap: 'break-word',
        responsive: {
            medium: {
                fontSize: '35px'
            },
            small: {
                fontSize: '25px'
            }
        }
    },
    headerMetaStyle: {
        mt: '10px',
        mr: '20px'
    },
    authorStyles: {
        authorSocial: {
            fontSize: '13px',
            color: '#333',
            space: 14
        },
        authorDesc: {
            mt: '15px',
            fontSize: '15px',
            color: '#333'
        }
    }
}

export const postQuery = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            fields {
                dateSlug
                id
            }
            frontmatter {
                title
                categories
                date(formatString: "LL")
                tags
                type
                author1
                author1_image {
                    childImageSharp {
                      fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
            html
        }
    }
`;

export default TwitterContainer;