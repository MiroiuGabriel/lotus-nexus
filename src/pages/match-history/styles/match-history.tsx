import styled from '@emotion/styled/macro';

export const Title = styled.h1`
	margin: 0;
	margin-bottom: 32px;
	font-size: 32px;
	text-transform: uppercase;
	letter-spacing: 2px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Match = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #11151e;
	padding: 16px 0;

	&:first-of-type {
		border-top: 1px solid #11151e;
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
`;

export const LotusNexsus = styled.img`
	width: 80px;
`;

export const TeamName = styled.p`
	text-transform: uppercase;
	font-weight: bold;
	margin-left: 5px;
`;

export const Enemy = styled.img`
	width: 80px;
`;

export const ScoreBox = styled.div<{ background?: string }>`
	padding: 8px 16px;
	background-color: ${props => props.background};
	border-radius: 4px;
	margin: 0 32px;
`;

export const Overlay = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	position: fixed;
	top: 0;
	background-color: rgba(17, 21, 30, 0.6);
	z-index: 99999999;
	justify-content: center;
	align-items: center;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: end;
	border-top: 1px solid #11151e;
	padding: 16px;
	gap: 16px;
	> button {
		margin-top: 0;
	}
`;

export const Wrapper = styled.div`
	max-width: 960px;
	background-color: #020610;
	width: 100%;
	border-radius: 4px;
`;

export const Head = styled.h1`
	padding: 16px;
	margin: 0;
`;

export const Body = styled.form`
	padding: 16px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: 16px;
`;
export const Label = styled.label`
	font-weight: bold;
`;

export const Input = styled.input`
	background-color: transparent;
	border: 1px solid #11151e;
	padding: 16px 4px;
	outline: none;
	border-radius: 4px;
	font-family: 'Nexa';
	color: #fff;
	font-size: 18px;
	transition: 200ms;

	&:focus {
		border: 1px solid #67aaed;
	}
	&:hover {
		border: 1px solid #67aaed;
	}

	&::placeholder {
		color: #696e79;
	}
`;

export const ScoreRow = styled.div`
	display: flex;
	gap: 32px;
`;

export const Subheader = styled.p`
	font-weight: bold;
	font-size: 24px;
`;

export const Delete = styled.img`
	margin-left: auto;
	width: 32px;
	cursor: pointer;
`;

export const Draft = styled.a`
	margin-left: 64px;
	color: #67aaed;
`;

export const Button = styled.button<{
	background?: string;
	hoverBackground?: string;
}>`
	width: 150px;
	height: 40px;
	margin-top: 24px;
	background-color: ${props => props.background};
	outline: none;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-family: 'Nexa';
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
	transition: 200ms;

	&:hover {
		background-color: ${props => props.hoverBackground};
	}
`;
