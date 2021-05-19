import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import { SectionWrap, JobList, JobItem, JobTitle, JobType, JobDesc, JobButton } from './style'

const JobsArea = () => {
    const getJobsData = useStaticQuery(graphql`
        query GET_JOBS_DATA {
            intro: careersJson(id: {eq: "careers-section-intro"}) {
                title
            }
            jobs: careersJson(id: {eq: "our-open-jobs"}) {
                jobs {
                    id
                    title
                    type
                    description
                    link
                }
            }
            closedjobs: careersJson(id: {eq: "our-closed-jobs"}) {
                closedjobs {
                    id
                    title
                    type
                    description
                    link
                }
            }
        }      
    `);
    const { intro: { title }, jobs: { jobs }, closedjobs: { closedjobs } } = getJobsData

    return (
        <SectionWrap>
            <Container>
                {jobs[0].id != "null" && <div>
                    <Row justify="center">
                        <Col lg={7}>
                            <SectionTitle title={title} />
                        </Col>
                    </Row>
                    <Row justify="left">
                        <SectionTitle title={"Current Recruiting"} />
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <JobList>
                                {jobs.map((job, i) => {
                                    const isEven = i % 2 === 0;
                                    return (
                                        <JobItem key={job.id} isEven={isEven}>
                                            <Row>
                                                <Col lg={3}>
                                                    <JobTitle>{job.title}</JobTitle>
                                                    <JobType>{job.type}</JobType>
                                                </Col>
                                                <Col lg={6}>
                                                    <JobDesc>{job.description}</JobDesc>
                                                </Col>
                                                <Col lg={3}>
                                                    <JobButton>
                                                        <Button to={job.link} varient="outlined" bordercolor="#ddd">Detail</Button>
                                                    </JobButton>
                                                </Col>
                                            </Row>
                                        </JobItem>
                                    )
                                })}
                            </JobList>
                        </Col>
                    </Row>
                </div>}


                <Row justify="left">
                    <SectionTitle title={"Closed Positions"} />
                </Row>
                <Row>
                    <Col lg={12}>
                        <JobList>
                            {closedjobs.map((job, i) => {
                                const isEven = i % 2 === 0;
                                return (
                                    <JobItem key={job.id} isEven={isEven}>
                                        <Row>
                                            <Col lg={3}>
                                                <JobTitle>{job.title}</JobTitle>
                                                <JobType>{job.type}</JobType>
                                            </Col>
                                            <Col lg={6}>
                                                <JobDesc>{job.description}</JobDesc>
                                            </Col>
                                            <Col lg={3}>
                                                <JobButton>
                                                    <Button to={job.link} varient="outlined" bordercolor="#ddd">Detail</Button>
                                                </JobButton>
                                            </Col>
                                        </Row>
                                    </JobItem>
                                )
                            })}
                        </JobList>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default JobsArea
