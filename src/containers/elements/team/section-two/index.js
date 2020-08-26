import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Tabs, { TabHeader, NavItem, TabContent, TabPane } from '../../../../components/ui/tabs/layout-two'
import { SectionWrap } from './style'
import { TeamArea } from '../../../../containers/leadership/team-area'

const TabsSection = () => {
    return (
        <SectionWrap>
            <Container>
                {/* <Row>
                    <Col lg={12}>
                        <Heading mb="40px" textalign="center">Tab Style 02</Heading>
                    </Col>
                </Row> */}
                <Row>
                    <Col lg={12}>
                        <Tabs defaultActiveKey="our-mission-tab">
                            <TabHeader>
                                <NavItem>Our Mission</NavItem>
                                <NavItem>Our Services</NavItem>
                                <NavItem>Technology Partners</NavItem>
                                <NavItem>Our Awards</NavItem>
                            </TabHeader>
                            <TabContent pt="50px">
                                <TabPane eventKey="our-mission-tab">

                                </TabPane>
                                <TabPane eventKey="our-services-tab">
                                    <Heading as="h4" mb="20px">New multiple site connectivity</Heading>
                                    <p>Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.</p>
                                    <p>Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.</p>
                                </TabPane>
                                <TabPane eventKey="partners-tab">
                                    <Heading as="h4" mb="20px">IT Security & Software</Heading>
                                    <p>Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.</p>
                                    <p>Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.</p>
                                </TabPane>
                                <TabPane eventKey="our-awards-tab">
                                    <Heading as="h4" mb="20px">Weak hosted capability</Heading>
                                    <p>This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.</p>
                                    <p>This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.</p>
                                </TabPane>
                            </TabContent>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default TabsSection
