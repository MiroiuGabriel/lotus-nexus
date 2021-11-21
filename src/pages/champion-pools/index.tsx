import React, { useEffect, useState } from 'react';
import useChampions from '../../hooks/useChampions';
import { Layout } from '../Layout/Layout';
import HashLoader from 'react-spinners/HashLoader';
import {
	Column,
	ChampionsList,
	Champion as ChampionAvatar,
	Container,
	Icon,
	DraggableList,
	DraggableWrapper,
	PriorityWrapper,
	List,
	Row,
	Input,
	Refresh,
} from './styles/champion-pools';
import { Title } from '../match-history/styles/match-history';
import {
	Draggable,
	Droppable,
	DropResult,
	ResponderProvided,
} from 'react-beautiful-dnd';

import { DragDropContext } from 'react-beautiful-dnd';
import { collection, doc, onSnapshot, updateDoc } from '@firebase/firestore';
import { db } from '../../libs/firebase/firebase';

const Champion: React.FC<{
	src: string;
	id: string;
	title: string;
	index: number;
}> = ({ src, id, title, index }) => {
	return (
		<Draggable draggableId={id} index={index}>
			{(provided, snapshot) => (
				<ChampionAvatar
					src={src}
					title={title}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				/>
			)}
		</Draggable>
	);
};

