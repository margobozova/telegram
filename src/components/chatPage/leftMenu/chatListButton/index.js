import styles from './styles.css';

class ChatListButton {
  constructor({ onClick }) {
    this.onClick = onClick;
    this.element = document.createElement('button');
    this.element.classList.add(styles['chat-list-button']);
    this.element.addEventListener('click', this.onClick);
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = '<i class="material-icons">chat_bubble</i>';
  }
}

export default ChatListButton;
