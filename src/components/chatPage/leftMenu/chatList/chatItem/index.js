import styles from './styles.css';

class ChatItem {
  constructor({ chat, onChatSelect, userId }) {
    this.onChatSelect = onChatSelect;
    this.chat = chat;
    this.date = this.chat.messages.length > 0 ? this.chat.messages[0].date : null;
    this.time = this.date ? this.date.split('T').reduce((a, b) => `${b.slice(0, 5)} ${a.slice(5, 10)}`) : '';
    this.users = this.chat.users.filter(element => element._id !== userId);
    this.cover = this.users[0].image;
    this.names = this.users.map(user => user.name);
    this.message = this.chat.messages.length > 0 ? this.chat.messages[0].message : '';

    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-item']);
    this.element.addEventListener('click', this.onClick.bind(this));

    this.render();

    return this.element;
  }

  onClick() {
    this.onChatSelect(this.chat);
  }

  render() {
    this.element.innerHTML = `
      <a class="${styles.content}">
        <img class="${styles.cover}" src="images/avatars/${this.cover}"/>
          <span class="${styles.name}">${this.names.join(', ')}</span>
          <span class="${styles.message}">${this.message}</span>
        <span class="${styles.time}">${this.time}</span>
      </a>
    `;
  }
}

export default ChatItem;