const ChampionPools: React.FC = () => {
	const { champions, loading } = useChampions();
	const [avatars, setAvatars] = useState(champions);
	const [searchTerm, setSearchTerm] = useState('');
	const [containers, setContainers] = useState<Array<any>>([]);
	console.log(containers);
	useEffect(() => {
		const search = searchTerm.trim();

		setAvatars(champions.filter(ch => ch.name.includes(search)));
	}, [searchTerm]);

	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'board'), snapshot => {
			setContainers(
				snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
			);
		});

		return unsub;
	}, []);

	const droppables = containers[0];

	const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
		const { source, destination, type } = result;

		if (
			!destination ||
			(source.droppableId === destination.droppableId &&
				source.index === destination.index)
		) {
			return;
		}

		if (destination.droppableId === 'r') {
			if (droppables[destination.droppableId].length === 9) return;
		}
		if (destination.droppableId.includes('c')) {
			if (droppables[destination.droppableId].length === 5) return;
		}
		if (source.droppableId === 'list') {
			const item = avatars[source.index];
			const dr = droppables[destination.droppableId];
			if (dr.filter((u: any) => u.id === item.id).length > 0) return;
			dr.push(item);
		} else if (destination.droppableId === 'list') {
			droppables[source.droppableId].splice(source.index, 1);
		} else {
			const item = droppables[source.droppableId][source.index];

			if (
				droppables[destination.droppableId].filter(
					(u: any) => u.id === item.id
				).length > 0
			) {
				return;
			}

			droppables[source.droppableId] = droppables[
				source.droppableId
			].filter((_: any, i: number) => i !== source.index);
			droppables[destination.droppableId].push(item);
		}

		const docRef = doc(db, 'board', 'cRekW4W0RiiwXJdAstcb');
		updateDoc(docRef, droppables);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Layout>
				<Column>
					{droppables ? (
						<>
							<DraggableList>
								<DraggableWrapper>
									<Icon src={`/svg/1.svg`} />
									<Droppable
										droppableId="c1"
										direction="vertical"
									>
										{(provided, snapshot) => (
											<Container
												ref={provided.innerRef}
												{...provided.droppableProps}
											>
												{droppables.c1.map(
													(item: any, i: number) => (
														<Champion
															src={item.src}
															title={item.title}
															id={item.id + 'c1'}
															key={item.id}
															index={i}
														/>
													)
												)}
												{provided.placeholder}
											</Container>
										)}
									</Droppable>
								</DraggableWrapper>
								<DraggableWrapper>
									<Icon src={`/svg/2.svg`} />
									<Droppable
										droppableId="c2"
										direction="vertical"
									>
										{(provided, snapshot) => (
											<Container
												ref={provided.innerRef}
												{...provided.droppableProps}
											>
												{droppables.c2.map(
													(item: any, i: number) => (
														<Champion
															src={item.src}
															title={item.title}
															id={item.id + 'c2'}
															key={item.id}
															index={i}
														/>
													)
												)}
												{provided.placeholder}
											</Container>
										)}
									</Droppable>
								</DraggableWrapper>
								<DraggableWrapper>
									<Icon src={`/svg/3.svg`} />
									<Droppable
										droppableId="c3"
										direction="vertical"
									>
										{(provided, snapshot) => (
											<Container
												ref={provided.innerRef}
												{...provided.droppableProps}
											>
												{droppables.c3.map(
													(item: any, i: number) => (
														<Champion
															src={item.src}
															title={item.title}
															id={item.id + 'c3'}
															key={item.id}
															index={i}
														/>
													)
												)}
												{provided.placeholder}
											</Container>
										)}
									</Droppable>
								</DraggableWrapper>
								<DraggableWrapper>
									<Icon src={`/svg/4.svg`} />
									<Droppable
										droppableId="c4"
										direction="vertical"
									>
										{(provided, snapshot) => (
											<Container
												ref={provided.innerRef}
												{...provided.droppableProps}
											>
												{droppables.c4.map(
													(item: any, i: number) => (
														<Champion
															src={item.src}
															title={item.title}
															id={item.id + 'c4'}
															key={item.id}
															index={i}
														/>
													)
												)}
												{provided.placeholder}
											</Container>
										)}
									</Droppable>
								</DraggableWrapper>
								<DraggableWrapper>
									<Icon src={`/svg/5.svg`} />
									<Droppable
										droppableId="c5"
										direction="vertical"
									>
										{(provided, snapshot) => (
											<Container
												ref={provided.innerRef}
												{...provided.droppableProps}
											>
												{droppables.c5.map(
													(item: any, i: number) => (
														<Champion
															src={item.src}
															title={item.title}
															id={item.id + 'c5'}
															key={item.id}
															index={i}
														/>
													)
												)}
												{provided.placeholder}
											</Container>
										)}
									</Droppable>
								</DraggableWrapper>
							</DraggableList>
							<PriorityWrapper>
								<Icon src="/svg/priority.svg" />
								<Droppable
									droppableId="r"
									direction="horizontal"
								>
									{(provided, snapshot) => (
										<List
											ref={provided.innerRef}
											{...provided.droppableProps}
										>
											{droppables.r.map(
												(item: any, i: number) => (
													<Champion
														src={item.src}
														title={item.title}
														id={item.id + 'r'}
														key={item.id}
														index={i}
													/>
												)
											)}
											{provided.placeholder}
										</List>
									)}
								</Droppable>
								<Refresh src="/svg/refresh.svg" />
							</PriorityWrapper>
						</>
					) : (
						<HashLoader color="#67AAED" />
					)}
				</Column>

				<Column>
					<Row>
						<Title>Champions</Title>
						<Input
							placeholder="Search champions"
							value={searchTerm}
							onChange={({ target }) =>
								setSearchTerm(target.value)
							}
						/>
					</Row>
					<Droppable droppableId="list">
						{(provided, snapshot) => (
							<ChampionsList
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{loading && <HashLoader color="#67AAED" />}
								{avatars.length === 0 && (
									<p>
										There is no champion with the name{' '}
										{searchTerm}
									</p>
								)}

								{avatars.map((champ, i) => (
									<Champion
										src={champ.src}
										title={champ.name}
										id={champ.id}
										key={champ.id}
										index={i}
									/>
								))}
								{provided.placeholder}
							</ChampionsList>
						)}
					</Droppable>
				</Column>
			</Layout>
		</DragDropContext>
	);
};

export default ChampionPools;
