import React from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import NavBar, { NavItem, NavLink, Submenu, Megamenu } from '../../ui/navbar'
import { MainMenuWrap } from './mainmenu.style'
import Heading from '../../ui/heading'

export const MainMenu = ({ headingStyle, menuData, ...props }) => {
    const menuarr = menuData;
    return (
        <MainMenuWrap {...props}>
            <NavBar>
                <NavItem key={"workshop"}>
                    <NavLink path={"#workshop"}>
                        <span>Workshop</span>
                    </NavLink>
                </NavItem>
                <NavItem key={"scope"}>
                    <NavLink path={"#scope"}>
                        <span>Scope</span>
                    </NavLink>
                </NavItem>
                <NavItem key={"topics"}>
                    <NavLink path={"#topics"}>
                        <span>Topics</span>
                    </NavLink>
                </NavItem>
                <NavItem key={"guest"}>
                    <NavLink path={"#guest"}>
                        <span>Guest Speakers</span>
                    </NavLink>
                </NavItem>
                <NavItem key={"submission"}>
                    <NavLink path={"#submission"}>
                        <span>Submission & Publications</span>
                    </NavLink>
                </NavItem>
                <NavItem key={"important"}>
                    <NavLink path={"#important"}>
                        <span>Important Date</span>
                    </NavLink>
                </NavItem>
                <NavItem key={"organisation"}>
                    <NavLink path={"#organisation"}>
                        <span>Organisation</span>
                    </NavLink>
                </NavItem>
                <NavItem key={"contact"}>
                    <NavLink path={"#contact"}>
                        <span>Contact</span>
                    </NavLink>
                </NavItem>

            </NavBar>
        </MainMenuWrap>
    )
}

MainMenu.propTypes = {
    alignment: PropTypes.string,
    headingStyle: PropTypes.object
}

MainMenu.defaultProps = {
    alignment: 'center',
    headingStyle: {
        fontSize: '14px',
        mb: '20px',
        texttransform: 'uppercase'
    }
}