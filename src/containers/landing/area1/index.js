import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import parse from 'html-react-parser';
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import { CaseStudyWrap, ImageWrap, CaseStudyTextWrap, ButtonWrap } from './case-study.style'

const Area1 = ({ titleStyle, textStyle }) => {
    const caseData = useStaticQuery(graphql`
    query Area1Query {
        landingJson(id: {eq: "area1"}) {
          title
          path
          desc
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
    const data = caseData.landingJson;
    const imageFluid = data.image.childImageSharp.fluid;

    return (
        <CaseStudyWrap>
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
                        <CaseStudyTextWrap>
                            <Heading {...titleStyle}>{parse(data.title)}</Heading>
                            <Text {...textStyle}>{parse(data.desc)}</Text>
                            <ButtonWrap>
                                <Button as={Link} to={data.path}>Find out more</Button>
                            </ButtonWrap>
                        </CaseStudyTextWrap>
                    </Col>
                </Row>
            </Container>
        </CaseStudyWrap>
    )
}

Area1.propTypes = {
    titleStyle: PropTypes.object
}

Area1.defaultProps = {
    titleStyle: {
        as: "h3",
        child: {
            color: 'primary'
        }
    },
    textStyle: {
        mt: '30px'
    }
}

export default Area1;