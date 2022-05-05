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
				src="/video/intro.webm"
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
						href="https://discord.gg/TEFk4BVbkd"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Logo src="/svg/discord.svg" />
					</Rounded>
					<Rounded
						href="https://na.op.gg/multisearch/na?summoners=Wup%C3%B2ng%2C+rasaka%2C+rpg+hyper%2C+rpg+drakenus%2C+tslfantasy%2C%2C"
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
