import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
// import TeamArea from '../containers/leadership/team-area'
import TeamIndex from '../containers/leadership/team-area/TeamIndex'
import TeamListArea from '../containers/leadership/team-list-area'
import ContactArea from '../containers/global/contact-area/contact-one'
import Tabs, { TabHeader, NavItem, TabContent, TabPane } from '../components/ui/tabs/layout-two'
import { Link } from "gatsby"

const TeamPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Our Team" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Our Team"
        />
        <main className="site-wrapper-reveal">
            <br />
            <br />
            <TabHeader>
                <NavItem><Link to="/team/faculty-members">Faculty Members</Link></NavItem>
                <NavItem><Link to="/team/research-fellows">Research Fellows</Link></NavItem>
                <NavItem><Link to="/team/phd-students">PhD Students</Link></NavItem>
                <NavItem><Link to="/team/research-assistants-and-engineers">Research Assistants and Engineers</Link></NavItem>

            </TabHeader>
            <TabHeader>
                <NavItem><Link to="/team/masterstudents">Master Students</Link></NavItem>
                <NavItem><Link to="/team/bachelorstudents">Bachelor Students</Link></NavItem>
                <NavItem><Link to="/student-projects">Project Students</Link></NavItem>

                <NavItem><Link to="/team/collaborators-and-associates">Collaborators and Associates</Link></NavItem>
                <NavItem><Link to="/team/alumni">Alumni</Link></NavItem>
            </TabHeader>
            <TeamIndex
                position="all"
            />
            {/* <TeamListArea/> */}
            {/* <ContactArea/> */}
        </main>
        <Footer />
    </Layout>
)

export default TeamPage