import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const NavbarWrapper = styled.div`
	height: 90px;
	border-bottom: 1px solid #11151e;
	display: flex;
	margin-bottom: 32px;
	position: sticky;
	top: 0;
	background-color: #020610;
	z-index: 99999;
`;

export const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	gap: 32px;
`;

export const Row = styled.div<{ marginTop?: string }>`
	display: flex;
	align-items: center;
	margin-top: ${props => props.marginTop || 0};
`;

export const Logo = styled.img`
	width: 120px;
	height: 120px;
`;

export const TeamName = styled.p`
	display: flex;
	gap: 4px;
	font-size: 24px;
	font-weight: bold;
`;

export const Lotus = styled.span``;

export const Nexus = styled.span`
	color: #696e79;
	font-weight: 400;
`;

export const Link = styled(NavLink)`
	text-decoration: none;
	margin-left: 16px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	transition: 200ms ease-in-out;

	&:hover {
		color: #fdffff !important;
	}
`;
/* border-top: 4px solid #67aaed; */
