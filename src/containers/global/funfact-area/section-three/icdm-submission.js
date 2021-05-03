import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import {SectionWrap, HeaderWrap} from './section.style'

const Section = ({markHeading, headingStyle2}) => {
    const HeroData = useStaticQuery(graphql`
        query ProcessingIcdmSubmissionQuery {
            indexProcessingJson(id: {eq: "icdm-submission"}) {
                title
                subtitle
                item1
                item2
                item3
            }
        }
    `)
    const { title, subtitle, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, ps} = HeroData.indexProcessingJson;
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
                        <p>{item1}</p>
                        <p>{item2}</p>
                        <p>{item3}</p>
                        <br />
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
