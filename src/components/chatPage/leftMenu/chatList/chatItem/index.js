import styles from './styles.css';

class ChatItem {
  constructor(cover, name, message, time) {
    this.element = document.createElement('div');
    this.element.classList.add(styles['chat-item']);
    this.cover = cover;
    this.name = name;
    this.message = message;
    this.time = time;
    this.render();

    return this.element;
  }
  render() {
    this.element.innerHTML = `<div class="content">
      <div>
        <img class="cover" src="${this.cover}">
      </div>
      <div class="name">${this.name}</div>
      <div class="time">${this.time}</div>
      <div class="message">${this.message}</div>
    </div>`;
  }
}

export default ChatItem;
