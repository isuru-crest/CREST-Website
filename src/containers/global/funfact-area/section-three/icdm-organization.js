import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import {SectionWrap, HeaderWrap} from './section.style'

const Section = ({markHeading, headingStyle2}) => {
    const HeroData = useStaticQuery(graphql`
        query ProcessingIcdmOrangisationQuery {
            indexProcessingJson(id: {eq: "icdm-organisation"}) {
                title
                subtitle
                subtitle2
                item1
                item2
                item21
                item22
                item23
                item24
                item3
                item31
                item32
                item33
                item34
                item4
                item5
                item51
                item52
                item53
                item54
                item55
                item56
                item57
                item6
                item7
                item8
                item9
                item10
                item11
                item12
                ps
            }
        }
    `)
    const { title, subtitle, subtitle2, item1, item2, item21, item22, item23, item24, item3, item31, item32, item33, item34, item4, item5, item51, item52, item53, item54, item55, item56, item57, item6, item7, item8, item9, item10, item11, item12, ps} = HeroData.indexProcessingJson;
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
                        <h5>{subtitle}</h5>
                        <br />
                        <p>{item1}</p>
                        <p>{item2}</p>
                        <p>{item31}</p>
                        <p>{item32}</p>
                        <p>{item3}</p>
                        <p>{item4}</p>
                        <p>{item5}</p>
                        <p>{item33}</p>
                        <p>{item34}</p>
                        <br />
                        <h5>{subtitle2}</h5>
                        <br />
                        <p>{item6}</p>
                        <p>{item7}</p>
                        <p>{item21}</p>
                        <p>{item22}</p>
                        <p>{item23}</p>
                        <p>{item24}</p>
                        <p>{item8}</p>
                        <p>{item9}</p>
                        <p>{item10}</p>
                        <p>{item51}</p>
                        <p>{item52}</p>
                        <p>{item53}</p>
                        <p>{item54}</p>
                        <p>{item55}</p>
                        <p>{item56}</p>
                        <p>{item57}</p>
                        <p>{item11}</p>
                        <p>{item12}</p>
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
