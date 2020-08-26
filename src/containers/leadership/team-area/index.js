import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Img from 'gatsby-image'
import Heading from '../../../components/ui/heading'
import TeamMember from '../../../components/team-member'
import Social, { SocialLink } from '../../../components/ui/social'
import {
    TeamWrapper, JobDesc, JobItem, JobTitle, JobType, TeamMemberImage,
    TeamMemberSocialWrap,
    TeamMemberInfo,
    TeamMemberName,
    TeamMemberDesignation,
    Avator
} from './team-area.style'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";

const TeamArea = ({ sectionStyle, headingStyle, headTeamStyle, headTeamRowStyle, teamStyle, executiveStyle, position }) => {
    console.log(position)
    const teamData = useStaticQuery(graphql`
        query {
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

    if (position == "researchfellows") {
        headMembers = teamData.researchfellows.edges;
    } else if (position == "phdstudents") {
        headMembers = teamData.phdstudents.edges;
    } else if (position == "assistants") {
        headMembers = teamData.assistants.edges;
    } else if (position == "projectstudents") {
        headMembers = teamData.projectstudents.edges;
    } else if (position == "collaborators") {
        headMembers = teamData.collaborators.edges;
    } else if (position == "alumni") {
        headMembers = teamData.alumni.edges;
    }

    
    return (
        <TeamWrapper>
            <Container>
                {/* <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}>We hire staffs who know more than what they show <br />of <span> IT services</span></Heading>
                    </Col>
                </Row> */}
                <Col {...headTeamRowStyle}>
                    {headMembers.map((headMember, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <JobItem key={headMember.id} isEven={isEven}>
                                <Row>
                                    <Col lg={3}>


                                        <TeamMemberImage>
                                            <Img
                                                fixed={headMember.node.image.childImageSharp.fixed}
                                            />
                                            {headMember.node.socials && (
                                                <TeamMemberSocialWrap>
                                                    <Social {...headTeamStyle}>
                                                        {headMember.node.socials.facebook && <SocialLink title="Facebook" path={headMember.node.socials.facebook}><TiSocialFacebook /></SocialLink>}
                                                        {headMember.node.socials.twitter && <SocialLink title="Twitter" path={headMember.node.socials.twitter}><TiSocialTwitter /></SocialLink>}
                                                        {headMember.node.socials.instagram && <SocialLink title="Instagram" path={headMember.node.socials.instagram}><TiSocialInstagram /></SocialLink>}
                                                    </Social>
                                                </TeamMemberSocialWrap>
                                            )}
                                        </TeamMemberImage>
                                        <br />
                                        <JobTitle>{headMember.node.name}</JobTitle>
                                        {/* <JobType>{headMember.node.designation}</JobType> */}

                                    </Col>
                                    <Col lg={9}>
                                        <JobDesc>{headMember.node.introduction}</JobDesc>
                                        {headMember.node.competencies != "" && <JobDesc>Competencies: {headMember.node.competencies}</JobDesc>}

                                    </Col>
                                </Row>
                            </JobItem>
                        )
                    })}
                    {/* {headMembers && headMembers.map(headMember => (
                        <Col>
                            <Row md={12} lg={12} key={headMember.node.id}>
                                <TeamMember
                                    {...teamStyle}
                                    {...headTeamStyle}
                                    imageSrc={headMember.node.images.large.childImageSharp}
                                    name={headMember.node.name}
                                    designation={headMember.node.designation}
                                    social={headMember.node.socials}
                                    introduction={headMember.node.introduction}
                                    image={headMember.node.image}
                                />

                            </Row>

                        </Col>


                    ))} */}
                </Col>
                {/* <Row>
                    {executives && executives.map(executive => (
                        <Col lg={3} md={6} key={executive.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...executiveStyle}
                                imageSrc={executive.node.images.large.childImageSharp}
                                name={executive.node.name}
                                designation={executive.node.designation}
                                social={executive.node.socials}
                            />
                        </Col>
                    ))}
                </Row> */}
            </Container>
        </TeamWrapper>
    )
}

TeamArea.propTypes = {
    sectionStyle: PropTypes.object,
    headingStyle: PropTypes.object
}

TeamArea.defaultProps = {
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

export default TeamArea;