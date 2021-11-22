import styled from '@emotion/styled/macro';

export const Button = styled.button`
	text-align: left;
	padding: 16px;
	font-weight: bold;
	font-size: 24px;
	cursor: pointer;
	background-color: transparent;
	border: none;
	color: #fdffff;
	min-width: 500px;
	max-width: 1440px;
	border-radius: 4px;
	transition: 200ms ease-in-out;
	padding-left: 0;
	overflow-wrap: break-word;

	&:hover {
		background-color: #11151e;
	}
`;

export const Input = styled.input`
	text-align: left;
	padding: 16px;
	font-weight: bold;
	font-size: 24px;
	background-color: #11151e;
	border: none;
	color: #fdffff;
	min-width: 500px;
	max-width: 1440px;
	border-radius: 4px;
	transition: 200ms ease-in-out;
	padding-left: 0;
	flex-grow: 1;
	outline: none;
	border: 1px solid transparent;
	&:focus {
		border: 1px solid #67aaed;
	}
`;

export const Row = styled.div`
	display: flex;
	gap: 16px;
`;

export const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #11151e;
	padding: 0 4px;
	border-radius: 4px;
	cursor: pointer;
	border: 1px solid transparent;
	transition: 200ms ease-in-out;

	&:hover {
		border: 1px solid #67aaed;
	}
`;

export const Icon = styled.img`
	width: 48px;
`;
