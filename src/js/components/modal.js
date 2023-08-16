// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

document.querySelector('.positions-content__subscribe').addEventListener('click', () => {
	new GraphModal().open('subscribe');
});

document.querySelector('.positions-content__send-cv').addEventListener('click', () => {
	new GraphModal().open('send-cv');
});
