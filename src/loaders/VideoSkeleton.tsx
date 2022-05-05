import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

const pulse = keyframes`
 0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

export const HeightImg = styled.img`
	max-width: 1100px;
	max-height: 618px;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	visibility: hidden;
`;

export const VideoSkeleton = styled.div`
	background-color: #11151e;
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	max-width: 1100px;
	max-height: 618px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
`;
