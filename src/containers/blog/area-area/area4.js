import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Blog from '../../../components/blog/area'
import Pagination from '../../../components/blog/pagination'
import { BlogWrapper, BlogBox } from './blog-area.style'

const AreaArea4 = ({ blogBoxStyle }) => {
    const AreaQuery = useStaticQuery(graphql`
        query ListArea4Query {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {frontmatter: {research_area: {eq: 4}}}
                ) {
                totalCount
                edges {
                    node {
                        frontmatter {
                            categories
                            title
                            author {
                                name
                                image {
                                    childImageSharp {
                                        fixed(width: 32, height: 32, quality: 100) {
                                            ...GatsbyImageSharpFixed_withWebp
                                        }
                                    }
                                }
                            }
                            format
                            quote_text
                            quote_author
                            video_link
                            research_area
                            main_content
                            date(formatString: "LL")
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 770, maxHeight: 420, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationHeight
                                        presentationWidth
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        excerpt
                    }
                }
            }
        }      
    `)
    const blogs = AreaQuery.allMarkdownRemark.edges;
    const { totalCount } = AreaQuery.allMarkdownRemark;
    const postsPerPage = 6;
    const numberOfPages = Math.ceil(totalCount / postsPerPage);
    return (
        <Fragment>
            <BlogWrapper>
                {blogs.map(blog => (

                    <BlogBox key={blog.node.fields.slug}>
                        <Blog content={blog.node} />
                    </BlogBox>
                ))}
            </BlogWrapper>
            {/* <Pagination
                rootPage="/blog"
                currentPage={1}
                numberOfPages={numberOfPages}
            /> */}
        </Fragment>
    )
}


export default AreaArea4;