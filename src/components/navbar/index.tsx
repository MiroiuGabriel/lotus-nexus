import {
	Container,
	Link,
	Logo,
	Lotus,
	Nexus,
	Row,
	TeamName,
	NavbarWrapper,
} from './styles/navbar';

const isActive = ({ isActive }: { isActive: boolean }) => {
	return {
		borderTop: `4px solid ${isActive ? '#67aaed' : 'transparent'}`,
		color: isActive ? '#fdffff' : '#696e79',
	};
};

const Navbar: React.FC = () => {
	return (
		<NavbarWrapper>
			<Container>
				<Row marginTop="4px">
					<Logo src="/images/logo.png" />
					<TeamName>
						<Lotus>RPG</Lotus>
						<Nexus>Nexus</Nexus>
					</TeamName>
				</Row>
				<Row>
					<Link to="/" style={isActive}>
						Home
					</Link>
					<Link to="/scrim-schedule" style={isActive}>
						Scrim & Schedule
					</Link>
					<Link to="/champion-pools" style={isActive}>
						Champion Pools
					</Link>
					<Link to="/match-history" style={isActive}>
						Match History
					</Link>
				</Row>
			</Container>
		</NavbarWrapper>
	);
};

export default Navbar;
