import { collection, doc, onSnapshot, updateDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../libs/firebase/firebase';
import { Button, Input, Row, Box, Icon } from './styles/editable-text';

const EditableText: React.FC = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [defaultText, setDefaultText] = useState('');
	const [text, setText] = useState('');

	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'next-scrim'), snapshot => {
			setDefaultText(snapshot.docs[0].data().text);
			setText(snapshot.docs[0].data().text);
		});

		return unsub;
	}, []);

	const handleTextChange = (text: string) => {
		const docRef = doc(db, 'next-scrim', 'vFrvxMUILjUgpYVF9hja');
		updateDoc(docRef, { text });
		setIsEditing(false);
	};

	return (
		<>
			{isEditing ? (
				<Row>
					<Input
						autoFocus
						value={text}
						onChange={({ target }) => setText(target.value)}
					/>
					<Box
						onClick={() => {
							handleTextChange(text);
						}}
					>
						<Icon src="/svg/checkmark.svg" />
					</Box>
				</Row>
			) : (
				<Button onClick={() => setIsEditing(true)}>
					{defaultText.length > 0
						? defaultText
						: "Next scrim's title or url..."}
				</Button>
			)}
		</>
	);
};

export default EditableText;
