import styled from '@emotion/styled/macro';

export const Video = styled.video`
	max-width: 1440px;
	width: 100%;
`;

export const Row = styled.div`
	display: flex;
	justify-content: center;
	margin: 48px 0;
`;

export const Links = styled.div`
	display: flex;
	gap: 32px;
	flex-wrap: wrap;
`;

export const Logo = styled.img``;

export const Rounded = styled.a`
	display: flex;
	padding: 32px;
	border-radius: 9999px;
	border: 2px solid #11151e;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 200ms ease-in-out;

	&:hover {
		border: 2px solid #67aaed;
	}
`;
