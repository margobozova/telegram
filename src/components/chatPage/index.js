import styles from './styles.css';
import LeftMenu from './leftMenu';
import CurrentChat from './currentChat';

class ChatPage {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-page']);
    this.onChatSelect = this.onChatSelect.bind(this);
    this.render();

    return this.element;
  }

  onChatSelect(chat) {
    this.currentChat.getChat(chat);
  }

  render() {
    this.currentChat = new CurrentChat();
    this.element.appendChild(new LeftMenu({ onChatSelect: this.onChatSelect }));
    this.element.appendChild(this.currentChat.element);
  }
}

export default ChatPage;
