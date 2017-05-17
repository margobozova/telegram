import styles from './styles.css';
import ChatItem from './chatItem';

class ChatList {
  constructor({ onChatSelect }) {
    this.onChatSelect = onChatSelect;
    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-list']);

    this.xhr = new XMLHttpRequest();
    this.xhr.open('GET', 'http://localhost:3000/chats');

    const user = localStorage.getItem('user');
    if (user) { this.xhr.setRequestHeader('x-access-token', JSON.parse(user).token); }

    this.xhr.send();

    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState !== 4) { return false; }
      if (this.xhr.status !== 200) { return console.error(this.xhr.status); }

      this.chats = JSON.parse(this.xhr.response);
      this.render();

      return true;
    };
    return this.element;
  }

  render() {
    this.element.innerHTML = '';
    this.chats.forEach(chat => (
      this.element.appendChild(new ChatItem({ chat, onChatSelect: this.onChatSelect }))
    ));
  }
}

export default ChatList;
