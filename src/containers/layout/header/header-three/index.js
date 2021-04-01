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
import { MainMenu, MobileMenu } from '../../../../components/menu'
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
        query HeaderThreeDataQuery {
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
            <HeaderWrap ref={headerRef} isSticky={sticky} transparent={transparent}>
                <HeaderTop>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <HeaderMain top>
                                    <HeaderCol left>
                                        <a href="https://twitter.com/crest_uofa"><Text color={transparent ? '#fff' : 'textColor'} {...noticeStyle}><strong>Upcoming event: Cyber Security CRC and CREST Cyber Talent Showcase, 15th April! Check update on our Twitter!</strong></Text></a>
                                        {/* <Link to="/summer-scholarship"><Text color={transparent ? '#fff' : 'textColor'} {...noticeStyle}><strong>Now Hiring: CREST Summer Internships - Nov 2020 – Feb 2021, 10-12 weeks, full time.</strong></Text></Link> */}
                                    </HeaderCol>
                                    <HeaderCol right>
                                        <Social space="8px" tooltip={true}>
                                            {twitter && (
                                                <SocialLink
                                                    path={twitter}>
                                                    <TiSocialTwitter />
                                                </SocialLink>
                                            )}
                                            {/* {facebook && (
                                                <SocialLink
                                                    path={facebook}
                                                    title="Facebook">
                                                    <TiSocialFacebook />
                                                </SocialLink>
                                            )}
                                            {instagram && (
                                                <SocialLink
                                                    path={instagram}
                                                    title="Instagram">
                                                    <TiSocialInstagram />
                                                </SocialLink>
                                            )} */}
                                            {linkedin && (
                                                <SocialLink
                                                    path={linkedin}>
                                                    <TiSocialLinkedin />
                                                </SocialLink>
                                            )}
                                        </Social>
                                    </HeaderCol>
                                    {/* <HeaderCol right>
                                        <HeaderElement {...phoneElStyle}>
                                            <HeaderInfoItem>
                                                <Anchor path="tel:01228899900">
                                                    <MdPhone />
                                                    <Text as="strong">0122 8899900</Text>
                                                </Anchor>
                                            </HeaderInfoItem>
                                        </HeaderElement>
                                        <HeaderElement>
                                            <HeaderInfoItem>
                                                <Text>
                                                    <MdPlace />
                                                    <Text as="span">58 Howard Street #2 San Francisco</Text>
                                                </Text>
                                            </HeaderInfoItem>
                                        </HeaderElement>
                                    </HeaderCol> */}
                                </HeaderMain>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTop>
                <HeaderBottom>
                    <FixedHeader ref={fixedRef} isSticky={sticky}>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <HeaderMain>
                                        <HeaderCol left>
                                            <Logo {...logoStyle} darkLogo={!transparent} whiteLogo={transparent && !sticky} />
                                        </HeaderCol>
                                        <HeaderCol right>
                                            <HeaderNavigation>
                                                <MainMenu
                                                    whiteColor={transparent && !sticky}
                                                    layout={3}
                                                    alignment="right"
                                                    menuData={menuArr}
                                                />
                                            </HeaderNavigation>
                                            <HeaderElement {...searchElStyle}>
                                                <Clickable className="search-btn" onClick={flyoutHandler}>
                                                    <MdSearch />
                                                </Clickable>
                                            </HeaderElement>
                                            <HeaderElement
                                                {...burgerBtnElStyle}
                                                visibility={{ default: 'false', lg: 'true' }}
                                            >
                                                <BurgerButton className="burger-btn" onClick={offCanvasHandler} />
                                            </HeaderElement>
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
            <OffCanvas scrollable={true} isOpen={offCanvasOpen} onClick={offCanvasHandler}>
                <OffCanvasHeader onClick={offCanvasHandler}>
                    <Logo darkLogo align={{ default: 'flex-start' }} />
                </OffCanvasHeader>
                <OffCanvasBody>
                    <MobileMenu menuData={menuArr} />
                </OffCanvasBody>
            </OffCanvas>
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