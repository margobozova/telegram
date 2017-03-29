import styles from './styles.css';
import LeftMenu from './leftMenu';

class ChatPage {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-page']);
    this.render();

    return this.element;
  }
  render() {
    this.element.appendChild(new LeftMenu());
  }
}

export default ChatPage;
