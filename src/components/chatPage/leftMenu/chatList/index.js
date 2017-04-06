import styles from './styles.css';
import ChatItem from './chatItem';

class ChatList {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-list']);
    this.render();

    return this.element;
  }
  render() {
    for (let i = 1; i <= 15; i++) {
      this.element.appendChild(new ChatItem());
    }
  }
}

export default ChatList;
