import styled from 'styled-components';
import {device} from '../../../../theme'

export const SectionWrap = styled.div `
    padding-top: 120px;
    padding-bottom: 120px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 45px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 25px;
    }
`;

export const HeaderWrap = styled.div `
    margin-right: 3rem;
    @media ${device.medium}{
        margin-bottom: 20px;
    }
`;

export const SectionWrap2 = styled.section `
    padding: 150px 0;
    background: #f6f2ed;
    @media ${device.medium}{
        padding: 120px 0;
    }
    @media ${device.small}{
        padding: 60px 0;
    }
`;