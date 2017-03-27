import styles from './styles.css';

class ChatPage {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-page']);

    return this.element;
  }
}

export default ChatPage;
