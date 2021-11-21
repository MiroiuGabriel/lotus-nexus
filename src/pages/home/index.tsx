import React, { useEffect, useState } from 'react';
import { VideoSkeleton, HeightImg } from '../../loaders/VideoSkeleton';
import { Layout } from '../Layout/Layout';
import { Video, Row, Rounded, Logo, Links } from './styles/home';

const LandingVideo: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
	}, []);

	return (
		<>
			{isLoading && (
				<VideoSkeleton>
					<HeightImg src="/images/heightTrick.webp" />
				</VideoSkeleton>
			)}
			<Video
				src="/video/intro.mp4"
				autoPlay
				muted
				preload="auto"
				onLoadedData={() => setIsLoading(false)}
				hidden={isLoading}
			></Video>
		</>
	);
};

const Home: React.FC = () => {
	return (
		<Layout>
			<LandingVideo />

			<Row>
				<Links>
					<Rounded
						href="https://twitter.com/league_of_lotus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Logo src="/svg/twitter.svg" />
					</Rounded>
					<Rounded
						href="https://www.twitch.tv/league_of_lotus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Logo src="/svg/twitch.svg" />
					</Rounded>
					<Rounded
						href="https://discord.gg/UzdyYutmmh"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Logo src="/svg/discord.svg" />
					</Rounded>
					<Rounded
						href="https://na.op.gg/multi/query=%20mrkiwiism%2C%20b%C3%A1bs2424%2Cdropz%2C%20xlr8%2Calastair"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Logo src="/svg/opgg.svg" />
					</Rounded>
				</Links>
			</Row>
		</Layout>
	);
};

export default Home;
