import React, { useEffect, useState } from 'react';
import {
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	doc,
} from 'firebase/firestore';
import {
	Column,
	LotusNexsus,
	Match,
	Row,
	Title,
	TeamName,
	Enemy,
	ScoreBox,
	Button,
	Overlay,
	Footer,
	Wrapper,
	Head,
	Body,
	Input,
	Label,
	FormField,
	ScoreRow,
	Subheader,
	Delete,
	Draft,
	EnemyRow,
} from './styles/match-history';
import { Layout } from '../Layout/Layout';
import { Modal } from '../../components';
import { db } from '../../libs/firebase/firebase';

const MatchModal: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = async (ev: any) => {
		ev.preventDefault();

		const payload = {
			team: ev.target.team.value.trim(),
			src: ev.target.src.value.trim(),
			myScore: ev.target.myScore.value.trim(),
			enemyScore: ev.target.enemyScore.value.trim(),
			draft: ev.target.draft.value.trim(),
		};

		if (
			!payload.team ||
			!payload.src ||
			!payload.myScore ||
			!payload.enemyScore ||
			!payload.draft
		) {
			return;
		}

		const docRef = collection(db, 'matches');
		setIsOpen(false);
		await addDoc(docRef, payload);
	};

	return (
		<>
			<Button
				onClick={() => setIsOpen(true)}
				background="#67AAED"
				hoverBackground="#378add"
			>
				Add Match
			</Button>
			<Modal isOpen={isOpen}>
				<Overlay>
					<Wrapper>
						<Head>Add Match</Head>
						<Body onSubmit={handleSubmit}>
							<FormField>
								<Label>Team</Label>
								<Input
									placeholder="Enemy team name"
									name="team"
									required
								/>
							</FormField>
							<FormField>
								<Label>Image</Label>
								<Input
									placeholder="Enemy team image url"
									name="src"
									required
								/>
							</FormField>
							<FormField>
								<Label>Draft</Label>
								<Input
									placeholder="Draft url"
									name="draft"
									required
								/>
							</FormField>
							<FormField>
								<Label>Score</Label>
								<ScoreRow>
									<Input
										type="number"
										placeholder="Your score"
										min="0"
										name="myScore"
										required
									/>
									<Input
										type="number"
										placeholder="Enemy score"
										min="0"
										name="enemyScore"
										required
									/>
								</ScoreRow>
							</FormField>
							<Footer>
								<Button
									background="#6FD666"
									hoverBackground="#4bc740"
									type="submit"
								>
									Add
								</Button>
								<Button
									background="#E33D49"
									hoverBackground="#db323d"
									onClick={() => setIsOpen(false)}
								>
									Close
								</Button>
							</Footer>
						</Body>
					</Wrapper>
				</Overlay>
			</Modal>
		</>
	);
};

const MatchHistory: React.FC = () => {
	const [matches, setMatches] = useState<Array<any>>([]);

	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'matches'), snapshot => {
			setMatches(
				snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
			);
		});

		return unsub;
	}, []);

	const handleDelete = async (id: string) => {
		const docRef = doc(db, 'matches', id);
		await deleteDoc(docRef);
	};

	return (
		<Layout>
			<Title>Matches</Title>
			<Column>
				{matches.length === 0 && (
					<Subheader>No matches found</Subheader>
				)}
				{matches.length > 0 &&
					matches.map(match => (
						<Match key={match.id}>
							<Row>
								<LotusNexsus src="/images/logo.png" />
								<TeamName>RPG Nexus</TeamName>
							</Row>
							<ScoreBox
								background={
									match.enemyScore > match.myScore
										? '#E33D49'
										: match.enemyScore === match.myScore
										? '#67AAED'
										: '#6fd666'
								}
							>
								{match.myScore} - {match.enemyScore}
							</ScoreBox>
							<EnemyRow>
								<Enemy src={match.src} />
								<TeamName>{match.team}</TeamName>
							</EnemyRow>
							<Draft
								href={match.draft}
								target="_blank"
								rel="noopener noreferrer"
							>
								Draft
							</Draft>
							<Delete
								src="/svg/trash.svg"
								onClick={() => handleDelete(match.id)}
							></Delete>
						</Match>
					))}
			</Column>
			<MatchModal />
		</Layout>
	);
};

export default MatchHistory;
