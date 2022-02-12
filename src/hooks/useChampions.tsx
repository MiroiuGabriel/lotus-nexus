import { useEffect, useState } from 'react';

let cachedChampions: Array<{
	id: string;
	name: string;
	src: string;
}> = JSON.parse(localStorage.getItem('champions') || 'null');

const useChampions = () => {
	const [champions, setChampions] = useState<
		Array<{
			id: string;
			name: string;
			src: string;
		}>
	>(cachedChampions || []);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);

		if (champions.length > 0) {
			setLoading(false);
			return;
		}
		async function fetchChampions() {
			const { data } = await fetch(
				'https://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json'
			).then(res => res.json());

			const champions = [];
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			for (const [key, champion] of Object.entries(data)) {
				const champ = champion as any;
				champions.push({
					id: champ.id,
					name: champ.name,
					src: `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/${champ.image.full}`,
				});
			}

			localStorage.setItem('champions', JSON.stringify(champions));
			return champions;
		}

		fetchChampions().then(res => setChampions(res));
		setLoading(false);
	}, [champions.length]);

	return { loading, champions };
};

export default useChampions;
