import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

// export const Champion = styled.img`
// 	border-radius: 4px;
// 	width: 120px;
// 	height: 120px;
// 	user-select: none;
// `;

export const Champion = styled.div<{ src: string }>`
	border-radius: 4px;
	width: 120px;
	height: 120px;
	background-image: url(${props => props.src});
	user-select: none;
	margin-bottom: 4px;
`;

export const ChampionsList = styled.div`
	/* grid-template-columns: repeat(auto-fit, 120px); */
	display: flex;
	flex-wrap: wrap;
`;

export const Row = styled.div`
	display: flex;
`;

export const Icon = styled.img`
	width: 110px;
	height: 110px;
	margin: 0 auto;
	margin-bottom: 16px;
`;

export const DraggableList = styled.div`
	display: flex;
	gap: 32px;
	margin-bottom: 32px;
`;

export const Container = styled.div`
	min-height: 500px;
	border: 1px solid #11151e;
	display: flex;
	width: 140px;
	flex-direction: column;
	align-items: center;
	padding: 8px 0;
	margin: 0 auto;

	/* > img {
		margin-bottom: 4px;
	} */
`;

export const PriorityWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 64px;
`;

export const DraggableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

export const List = styled.div`
	display: flex;
	height: 140px;
	align-items: center;
	border: 1px solid #11151e;
	flex-grow: 1;
	padding: 0 8px;
	margin: 0 32px;
`;

export const Input = styled.input`
	border: 1px solid #11151e;
	height: 40px;
	margin-left: auto;
	max-width: 300px;
	width: 100%;
	font-family: 'Nexa';
	background: transparent;
	color: #fff;
	outline: none;
	border-radius: 4px;
	font-size: 18px;
	transition: 200ms;
	padding: 0 8px;

	&::placeholder {
		color: #696e79;
	}

	&:focus {
		border: 1px solid #67aaed;
	}
	&:hover {
		border: 1px solid #67aaed;
	}
`;

export const Link = styled(NavLink)`
	color: #67aaed;
	margin-bottom: 16px;
	font-weight: bold;
	font-size: 24px;

	&:last-of-type {
		color: #e33d49;
	}
`;

export const Divider = styled.p`
	color: #67aaed;
	margin-bottom: 16px;
	font-weight: bold;
	font-size: 24px;
`;
export const Links = styled.div`
	gap: 8px;
	display: flex;
`;

export const Refresh = styled(Icon)`
	cursor: pointer;
`;
