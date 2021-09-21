import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import { SectionWrap2, HeaderWrap } from './section.style'

const Section = ({ markHeading, headingStyle2 }) => {
    return (
        <SectionWrap2>
            <Container>
                <Row style={{ justifyContent: 'space-between', paddingLeft: 20 }}>
                    <img style={{ height: 80 }} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/University-of-Adelaide-Logo.svg/220px-University-of-Adelaide-Logo.svg.png" alt="University of Adelaide"></img>
                    <img style={{ height: 80 }} src="https://www.crest-centre.net/static/light-logo-85061522b6bbb627b9a19b56a1ba43ef.png" alt="CREST"></img>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={{ span: 12, offset: 0 }}>
                        <h1 style={{ textAlign: "center" }}>{"Summer Research Scholarships/Internship Program"}</h1>
                        <br />
                        <h3 style={{ textAlign: "center" }}>{"Centre for Research on Engineering Software Technologies (CREST)"}</h3>
                        <br />
                        <h3 style={{ textAlign: "center", color: "#1F3864" }}>2021-2022</h3>
                        <br />
                        <br />
                        <h5 style={{ color: "#1F3864", fontFamily: "lucida grande" }}>Location: University of Adelaide, Australia</h5>
                        <h5 style={{ color: "#1F3864", fontFamily: "lucida grande" }}>Application deadline: 1st October 2021</h5>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>Are you ready to:</h5>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande", paddingLeft: 10 }}>•	Work on real-world software security projects</h5>
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande", paddingLeft: 10 }}>•	Get hands-on experience in research and development </h5>
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande", paddingLeft: 10 }}>•	Closely work with leading researchers in field </h5>
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande", paddingLeft: 10 }}>•	Be a part of a highly appreciated summer scholarship program</h5>
                        <br />
                        <p style={{ fontSize: 20 }}>The main goal of CREST summer scholarships is to build a talent pipeline of software security engineers. The summer scholarships at CREST are a great opportunity for talented undergraduate and postgraduate students to work in our large scale R&D software security projects and collaborate with leading researchers in the field.</p>
                        <br />
                        <p style={{ fontSize: 20 }}>The summer scholarships are full time and typically begin in late November or early December and range between 10 - 12 weeks in length.</p>
                        <br />
                        <p style={{ fontSize: 20 }}>The selections for the summer scholarships will be based on academic achievement. Some projects may require an interview as well. We will try our best to match you with projects based on your preferences and skills.</p>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>Project details?</h5>
                        <br />
                        <p style={{ fontSize: 20 }}>Project details are available at: </p><a href="https://www.crest-centre.net/summer-internship-2021">https://www.crest-centre.net/summer-internship-2021</a>
                        <br />
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>Are you eligible?</h5>
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	The scholarships are open to the students enrolled in an Australian University, some projects may have preference for the students enrolled in the University of Adelaide.</p>
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	You should be available to undertake a full-time placement for 10-12 weeks over the university summer vacation period. </p>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>How to apply?</h5>
                        <br />
                        <p style={{ fontSize: 20 }}>Submit your application using the following link: </p><a target="_blank" href="https://forms.gle/YJkGWnSBTU64oVh19">https://forms.gle/YJkGWnSBTU64oVh19</a>
                        <br />
                        <br />
                        <p style={{ fontSize: 20 }}>You are required to upload your CV and transcripts and specify the project preferences as a part of the application. You can nominate up to three project preferences.</p>
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>Like to see key highlights of 2020-2021 CREST summer scholarship program?</h5>
                        <br />
                        <p style={{ fontSize: 20 }}>Click on the below link to  know  details of the last year’s summer scholarship program:</p>
                        <a href="https://bit.ly/3gMTNWr" target="_blank" style={{ fontSize: 20, paddingLeft: 10 }}>•	LinkedIn</a>
                        <br />
                        <a href="https://twitter.com/hashtag/CRESTSummerProjects2020?src=hashtag_" target="_blank" style={{ fontSize: 20, paddingLeft: 10 }}>•	Twitter</a>
                        <br />
                        <br />
                        <h5 style={{ color: "#315597", fontFamily: "lucida grande" }}>If you need any more information please contact:</h5>
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	Dr. Asangi Jayatilaka, University of Adelaide </p><a href="mailto:asangi.jayatilaka@adelaide.edu.au" style={{ fontSize: 20, paddingLeft: 30 }}>(asangi.jayatilaka@adelaide.edu.au)</a>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: 20, paddingLeft: 10 }}>•	Dr. Chadni Islam, University of Adelaide  </p><a href="mailto:chadni.islam@adelaide.edu.au" style={{ fontSize: 20, paddingLeft: 30 }}>(chadni.islam@adelaide.edu.au)</a>
                        <br />

                    </Col>
                </Row>
            </Container>
        </SectionWrap2>
    )
}

Section.propTypes = {
    markHeading: PropTypes.object,
    headingStyle: PropTypes.object
}

Section.defaultProps = {
    markHeading: {
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
