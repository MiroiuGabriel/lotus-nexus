import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD5CYzxrD26zsaULPWHwbNyIrmZRB2kOMc',
	authDomain: 'lotusnexus-36525.firebaseapp.com',
	projectId: 'lotusnexus-36525',
	storageBucket: 'lotusnexus-36525.appspot.com',
	messagingSenderId: '489471482699',
	appId: '1:489471482699:web:3718329239e3e4b2ca26ce',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
