import ReactDOM from 'react-dom';

const Modal: React.FC<{ isOpen: boolean }> = ({ isOpen, children }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(children, document.getElementById('modal')!);
};

export default Modal;
