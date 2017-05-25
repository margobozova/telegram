import styles from './styles.css';
import ChatItem from './chatItem';

class ChatList {
  constructor({ onChatSelect, onClick }) {
    this.onClick = onClick;
    this.onChatSelect = onChatSelect;
    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-list']);

    const user = localStorage.getItem('user');

    fetch('//localhost:3000/chats', {
      method: 'GET',
      headers: new Headers({
        'x-access-token': JSON.parse(user).token
      })
    })
      .then(response => response.json())
      .then((data) => {
        if (!data) { throw new Error(404); }
        return data;
      })
      .then((chats) => {
        this.chats = chats;
        return this.render();
      })
      .catch(err => console.error(err));

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
