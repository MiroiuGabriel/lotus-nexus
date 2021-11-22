import styled from '@emotion/styled/macro';
import { Title } from '../../match-history/styles/match-history';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	margin-top: 32px;
	place-items: center;
	text-align: left;
`;

export const Subtitle = styled(Title.withComponent('p'))`
	font-size: 18px;
	font-weight: bold;
	margin-top: 16px;
	margin-bottom: 0;
`;

export const BoxWithCheckmark = styled.div`
	background-color: #11151e;
	width: fit-content;
	display: flex;
	align-items: center;
	padding: 8px;
	border-radius: 4px;
	margin-top: 16px;
	cursor: pointer;
	user-select: none;
`;
export const BoxWithoutCheckmark = styled.div`
	width: 46px;
	height: 46px;
	border: 1px solid #11151e;
	margin-top: 16px;
	border-radius: 4px;
	user-select: none;
	cursor: pointer;
`;
export const Checkmark = styled.img``;
