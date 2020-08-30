import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import TeamMember from '../../../components/team-member/TeamMember'
import { TeamWrapper } from './team-area.style'

const TeamIndex = ({ sectionStyle, headingStyle, headTeamStyle, headTeamRowStyle, teamStyle, executiveStyle, position }) => {
    console.log(position)
    const teamData = useStaticQuery(graphql`
        query {
            allTeamMember: allTeamsJson(filter:  {is_featured: {eq: true}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        projecturl
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fixed(width:200,quality: 100) {
                                        ...GatsbyImageSharpFixed
                                      }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(width:200) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
            headTeamMember: allTeamsJson(filter:  {position: {eq: "faculty"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 672, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(height:150) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
            researchfellows: allTeamsJson(filter: {position: {eq: "researchfellows"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 672, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(height:150) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
            phdstudents: allTeamsJson(filter: {position: {eq: "phdstudents"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 672, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(height:150) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
            assistants: allTeamsJson(filter: {position: {eq: "assistants"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 672, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(height:150) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
            projectstudents: allTeamsJson(filter: {position: {eq: "projectstudents"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 672, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(width:200) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
            collaborators: allTeamsJson(filter: {position: {eq: "collaborators"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 672, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(width:200) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
            alumni: allTeamsJson(filter: {position: {eq: "alumni"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        introduction
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        competencies,
researchtopic,
researchlink,
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 672, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fixed(width:200) {
                                    ...GatsbyImageSharpFixed
                                  }
                            }
                        }
                    }
                }
            }
        }
    `)

    var headMembers = teamData.headTeamMember.edges;
    var researchfellows = teamData.researchfellows.edges;
    var phdstudents = teamData.phdstudents.edges;
    var assistants = teamData.assistants.edges;
    var collaborators = teamData.collaborators.edges;
    var alumni = teamData.alumni.edges;
    // if (position == "researchfellows") {
    //     headMembers = teamData.researchfellows.edges;
    // } else if (position == "phdstudents") {
    //     headMembers = teamData.phdstudents.edges;
    // } else if (position == "assistants") {
    //     headMembers = teamData.assistants.edges;
    // } else if (position == "projectstudents") {
    //     headMembers = teamData.projectstudents.edges;
    // } else if (position == "collaborators") {
    //     headMembers = teamData.collaborators.edges;
    // } else if (position == "alumni") {
    //     headMembers = teamData.alumni.edges;
    // } else if (position == "all") {
    //     headMembers = teamData.allTeamMember.edges;
    // }
    // const headMembers = teamData.headTeamMember.edges;
    // const executives = teamData.executiveMember.edges;
    return (
        <TeamWrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}><span>Faculty Members</span></Heading>
                    </Col>
                </Row>
                <Row {...headTeamRowStyle}>
                    {headMembers && headMembers.map(headMember => (
                        <Col md={3} key={headMember.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...headTeamStyle}
                                imageSrc={headMember.node.image.childImageSharp}
                                name={headMember.node.name}
                                designation={headMember.node.designation}
                                social={headMember.node.socials}
                                link={"/team/faculty-members"}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}><span>Research Fellows</span></Heading>
                    </Col>
                </Row>
                <Row {...headTeamRowStyle}>
                    {researchfellows && researchfellows.map(headMember => (
                        <Col md={3} key={headMember.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...headTeamStyle}
                                imageSrc={headMember.node.image.childImageSharp}
                                name={headMember.node.name}
                                designation={headMember.node.designation}
                                social={headMember.node.socials}
                                link={"/team/research-fellows"}
                            />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}><span>PhD Students</span></Heading>
                    </Col>
                </Row>
                <Row {...headTeamRowStyle}>
                    {phdstudents && phdstudents.map(headMember => (
                        <Col md={4} key={headMember.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...headTeamStyle}
                                imageSrc={headMember.node.image.childImageSharp}
                                name={headMember.node.name}
                                designation={headMember.node.designation}
                                social={headMember.node.socials}
                                link={"/team/phd-students"}
                            />
                        </Col>
                    ))}
                </Row>


                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}><span>Research Assistants and Engineers</span></Heading>
                    </Col>
                </Row>
                <Row {...headTeamRowStyle}>
                    {assistants && assistants.map(headMember => (
                        <Col md={3} key={headMember.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...headTeamStyle}
                                imageSrc={headMember.node.image.childImageSharp}
                                name={headMember.node.name}
                                designation={headMember.node.designation}
                                social={headMember.node.socials}
                                link={"/team/research-assistants-and-engineers"}
                            />
                        </Col>
                    ))}
                </Row>


                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}><span>Collaborators and Associates</span></Heading>
                    </Col>
                </Row>
                <Row {...headTeamRowStyle}>
                    {collaborators && collaborators.map(headMember => (
                        <Col md={12} key={headMember.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...headTeamStyle}
                                imageSrc={headMember.node.image.childImageSharp}
                                name={headMember.node.name}
                                designation={headMember.node.designation}
                                social={headMember.node.socials}
                                link={"/team/collaborators-and-associates"}
                            />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}><span>Alumni</span></Heading>
                    </Col>
                </Row>
                <Row {...headTeamRowStyle}>
                    {alumni && alumni.map(headMember => (
                        <Col md={12} key={headMember.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...headTeamStyle}
                                imageSrc={headMember.node.image.childImageSharp}
                                name={headMember.node.name}
                                designation={headMember.node.designation}
                                social={headMember.node.socials}
                                link={"/team/alumni"}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </TeamWrapper>
    )
}

TeamIndex.propTypes = {
    sectionStyle: PropTypes.object,
    headingStyle: PropTypes.object
}

TeamIndex.defaultProps = {
    headingStyle: {
        as: "h3",
        fontSize: "40px",
        lineHeight: 1.4,
        textalign: "center",
        mb: "85px",
        child: {
            color: "primary"
        },
        responsive: {
            large: {
                fontSize: "34px",
                mb: "70px"
            },
            medium: {
                fontSize: "28px",
                mb: "50px"
            }
        }
    },
    headTeamRowStyle: {
        mb: "36px",
        gutters: {
            lg: 60
        },
        responsive: {
            medium: {
                mb: "26px"
            },
            small: {
                mb: 0
            }
        }
    },
    teamStyle: {
        layout: 2,
        wrapperStyle: {
            mb: "30px"
        },
    },
    headTeamStyle: {
        infoStyle: {
            textalign: "center"
        }
    },
    executiveStyle: {
        infoStyle: {
            textalign: "center"
        },
        nameStyle: {
            fontSize: '18px',
            lineHeight: 1.78
        }
    }
}

export default TeamIndex;