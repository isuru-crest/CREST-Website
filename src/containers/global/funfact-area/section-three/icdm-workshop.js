import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Counter from '../../../../components/counter/layout-three'
import {SectionWrap, HeaderWrap} from './section.style'
import parse from 'html-react-parser'

const Section = ({markHeading, headingStyle2}) => {
    const HeroData = useStaticQuery(graphql`
        query ProcessingIcdmQuery {
            indexProcessingJson(id: {eq: "icdm-workshop"}) {
                title
                subtitle
                subtitle2
            }
        }
    `)
    const { title, subtitle, subtitle2} = HeroData.indexProcessingJson;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={{span: 10, offset: 1}}>
                        <HeaderWrap>
                            {/* <Heading {...markHeading}>{title}</Heading> */}
                            <Heading  {...headingStyle2}>{title}</Heading>
                            <br />
                        </HeaderWrap>
                        <p>{parse(subtitle)}</p>
                        <p>{parse(subtitle2)}</p>
                    </Col>

                </Row>
            </Container>
        </SectionWrap>
    )
}
  
Section.propTypes = {
    markHeading: PropTypes.object,
    headingStyle: PropTypes.object
}
 
Section.defaultProps = {
    markHeading:{
        layout: 'highlight',
    },
    headingStyle: {
        as: 'h3',
        mt: '25px',
        fontSize: '38px',
        child: {
            color: 'primary'
        },
        responsive: {
            large: {
                fontSize: '30px'
            },
            small: {
                fontSize: '24px'
            }
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
}


export default Section;