import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import {SectionWrap, HeaderWrap} from './section.style'
import parse from 'html-react-parser'

const Section = ({markHeading, headingStyle2}) => {
    const HeroData = useStaticQuery(graphql`
        query ProcessingIcdmTopicsQuery {
            indexProcessingJson(id: {eq: "icdm-topics"}) {
                title
                subtitle
                item1
                item2
                item3
                item4
                item5
                item6
                item7
                item8
                item9
                item10
                ps
                new1
                new2
                content1
                content2
            }
        }
    `)
    const { title, subtitle, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, ps, new1, new2, content1, content2} = HeroData.indexProcessingJson;
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
                        <p>{subtitle}</p>
                        <p>{item1}</p>
                        <p>{item2}</p>
                        <p>{item3}</p>
                        <p>{item4}</p>
                        <p>{item5}</p>
                        <p>{item6}</p>
                        <p>{item7}</p>
                        <p>{item8}</p>
                        <p>{item9}</p>
                        <p>{item10}</p>
                        <br />
                        <p>{ps}</p>
                        <br />
                        <p>{new1}</p>
                        <p>{parse(content1)}</p>
                        <p>{new2}</p>
                        <p>{parse(content2)}</p>
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
