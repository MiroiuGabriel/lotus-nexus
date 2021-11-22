import { collection, doc, onSnapshot, updateDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { EditableText } from '../../components';
import { db } from '../../libs/firebase/firebase';
import { Icon } from '../champion-pools/styles/champion-pools';
import { Layout } from '../Layout/Layout';
import { Title } from '../match-history/styles/match-history';
import {
	Grid,
	Subtitle,
	BoxWithCheckmark,
	BoxWithoutCheckmark,
	Checkmark,
} from './styles/scrim-schedule';

const Checkbox: React.FC<{
	checked?: boolean;
	index?: number;
	row?: string;
	onCheck?: () => void;
	onUncheck?: () => void;
}> = ({ checked, index, row, onCheck, onUncheck }) => {
	return (
		<>
			{checked ? (
				<BoxWithCheckmark tabIndex={0} onClick={onUncheck}>
					<Checkmark src="/svg/checkmark.svg" />
				</BoxWithCheckmark>
			) : (
				<BoxWithoutCheckmark tabIndex={0} onClick={onCheck} />
			)}
		</>
	);
};

const ScrimSchedule: React.FC = () => {
	const [data, setData] = useState<Array<any>>([]);
	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'checkbox'), snapshot => {
			setData(snapshot.docs.map(doc => ({ ...doc.data() })));
		});

		return unsub;
	}, []);

	const rows = data[0];

	const onCheck = (index: number, row: string) => {
		rows[row].checkbox[index] = true;

		const docRef = doc(db, 'checkbox', '5ASBB7rviYEhL6jnIhW4');
		updateDoc(docRef, rows);
	};

	const onUncheck = (index: number, row: string) => {
		rows[row].checkbox[index] = false;
		const docRef = doc(db, 'checkbox', '5ASBB7rviYEhL6jnIhW4');
		updateDoc(docRef, rows);
	};

	return (
		<Layout>
			<Title>Next Scrim's Multi.gg</Title>
			<EditableText />
			{rows && (
				<Grid>
					<Title>Day</Title>
					<Icon src={`/svg/3.svg`} />
					<Icon src={`/svg/5.svg`} />
					<Icon src={`/svg/1.svg`} />
					<Icon src={`/svg/2.svg`} />
					<Icon src={`/svg/4.svg`} />
					<Subtitle>{rows.r1.day}</Subtitle>

					{rows.r1.checkbox.map((checked: boolean, i: number) => (
						<Checkbox
							checked={checked}
							index={i}
							key={i}
							row="r1"
							onCheck={() => onCheck(i, 'r1')}
							onUncheck={() => onUncheck(i, 'r1')}
						/>
					))}
					<Subtitle>{rows.r2.day}</Subtitle>
					{rows.r2.checkbox.map((checked: boolean, i: number) => (
						<Checkbox
							checked={checked}
							index={i}
							key={i}
							row="r2"
							onCheck={() => onCheck(i, 'r2')}
							onUncheck={() => onUncheck(i, 'r2')}
						/>
					))}
					<Subtitle>{rows.r3.day}</Subtitle>
					{rows.r3.checkbox.map((checked: boolean, i: number) => (
						<Checkbox
							checked={checked}
							index={i}
							key={i}
							row="r3"
							onCheck={() => onCheck(i, 'r3')}
							onUncheck={() => onUncheck(i, 'r3')}
						/>
					))}
					<Subtitle>{rows.r4.day}</Subtitle>
					{rows.r4.checkbox.map((checked: boolean, i: number) => (
						<Checkbox
							checked={checked}
							index={i}
							key={i}
							row="r4"
							onCheck={() => onCheck(i, 'r4')}
							onUncheck={() => onUncheck(i, 'r4')}
						/>
					))}
					<Subtitle>{rows.r5.day}</Subtitle>
					{rows.r5.checkbox.map((checked: boolean, i: number) => (
						<Checkbox
							checked={checked}
							index={i}
							key={i}
							row="r4"
							onCheck={() => onCheck(i, 'r5')}
							onUncheck={() => onUncheck(i, 'r5')}
						/>
					))}
					<Subtitle>{rows.r6.day}</Subtitle>
					{rows.r6.checkbox.map((checked: boolean, i: number) => (
						<Checkbox
							checked={checked}
							index={i}
							key={i}
							row="r6"
							onCheck={() => onCheck(i, 'r6')}
							onUncheck={() => onUncheck(i, 'r6')}
						/>
					))}
					<Subtitle>{rows.r7.day}</Subtitle>
					{rows.r7.checkbox.map((checked: boolean, i: number) => (
						<Checkbox
							checked={checked}
							index={i}
							key={i}
							row="r7"
							onCheck={() => onCheck(i, 'r7')}
							onUncheck={() => onUncheck(i, 'r7')}
						/>
					))}
				</Grid>
			)}
		</Layout>
	);
};

export default ScrimSchedule;
