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
					<Rounded>
						<Logo src="/svg/twitter.svg" />
					</Rounded>
					<Rounded>
						<Logo src="/svg/twitch.svg" />
					</Rounded>
					<Rounded>
						<Logo src="/svg/discord.svg" />
					</Rounded>
					<Rounded>
						<Logo src="/svg/opgg.svg" />
					</Rounded>
				</Links>
			</Row>
		</Layout>
	);
};

export default Home;
