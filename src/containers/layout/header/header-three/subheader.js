import React, { Fragment, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone, MdPlace, MdSearch } from "react-icons/md";
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import { Link } from "gatsby"
import Logo from '../../../../components/logo'
import Clickable from '../../../../components/ui/clickable'
import { MainMenu } from '../../../../components/menu/main-menu/submenu'
import Flyout, { FlyoutHeader, FlyoutBody } from '../../../../components/ui/flyout'
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from '../../../../components/ui/off-canvas';
import SearchForm from '../../../../components/forms/search-form/layout-three'
import CloseButton from '../../../../components/ui/close-button'
import BurgerButton from '../../../../components/ui/burger-button'
import Social, { SocialLink } from '../../../../components/ui/social'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import {
    HeaderWrap,
    HeaderTop,
    HeaderBottom,
    FixedHeader,
    FixedHeaderHeight,
    HeaderMain,
    HeaderCol,
    HeaderNavigation,
    HeaderElement,
    HeaderInfoItem
} from './header.style'


const Header = ({ props, ...styles }) => {
    const headerData = useStaticQuery(graphql`
        query HeaderThreeQDataQuery {
            allMenuJson {
                edges {
                    node {
                        id
                        text
                        link
                        submenu {
                            link
                            text
                        }
                    }
                }
            }
            site {
                siteMetadata {
                    social {
                        facebook
                        twitter
                        instagram
                        linkedin
                    }
                }
            }
        }
    `);

    const [flyoutOpen, setFlyoutOpen] = useState(false);
    const [offCanvasOpen, setOffcanvasOpen] = useState(false);
    const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0);
    const [totalHeaderHeight, setTotalHeaderHeight] = useState(0);
    const [sticky, setSticky] = useState(false);
    const headerRef = useRef(null);
    const fixedRef = useRef(null);
    const flyoutHandler = () => {
        setFlyoutOpen(prevState => !prevState);
    }
    const offCanvasHandler = () => {
        setOffcanvasOpen(prevState => !prevState);
    }

    useEffect(() => {
        setFixedHeaderHeight(fixedRef.current.clientHeight);
        setTotalHeaderHeight(headerRef.current.clientHeight)
    }, [fixedHeaderHeight]);

    useEffect(() => {
        const scrollHandler = () => {
            let scrollPos = window.scrollY;
            if (scrollPos > totalHeaderHeight) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [sticky, totalHeaderHeight]);

    const { noticeStyle, phoneElStyle, searchElStyle, logoStyle, burgerBtnElStyle, transparent } = styles;
    const menuArr = headerData.allMenuJson.edges;
    const { facebook, twitter, instagram, linkedin } = headerData.site.siteMetadata.social;
    return (
        <Fragment>
            <HeaderWrap ref={headerRef}  transparent={transparent}>
                <HeaderBottom>
                    <FixedHeader ref={fixedRef}>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <HeaderMain>
                                        {/* <HeaderCol left>
                                            <Logo {...logoStyle} darkLogo={!transparent} whiteLogo={transparent && !sticky} />
                                        </HeaderCol> */}
                                        <HeaderCol center>
                                            <HeaderNavigation>
                                                <MainMenu
                                                    whiteColor={transparent && !sticky}
                                                    layout={3}
                                                    alignment="right"
                                                    menuData={menuArr}
                                                />
                                            </HeaderNavigation>
                                        </HeaderCol>
                                    </HeaderMain>
                                </Col>
                            </Row>
                        </Container>
                    </FixedHeader>
                    <FixedHeaderHeight height={fixedHeaderHeight} />
                </HeaderBottom>
            </HeaderWrap>
            <Flyout isOpen={flyoutOpen}>
                <FlyoutHeader>
                    <Container fluid>
                        <Row>
                            <Col lg={12} textalign="right">
                                <CloseButton size="large" onClick={flyoutHandler} />
                            </Col>
                        </Row>
                    </Container>
                </FlyoutHeader>
                <FlyoutBody>
                    <SearchForm />
                </FlyoutBody>
            </Flyout>
        </Fragment>
    )
}

Header.propTypes = {
    phoneElStyle: PropTypes.object
}

Header.defaultProps = {
    noticeStyle: {
        fontSize: '14px',
        lineHeight: 1.78
    },
    logoStyle: {
        pt: '8px',
        pb: '35px'
    },
    phoneElStyle: {
        mr: '20px'
    },
    searchElStyle: {
        pl: "50px"
    },
    burgerBtnElStyle: {
        pl: "25px"
    }
}

export default Header;