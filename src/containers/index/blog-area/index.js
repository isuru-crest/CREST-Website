import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Blog from '../../../components/blog/layout-one'
import RecentPostList from '../../blog/recent-post-list'
import { BlogWrapper, LeftBox, RecentBlogWrap, FeaturedBlogWrap } from './blog-area.style'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterOnAirButton } from "react-twitter-embed";
const BlogArea = props => {
    const blogData = useStaticQuery(graphql`
        query InfoTechnoBlogQueryData{
            sectionData: indexInfotechnoJson(id: {eq: "infotechno-blog-content"}) {
                title
                subtitle
            }
            featuredBlog: allMarkdownRemark(filter: {frontmatter:  {type: {eq: "blog"}}}, limit: 4) {
                edges {
                  node {
                    fields{
                        slug
                        dateSlug
                    }
                    frontmatter {
                      title
                      date(formatString: "LL")
                      format
                      quote_text
                      quote_author
                      video_link
                      featured_image {
                        childImageSharp {
                          fluid(maxWidth: 550, maxHeight: 340, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                          }
                        }
                      }
                    }
                    excerpt(format: PLAIN)
                  }
                }
            }
            file(relativePath: {eq: "images/bg/mitech-landing-header-preview-bg.png"}) {
                childImageSharp {
                    fluid(maxWidth: 656, maxHeight: 595, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
    const blogSecData = blogData.sectionData;
    const featuredBlogs = blogData.featuredBlog.edges;
    const bgImage = blogData.file.childImageSharp.fluid
    return (
        <BlogWrapper  fluid={bgImage}>
            <Container>
                <Row>
                    <Col lg={4}>
                        <LeftBox>
                            <SectionTitle
                                align="left"
                                title={blogSecData.title}
                                subtitle={blogSecData.subtitle}
                            />
                            <RecentBlogWrap>
                                <RecentPostList />
                            </RecentBlogWrap>
                        </LeftBox>
                    </Col>
                    <Col lg={8}>
                        <Row>
                        <Col md={6} sm={12}>
                          <TwitterTweetEmbed 
                            tweetId={'1408340752967421953'}/>
                        </Col>
                        <Col md={6} sm={12}>
                          <TwitterTweetEmbed 
                            tweetId={'1407696490684764167'}/>
                        </Col>
                            {/* {featuredBlogs && featuredBlogs.map(featuredBlog => (
                                <Col md={6} key={featuredBlog.node.fields.slug}>
                                    <FeaturedBlogWrap>
                                        <Blog content={featuredBlog.node} />
                                    </FeaturedBlogWrap>
                                </Col>
                            ))} */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </BlogWrapper>
    )
}

export default BlogArea;