import { Global } from '@emotion/react';
import { Navbar } from './components';
import globalStyle from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { ChampionPools, Home, MatchHistory, ScrimSchedule } from './pages';

function App() {
	return (
		<>
			<Global styles={globalStyle} />
			<Navbar />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route
						path="match-history"
						element={<MatchHistory />}
					></Route>
					<Route path="champion-pools" element={<ChampionPools />}>
						<Route path="enemy" element={<ChampionPools />}></Route>
						<Route path="us" element={<ChampionPools />}></Route>
					</Route>
					<Route
						path="scrim-schedule"
						element={<ScrimSchedule />}
					></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
