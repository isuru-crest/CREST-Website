import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import Image from '../image'
import Social, { SocialLink } from '../ui/social'
import {
    TeamMemberWrap,
    TeamMemberInner,
    TeamMemberImage,
    TeamMemberSocialWrap,
    TeamMemberInfo,
    TeamMemberName,
    TeamMemberDesignation
} from './team-member.style'
import { Link } from "gatsby"

const TeamMember = ({ imageSrc, name, designation, social, link, ...restProps }) => {
    const { nameStyle, roleStyle, infoStyle, socialStyle, wrapperStyle, ...restStyles } = restProps;
    const { facebook, twitter, instagram } = social;
    let teamImg;
    if (imageSrc.fixed && typeof imageSrc.fixed !== 'function') {
        teamImg = <Img fixed={imageSrc.fixed} alt={name || 'Team Member'} />;
    } else if (imageSrc.fluid) {
        teamImg = <Image fluid={imageSrc.fluid} alt={name || 'Team Member'} />
    } else {
        teamImg = <img src={imageSrc} alt={name || 'Team Member'} />
    }
    return (
        <TeamMemberWrap {...wrapperStyle} {...restStyles}>
            <TeamMemberInner>
                <Link to={link}>
                    <TeamMemberImage>
                        {teamImg}
                        {/* {social && (
                        <TeamMemberSocialWrap>
                            <Social {...socialStyle}>
                                <SocialLink title="Facebook" path={facebook}></SocialLink>
                            </Social>
                        </TeamMemberSocialWrap>
                    )} */}
                    </TeamMemberImage>
                </Link>
                <TeamMemberInfo {...infoStyle}>
                    {name && <TeamMemberName {...nameStyle}>{name}</TeamMemberName>}
                    {designation && <TeamMemberDesignation {...roleStyle}>{designation}</TeamMemberDesignation>}
                </TeamMemberInfo>
            </TeamMemberInner>
        </TeamMemberWrap>
    )
}

TeamMember.propTypes = {
    imageSrc: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    name: PropTypes.string,
    designation: PropTypes.string,
    social: PropTypes.object,
    layout: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    socialStyle: PropTypes.object
}

TeamMember.defaultProps = {
    layout: 1,
    socialStyle: {
        skin: 'light',
        tooltip: true,
        hover: {
            color: '#fff'
        }
    },
    social: {}
}

export default TeamMember;