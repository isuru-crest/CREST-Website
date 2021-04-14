import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import parse from 'html-react-parser';
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import {BlogLayoutWrap, ImageWrap, BlogLayoutTextWrap, ButtonWrap} from './blog-layout.style'

const Area3 = ({titleStyle, textStyle}) => {
    const blogData = useStaticQuery(graphql `
        query BlogQuery {
            landingJson(id: {eq: "blogLayout"}) {
                title
                path
                desc
                id
                image {
                    childImageSharp {
                        fluid(maxWidth: 700, maxHeight: 500, quality: 100) {
                            presentationWidth
                            presentationHeight
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }      
    `);
    const data = blogData.landingJson;
    const imageFluid = data.image.childImageSharp.fluid;

    return (
        <BlogLayoutWrap>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <ImageWrap>
                            <Image
                                alt={data.title}
                                fluid={imageFluid}
                                align="right"
                            />
                        </ImageWrap>
                    </Col>
                    <Col lg={6}>
                        <BlogLayoutTextWrap>
                            <Heading {...titleStyle}>{parse(data.title)}</Heading>
                            <Text {...textStyle}>{parse(data.desc)}</Text>
                            <ButtonWrap>
                                <Button as={Link} to={data.path}>Find out more</Button>
                            </ButtonWrap>
                        </BlogLayoutTextWrap>
                    </Col>
                </Row>
            </Container>
        </BlogLayoutWrap>
    )
}

Area3.propTypes = {
    titleStyle: PropTypes.object
}

Area3.defaultProps = {
    titleStyle: {
        as:"h3",
        child: {
            color: 'primary'
        }
    },
    textStyle: {
        mt: '30px'
    }
}

export default Area3;