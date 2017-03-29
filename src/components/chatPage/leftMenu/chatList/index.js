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
    this.element.appendChild(new ChatItem('cover', 'name', 'message', 'time'));
  }
}

export default ChatList;
